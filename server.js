const express = require('express');
const server = express();
const playwright = require('playwright');
const fs = require('fs');

// Queue implementation
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

const pdfQueue = new Queue();

// Generate PDF function
async function generatePDF(productList) {
    try {
        const jsonString = JSON.stringify(productList);
        const browser = await playwright.chromium.launch({ headless: true });
        const context = await browser.newContext();
        const page = await context.newPage();
        const downloadPromise = page.waitForEvent('download');

        page.on('download', async (download) => {
            await download.saveAs("C:/PDFs/index.pdf");
        });

        await page.goto('http://127.0.0.1:8000');

        const inputElement = await page.$('#jsonInput');
        await inputElement.fill(jsonString);
        await page.click('button#buttonPrinter');

        const download = await downloadPromise;
        const pdfStatus = await download.path();

        if (pdfStatus == null) {
            console.log("(ERROR): The PDF was not saved in the directory. Please check the connections with the page that generates the PDF.");
            return null;
        } else {
            console.log("PDF PRINTED!!");
            setTimeout(async () => {
                await browser.close();
            }, 6000); // Add a delay of 3 seconds (adjust as needed)
            return 'index.pdf'; // Return the name of the generated PDF
        }
    } catch (error) {
        console.error('Error generating the PDF:', error);
        return null;
    }
}

// Middleware to process PDF requests
server.use(express.json());

server.post('/', async (req, res) => {
    const productList = req.body;
    pdfQueue.enqueue(productList);
    const generatedPDFName = await generatePDF(productList);

    if (generatedPDFName) {
        res.send(`PDF generated successfully. Name: ${generatedPDFName}`);
    } else {
        res.status(500).send('Error generating the PDF.');
    }
});

// Process the PDF queue
const processPDFQueue = async () => {
    while (!pdfQueue.isEmpty()) {
        const productList = pdfQueue.dequeue();
        await generatePDF(productList);
    }
};

// Start the server and process the PDF queue
server.listen(3000, () => {
    console.clear();
    console.log('////// WELCOME TO THE PDF PRINT //////');
    console.log('THIS SERVER IS RUNNING AT: http://localhost:3000/');
    console.log('//////////////////////////////////////');

    setInterval(processPDFQueue, 1000);
});

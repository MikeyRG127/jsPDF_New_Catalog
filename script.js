import { PeaceSans } from './allfonts.js';
import { Delagothic } from './allfonts.js';
import { steelfish_eb_it } from './allfonts.js';
import { OutfitExtraBold } from './allfonts.js';
import { OutfitRegular } from './allfonts.js';
import { sqr721b } from './allfonts.js';
import { Squ721Rm } from './allfonts.js';
import { HelveticaBold } from './allfonts.js';






var buttonprint = document.getElementById("buttonPrinter");
buttonprint.addEventListener("click", () => {
    generateV2();
})

export function generateV2() {

    window.jsPDF = window.jspdf.jsPDF;
    //var doc = new jsPDF();
    var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'letter',
        putOnlyUsedFonts: true
    });

    //var { TextField } = jsPDF.AcroForm;
    //var textField = new TextField();


    var inputElement = document.getElementById('jsonInput');
    var inputValue = inputElement.value;
    var consolidados = JSON.parse(inputValue);
    var itemsPerPage = 12;
    var currentPage = 0;
    var AcroFormPosition = 0;



    function addNewLines(string, numberofcharacters) {
        var result = '';
        for (var i = 0; i < string.length; i++) {
            result += string[i];
            if ((i + 1) % numberofcharacters === 0) {
                result += '\n';
            }
        }
        return result;
    }


    for (var i = 0; i < consolidados.length; i++) {

        var imageIndex = i;
        var consolidado = consolidados[i].Arancel;

        //PDF TEMPLATE
        if (i % itemsPerPage === 0) {

            if (i !== 0) {
                doc.addPage();
            }
            currentPage++;

            /*
            //RULE LEFT
            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(9.5, 0, 0.1, 300, "F");

            //RULE RIGHT
            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(193.7, 0, 0.1, 300, "F");


            //RULE TOP
            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(0, 12.7, 300, 0.1, "F");
            */




            doc.setDrawColor(0);
            doc.setFillColor(235, 235, 235);
            doc.rect(69.8, 12.7, 0.2, 244.4, "F");

            doc.setDrawColor(0);
            doc.setFillColor(235, 235, 235);
            doc.rect(133.3, 12.7, 0.2, 244.4, "F");



            doc.setDrawColor(0);
            doc.setFillColor(235, 235, 235);
            doc.rect(12.7, 72.9, 177.8, 0.2, "F");


            doc.setDrawColor(0);
            doc.setFillColor(235, 235, 235);
            doc.rect(12.7, 135.4, 177.8, 0.2, "F");


            doc.setDrawColor(0);
            doc.setFillColor(235, 235, 235);
            doc.rect(12.7, 200, 177.8, 0.2, "F");

            doc.setDrawColor(0);
            doc.setFillColor(235, 235, 235);
            doc.rect(12.7, 266.5, 177.8, 0.2, "F");


        }
        //PDF TEMPLATE END 
        JsBarcode("#itf", consolidado, { format: "itf" });
        const img = document.querySelector('img#itf');
        console.log(consolidado);
        switch (AcroFormPosition) {

            case 0:

                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(9.4, 12.7, 57.2, 41.3, "F");
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(44.45, 60.3, 22.3, 9.5, "F");
                doc.addImage(img.src, 'JPEG', 44.45, 60.3, 22.3, 9.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Rapunzel Seamfrae", 15), 9.4, 57.6);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("6x500gr", 15), 9.4, 66.2);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Price:", 15), 9.4, 70.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("$" + "95.00", 15), 20, 70.5);
                AcroFormPosition++;
                break;

            case 1:
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(73, 12.7, 57.2, 41.3, "F");
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(108, 60.3, 22.3, 9.5, "F");
                doc.addImage(img.src, 'JPEG', 108, 60.3, 22.3, 9.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Rapunzel Seamfrae", 15), 73, 57.6)
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("6x500gr", 15), 73, 66.2);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Price:", 15), 73, 70.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("$" + "95.00", 15), 83.5, 70.5);

                AcroFormPosition++;
                break;

            case 2:
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(136.5, 12.7, 57.2, 41.3, "F");
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(171.5, 60.3, 22.3, 9.5, "F");
                doc.addImage(img.src, 'JPEG', 171.5, 60.3, 22.3, 9.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Rapunzel Seamfrae", 15), 136.5, 57.6);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("6x500gr", 15), 136.5, 66.2);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Price:", 15), 136.5, 70.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("$" + "95.00", 15), 147.1, 70.5);
                AcroFormPosition++;
                break;

            case 3:
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(9.4, 76.2, 57.2, 41.3, "F");
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(44.45, 123.8, 22.3, 9.5, "F");
                doc.addImage(img.src, 'JPEG', 44.45, 123.8, 22.3, 9.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Rapunzel Seamfrae", 15), 9.4, 121.7);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("6x500gr", 15), 9.4, 129.8);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Price:", 15), 9.4, 134);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("$" + "95.00", 15), 20, 134);
                AcroFormPosition++;
                break;

            case 4:
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(73, 76.2, 57.2, 41.3, "F");
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(108, 123.8, 22.3, 9.5, "F");
                doc.addImage(img.src, 'JPEG', 108, 123.8, 22.3, 9.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Rapunzel Seamfrae", 15), 73, 121.7)
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("6x500gr", 15), 73, 129.8);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Price:", 15), 73, 134);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("$" + "95.00", 15), 83.5, 134);
                AcroFormPosition++;
                break;

            case 5:
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(136.5, 76.2, 57.2, 41.3, "F");
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(171.5, 123.8, 22.3, 9.5, "F");
                doc.addImage(img.src, 'JPEG', 171.5, 123.8, 22.3, 9.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Rapunzel Seamfrae", 15), 136.5, 121.7);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("6x500gr", 15), 136.5, 129.8);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Price:", 15), 136.5, 134);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("$" + "95.00", 15), 147.1, 134);
                AcroFormPosition++;
                break;

            case 6:
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(9.4, 137.7, 57.2, 41.3, "F");
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(44.45, 187.3, 22.3, 9.5, "F");
                doc.addImage(img.src, 'JPEG', 44.45, 187.3, 22.3, 9.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Rapunzel Seamfrae", 15), 9.4, 184.6);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("6x500gr", 15), 9.4, 193.3);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Price:", 15), 9.4, 197.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("$" + "95.00", 15), 20, 197.5);
                AcroFormPosition++;
                break;

            case 7:
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(73, 137.7, 57.2, 41.3, "F");
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(108, 187.3, 22.3, 9.5, "F");
                doc.addImage(img.src, 'JPEG', 108, 187.3, 22.3, 9.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Rapunzel Seamfrae", 15), 73, 184.6)
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("6x500gr", 15), 73, 193.3);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Price:", 15), 73, 197.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("$" + "95.00", 15), 83.5, 197.5);
                AcroFormPosition++;
                break;

            case 8:
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(136.5, 137.7, 57.2, 41.3, "F");
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(171.5, 187.3, 22.3, 9.5, "F");
                doc.addImage(img.src, 'JPEG', 171.5, 187.3, 22.3, 9.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Rapunzel Seamfrae", 15), 136.5, 184.6);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("6x500gr", 15), 136.5, 193.3);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Price:", 15), 136.5, 197.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("$" + "95.00", 15), 147.1, 197.5);
                AcroFormPosition++;
                break;


            case 9:
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(9.4, 203.2, 57.2, 41.3, "F");
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(44.45, 250.8, 22.3, 9.5, "F");
                doc.addImage(img.src, 'JPEG', 44.45, 250.8, 22.3, 9.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Rapunzel Seamfrae", 15), 9.4, 248.1);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("6x500gr", 15), 9.4, 256.8);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Price:", 15), 9.4, 261);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("$" + "95.00", 15), 20, 261);


                AcroFormPosition++;
                break;

            case 10:
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(73, 203.2, 57.2, 41.3, "F");
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(108, 250.8, 22.3, 9.5, "F");
                doc.addImage(img.src, 'JPEG', 108, 250.8, 22.3, 9.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Rapunzel Seamfrae", 15), 73, 248.1)
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("6x500gr", 15), 73, 256.8);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Price:", 15), 73, 261);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("$" + "95.00", 15), 83.5, 261);

                AcroFormPosition++;
                break;

            case 11:
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(136.5, 203.2, 57.2, 41.3, "F");
                doc.setDrawColor(0);
                doc.setFillColor(235, 235, 235);
                doc.rect(171.5, 250.8, 22.3, 9.5, "F");
                doc.addImage(img.src, 'JPEG', 171.5, 250.8, 22.3, 9.5);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Rapunzel Seamfrae", 15), 136.5, 248.1);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("6x500gr", 15), 136.5, 256.8);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("Price:", 15), 136.5, 261);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines("$" + "95.00", 15), 147.1, 261);
                AcroFormPosition = 0;
                break;

        }


        if (i % itemsPerPage === 0) {

            doc.setDrawColor(0);
            doc.setFillColor(31, 87, 162);
            doc.rect(200.1, 0, 15.8, 279.4, "F");

            doc.setTextColor(250, 250, 250);
            doc.setFontSize(12);
            doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("COLLECTION NAME 2019", 207, 12.5, null, -90);




            doc.setTextColor(0, 0, 0);
            doc.setFontSize(12);
            doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("YOUR COMPANY NAME" + "   |   " + "11 E Commerce Ave, High Point, NC, United States", 12.7, 272);


        }

    }


    doc.save("a4.pdf");
}

































/*
        switch (AcroFormPosition) {
            case 0:
                // #1
                // ACROFORM

                doc.addImage("https://ik.imagekit.io/qmcobdtiw/Palacio/FOTOS/" + product.fotoNombre, "jpg", 20, 100, 60, 40);
                ///////////////

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Descripción:", 15, 145);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Referencia Bulto:", 15, 152);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Empaque:", 15, 156);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Cubicaje:", 15, 160);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Peso:", 15, 164);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Marca:", 15, 168);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Cantidad:", 15, 172);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Precio:", 15, 176);

                ///////////////

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(7);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines(product.descripcion, 28), 50, 145);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.referenciaBulto, 50, 152);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.empaque, 50, 156);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.cubitaje, 50, 160);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(String(product.peso), 50, 164);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.marca, 50, 168);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(String(product.cantidad), 50, 172);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(String(product.precio), 50, 176);

                AcroFormPosition++;
                break;
            case 1:
                // #2
                // ACROFORM

                doc.addImage("https://ik.imagekit.io/qmcobdtiw/Palacio/FOTOS/" + product.fotoNombre, "jpg", 114, 100, 60, 40);
                ///////////////

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Descripción:", 120, 145);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Referencia Bulto:", 120, 152);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Empaque:", 120, 156);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Cubicaje:", 120, 160);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Peso:", 120, 164);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Marca:", 120, 168);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Cantidad:", 120, 172);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Precio:", 120, 176);

                ///////////////

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(7);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines(product.descripcion, 28), 155, 145);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.referenciaBulto, 155, 152);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.empaque, 155, 156);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.cubitaje, 155, 160);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(String(product.peso), 155, 164);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.marca, 155, 168);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(String(product.cantidad), 155, 172);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(String(product.precio), 155, 176);
                AcroFormPosition++;
                break;
            case 2:
                // #3
                // ACROFORM

                doc.addImage("https://ik.imagekit.io/qmcobdtiw/Palacio/FOTOS/" + product.fotoNombre, "jpg", 20, 196, 60, 40);
                ///////////////

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Descripción:", 15, 241);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Referencia Bulto:", 15, 248);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Empaque:", 15, 252);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Cubicaje:", 15, 256);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Peso:", 15, 260);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Marca:", 15, 264);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Cantidad:", 15, 268);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Precio:", 15, 272);

                ///////////////

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(7);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines(product.descripcion, 28), 50, 241);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.referenciaBulto, 50, 248);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.empaque, 50, 252);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.cubitaje, 50, 256);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(String(product.peso), 50, 260);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.marca, 50, 264);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(String(product.cantidad), 50, 268);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(String(product.precio), 50, 272);
                AcroFormPosition++;
                break;
            case 3:
                // #4
                // ACROFORM

                doc.addImage("https://ik.imagekit.io/qmcobdtiw/Palacio/FOTOS/" + product.fotoNombre, "jpg", 114, 196, 60, 40);
                ///////////////

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Descripción:", 120, 241);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Referencia Bulto:", 120, 248);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Empaque:", 120, 252);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Cubicaje:", 120, 256);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Peso:", 120, 260);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Marca:", 120, 264);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Cantidad:", 120, 268);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("Precio:", 120, 272);

                ///////////////

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(7);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines(product.descripcion, 28), 155, 241);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.referenciaBulto, 155, 248);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.empaque, 155, 252);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.cubitaje, 155, 256);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(String(product.peso), 155, 260);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(product.marca, 155, 264);

                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(String(product.cantidad), 155, 268);



                doc.setTextColor(65, 64, 66);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(String(product.precio), 155, 272);
                AcroFormPosition = 0;
                break;
        }
        */



















/*
// Add provided code block before the 9 elements
            doc.setDrawColor(0);
            doc.setFillColor(230, 232, 234);
            doc.roundedRect(0, 0, 210, 3065, 64, 66, "F");

            doc.addImage("/150ppi/LAYER-1.png", "png", 10, 4, 190, 88);

            doc.addImage("/150ppi/LAYER-3.png", "png", 110, 12, 110, 10);
            doc.addFileToVFS('Squ721Rm-normal.ttf', Squ721Rm);
            doc.addFont('Squ721Rm-normal.ttf', 'Squ721Rm', 'normal');
            doc.setFont("Squ721Rm", "normal");
            doc.setFontSize(8);
            doc.setTextColor(255, 250, 250);
            doc.text("Precios disponibles del 1/07/2023 hasta 30/07/2023.", 120, 18);


            doc.addFileToVFS('sqr721b-normal.ttf', sqr721b);
            doc.addFont('sqr721b-normal.ttf', 'sqr721b', 'normal');
            doc.setFont("sqr721b", "normal");
            doc.setFontSize(53);
            doc.setTextColor(255, 250, 250);
            doc.text("VISTA RÁPIDA", 22, 63, { charSpace: -0.8 });



            doc.addFileToVFS('Squ721Rm-normal.ttf', Squ721Rm);
            doc.addFont('Squ721Rm-normal.ttf', 'Squ721Rm', 'normal');
            doc.setFont("Squ721Rm", "normal");
            doc.setFontSize(30);
            doc.setTextColor(255, 250, 250);
            doc.text("DE NUESTROS PRODUCTOS", 24, 73, { charSpace: -0.5 });




            doc.addImage("/150ppi/LAYER-4.png", "png", 10, 142, 190, 7);
            doc.addImage("/150ppi/LAYER-4.png", "png", 10, 202, 190, 7);



            doc.addImage("/150ppi/LAYER-2.png", "png", 0, 0, 42, 32);
            doc.addImage("/150ppi/KCSA-LOGO.png", "png", 8.5, 8.5, 25, 12.5);
            doc.addImage("/150ppi/Autorizado.png", "png", 165, 25, 24, 23);


            doc.addImage("/150ppi/LAYER-6.png", "png", 0, 250, 212, 50);
            doc.addImage("/150ppi/LOCATION.png", "png", 130, 282, 4, 6);
            doc.addFileToVFS('Squ721Rm-normal.ttf', Squ721Rm);
            doc.addFont('Squ721Rm-normal.ttf', 'Squ721Rm', 'normal');
            doc.setFont("Squ721Rm", "normal");
            doc.setFontSize(7);
            doc.setTextColor(255, 250, 250);
            doc.text(addNewLines("Zona Libre de Colon - Colon, Rep de Panamá Calle 13 y Ave. Roosevelt. Edificio 5, Local #1 y #2.", 50), 137, 285);
            doc.setFillColor(250, 250, 250);
            doc.roundedRect(8, 281, 40, 10, 5, 5, "F");
            doc.setDrawColor(250, 250, 250); // draw red lines
            doc.setLineWidth(0.5);
            doc.line(55, 292, 55, 280); // vertical line
            doc.addFileToVFS('Squ721Rm-normal.ttf', Squ721Rm);
            doc.addFont('Squ721Rm-normal.ttf', 'Squ721Rm', 'normal');
            doc.setFont("Squ721Rm", "normal");
            doc.setFontSize(8);
            doc.setTextColor(255, 250, 250);
            doc.text(addNewLines("(507) 430-2122", 35), 66.5, 283);
            doc.addFileToVFS('Squ721Rm-normal.ttf', Squ721Rm);
            doc.addFont('Squ721Rm-normal.ttf', 'Squ721Rm', 'normal');
            doc.setFont("Squ721Rm", "normal");
            doc.setFontSize(8);
            doc.setTextColor(255, 250, 250);
            doc.text(addNewLines("(507) 6286-7438", 35), 66.5, 286);


            doc.addFileToVFS('Squ721Rm-normal.ttf', Squ721Rm);
            doc.addFont('Squ721Rm-normal.ttf', 'Squ721Rm', 'normal');
            doc.setFont("Squ721Rm", "normal");
            doc.setFontSize(8);
            doc.setTextColor(255, 250, 250);
            doc.text(addNewLines("www.kcsa.com.pa", 35), 66.5, 291);






            doc.setFontSize(12);
            doc.setTextColor(237, 35, 84);
            doc.addFileToVFS('sqr721b-normal.ttf', sqr721b);
            doc.addFont('sqr721b-normal.ttf', 'sqr721b', 'normal');
            doc.setFont("sqr721b", "normal");
            doc.text(addNewLines("CONTÁCTANOS", 35), 11.5, 287.6);
            doc.addImage("/150ppi/WHATSAPP.png", "png", 60, 281, 5, 5);
            doc.addImage("/150ppi/WWW.png", "png", 60, 287.5, 5, 5);
*/




/*switch (AcroFormPosition) {
            case 0:
                // #1
                // ACROFORM
                doc.addImage("/150ppi/LAYER-5.png", "png", 10, 95, 62, 48);
                doc.addImage("https://ik.imagekit.io/qmcobdtiw/KCSA/" + products[imageIndex].fotoName, "jpg", 12, 107, 35, 35);
                var textField = new TextField();
                textField.Rect = [54, 98.3, 15, 7.3];
                textField.multiline = true;
                textField.fieldName = code;
                doc.addField(textField);
                ///////////////


                // CODE
                doc.setTextColor(250, 250, 250);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(code, 16, 103.4);
                ///////////////

                // TITLE
                doc.setFontSize(7);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines(name, 12), 47, 118);


                ///////////////

                // PRICE
                doc.setFontSize(12);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('OutfitExtraBold-normal.ttf', OutfitExtraBold);
                doc.addFont('OutfitExtraBold-normal.ttf', 'OutfitExtraBold', 'normal');
                doc.setFont("OutfitExtraBold", "normal");
                doc.text("$" + String(price), 47, 140);
                ///////////////

                AcroFormPosition++;
                break;
            case 1:
                // #2
                // ACROFORM
                doc.addImage("/150ppi/LAYER-5.png", "png", 74, 95, 62, 48);
                doc.addImage("https://ik.imagekit.io/qmcobdtiw/KCSA/" + products[imageIndex].fotoName, "jpg", 74, 107, 35, 35);
                var textField = new TextField();
                textField.Rect = [118, 98.3, 15, 7.3];
                textField.multiline = true;
                textField.fieldName = code;
                doc.addField(textField);
                ///////////////


                // CODE
                doc.setTextColor(250, 250, 250);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(code, 80, 103.4);
                ///////////////

                // TITLE
                doc.setFontSize(7);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines(name, 12), 112, 118);
                ///////////////

                // PRICE
                doc.setFontSize(12);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('OutfitExtraBold-normal.ttf', OutfitExtraBold);
                doc.addFont('OutfitExtraBold-normal.ttf', 'OutfitExtraBold', 'normal');
                doc.setFont("OutfitExtraBold", "normal");
                doc.text("$" + String(price), 112, 140);
                ///////////////
                AcroFormPosition++;
                break;
            case 2:
                // #3
                // ACROFORM
                doc.addImage("/150ppi/LAYER-5.png", "png", 138, 95, 62, 48);
                doc.addImage("https://ik.imagekit.io/qmcobdtiw/KCSA/" + products[imageIndex].fotoName, "jpg", 138, 107, 35, 35);
                var textField = new TextField();
                textField.Rect = [182, 98.3, 15, 7.3];
                textField.multiline = true;
                textField.fieldName = code;
                doc.addField(textField);
                ///////////////


                // CODE
                doc.setTextColor(250, 250, 250);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(code, 143, 103.4);
                ///////////////

                // TITLE
                doc.setFontSize(7);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines(name, 12), 177, 120);
                ///////////////

                // PRICE
                doc.setFontSize(12);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('OutfitExtraBold-normal.ttf', OutfitExtraBold);
                doc.addFont('OutfitExtraBold-normal.ttf', 'OutfitExtraBold', 'normal');
                doc.setFont("OutfitExtraBold", "normal");
                doc.text("$" + String(price), 177, 140);
                ///////////////
                AcroFormPosition++;
                break;
            case 3:
                // #4
                // ACROFORM
                doc.addImage("/150ppi/LAYER-5.png", "png", 10, 155, 62, 48);
                doc.addImage("https://ik.imagekit.io/qmcobdtiw/KCSA/" + products[imageIndex].fotoName, "jpg", 12, 166, 35, 35);
                var textField = new TextField();
                textField.Rect = [54, 158.3, 15, 7.3];
                textField.multiline = true;
                textField.fieldName = code;
                doc.addField(textField);
                ///////////////


                // CODE
                doc.setTextColor(250, 250, 250);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(code, 16, 163.4);
                ///////////////

                // TITLE
                doc.setFontSize(7);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines(name, 12), 47, 180);
                ///////////////

                // PRICE
                doc.setFontSize(12);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('OutfitExtraBold-normal.ttf', OutfitExtraBold);
                doc.addFont('OutfitExtraBold-normal.ttf', 'OutfitExtraBold', 'normal');
                doc.setFont("OutfitExtraBold", "normal");
                doc.text("$" + String(price), 47, 200);
                ///////////////
                AcroFormPosition++;
                break;
            case 4:
                // #5
                // ACROFORM
                doc.addImage("/150ppi/LAYER-5.png", "png", 74, 155, 62, 48);
                doc.addImage("https://ik.imagekit.io/qmcobdtiw/KCSA/" + products[imageIndex].fotoName, "jpg", 74, 166, 35, 35);
                var textField = new TextField();
                textField.Rect = [118, 158.3, 15, 7.3];
                textField.multiline = true;
                textField.fieldName = code;
                doc.addField(textField);
                ///////////////


                // CODE
                doc.setTextColor(250, 250, 250);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(code, 80, 163.4);
                ///////////////

                // TITLE
                doc.setFontSize(7);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines(name, 12), 112, 180);
                ///////////////

                // PRICE
                doc.setFontSize(12);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('OutfitExtraBold-normal.ttf', OutfitExtraBold);
                doc.addFont('OutfitExtraBold-normal.ttf', 'OutfitExtraBold', 'normal');
                doc.setFont("OutfitExtraBold", "normal");
                doc.text("$" + String(price), 112, 200);
                ///////////////
                AcroFormPosition++;
                break;
            case 5:
                // #6
                // ACROFORM
                doc.addImage("/150ppi/LAYER-5.png", "png", 138, 155, 62, 48);
                doc.addImage("https://ik.imagekit.io/qmcobdtiw/KCSA/" + products[imageIndex].fotoName, "jpg", 138, 166, 35, 35);
                var textField = new TextField();
                textField.Rect = [182, 158.3, 15, 7.3];
                textField.multiline = true;
                textField.fieldName = code;
                doc.addField(textField);
                ///////////////


                // CODE
                doc.setTextColor(250, 250, 250);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(code, 143, 163.4);
                ///////////////

                // TITLE
                doc.setFontSize(7);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines(name, 12), 177, 180);
                ///////////////

                // PRICE
                doc.setFontSize(12);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('OutfitExtraBold-normal.ttf', OutfitExtraBold);
                doc.addFont('OutfitExtraBold-normal.ttf', 'OutfitExtraBold', 'normal');
                doc.setFont("OutfitExtraBold", "normal");
                doc.text("$" + String(price), 177, 200);
                ///////////////
                AcroFormPosition++;
                break;
            case 6:
                // #7
                // ACROFORM
                doc.addImage("/150ppi/LAYER-5.png", "png", 10, 215, 62, 48);
                doc.addImage("https://ik.imagekit.io/qmcobdtiw/KCSA/" + products[imageIndex].fotoName, "jpg", 12, 226, 35, 35);
                var textField = new TextField();
                textField.Rect = [54, 218.3, 15, 7.3];
                textField.multiline = true;
                textField.fieldName = code;
                doc.addField(textField);
                ///////////////


                // CODE
                doc.setTextColor(250, 250, 250);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(code, 16, 223.4);
                ///////////////

                // TITLE
                doc.setFontSize(7);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines(name, 12), 47, 240);
                ///////////////

                // PRICE
                doc.setFontSize(12);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('OutfitExtraBold-normal.ttf', OutfitExtraBold);
                doc.addFont('OutfitExtraBold-normal.ttf', 'OutfitExtraBold', 'normal');
                doc.setFont("OutfitExtraBold", "normal");
                doc.text("$" + String(price), 47, 260);
                ///////////////
                AcroFormPosition++;
                break;
            case 7:
                // #8
                // ACROFORM
                doc.addImage("/150ppi/LAYER-5.png", "png", 74, 215, 62, 48);
                doc.addImage("https://ik.imagekit.io/qmcobdtiw/KCSA/" + products[imageIndex].fotoName, "jpg", 74, 226, 35, 35);
                var textField = new TextField();
                textField.Rect = [118, 218.3, 15, 7.3];
                textField.multiline = true;
                textField.fieldName = code;
                doc.addField(textField);
                ///////////////


                // CODE
                doc.setTextColor(250, 250, 250);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(code, 80, 223.4);
                ///////////////

                // TITLE
                doc.setFontSize(7);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines(name, 12), 112, 240);
                ///////////////

                // PRICE
                doc.setFontSize(12);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('OutfitExtraBold-normal.ttf', OutfitExtraBold);
                doc.addFont('OutfitExtraBold-normal.ttf', 'OutfitExtraBold', 'normal');
                doc.setFont("OutfitExtraBold", "normal");
                doc.text("$" + String(price), 112, 260);
                ///////////////
                AcroFormPosition++;
                break;
            case 8:
                // #9
                // ACROFORM
                doc.addImage("/150ppi/LAYER-5.png", "png", 138, 215, 62, 48);
                doc.addImage("https://ik.imagekit.io/qmcobdtiw/KCSA/" + products[imageIndex].fotoName, "jpg", 138, 226, 35, 35);
                var textField = new TextField();
                textField.Rect = [182, 218.3, 15, 7.3];
                textField.multiline = true;
                textField.fieldName = code;
                doc.addField(textField);
                ///////////////


                // CODE
                doc.setTextColor(250, 250, 250);
                doc.setFontSize(10);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(code, 143, 223.4);
                ///////////////

                // TITLE
                doc.setFontSize(7);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(addNewLines(name, 12), 177, 240);
                ///////////////

                // PRICE
                doc.setFontSize(12);
                doc.setTextColor(65, 64, 66);
                doc.addFileToVFS('OutfitExtraBold-normal.ttf', OutfitExtraBold);
                doc.addFont('OutfitExtraBold-normal.ttf', 'OutfitExtraBold', 'normal');
                doc.setFont("OutfitExtraBold", "normal");
                doc.text("$" + String(price), 177, 260);
                ///////////////
                AcroFormPosition = 0;
                break;
        }*/
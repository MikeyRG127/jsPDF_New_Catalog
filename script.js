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
    var doc = new jsPDF();
    //var { TextField } = jsPDF.AcroForm;
    //var textField = new TextField();


    var inputElement = document.getElementById('jsonInput');
    var inputValue = inputElement.value;
    var consolidados = JSON.parse(inputValue);
    var itemsPerPage = 11;
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
        var consolidado = consolidados[i];

        //PDF TEMPLATE
        if (i % itemsPerPage === 0) {

            if (i !== 0) {
                doc.addPage();
            }
            currentPage++;

            /*
            //Blue Rectangule
            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(135, 0, 60, 5, "F");

            //Blue Rules
            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(15, 0, 0.1, 300, "F");

            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(195, 0, 0.1, 300, "F");

            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(0, 15, 300, 0.1, "F");
            */
            //Logo
            doc.setTextColor(65, 64, 66);
            doc.setFontSize(15);
            doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("ALYSAR", 15, 19);

            doc.setTextColor(0, 152, 217);
            doc.setFontSize(15);
            doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("INTERNACIONAL, S.A.", 15, 24);


            doc.setTextColor(65, 64, 66);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text(addNewLines("Zona Libre de Colón - Colón, Rep de Panamá", 30), 15, 29);



            doc.setTextColor(65, 64, 66);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("(507) 447-1841 y 447-1842", 15, 37);


            doc.setTextColor(65, 64, 66);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', Squ721Rm);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("raed@alysarzl.com", 15, 41);


            //Recibo
            doc.setTextColor(0, 152, 217);
            doc.setFontSize(25);
            doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("PEDIDO", 161, 48);




            //Large Line
            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(15, 50, 120, 0.2, "F");


            //Short Line
            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(135, 50, 60, 1, "F");


            //CLIENTE
            doc.setTextColor(0, 152, 217);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("CLIENTE:", 15, 58);

            //CLIENTE details
            doc.setTextColor(65, 64, 66);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("LYNX SHIPPING", 45, 58);

            //DIRECCION
            doc.setTextColor(0, 152, 217);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("DIRECCIÓN:", 15, 63);

            //DIRECCION details
            doc.setTextColor(65, 64, 66);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', OutfitRegular);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("MANAGUA NICARAGUA", 45, 63);


            //CONSIGNADO
            doc.setTextColor(0, 152, 217);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("EMAIL:", 15, 68);

            //CONSIGNADO details
            doc.setTextColor(65, 64, 66);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', OutfitRegular);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("LOS MISMOS", 45, 68);

            //DIRECCION
            doc.setTextColor(0, 152, 217);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("FECHA:", 15, 73);

            //DIRECCION details
            doc.setTextColor(65, 64, 66);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', OutfitRegular);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("N/A", 45, 73);



            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(15, 80, 27, 7, "F");
            doc.setTextColor(250, 250, 250);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', OutfitRegular);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("IMAGEN", 17, 84.5);

            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(43, 80, 70, 7, "F");
            doc.setTextColor(250, 250, 250);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', OutfitRegular);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("DESCRIPCION", 45, 84.5);


            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(114, 80, 20, 7, "F");
            doc.setTextColor(250, 250, 250);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', OutfitRegular);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("CANTIDAD", 116, 84.5);


            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(135, 80, 20, 7, "F");
            doc.setTextColor(250, 250, 250);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', OutfitRegular);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("PRECIO", 137, 84.5);


            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(156, 80, 20, 7, "F");
            doc.setTextColor(250, 250, 250);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', OutfitRegular);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("UNIDAD", 158, 84.5);

            doc.setDrawColor(0);
            doc.setFillColor(0, 152, 217);
            doc.rect(177, 80, 18, 7, "F");
            doc.setTextColor(250, 250, 250);
            doc.setFontSize(8);
            doc.addFileToVFS('HelveticaBold-normal.ttf', OutfitRegular);
            doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
            doc.setFont("HelveticaBold", "normal");
            doc.text("TOTAL", 179, 84.5);


        }
        //PDF TEMPLATE END


        switch (AcroFormPosition) {
            case 0:
                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(15, 88, 27, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("BULTOS", 17, 98);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(43, 88, 70, 18, "F");
                doc.setTextColor(250, 250, 250);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("DESCRIPCION", 45, 98);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(114, 88, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(("CANTIDAD"), 116, 98);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(135, 88, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("PRECIO", 137, 98);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(156, 88, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("UNIDAD", 158, 98);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(177, 88, 18, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("TOTAL", 179, 98);


                AcroFormPosition++;
                break;

            case 1:
                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(15, 107, 27, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("BULTOS", 17, 117);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(43, 107, 70, 18, "F");
                doc.setTextColor(250, 250, 250);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("DESCRIPCION", 45, 117);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(114, 107, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(("CANTIDAD"), 116, 117);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(135, 107, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("PRECIO", 137, 117);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(156, 107, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("UNIDAD", 158, 117);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(177, 107, 18, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("TOTAL", 179, 117);



                AcroFormPosition++;
                break;

            case 2:
                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(15, 126, 27, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("BULTOS", 17, 136);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(43, 126, 70, 18, "F");
                doc.setTextColor(250, 250, 250);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("DESCRIPCION", 45, 136);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(114, 126, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(("CANTIDAD"), 116, 136);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(135, 126, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("PRECIO", 137, 136);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(156, 126, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("UNIDAD", 158, 136);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(177, 126, 18, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("TOTAL", 179, 136);


                AcroFormPosition++;
                break;

            case 3:
                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(15, 145, 27, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("BULTOS", 17, 155);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(43, 145, 70, 18, "F");
                doc.setTextColor(250, 250, 250);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("DESCRIPCION", 45, 155);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(114, 145, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(("CANTIDAD"), 116, 155);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(135, 145, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("PRECIO", 137, 155);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(156, 145, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("UNIDAD", 158, 155);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(177, 145, 18, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("TOTAL", 179, 155);


                AcroFormPosition++;
                break;

            case 4:
                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(15, 164, 27, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("BULTOS", 17, 174);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(43, 164, 70, 18, "F");
                doc.setTextColor(250, 250, 250);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("DESCRIPCION", 45, 174);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(114, 164, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(("CANTIDAD"), 116, 174);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(135, 164, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("PRECIO", 137, 174);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(156, 164, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("UNIDAD", 158, 174);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(177, 164, 18, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("TOTAL", 179, 174);


                AcroFormPosition++;
                break;

            case 5:
                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(15, 183, 27, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("BULTOS", 17, 193);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(43, 183, 70, 18, "F");
                doc.setTextColor(250, 250, 250);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("DESCRIPCION", 45, 193);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(114, 183, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(("CANTIDAD"), 116, 193);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(135, 183, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("PRECIO", 137, 193);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(156, 183, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("UNIDAD", 158, 193);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(177, 183, 18, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("TOTAL", 179, 193);


                AcroFormPosition++;
                break;

            case 6:
                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(15, 202, 27, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("BULTOS", 17, 212);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(43, 202, 70, 18, "F");
                doc.setTextColor(250, 250, 250);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("DESCRIPCION", 45, 212);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(114, 202, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(("CANTIDAD"), 116, 212);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(135, 202, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("PRECIO", 137, 212);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(156, 202, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("UNIDAD", 158, 212);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(177, 202, 18, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("TOTAL", 179, 212);


                AcroFormPosition++;
                break;

            case 7:
                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(15, 221, 27, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("BULTOS", 17, 231);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(43, 221, 70, 18, "F");
                doc.setTextColor(250, 250, 250);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("DESCRIPCION", 45, 231);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(114, 221, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(("CANTIDAD"), 116, 231);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(135, 221, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("PRECIO", 137, 231);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(156, 221, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("UNIDAD", 158, 231);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(177, 221, 18, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("TOTAL", 179, 231);


                AcroFormPosition++;
                break;

            case 8:
                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(15, 240, 27, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("BULTOS", 17, 250);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(43, 240, 70, 18, "F");
                doc.setTextColor(250, 250, 250);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("DESCRIPCION", 45, 250);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(114, 240, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(("CANTIDAD"), 116, 250);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(135, 240, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("PRECIO", 137, 250);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(156, 240, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("UNIDAD", 158, 250);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(177, 240, 18, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("TOTAL", 179, 250);


                AcroFormPosition++;
                break;


            case 9:
                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(15, 259, 27, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("BULTOS", 17, 269);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(43, 259, 70, 18, "F");
                doc.setTextColor(250, 250, 250);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("DESCRIPCION", 45, 269);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(114, 259, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(("CANTIDAD"), 116, 269);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(135, 259, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("PRECIO", 137, 269);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(156, 259, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("UNIDAD", 158, 269);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(177, 259, 18, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("TOTAL", 179, 269);


                AcroFormPosition++;
                break;

            case 10:
                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(15, 278, 27, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("BULTOS", 17, 288);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(43, 278, 70, 18, "F");
                doc.setTextColor(250, 250, 250);
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("DESCRIPCION", 45, 288);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(114, 278, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text(("CANTIDAD"), 116, 288);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(135, 278, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("PRECIO", 137, 288);


                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(156, 278, 20, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("UNIDAD", 158, 288);

                doc.setDrawColor(0);
                doc.setFillColor(237, 237, 240);
                doc.rect(177, 278, 18, 18, "F");
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(8);
                doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
                doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
                doc.setFont("HelveticaBold", "normal");
                doc.text("TOTAL", 179, 288);


                AcroFormPosition = 0;
                break;





        }


        if (i % itemsPerPage === 0) {


            /* doc.setTextColor(0, 0, 0);
             doc.setFontSize(12);
             doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
             doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
             doc.setFont("HelveticaBold", "normal");
             doc.text("TOTAL: " + "1,224 " + "BTS", 15, 278);
 
 
             doc.setTextColor(0, 0, 0);
             doc.setFontSize(12);
             doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
             doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
             doc.setFont("HelveticaBold", "normal");
             doc.text("20,980.43 KG", 15, 283);
 
 
 
 
             doc.setTextColor(0, 0, 0);
             doc.setFontSize(15);
             doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
             doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
             doc.setFont("HelveticaBold", "normal");
             doc.text("TOTAL: $27,060.08", 125, 281);
 
 
             doc.setDrawColor(0);
             doc.setFillColor(0, 152, 217);
             doc.rect(15, 285, 181, 8,);
             doc.setTextColor(240, 49, 23);
             doc.setFontSize(10);
             doc.addFileToVFS('HelveticaBold-normal.ttf', HelveticaBold);
             doc.addFont('HelveticaBold-normal.ttf', 'HelveticaBold', 'normal');
             doc.setFont("HelveticaBold", "normal");
             doc.text("NOTA: TODA MERCANCÍA VIAJA POR CUENTA Y RIESGO DEL COMPRADOR.", 20, 290);
             */
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
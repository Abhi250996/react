import jsPDF from "jspdf";
import "jspdf-autotable";

export const previewPdf = (items) => {

    const doc = new jsPDF();
    const margin = 20;

    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;

    const usableWidth = pageWidth - margin * 2;
    let cursorY = 35;


    doc.setFontSize(22);
    doc.setFont("Playwrite Australia SA", "bolditalic");
    doc.text(items.title, doc.internal.pageSize.width / 2, 10, { align: "center", baseline: "middle" });


    // Add Basic Details
    doc.setFontSize(18);
    doc.setFont("Playwrite Australia SA", "normal");
    doc.text(`(${items.author})`, doc.internal.pageSize.width / 2, 20, { align: "center" });



    doc.setFontSize(14);
    doc.setFont("Roboto", "normal");
    const lines = doc.splitTextToSize(items.description, usableWidth);

    lines.forEach((line) => {
        if (cursorY + 10 > pageHeight - margin) {
            doc.addPage();
            cursorY = margin;
        }
        doc.text(line, margin, cursorY);
        cursorY += 10;
    });
    const pdfBlob = doc.output("blob");

     const pdfUrl = URL.createObjectURL(pdfBlob);
    const newTab = window.open();
    newTab.document.write('<html><head><title>PDF Preview</title></head><body>');
    newTab.document.write('<embed src="' + pdfUrl + '" type="application/pdf" width="100%" height="100%" />');
    newTab.document.write('</body></html>');

};

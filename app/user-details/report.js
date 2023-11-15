// PDFPreview.js

import React from 'react';
import { PDFDocument, rgb } from 'pdf-lib';

const Report = ({ selectedRow }) => {
    const handlePrint = async () => {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage();

        page.drawText(`ID: ${selectedRow.id}`, {
            x: 50,
            y: 700,
            size: 30,
            color: rgb(0, 0, 0),
        });
        page.drawText(`Name: ${selectedRow.username}`, {
            x: 50,
            y: 650,
            size: 20,
            color: rgb(0, 0, 0),
        });
        page.drawText(`Email: ${selectedRow.email}`, {
            x: 50,
            y: 600,
            size: 20,
            color: rgb(0, 0, 0),
        });
        page.drawText(`Email: ${selectedRow.email}`, {
            x: 50,
            y: 600,
            size: 20,
            color: rgb(0, 0, 0),
        });
        page.drawText(`Phone: ${selectedRow.phone}`, {
            x: 50,
            y: 550,
            size: 20,
            color: rgb(0, 0, 0),
        });
        page.drawText(`Creation Date: ${selectedRow.creationDate}`, {
            x: 50,
            y: 500,
            size: 20,
            color: rgb(0, 0, 0),
        });
        // Add other details as needed

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        // Open a new window with the PDF for printing
        const printWindow = window.open(url, '_blank');
        if (printWindow) {
            printWindow.print();
        } else {
            console.error('Could not open print window.');
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-black w-96 h-80">
                <h2 className="text-2xl font-bold mb-4">Report</h2>
                <h3>Id: {selectedRow.id}</h3>
                <h3>Name: {selectedRow.username}</h3>
                <h3>Email: {selectedRow.email}</h3>
                <h3>Phone: {selectedRow.phone}</h3>
                <h3>Creation Date: {selectedRow.creationDate}</h3>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handlePrint}>
                    Print PDF
                </button>
            </div>
        </div>
    );
};

export default Report;

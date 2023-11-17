// PDFPreview.js

import React from 'react';
import { PDFDocument, rgb } from 'pdf-lib';

const Report = ({ selectedRow }) => {
    const handlePrint = async () => {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage();

        //  const font = await pdfDoc.embedFont(PDFDocument.Font.Helvetica);

        const drawText = (text, x, y, size) => {
            page.drawText(text, {
                x,
                y,

                size,
                color: rgb(0, 0, 0),
            });
        };

        drawText(`User Analysis Report`, 150, 800, 30);
        drawText(`ID: ${selectedRow.id}`, 50, 700, 20);
        drawText(`Name: ${selectedRow.username}`, 50, 650, 20);
        drawText(`Email: ${selectedRow.email}`, 50, 600, 20);
        drawText(`Phone: ${selectedRow.phone}`, 50, 550, 20);
        drawText(`Creation Date: ${selectedRow.creationDate}`, 50, 500, 20);

        // Get the bytes of the PDF
        const pdfBytes = await pdfDoc.save();

        // Convert the bytes to a Blob
        const pdfBlob = new Blob([pdfBytes], { type: 'application/pdf' });

        // Create a URL for the Blob
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Open the PDF in a new tab
        window.open(pdfUrl, '_blank');
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-40">


            <div className="bg-white p-6 rounded-lg shadow-lg text-black w-11/12 h-80 sm:w-96">
                <h2 className="text-xl font-bold mb-4">User Analysis Report</h2>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', marginBottom: '8px' }}>
                        <span style={{ width: '120px', textAlign: 'left' }}>ID:</span>
                        <span style={{ textAlign: 'left' }}>{selectedRow.id}</span>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '8px' }}>
                        <span style={{ width: '120px', textAlign: 'left' }}>Name:</span>
                        <span style={{ textAlign: 'left' }}>{selectedRow.username}</span>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '8px' }}>
                        <span style={{ width: '120px', textAlign: 'left' }}>Email:</span>
                        <span style={{ textAlign: 'left' }}>{selectedRow.email}</span>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '8px' }}>
                        <span style={{ width: '120px', textAlign: 'left' }}>Phone:</span>
                        <span style={{ textAlign: 'left' }}>{selectedRow.phone}</span>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '8px' }}>
                        <span style={{ width: '120px', textAlign: 'left' }}>Creation Date:</span>
                        <span style={{ textAlign: 'left' }}>{selectedRow.creationDate}</span>
                    </div>
                </div>

                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handlePrint}>
                    Download PDF
                </button>
            </div>
        </div>
    );
};

export default Report;

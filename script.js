// Function to open PDF in a new tab
function openPdf() {
    // URL to the PDF file
    const pdfUrl = './assests/Shraddha_CV_Pod_Soft.pdf';

    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
}

// Add event listener to the button
document.getElementById('openPdfButton').addEventListener('click', openPdf);

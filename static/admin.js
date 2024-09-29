document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-daily').addEventListener('click', () => generateReport('daily'));
    document.getElementById('generate-weekly').addEventListener('click', () => generateReport('weekly'));
    document.getElementById('generate-monthly').addEventListener('click', () => generateReport('monthly'));
});

function generateReport(reportType) {
    fetch('/generate_report', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ report_type: reportType })
    })
    .then(response => {
        if (response.status === 200) {
            return response.blob();  // Download the file as a blob
        } else {
            Swal.fire({
                title: 'Error',
                text: 'No data available for the report.',
                icon: 'error'
            });
            throw new Error('Failed to generate report');
        }
    })
    .then(blob => {
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = `${reportType}_report.docx`;  // Set file name for download
        document.body.appendChild(downloadLink);
        downloadLink.click();  // Trigger download
        document.body.removeChild(downloadLink);

        Swal.fire({
            title: 'Success',
            text: 'Report generated and downloaded successfully!',
            icon: 'success'
        });
    })
    .catch(err => {
        console.error("Error generating report: ", err);
        Swal.fire({
            title: 'Error',
            text: 'An error occurred while generating the report.',
            icon: 'error'
        });
    });
}

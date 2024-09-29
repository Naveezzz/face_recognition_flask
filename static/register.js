document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const registrationForm = document.getElementById('registration-form');

    // Access the webcam
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error("Error accessing webcam: " + err);
        });

    // Handle registration form submission
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0);
        const frame = canvas.toDataURL('image/jpeg').split(',')[1];

        const employeeId = document.getElementById('employee_id').value;
        const employeeName = document.getElementById('employee_name').value;

        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ frame: frame, employee_id: employeeId, employee_name: employeeName })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                Swal.fire('Success!', data.message, 'success')
                    .then(() => {
                        window.location.href = data.redirect;
                    });
            } else {
                Swal.fire('Error!', data.message, 'error');
            }
        })
        .catch(err => console.error("Error during registration: " + err));
    });
});

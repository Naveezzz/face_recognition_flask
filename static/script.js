document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const captureButton = document.getElementById('capture');

    // Access the webcam
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error("Error accessing webcam: " + err);
        });

    // Capture the frame and send for recognition
    captureButton.addEventListener('click', () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0);
        const frame = canvas.toDataURL('image/jpeg').split(',')[1];

        fetch('/recognize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ frame: frame })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                Swal.fire('Success!', data.message, 'success');
            } else {
                Swal.fire('Error!', 'No match found. Redirecting to registration.', 'error')
                    .then(() => {
                        window.location.href = data.redirect;
                    });
            }
        })
        .catch(err => console.error("Error during recognition: " + err));
    });
});

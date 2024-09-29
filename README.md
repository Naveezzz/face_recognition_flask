# face_recognition_flask
Face Recognition Employee Attendance System
This project is a real-time face recognition-based employee attendance tracking system built using Flask, MongoDB, OpenCV, and Face Recognition libraries. The system allows the registration of employees using webcam images and tracks attendance by recognizing employees' faces in real-time.

#Features
Real-time Face Recognition: Captures webcam feed and recognizes employee faces.
Employee Registration: Employees can register by capturing their face using the webcam.
Attendance Tracking: Automatically logs employee entry time when a face is recognized.
Admin Dashboard: View and manage employee data, generate attendance reports (daily, weekly, monthly) as Excel sheets.
Reports: Generate and download attendance reports as Excel files for different periods.
#Tech Stack
Backend: Flask (Python)
Database: MongoDB (NoSQL)
Frontend: HTML, CSS, JavaScript (with webcam handling)
Face Recognition: face_recognition library (Python)
Image Processing: OpenCV (Python)
Data Handling: Pandas for generating reports
Installation
Prerequisites
Python 3.x
MongoDB installed and running
Web browser that supports webcam access
Step-by-Step Guide
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/face-recognition-attendance.git
cd face-recognition-attendance
Install dependencies: Install the required Python packages using pip:

Flask
OpenCV (opencv-python)
Numpy
Face Recognition (face_recognition)
PyMongo
Pandas
You can create the requirements.txt using the following command after setting up your environment:
Recognize Faces: The system will capture webcam footage, detect faces, and match them with registered employees. When a match is found, attendance is automatically logged.
#API Endpoints
GET /: Home page displaying the camera feed for recognition.
POST /recognize: Handles face recognition by matching captured frames to registered employees.
GET /register_page: Employee registration page.
POST /register: Registers an employee with webcam image capture.
GET /admin: Admin dashboard for managing attendance.
POST /generate_report: Generates Excel reports for attendance (daily, weekly, or monthly).
#Usage
Registering an Employee
Access the registration page at /register_page.
Use the webcam to capture the employee's face.
Enter the employee's details (ID and name).
Submit the form to save the employee's face encoding to the database.
Face Recognition and Attendance
Open the main page at /.
The webcam feed will capture faces in real-time.
If a face matches a registered employee, the system will log their entry time.
#Admin Dashboard and Reports
Access the admin dashboard at /admin.
Choose to generate daily, weekly, or monthly attendance reports.
Download the reports as Excel files from the provided link.
#Troubleshooting
Webcam Not Working: Ensure your browser has permission to access the webcam.
No Face Detected: Make sure there is sufficient lighting, and the camera is positioned correctly.
MongoDB Connection Issues: Ensure MongoDB is running on the correct port (27017 by default).
#Future Improvements
Add support for employee deregistration and editing details.
Implement notifications and alerts for late/absent employees.
Improve face recognition accuracy under varying lighting conditions.
Add support for more reporting formats (CSV, PDF).


https://github.com/user-attachments/assets/f9a924b8-9d56-4969-af30-181637b4a1f1






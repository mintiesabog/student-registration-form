const curriculum = {
    "1st Year": [
        { code: "IT 101", name: "Introduction to Information Technology", units: 3, day: "Monday", time: "8:00 AM - 10:00 AM", room: "Room 201" },
        { code: "CS 102", name: "Computer Programming", units: 3, day: "Tuesday", time: "9:00 AM - 11:00 AM", room: "Lab 1" },
        { code: "IT 103", name: "Web Development", units: 3, day: "Wednesday", time: "1:00 PM - 3:00 PM", room: "Lab 2" },
        { code: "GE 104", name: "Purposive Communication", units: 3, day: "Thursday", time: "10:00 AM - 12:00 PM", room: "Room 105" },
        { code: "PE 105", name: "Physical Education", units: 2, day: "Friday", time: "2:00 PM - 4:00 PM", room: "Gym" },
        { code: "GE 106", name: "Mathematics in the Modern World", units: 3, day: "Friday", time: "9:00 AM - 11:00 AM", room: "Room 203" }
    ],
    "2nd Year": [
        { code: "IT 201", name: "Data Structures and Algorithms", units: 3, day: "Monday", time: "8:00 AM - 10:00 AM", room: "Lab 1" },
        { code: "IT 202", name: "Database Management", units: 3, day: "Tuesday", time: "1:00 PM - 3:00 PM", room: "Lab 2" },
        { code: "IT 203", name: "Object-Oriented Programming", units: 3, day: "Wednesday", time: "9:00 AM - 11:00 AM", room: "Lab 1" },
        { code: "IT 204", name: "Systems Analysis and Design", units: 3, day: "Thursday", time: "10:00 AM - 12:00 PM", room: "Room 201" },
        { code: "GE 205", name: "Ethics", units: 3, day: "Friday", time: "8:00 AM - 10:00 AM", room: "Room 105" }
    ],
    "3rd Year": [
        { code: "IT 301", name: "Information Assurance and Security", units: 3, day: "Monday", time: "1:00 PM - 3:00 PM", room: "Room 201" },
        { code: "IT 302", name: "Application Development", units: 3, day: "Tuesday", time: "8:00 AM - 10:00 AM", room: "Lab 2" },
        { code: "IT 303", name: "Networking", units: 3, day: "Wednesday", time: "1:00 PM - 3:00 PM", room: "Lab 1" },
        { code: "IT 304", name: "IT Project Management", units: 3, day: "Thursday", time: "9:00 AM - 11:00 AM", room: "Room 203" },
        { code: "IT 305", name: "Technopreneurship", units: 3, day: "Friday", time: "10:00 AM - 12:00 PM", room: "Room 105" }
    ],
    "4th Year": [
        { code: "IT 401", name: "Capstone Project", units: 3, day: "Monday", time: "9:00 AM - 12:00 PM", room: "Lab 2" },
        { code: "IT 402", name: "Internship", units: 6, day: "Tuesday", time: "8:00 AM - 5:00 PM", room: "Partner Site" },
        { code: "IT 403", name: "Emerging Technologies", units: 3, day: "Wednesday", time: "1:00 PM - 3:00 PM", room: "Room 201" },
        { code: "IT 404", name: "Professional Practice", units: 3, day: "Thursday", time: "10:00 AM - 12:00 PM", room: "Room 105" }
    ]
};

function getStudentProfile() {
    return JSON.parse(localStorage.getItem("studentProfile") || "null") || {
        name: "Angel Azul",
        course: "BS Information Technology",
        year: "1st Year",
        email: "student@email.com"
    };
}

function getCurrentSubjects() {
    return curriculum[getStudentProfile().year] || curriculum["1st Year"];
}
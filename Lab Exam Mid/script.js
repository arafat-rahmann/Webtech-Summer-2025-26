console.log("Connected");

const studentList = [];

function collectData() {

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const email = document.getElementById("email").value.trim();
    const credit = document.getElementById("credit").value;
    const department = document.getElementById("department").value;

   
    if (!firstName) {
        alert("First Name is required");
        return false;
    }

   
    if (!lastName) {
        alert("Last Name is required");
        return false;
    }

   
    if (!studentId.includes("-")) {
        alert("Student ID must contain '-' ");
        return false;
    }

    
    if (!email.includes("@student.aiub.edu")) {
        alert("Email must contain @student.aiub.edu");
        return false;
    }

   
    if (credit < 0 || credit >= 148) {
        alert("Credit must be between 0 and 147");
        return false;
    }

   
    if (!department) {
        alert("Please select Department");
        return false;
    }

    const student = {
        firstName: firstName,
        lastName: lastName,
        studentId: studentId,
        email: email,
        credit: credit,
        department: department
    };

    studentList.push(student);

    console.log(studentList);

    const table = document.getElementById("studentTable");

    table.innerHTML = `
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Student ID</th>
        <th>Email</th>
        <th>Credit</th>
        <th>Department</th>
    </tr>
    `;

    studentList.map(function(student){

        table.innerHTML += `
        <tr>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.studentId}</td>
            <td>${student.email}</td>
            <td>${student.credit}</td>
            <td>${student.department}</td>
        </tr>
        `;

    });

    document.getElementById("studentForm").reset();

    return false;
}
var students = [];
var groups = [];

function addStudent() {
    var name = document.getElementById("studentName").value.trim();
    var level = document.getElementById("studentLevel").value;

    if (name !== "") {
        students.push({ name: name, level: level });
        updateStudentList();
        document.getElementById("studentName").value = ""; // Clear input field
        document.getElementById("studentName").focus(); // Focus back on input field
    } else {
        alert("Please enter a student name.");
    }
}

function updateStudentList() {
    var list = document.getElementById("studentList");
    
    list.innerHTML = ""; // Clear the current list
    for (var i = 0; i < students.length; i++) {
        var li = document.createElement("li");
        li.textContent = students[i].name + " (" + students[i].level + ")";
        list.appendChild(li); // Add each student to the list
    }
}

function createGroups() {
    var groupSizeInput = document.getElementById("groupSize");
    
    var groupSize = parseInt(groupSizeInput.value);
    
    if (isNaN(groupSize) || groupSize <= 0) {
        alert("Please enter a valid group size.");
        return; // Exit function if invalid input
    }

    if (students.length === 0) {
        alert("Please add students first.");
        return; // Exit function if no students are added
    }

    groups = []; // Reset groups array

    // Shuffle students randomly
    var shuffledStudents = students.slice().sort(function () {
        return Math.random() - 0.5; // Randomize order
    });

    // Divide shuffled students into groups
    for (var i = 0; i < shuffledStudents.length; i += groupSize) {
        groups.push(shuffledStudents.slice(i, i + groupSize));
    }

    displayGroups(groups); // Display the generated groups
}

function displayGroups(groups) {
    var resultDiv = document.getElementById("groupResult");
    
    resultDiv.innerHTML = ""; // Clear previous results

    for (var i = 0; i < groups.length; i++) {
        var groupDiv = document.createElement("div");
        groupDiv.className = "group";
        groupDiv.innerHTML = "<h3>Group " + (i + 1) + "</h3>";

        for (var j = 0; j < groups[i].length; j++) {
            var studentP = document.createElement("p");
            studentP.textContent = groups[i][j].name + " (" + groups[i][j].level + ")";
            groupDiv.appendChild(studentP);
        }

        resultDiv.appendChild(groupDiv);
    }
}
// Andrew
let students =[];
let groups =[];

function addStudent() {
    let name = document.getElementById("studentName").value;
    let level = document.getElementById("studentLevel").value;

    if(name){
       students.push({ name: name, level: level });
       updateStudentList();
       //document.getElementById('studentName').value = '';
    } else { 
        alert("please enter a student name");
    }
}


function updateStudentList() {
    let list = document.getElementById("studentList");
    list.innerHTML = '';

    for(let i = 0; i < students.length; i++) {
        let li = document.createElement('li');
        li.textContent = students[i].name + " (" + students[i].level + ")";
        list.appendChild(li);
    }
}

function createGroups(){
    let groupSize = parseInt(document.getElementById('groupSize').value);

    if(isNaN(groupSize) || groupSize <= 0) {
       alert("Please enter a valid number of groups.");
       return;
    }

    if(students.length === 0) {
      alert("please add student first.");
      return;
    }

    let shuffledStudents = students.slice().sort(() => Math.random() - 0.5); 
     
    for (let i = 0; i < shuffledStudents.length; i += groupSize) {
        groups.push(shuffledStudents.slice(i, i + groupSize));
    }      

    displayGroups(groups);
}


function displayGroups(groups) {
    let result = document.getElementById('groupResult');
    result.innerHTML = '';

    for(let i = 0; i < groups.length  ; i++) {
        let groupDiv = document.createElement('div');
        groupDiv.innerHTML = "<h3>Group" + (i + 1) + "</h3>";

        for(let j = 0; j < groups[i].length; j++) {
            groupDiv.innerHTML += "<p>" + groups[i][j].name + " (" + groups[i][j].level + ")</p>";
        }

        result.appendChild(groupDiv);
    }
}
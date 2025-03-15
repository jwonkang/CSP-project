// Ethan 
var scheduleTable = document.getElementById("academicTable");
var timeSelect = document.getElementById("time");
var submitBtn = document.getElementById("submitBtn");

var times =["3:20 - 3:30", "3:30 - 3:40", "3:40 - 3:50", "3:50 - 4:00"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

//time table insert + Monday - Friday slot + option dropdown menu
function createTimeSlots(timeList){
    for(var i=0; i<times.length; i++){
      var row = scheduleTable.insertRow();
      var cell = row.insertCell();
      cell.textContent = times[i];

    for(var j=0; j<5; j++){
      row.insertCell();
    } 

    var option = document.createElement("option");
    option.value = times[i];
    option.textContent = times[i];
    timeSelect.appendChild(option);
    }
}

//find row of input time
function findRowTime(time){
    for(var i=0; i< scheduleTable.rows.length; i++){
      if(scheduleTable.rows[i].cells[0].textContent === time){
        return i;
      }
    }
    return -1;
}

//main algorithm 
//find position + insert name + delete button 
function addMeeting(day, time, studentName){
    const cellIndex = days.indexOf(day) + 1;
    const rowIndex = findRowTime(time);

    if (rowIndex === -1) {
      return;
    }

    const cell = scheduleTable.rows[rowIndex].cells[cellIndex];
    const meetingDiv = document.createElement("div");
    meetingDiv.className = "meeting";
    meetingDiv.textContent = studentName;

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "X";

    deleteBtn.onclick = function(){
      cell.removeChild(meetingDiv);
    }

    meetingDiv.appendChild(deleteBtn);
    cell.appendChild(meetingDiv);
}

//submit button press
submitBtn.onclick = function(){
  var day = document.getElementById("day").value;
  var time = document.getElementById("time").value;
  var studentName = document.getElementById("studentName").value;
  addMeeting(day, time, studentName);
  addMeetingForm.reset();
  return false;
}

createTimeSlots(times);

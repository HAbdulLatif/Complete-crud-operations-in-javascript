// complete Validation
const form = document.getElementById('form');
const FirstName = document.getElementById('FirstName');
const LastName = document.getElementById('LastName');
const FatherName = document.getElementById('FatherName');
const Cnic = document.getElementById('Cnic');
const Programs = document.getElementById('Programs');
const session = document.getElementById('session');
const message = document.getElementById('message');
const regbtn = document.getElementById('regbtn');

regbtn.addEventListener('click', e => {
	// e.preventDefault();
	
	// checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const FirstNameValue = FirstName.value.trim();
	const LastNameValue = LastName.value.trim();
	const FatherNameValue = FatherName.value.trim();
	const CnicValue = Cnic.value.trim();
	const ProgramsValue = Programs.value.trim();
	const sessionValue = session.value.trim();
	const messageValue = message.value.trim();
	
	if(FirstNameValue === '' ) {
		setErrorFor(FirstName, 'First Name cannot be blank');
	} else if (!isFirstName(FirstNameValue)) {
		setErrorFor(FirstName, 'Enter Atleast 3 Alphabetic character');
	} 
	else {
		setSuccessFor(FirstName);
	}
	
    if(LastNameValue === '') {
		setErrorFor(LastName, 'Last Name cannot be blank');
	}	else if (!isLastName(LastNameValue)) {
		setErrorFor(LastName, 'Enter Atleast 3 Alphabetic character');
	} 
	else {
		setSuccessFor(LastName);
	}
    if(FatherNameValue === '') {
		setErrorFor(FatherName, 'Father Name cannot be blank');
	} else if (!isFatherName(FatherNameValue)) {
		setErrorFor(FatherName, 'Enter Atleast 3 Alphabetic character');
	}else {
		setSuccessFor(FatherName);
	}
    if(CnicValue === '') {
		setErrorFor(Cnic, 'CNIC Name cannot be blank');
	} else if (!isCnic(CnicValue)) {
		setErrorFor(Cnic, 'Enter Only Numeric Numbers');
	} else {
		setSuccessFor(Cnic);
	}
    if(ProgramsValue === '') {
		setErrorFor(Programs, 'Programs cannot be blank');
	} else {
		setSuccessFor(Programs);
	}
    if(sessionValue === '') {
		setErrorFor(session, 'Session cannot be blank');
	} else {
		setSuccessFor(session);
	}
    if(messageValue === '') {
		setErrorFor(message, 'Message cannot be blank');
	} else {
		setSuccessFor(message);
	}
}
function isFirstName(FirstName){
	return/^[A-Za-z. ]{3,30}$/.test(FirstName);
}
function isLastName(LastName){
	return/^[A-Za-z. ]{3,30}$/.test(LastName);
}
function isFatherName(FatherName){
	return/^[A-Za-z. ]{3,30}$/.test(FatherName);
}
function isCnic(Cnic){
	return/^(\d|-)+$/.test(Cnic);
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'formControl error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'formControl success';
}

// All subject
var subjectArray=[{p:"BS",s:"Cs201"},{p:"BS",s:"Cs401"},{p:"BS",s:"Cs201"},{p:"BS",s:"Cs201"},{p:"BS",s:"Cs201"},
{p:"MS",s:"MS201"},{p:"MS",s:"MS202"},{p:"MS",s:"MS203"},{p:"MS",s:"MS204"},{p:"MS",s:"Ms205"},
{p:"MBA",s:"MBA201"},{p:"MBA",s:"MBA202"},{p:"MBA",s:"MBA203"},{p:"MBA",s:"MBA204"},{p:"MBA",s:"MBA205"},
{p:"BIOTECH",s:"BIO201"},{p:"BIOTECH",s:"BIO202"},{p:"BIOTECH",s:"BIO203"},{p:"BIOTECH",s:"BIO204"},{p:"BIOTECH",s:"BIO205"}
]
// Subject change
function subjectchange(){
    var getvalue= document.getElementById('Programs');
    var subjectlist='';
    for(i=0;i<subjectArray.length;i++){
        if(subjectArray[i].p==getvalue.value){
           
            subjectlist+='<div class="form-check form-check-inline form-left">';
            subjectlist+='<input class="form-check-input Subject" type="checkbox" id="inlineCheckbox'+i+'" value="'+subjectArray[i].s+'">';
            subjectlist+='<label class="form-check-label" for="inlineCheckbox'+i+'">'+subjectArray[i].s+'</label>';
            subjectlist+='</div>';
        }
    }
    var appenddata=document.getElementById('subjectlist');
    appenddata.innerHTML=subjectlist;
}
 // subject choose validation
 var subjectselected='';
 function subjectvalidaion(type){
	//  debugger;
    var count=0;
    var subject = document.querySelectorAll(".Subject");
    var regbtn =document.getElementById('regbtn');
    var session=document.getElementById('session');
	subjectselected='';
    for (i = 0; i < subject.length; i++) {
        var getcheck= subject[i].checked ;
        if( getcheck==true){
			subjectselected+=subject[i].value+",";
            count++;
			//x[i].nextSibling.innerHTML;
			//alert();
        }
      }
      if(count<3){
          alert("mimum 3 subject select");
          if(type=="sb"){
            regbtn.hidden=true;
            session.value='';
        }
	
      }
      else{
        regbtn.hidden=false;
      }    
}
	//Reset Form
	function resetform(){
		document.getElementById('FirstName').value="";
		document.getElementById('LastName').value="";
		document.getElementById('FatherName').value="";
		document.getElementById('Cnic').value="";
		document.getElementById('Programs').value="";
		document.getElementById('session').value="";
		document.getElementById('message').value="";
		var appenddata=document.getElementById('subjectlist');
		appenddata.innerHTML="";
 }



var studentRecord=[];
 var row=1;
// add record in the table
function addRecord(){
	checkInputs();
	// debugger;
	//const form = document.getElementById('form');
	var FirstName = document.getElementById('FirstName').value;
	var LastName = document.getElementById('LastName').value;
	var FatherName = document.getElementById('FatherName').value;
	var Cnic = document.getElementById('Cnic').value;
	var Programs = document.getElementById('Programs').value;
	// var subjectselected = document.getElementById('subjectselected').value;
	var session = document.getElementById('session').value;
	var message = document.getElementById('message').value;
	var student=new Object();
	var recordtbl=document.getElementById('recordtbl');
	var row = 1; 


	if(FirstName.length > 0 &&
	   LastName.length > 0 && 
	   FatherName.length > 0 && 
	   Cnic.length > 0 && 
	   Programs.length > 0 &&
	   message.length > 0 &&
	   subjectselected.length > 0 )
	{
	student.FirstName = FirstName;
	student.LastName = LastName;
	student.FatherName = FatherName;
	student.Cnic = Cnic;
	student.Programs = Programs;
	student.session = session;
	student.FirstName = FirstName;
	student.message = message;
	student.subject=subjectselected;
	studentRecord.push(student);

	var tblrecord = '';
	for(i=0; i<studentRecord.length; i++)
	{

		tblrecord+='<tr>';
		tblrecord+='<td>'+studentRecord[i].FirstName+''+studentRecord[i].LastName+'</td>';
		tblrecord +='<td>' +studentRecord[i].Programs +'-' +studentRecord[i].session +'-' +'00' +row;'</td>';
		// generating roll number
		studentRecord[i].rollNumber =studentRecord[i].Programs +"-" +studentRecord[i].session +"-" +"00" +row;
		//end of roll number
		tblrecord+='<td>'+studentRecord[i].Programs+'</td>';
		tblrecord+='<td>'+studentRecord[i].subject+'</td>';
		tblrecord+='<td id="action"><button class="button-create btn btn-outline-dark mr-3" id="editButton">Edit</button><button class="button-create btn btn-outline-dark" id="deleteBtn">Delete</button></td>';

		tblrecord+='</tr>';
		row++;
		
	
	}
	
	resetform();
	recordtbl.innerHTML=tblrecord;

		var allDeleteButton = Array.from(document.querySelectorAll("#deleteBtn"));
		allDeleteButton.map(function (button) {
		  button.addEventListener("click", function () {
			var targetRow = this.closest("tr");
			var rollNumber = targetRow.children[1].innerHTML;
			studentRecord.map((student, index) => {
			  student.rollNumber === rollNumber ? studentRecord.splice(index, 1): "";
			});
			this.closest("tr").remove();
		  });
		});
		//^code for edit handler
		var allEditButton = Array.from(document.querySelectorAll("#editButton"));
		allEditButton.forEach(function (button) {
		  button.addEventListener("click", function () {
			var targetRow = this.closest("tr");
			var rollNumber = targetRow.children[1].innerHTML;
			studentRecord.map(function (student) {
			  if (student.rollNumber == rollNumber) {
				form[0].value = student.FirstName;
				form[1].value = student.LastName;
				form[2].value = student.FatherName;
				form[3].value = student.Cnic;
				form[6].value = student.message;
				for (var i = 0; i < form[10].options.length; i++) {
				  if (form[10].options[i].value === student.session) {
					form[10].selectedIndex = i;
				  }
				}
				for (var i = 0; i < form[4].options.length; i++) {
				  if (form[4].options[i].value === student.Programs) {
					form[4].selectedIndex = i;
				  }
				}
			  }
			});
		  });
		});
	
}
}

/* ===== variables === */
var global_url = "http://ccsmygrade.com/m_grading/functions.php";
var global_url2 = "http://ccsmygrade.com/ccsgiweb/m/functions.php";
var currentsem= "";

function getstudentname(data){
	//alert("test");
	studentname = data;
}


$$(document).on('pageAfterAnimation','.page[data-page="editscore"]',function(e){

	document.getElementById("student_name").innerHTML = studentname;
	//alert("test");
})

$$(document).on('pageAfterAnimation','.page[data-page="studenthome"]',function(e){
	var studentprofile = JSON.parse(localStorage.getItem("studentprofile"));
	document.getElementById("student_name").innerHTML = studentprofile.name;
	//alert("test");
})

$$(document).on('pageAfterAnimation','.page[data-page="parenthome"]',function(e){
	var parentprofile = JSON.parse(localStorage.getItem("parentprofile"));
	document.getElementById("parent_name").innerHTML = parentprofile.parentname;
	//alert("test");
})

$$(document).on('pageAfterAnimation','.page[data-page="teacherhome"]',function(e){
	var teacherprofile = JSON.parse(localStorage.getItem("teacherprofile"));
	document.getElementById("teacher_name").innerHTML = teacherprofile.teachername;
})


function studentlogin(){
	
	 myApp.showPreloader();
	 
	 var uname = document.getElementById("studentusername").value;
     var pwd = document.getElementById("studentpassword").value;
	
	$$.post(global_url, {action: 'studentlogin',username: uname, password: pwd}, function (data,status) {
		var datas = JSON.parse(data);
		
		console.log(data);
		if(parseInt(data)==0){
			myApp.alert('Invalid Username or Password');
		}else{
			localStorage.setItem("studentprofile",JSON.stringify(datas));
			var login = document.getElementById("studentsuccess");
			login.click();

		}
		
	},JSON);
	
	myApp.hidePreloader();
}



function teacherlogin(){
	
	 //myApp.showPreloader();
	 
	 var uname = document.getElementById("teacherusername").value;
     var pwd = document.getElementById("teacherpassword").value;
	
	$$.post(global_url, {action: 'teacherlogin',username: uname, password: pwd}, function (data,status) {
		var datas = JSON.parse(data);
		
		console.log(data);
		if(parseInt(data)==0){
			myApp.alert('Invalid Username or Password');
		}else{
			localStorage.setItem("teacherprofile",JSON.stringify(datas));
			var login = document.getElementById("teachersuccess");
			login.click();
		}
		
	},JSON);
	
	//myApp.hidePreloader();
}



function parentlogin(){
	
	 myApp.showPreloader();
	 
	 var uname = document.getElementById("parentusername").value;
     var pwd = document.getElementById("parentpassword").value;
	
	$$.post(global_url, {action: 'parentlogin',username: uname, password: pwd}, function (data,status) {
		var datas = JSON.parse(data);
		
		console.log(data);
		if(parseInt(data)==0){
			myApp.alert('Invalid Username or Password');
		}else{
			localStorage.setItem("parentprofile",JSON.stringify(datas));
			var login = document.getElementById("parentsuccess");
			login.click();
		}
		
	},JSON);
	
	myApp.hidePreloader();
}




function studentregister(){
	 
	 var dept = document.getElementById("studentdepartment").value;
	 var crse = document.getElementById("studentcourse").value;
	 var sname = document.getElementById("studentname").value;
	 var id = document.getElementById("studentid").value;
	 var y = document.getElementById("studentyear").value;
	 var s = document.getElementById("studentsection").value;
	 var contact = document.getElementById("studentcontactnumber").value;
	 var uname = document.getElementById("studentusername").value;
	 var pwd = document.getElementById("studentpassword").value;
	 //var vcode = document.getElementById("studentvcode").value;
	
	if(dept == "" || crse == "" || sname == "" || id == "" || y == "" || s == "" || contact == "" || uname == "" || pwd == ""){
	myApp.alert('<center><strong>Please fill all inputs</strong></center>');
	}else{
	$$.post(global_url, {action: 'registerstudent',department: dept, course: crse, name: sname, studentid: id, year: y, section: s, contactnumber: contact, username: uname, password: pwd}, function (data,status) {
		
		console.log(data);
		myApp.alert('<center><strong>Registration Successful!</strong><br>Please login with your <strong>Username</strong> and <strong>password</strong>.</center>');
		var register = document.getElementById("registerstudentsuccess");
		register.click();
		
	},JSON);
	}
}


function teacherregister(){

	 var tname = document.getElementById("teachername").value;
	 var id = document.getElementById("teacherid").value;
	 var contact = document.getElementById("teachercontactnumber").value;
	 var uname = document.getElementById("teacherusername").value;
	 var pwd = document.getElementById("teacherpassword").value;
	 //var vcode = document.getElementById("teachervcode").value;
	
	if(tname == "" || id == "" || contact == "" || uname == "" || pwd == ""){
	myApp.alert('<center><strong>Please fill all inputs</strong></center>');
	}else{
	$$.post(global_url, {action: 'registerteacher',teachername: tname, teacherid: id, contactnumber: contact, username: uname, password: pwd}, function (data,status) {
		
		console.log(data);
		myApp.alert('<center><strong>Registration Successful!</strong><br>Please login with your <strong>Username</strong> and <strong>password</strong>.</center>');
		var register = document.getElementById("registerteachersuccess");
		register.click();
		
	},JSON);
	}
}


function parentregister(){

	 var pname = document.getElementById("parentname").value;
	 var contact = document.getElementById("parentcontactnumber").value;
	 var uname = document.getElementById("parentusername").value;
	 var pwd = document.getElementById("parentpassword").value;
	 //var vcode = document.getElementById("teachervcode").value;
	
	if(pname == "" || contact == "" || uname == "" || pwd == ""){
	myApp.alert('<center><strong>Please fill all inputs</strong></center>');
	}else{
	$$.post(global_url, {action: 'registerparent',parentname: pname, contactnumber: contact, username: uname, password: pwd}, function (data,status) {
		
		console.log(data);
		myApp.alert('<center><strong>Registration Successful!</strong><br>Please login with your <strong>Username</strong> and <strong>password</strong>.</center>');
		var register = document.getElementById("registerparentsuccess");
		register.click();
		
	},JSON);
	}
}

function showgrades(){
	
	var sy = document.getElementById('syinput').value;
	
	$$(document).on('pageAfterAnimation','.page[data-page="studentsearch"]',function(e){
	
		var studentprofile = JSON.parse(localStorage.getItem("studentprofile"));
		var sid = studentprofile.studid;
		
		$$.post(global_url, {action: 'displaystudentgrades', studentid: sid, schoolyear: sy}, function (data,status) {
			
			document.getElementById('displaygrades').innerHTML="";
			//document.getElementById('display_legend').innerHTML="";
			console.log(data);
			var datas = JSON.parse(data);
			console.log(datas);
			
			for(var i = 0; i<datas.length; i++){
			
				if(datas[i].inc == 1){
				
				$$('#displaygrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-bluegray"><p style="margin-top: -17%;">INCOMPLETE</p></span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li></ul></div><br></div>');
				
				}else if(datas[i].overall >= 98 && datas[i].overall <= 100){	
				
				$$('#displaygrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-green"><p style="margin-top: -19%;">1.00 - '+datas[i].overall+'</p></span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Midterm Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].midtermgrade+'</span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Final Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].finalgrade+'</span></div></div></div></li></ul></div><br></div>');
				
				}else if(datas[i].overall >= 95 && datas[i].overall <= 97){
				
				$$('#displaygrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-green"><p style="margin-top: -19%;">1.25 - '+datas[i].overall+'</p></span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Midterm Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].midtermgrade+'</span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Final Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].finalgrade+'</span></div></div></div></li></ul></div><br></div>');
				
				}else if(datas[i].overall >= 92 && datas[i].overall <= 94){
				
				$$('#displaygrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-green"><p style="margin-top: -19%;">1.50 - '+datas[i].overall+'</p></span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Midterm Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].midtermgrade+'</span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Final Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].finalgrade+'</span></div></div></div></li></ul></div><br></div>');
				
				}else if(datas[i].overall >= 89 && datas[i].overall <= 91){
				
				$$('#displaygrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-green"><p style="margin-top: -19%;">1.75 - '+datas[i].overall+'</p></span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Midterm Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].midtermgrade+'</span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Final Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].finalgrade+'</span></div></div></div></li></ul></div><br></div>');
				
				}else if(datas[i].overall >= 86 && datas[i].overall <= 88){
				
				$$('#displaygrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-blue"><p style="margin-top: -19%;">2.00 - '+datas[i].overall+'</p></span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Midterm Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].midtermgrade+'</span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Final Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].finalgrade+'</span></div></div></div></li></ul></div><br></div>');
				
				}else if(datas[i].overall >= 83 && datas[i].overall <= 85){
				
				$$('#displaygrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-blue"><p style="margin-top: -19%;">2.25 - '+datas[i].overall+'</p></span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Midterm Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].midtermgrade+'</span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Final Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].finalgrade+'</span></div></div></div></li></ul></div><br></div>');
				
				}else if(datas[i].overall >= 80 && datas[i].overall <= 82){
				
				$$('#displaygrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-blue"><p style="margin-top: -19%;">2.50 - '+datas[i].overall+'</p></span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Midterm Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].midtermgrade+'</span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Final Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].finalgrade+'</span></div></div></div></li></ul></div><br></div>');
				
				}else if(datas[i].overall >= 77 && datas[i].overall <= 79){
				
				$$('#displaygrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-blue"><p style="margin-top: -19%;">2.75 - '+datas[i].overall+'</p></span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Midterm Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].midtermgrade+'</span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Final Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].finalgrade+'</span></div></div></div></li></ul></div><br></div>');
				
				}else if(datas[i].overall >= 75 && datas[i].overall <= 76){
				
				$$('#displaygrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-orange"><p style="margin-top: -19%;">3.00 - '+datas[i].overall+'</p></span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Midterm Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].midtermgrade+'</span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Final Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].finalgrade+'</span></div></div></div></li></ul></div><br></div>');
				
				}else if(datas[i].overall >= 74){
				
				$$('#displaygrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-red"><p style="margin-top: -19%;">5.00 - '+datas[i].overall+'</p></span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Midterm Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].midtermgrade+'</span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Final Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].finalgrade+'</span></div></div></div></li></ul></div><br></div>');
				
				}else{
			
				$$('#displaygrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].overall+'</span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Midterm Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].midtermgrade+'</span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Final Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].finalgrade+'</span></div></div></div></li></ul></div><br></div>');
				}
			
			}
			
		},JSON);
	
	})
	
}

function showgradedetail(finalquiz,finalseatwork,finalassignment,finalexam,finalother,midtermquiz,midtermseatwork,midtermassignment,midtermexam,midtermother){

	$$(document).on('pageAfterAnimation','.page[data-page="gradedetails"]',function(e){
			
			document.getElementById('midterm_quiz').innerHTML= midtermquiz;
			document.getElementById('midterm_seatwork').innerHTML= midtermseatwork;
			document.getElementById('midterm_assignment').innerHTML= midtermassignment;
			document.getElementById('midterm_exam').innerHTML= midtermexam;
			document.getElementById('midterm_other').innerHTML= midtermother;
			
			document.getElementById('final_quiz').innerHTML= finalquiz;
			document.getElementById('final_seatwork').innerHTML= finalseatwork;
			document.getElementById('final_assignment').innerHTML= finalassignment;
			document.getElementById('final_exam').innerHTML= finalexam;
			document.getElementById('final_other').innerHTML= finalother;
			
	
	})

}


function preenrollbycode(){
	
	var codeinput = document.getElementById('codeinput').value;
		
	$$.post(global_url, {action: 'preenrollbycode', subjectcode: codeinput}, function (data,status) {
		
		//document.getElementById('displaygrades').innerHTML="";
		var datas = JSON.parse(data);
		console.log(data);
		
		if(parseInt(data)==0){
		myApp.alert('<center><strong>Invalid Subject Code</strong></center>');
		}else{
		$$('#hidden_inputs').append('<input type="hidden" id="teacher_id" value="'+datas.teacherid+'"><input type="hidden" id="subject_id" value="'+datas.subjid+'"><input type="hidden" id="school_year" value="'+datas.schoolyear+'"><input type="hidden" id="subject_title" value="'+datas.subjecttitle+'">');
		var enroll = document.getElementById("hiddenbtn");
		enroll.click();
		//myApp.alert('<center><strong>Successfully Enrolled to Subject</strong></center>');
		//myApp.alert('<center><strong>Successfully Enrolled to '+datas.subjecttitle+'</strong></center>');
		}
		
	},JSON);
	
}

function enrollbycode(){
	
	var subjid = document.getElementById('subject_id').value;
	var tid = document.getElementById('teacher_id').value;
	var sy = document.getElementById('school_year').value;
	var subjtitle = document.getElementById('subject_title').value;
	
	var studentprofile = JSON.parse(localStorage.getItem("studentprofile"));
	var sid = studentprofile.studid;
		
	$$.post(global_url, {action: 'enrollbycode', studentid: sid, subjectid: subjid, teacherid: tid, schoolyear: sy}, function (data,status) {
		
		document.getElementById('codeinput').value = "";
		console.log(data);
		
		if(data == 0){
		myApp.alert('<center><strong>You are already enrolled in this subject</strong></center>');
		}else{
		myApp.alert('<center><strong>Successfully Enrolled to<br>'+subjtitle+'</strong></center>');
		}
		
	},JSON);
	
}


function createsubject(){
		
	function randomString(length, chars) {
		    var result = '';
		    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
		    return result;
		}

	var gencode = randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
	
	 var stitle = document.getElementById("subjecttitle").value;
	 var ssy = document.getElementById("subjectsy").value;
	 var stg = document.getElementById("subjecttg").value;
	 var sdept = document.getElementById("subjectdepartment").value;
	 var scrse = document.getElementById("subjectcourse").value;
	 var sys = document.getElementById("subjectys").value;
	 var scode = gencode;
	
	var teacherprofile = JSON.parse(localStorage.getItem("teacherprofile"));
	var teachid = document.getElementById("teacher_id").value = teacherprofile.tid;
	
	if(stitle == "" || sys == ""){
	myApp.alert('<center><strong>Please fill all inputs</strong></center>');
	}else{
	$$.post(global_url, {action: 'createsubject',subjecttitle: stitle, subjectsy: ssy, subjecttg: stg, subjectdept: sdept, subjectcourse: scrse, subjectys: sys, subjectcode: scode, teacherid: teachid}, function (data,status) {
		
		console.log(data);
		myApp.alert('<center><strong>Successfully Created Subject</strong><br>Subject Code: '+ gencode +'</center>');
		var create = document.getElementById("createsubjectsuccess");
		create.click();
		
	},JSON);
	}
	
}

$$(document).on('pageAfterAnimation','.page[data-page="teacherhome"]',function(e){
	document.getElementById('displaySub').innerHTML = "";
	var teacherprofile = JSON.parse(localStorage.getItem("teacherprofile"));
	var teacherid = document.getElementById("teacher_id").value = teacherprofile.tid;
	
	$$.post(global_url, {action: 'displaysubjects', id: teacherid}, function (data,status) {
		
		console.log(data);
		var datas = JSON.parse(data);
		console.log(datas);
		
		for(var i = 0; i<datas.length; i++){
			
			$$('#displaySub').append('<li class="swipeout"><a href="pages/subjectchoose.html" onclick="passid('+datas[i].subjid+','+datas[i].schoolyear+');" class="item-link item-content swipeout-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">'+datas[i].subjecttitle+'</div></div><div class="item-text">Subject Code: '+datas[i].subjectcode+'</div></div></a><div class="swipeout-actions-right"><a href="#" onclick="deletesubject('+datas[i].subjid+');" class="bg-red">Delete</a></div></li>');
			
			
			///////////////////////////////SWIPE OUT CUSTOMIZED WITH FUNCTION////////////////////////////////
			//$$('#displaySub').append('<li class="swipeout"><a href="pages/subjectchoose.html" onclick="passid('+datas[i].subjid+','+datas[i].schoolyear+');" class="item-link item-content swipeout-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">'+datas[i].subjecttitle+'</div></div><div class="item-text">Subject Code: '+datas[i].subjectcode+'</div></div></a><div class="swipeout-actions-right"><a href="#" style="background-color: #f44336;" onclick="deletesubject('+datas[i].subjid+');">Delete</a></div></li>');
			
			
			//////////////////////////////SWIPE OUT WITHOUT FUNCTION//////////////////////////////////////
			//$$('#displaySub').append('<li class="swipeout"><a href="pages/subjectchoose.html" onclick="passid('+datas[i].subjid+','+datas[i].schoolyear+');" class="item-link item-content swipeout-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">'+datas[i].subjecttitle+'</div></div><div class="item-text">Subject Code: '+datas[i].subjectcode+'</div></div></a><div class="swipeout-actions-right"><a href="#" data-confirm="Are you sure you want to delete this item?" class="swipeout-delete">Delete</a></div></li>');
			

			////////////////////////////////////ORIGINAL WITHOUT SWIPE OUT////////////////////////////////////////
			//$$('#displaySub').append('<li><a href="pages/subjectchoose.html" onclick="passid('+datas[i].subjid+','+datas[i].schoolyear+');" class="item-link item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">'+datas[i].subjecttitle+'</div></div><div class="item-text">Subject Code: '+datas[i].subjectcode+'</div></div></a></li>');
		}
		
	},JSON);
	
})

function deletesubject(subjid){
	
	//myApp.alert(subjid);
	
	myApp.confirm('Are you sure you want to delete this subject? <strong>All data</strong> from this subject will be <strong>deleted</strong>.', function () {
	
		
		$$.post(global_url, {action: 'deletesubject', subjectid: subjid}, function (data) {
			
			console.log(data);
			myApp.alert('<center><strong>Subject Deleted</strong></center>');
			
		},JSON);
		
		//var deletesubj = document.getElementById("deletesuccess");
		//deletesubj.click();
		
    });

}

function passid(subjid,sy){
	$$(document).on('pageAfterAnimation','.page[data-page="subjectchoose"]',function(e){
	
	document.getElementById('hiddenid').innerHTML = "";
	$$('#hiddenid').append('<a href="pages/addstudent.html" class="button button-raised button-fill color-green" onclick="passidaddstudents('+subjid+','+sy+');">Add Students to Subject</a><br><a href="pages/enrollbycategory.html" class="button button-raised button-fill color-green" onclick="passidaddbycategory('+subjid+','+sy+');">Add Students by Categories</a><br><a href="pages/subjectstudents.html" class="button button-raised button-fill color-green" onclick="passidremovestudents('+subjid+');">Remove Students from Subject</a><br><a href="pages/enrolledstudents.html" class="button button-raised button-fill color-green" onclick="passidshowenrolled('+subjid+');">Show Enrolled Students</a>');
	
	//////////////////////////////////WITH DELETE STUDENTS PAGE BUTTON////////////////////////////////////////
	//$$('#hiddenid').append('<a href="pages/addstudent.html" class="button button-raised button-fill color-green" onclick="passidaddstudents('+subjid+','+sy+');">Add Students to Subject</a><br><a href="pages/enrollbycategory.html" class="button button-raised button-fill color-green" onclick="passidaddbycategory('+subjid+','+sy+');">Add Students by Categories</a><br><a href="pages/subjectstudents.html" class="button button-raised button-fill color-green" onclick="passidremovestudents('+subjid+');">Remove Students from Subject</a><br><a href="pages/enrolledstudents.html" class="button button-raised button-fill color-green" onclick="passidshowenrolled('+subjid+');">Show Enrolled Students</a><br><a href="pages/deletestudent.html" class="button button-raised button-fill color-green" onclick="passiddeletestudents();">Delete Student Accounts</a>');
	
	//$$('#hiddenid').append('<a href="pages/addstudent.html" class="button button-raised button-fill color-green" onclick="passidaddstudents('+subjid+','+sy+');">Add Students to Subject</a><br><a href="pages/subjectstudents.html" class="button button-raised button-fill color-green" onclick="passidremovestudents('+subjid+');">Remove Students from Subject</a><br><a href="pages/enrolledstudents.html" class="button button-raised button-fill color-green" onclick="passidshowenrolled('+subjid+');">Show Enrolled Students</a><br><a href="pages/subjectrecords.html" class="button button-raised button-fill color-green" onclick="showrecords('+subjid+');">Show Quizzes, Seatworks , Recitations, etc.</a><br><a href="pages/addrecord.html" class="button button-raised button-fill color-green" onclick="passidaddrecord('+subjid+');">Add Quiz, Seatwork , Recitation, etc.</a>');
	
	})
}

function passidaddstudents(subjid,sy){
$$(document).on('pageAfterAnimation','.page[data-page="addstudent"]',function(e){

	$$.post(global_url, {action: 'displayStudents'}, function (data,status) {
		
		document.getElementById('displayStud').innerHTML="";
		console.log(data);
		var datas = JSON.parse(data);
		console.log(datas);
		
		for(var i = 0; i<datas.length; i++){
			//$$('#displayStud').append('<li class="swipeout"><a href="#" onclick="addstudent('+datas[i].studid+','+subjid+','+sy+');" class="item-link item-content item-title item-inner swipeout-content">('+datas[i].year+''+datas[i].section+') '+datas[i].name+'</a><div class="swipeout-actions-left"><a href="#" onclick="showstudentprofile('+datas[i].name+','+datas[i].studentid+','+datas[i].department+','+datas[i].course+','+datas[i].year+','+datas[i].section+','+datas[i].contactnumber+');" class="bg-blue">Profile</a></div></li>');
			
			$$('#displayStud').append('<li class="swipeout">'+
										'<div class="item-content swipeout-content">'+
											'<div class="item-inner">'+
												'<div class="item-title-row">'+
													'<div class="item-title">('+datas[i].year+''+datas[i].section+') '+datas[i].name+'</div>'+
												'</div>'+
											'</div>'+
										'</div>'+
										'<div class="swipeout-actions-left">'+
											'<a href="#" onclick="addstudent('+datas[i].studid+','+subjid+','+sy+');" class="bg-blue">Add</a>'+
											'<a href="#" onclick="showstudentprofile('+datas[i].studid+');" class="bg-bluegray">Profile</a>'+
										'</div>'+
									  '</li>');
		}
	},JSON);
})
}

function showstudentprofile(sid){
	
	$$.post(global_url, {action: 'showstudentprofile',studentid: sid}, function (data) {
			
			console.log(data);
			var datas = JSON.parse(data);
			console.log(datas);
			
			for(var i = 0; i<datas.length; i++){
			
			if(datas[i].course == "BAT"){
				myApp.alert('<center><strong>'+datas[i].name+'</strong></center><br><strong>ID Number: </strong>'+datas[i].studentid+'<br><strong>Department: </strong>'+datas[i].department+'<br><strong>Course: </strong>Bachelor of Agricultural Technology<br><strong>Year & Section: </strong>'+datas[i].year+''+datas[i].section+'<br><strong>Contact: </strong>'+datas[i].contactnumber+'');
			}else if(datas[i].course == "BAE"){
				myApp.alert('<center><strong>'+datas[i].name+'</strong></center><br><strong>ID Number: </strong>'+datas[i].studentid+'<br><strong>Department: </strong>'+datas[i].department+'<br><strong>Course: </strong>B.A. in English<br><strong>Year & Section: </strong>'+datas[i].year+''+datas[i].section+'<br><strong>Contact: </strong>'+datas[i].contactnumber+'');
			}else if(datas[i].course == "BAF"){
				myApp.alert('<center><strong>'+datas[i].name+'</strong></center><br><strong>ID Number: </strong>'+datas[i].studentid+'<br><strong>Department: </strong>'+datas[i].department+'<br><strong>Course: </strong>B.A. in Filipino<br><strong>Year & Section: </strong>'+datas[i].year+''+datas[i].section+'<br><strong>Contact: </strong>'+datas[i].contactnumber+'');
			}else if(datas[i].course == "BSA"){
				myApp.alert('<center><strong>'+datas[i].name+'</strong></center><br><strong>ID Number: </strong>'+datas[i].studentid+'<br><strong>Department: </strong>'+datas[i].department+'<br><strong>Course: </strong>B.S. Agriculture<br><strong>Year & Section: </strong>'+datas[i].year+''+datas[i].section+'<br><strong>Contact: </strong>'+datas[i].contactnumber+'');
			}else if(datas[i].course == "BSB"){
				myApp.alert('<center><strong>'+datas[i].name+'</strong></center><br><strong>ID Number: </strong>'+datas[i].studentid+'<br><strong>Department: </strong>'+datas[i].department+'<br><strong>Course: </strong>B.S. Biology<br><strong>Year & Section: </strong>'+datas[i].year+''+datas[i].section+'<br><strong>Contact: </strong>'+datas[i].contactnumber+'');
			}else if(datas[i].course == "BSCSL"){
				myApp.alert('<center><strong>'+datas[i].name+'</strong></center><br><strong>ID Number: </strong>'+datas[i].studentid+'<br><strong>Department: </strong>'+datas[i].department+'<br><strong>Course: </strong>B.S. Computer Science (Ladderized)<br><strong>Year & Section: </strong>'+datas[i].year+''+datas[i].section+'<br><strong>Contact: </strong>'+datas[i].contactnumber+'');
			}else if(datas[i].course == "BSCSS"){
				myApp.alert('<center><strong>'+datas[i].name+'</strong></center><br><strong>ID Number: </strong>'+datas[i].studentid+'<br><strong>Department: </strong>'+datas[i].department+'<br><strong>Course: </strong>B.S. Computer Science (Straight)<br><strong>Year & Section: </strong>'+datas[i].year+''+datas[i].section+'<br><strong>Contact: </strong>'+datas[i].contactnumber+'');
			}else if(datas[i].course == "BSEE"){
				myApp.alert('<center><strong>'+datas[i].name+'</strong></center><br><strong>ID Number: </strong>'+datas[i].studentid+'<br><strong>Department: </strong>'+datas[i].department+'<br><strong>Course: </strong>B.S. Elementary Education<br><strong>Year & Section: </strong>'+datas[i].year+''+datas[i].section+'<br><strong>Contact: </strong>'+datas[i].contactnumber+'');
			}else if(datas[i].course == "BSM"){
				myApp.alert('<center><strong>'+datas[i].name+'</strong></center><br><strong>ID Number: </strong>'+datas[i].studentid+'<br><strong>Department: </strong>'+datas[i].department+'<br><strong>Course: </strong>B.S. Mathematics<br><strong>Year & Section: </strong>'+datas[i].year+''+datas[i].section+'<br><strong>Contact: </strong>'+datas[i].contactnumber+'');
			}else if(datas[i].course == "BSMW"){
				myApp.alert('<center><strong>'+datas[i].name+'</strong></center><br><strong>ID Number: </strong>'+datas[i].studentid+'<br><strong>Department: </strong>'+datas[i].department+'<br><strong>Course: </strong>B.S. Midwifery<br><strong>Year & Section: </strong>'+datas[i].year+''+datas[i].section+'<br><strong>Contact: </strong>'+datas[i].contactnumber+'');
			}else if(datas[i].course == "BSN"){
				myApp.alert('<center><strong>'+datas[i].name+'</strong></center><br><strong>ID Number: </strong>'+datas[i].studentid+'<br><strong>Department: </strong>'+datas[i].department+'<br><strong>Course: </strong>B.S. Nursing<br><strong>Year & Section: </strong>'+datas[i].year+''+datas[i].section+'<br><strong>Contact: </strong>'+datas[i].contactnumber+'');
			}else if(datas[i].course == "BSP"){
				myApp.alert('<center><strong>'+datas[i].name+'</strong></center><br><strong>ID Number: </strong>'+datas[i].studentid+'<br><strong>Department: </strong>'+datas[i].department+'<br><strong>Course: </strong>B.S. Psychology<br><strong>Year & Section: </strong>'+datas[i].year+''+datas[i].section+'<br><strong>Contact: </strong>'+datas[i].contactnumber+'');
			}else if(datas[i].course == "BSSE"){
				myApp.alert('<center><strong>'+datas[i].name+'</strong></center><br><strong>ID Number: </strong>'+datas[i].studentid+'<br><strong>Department: </strong>'+datas[i].department+'<br><strong>Course: </strong>B.S. Secondary Education<br><strong>Year & Section: </strong>'+datas[i].year+''+datas[i].section+'<br><strong>Contact: </strong>'+datas[i].contactnumber+'');
			}else{
				myApp.alert('<center><strong>'+datas[i].name+'</strong></center><br><strong>ID Number: </strong>'+datas[i].studentid+'<br><strong>Department: </strong>'+datas[i].department+'<br><strong>Course: </strong>'+datas[i].course+'<br><strong>Year & Section: </strong>'+datas[i].year+''+datas[i].section+'<br><strong>Contact: </strong>'+datas[i].contactnumber+'');
			}
			}
			
	},JSON);
}

function addstudent(studentid,subjid,sy){
	
	var teacherprof = localStorage.getItem("teacherprofile");
	var teacher = JSON.parse(teacherprof);
	var tid = teacher.tid;
	
	myApp.confirm('Add this student to the subject?', function () {
		
		$$.post(global_url, {action: 'enrollstudent',teachid: tid, studid: studentid, subid: subjid, schoolyear: sy}, function (data,status) {
			
			console.log(data);
			if(data == 0){
			myApp.alert('<center><strong>This student was already<br>enrolled in this subject</strong></center>');
			}else{
			myApp.alert('<center><strong>Successfully enrolled Student<br>to Subject</strong></center>');
			}
			
		},JSON);
        
    });
	
}

function passidaddbycategory(subjid,sy){
$$(document).on('pageAfterAnimation','.page[data-page="enrollbycategory"]',function(e){

	var subjidvar = document.getElementById("input_subjid").value = subjid;
	var syvar = document.getElementById("input_sy").value = sy;
})
}

function addcategory(){
	
	var teacherprof = localStorage.getItem("teacherprofile");
	var teacher = JSON.parse(teacherprof);
	var tid = teacher.tid;

	var dept = document.getElementById("studentdepartment").value;
	var crse = document.getElementById("studentcourse").value;
	var yr = document.getElementById("studentyear").value;
	var sec = document.getElementById("studentsection").value;
	
	var subjectid = document.getElementById("input_subjid").value;
	var sy = document.getElementById("input_sy").value;
	
	myApp.confirm('Enroll students to the subject under these categories?', function () {
		
		$$.post(global_url, {action: 'enrollcategory', teacherid: tid, subjid: subjectid, schoolyear: sy, department: dept, course: crse, year: yr, section: sec}, function (data) {
			
			console.log(data);
			myApp.alert('Students Successfully Enrolled!');
			
		},JSON);
        
    });
	
}

function passidremovestudents(subjid){
	$$(document).on('pageAfterAnimation','.page[data-page="subjectstudents"]',function(e){
		
		$$.post(global_url, {action: 'displayenrolled', sub: subjid}, function (data,status) {
		
			document.getElementById('displayenrolled').innerHTML="";
			
			console.log(data);
			var datas = JSON.parse(data);
			console.log(datas);
			
			for(var i = 0; i<datas.length; i++){
			$$('#displayenrolled').append('<li><a href="#" class="item-link item-content item-inner item-title" onclick="removestudent('+datas[i].studid+');">('+datas[i].year+''+datas[i].section+') '+datas[i].name+'</a></li>');
			}
		},JSON);	
	})
}

function removestudent(studentid){

	myApp.confirm('Remove this student from this subject?', function () {
		
		$$.post(global_url, {action: 'removestudent', studid: studentid}, function (data,status) {
			
			console.log(data);
			myApp.alert('<center><strong>Successfully removed</strong></center>');
			
		},JSON);
        
    });

}

function passidshowenrolled(subjid){
$$(document).on('pageAfterAnimation','.page[data-page="enrolledstudents"]',function(e){
	//myApp.alert(subjid);
	$$.post(global_url, {action: 'displayenrolled', sub: subjid}, function (data,status) {
		
		document.getElementById('displayenrolled').innerHTML="";
		console.log(data);
		var datas = JSON.parse(data);
		console.log(datas);
		
		for(var i = 0; i<datas.length; i++){
			
			if(datas[i].inc == 1){
			
			$$('#displayenrolled').append('<li class="swipeout"><div class="item-content swipeout-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">('+datas[i].year+''+datas[i].section+') '+datas[i].name+'</div></div><div class="item-text"><span class="badge color-bluegray">Midterm - '+datas[i].midtermgrade+'</span>&nbsp<span class="badge color-bluegray">Final - '+datas[i].finalgrade+'</span>&nbsp<span class="badge color-bluegray">Overall - INC</span></div></div></div><div class="swipeout-actions-left"><a href="pages/editgrades.html" onclick="shownameoneditgrade('+datas[i].studid+','+subjid+');" class="bg-green">Edit<br>Grade</a><a href="pages/inc.html" onclick="shownameoninc('+datas[i].studid+','+subjid+');" class="bg-bluegray">INC</a></div></li>');
			
			}else{
			
			$$('#displayenrolled').append('<li class="swipeout"><div class="item-content swipeout-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">('+datas[i].year+''+datas[i].section+') '+datas[i].name+'</div></div><div class="item-text"><span class="badge color-bluegray">Midterm - '+datas[i].midtermgrade+'</span>&nbsp<span class="badge color-bluegray">Final - '+datas[i].finalgrade+'</span>&nbsp<span class="badge color-green">Overall - '+datas[i].overall+'</span></div></div></div><div class="swipeout-actions-left"><a href="pages/editgrades.html" onclick="shownameoneditgrade('+datas[i].studid+','+subjid+');" class="bg-green">Edit<br>Grade</a><a href="pages/inc.html" onclick="shownameoninc('+datas[i].studid+','+subjid+');" class="bg-bluegray">INC</a></div></li>');
			
			}
			
		}
	},JSON);
})
}


function shownameoneditgrade(studid,subjid){
	$$(document).on('pageAfterAnimation','.page[data-page="editgrades"]',function(e){
		
		$$.post(global_url, {action: 'showstudentnameonedit', studentid: studid}, function (data,status) {
			
			document.getElementById('student_name').innerHTML="";
			document.getElementById('edit_action').innerHTML="";
			console.log(data);
			var datas = JSON.parse(data);
			console.log(datas);
			
			for(var i = 0; i<datas.length; i++){
				$$('#student_name').append(''+datas[i].name+'');
				$$('#edit_action').append('<p class="buttons-row"><a href="#" class="button back">Discard</a><a href="#" onclick="updategrades('+datas[i].studid+','+subjid+')" class="button button-fill color-green">Save</a><a href="#" class="back" id="editsuccess" style="display:none;">success</a></p>');
			}
		},JSON);
	
	})
}

function shownameoninc(studid,subjid){
	$$(document).on('pageAfterAnimation','.page[data-page="inc"]',function(e){
		
		$$.post(global_url, {action: 'showstudentnameonedit', studentid: studid}, function (data,status) {
			
			document.getElementById('student_name').innerHTML="";
			document.getElementById('edit_action').innerHTML="";
			console.log(data);
			var datas = JSON.parse(data);
			console.log(datas);
			
			for(var i = 0; i<datas.length; i++){
				$$('#student_name').append(''+datas[i].name+'');
				$$('#edit_action').append('<p class="buttons-row"><a href="#" class="button back">Discard</a><a href="#" onclick="updateinc('+datas[i].studid+','+subjid+')" class="button button-fill color-green">Save</a><a href="#" class="back" id="editsuccess" style="display:none;">success</a></p>');
			}
		},JSON);
	
	})
}

function updategrades(studentid,subjid){
	
	var fgrade = document.getElementById("finalgrade_input").value;
	var mgrade = document.getElementById("midtermgrade_input").value;
	var transmutation = document.getElementById("transmutation_id").value;
	
	if(mgrade == ""){
	myApp.alert('<center><strong>Please input grade</strong></center>');
	}else{
	
		if(transmutation == 1){
			
			var computation = +(fgrade*0.5) + +(mgrade*0.5);
			var totalrounded = Math.round(computation);
			
			$$.post(global_url, {action: 'updategrade',overall: totalrounded, finalgrade: fgrade, midtermgrade: mgrade, studid: studentid, subjectid: subjid}, function (data) {
				
				console.log(data);
				//var datas = JSON.parse(data);
				//console.log(datas);
				myApp.alert('<center><strong>Grades<br>Successfully Saved</strong></center>');
				var success = document.getElementById("editsuccess");
				success.click();
				
			},JSON);
		
		}else if(transmutation == 2){
			
			var computation = +(fgrade*0.6) + +(mgrade*0.4);
			var totalrounded = Math.round(computation);
			
			$$.post(global_url, {action: 'updategrade',overall: totalrounded, finalgrade: fgrade, midtermgrade: mgrade, studid: studentid, subjectid: subjid}, function (data) {
				
				console.log(data);
				//var datas = JSON.parse(data);
				//console.log(datas);
				myApp.alert('<center><strong>Grades<br>Successfully Saved</strong></center>');
				var success = document.getElementById("editsuccess");
				success.click();
				
			},JSON);
		
		}else{
		
			var computation = "";
			
			$$.post(global_url, {action: 'updategrade',overall: computation, finalgrade: fgrade, midtermgrade: mgrade, studid: studentid, subjectid: subjid}, function (data) {
				
				console.log(data);
				//var datas = JSON.parse(data);
				//console.log(datas);
				myApp.alert('<center><strong>Grades<br>Successfully Saved</strong></center>');
				var success = document.getElementById("editsuccess");
				success.click();
				
			},JSON);
		
		}
	}
}


function updateinc(studentid,subjid){
	
	var choice = document.getElementById("incinput").value;
	
	$$.post(global_url, {action: 'updateinc',inc: choice, studid: studentid, subjectid: subjid}, function (data) {
		
		console.log(data);
		//var datas = JSON.parse(data);
		//console.log(datas);
		myApp.alert('<center><strong>Overall Grade Setting<br>Successfully Saved</strong></center>');
		var success = document.getElementById("editsuccess");
		success.click();
		
	},JSON);
}


function passiddeletestudents(){
$$(document).on('pageAfterAnimation','.page[data-page="deletestudent"]',function(e){

	$$.post(global_url, {action: 'displayStudents'}, function (data,status) {
		
		document.getElementById('displayStud').innerHTML="";
		console.log(data);
		var datas = JSON.parse(data);
		console.log(datas);
		
		for(var i = 0; i<datas.length; i++){
			$$('#displayStud').append('<li><a href="#" onclick="deletestudent('+datas[i].studid+');" class="item-link item-content item-title item-inner">('+datas[i].year+''+datas[i].section+') '+datas[i].name+'</a></li>');
		}
	},JSON);
})
}
function deletestudent(studentid){

	myApp.confirm('Delete this student account<br>from the system?', function () {
		
		$$.post(global_url, {action: 'deletestudent', studid: studentid}, function (data,status) {
			
			console.log(data);
			myApp.alert('<center><strong>Successfully deleted</strong></center>');
			
		},JSON);
        
    });

}



function passidaddrecord(subjid){
	$$(document).on('pageAfterAnimation','.page[data-page="addrecord"]',function(e){
	
	$$('#hiddensid').append('<div class="content-block-title"><center><input type="hidden" id="subject_id" value="'+subjid+'"></center></div>');

	})
}

function createrecord(){

	var rtype = document.getElementById("record_type").value;
	var rtitle = document.getElementById("record_title").value;
	var rpoints = document.getElementById("record_points").value;
	var sid = document.getElementById("subject_id").value;
	
	var teacherprof = localStorage.getItem("teacherprofile");
	var teacher = JSON.parse(teacherprof);
	var tid = teacher.teacherid;
	
	$$.post(global_url, {action: 'createrecord',subjectid: sid, teacherid: tid, recordtype: rtype, recordtitle: rtitle, recordpoints: rpoints}, function (data,status) {
		
		console.log(data);
		myApp.alert('<center><strong>Record Created</strong></center>');
		//var register = document.getElementById("registerparentsuccess");
		//register.click();
		
	},JSON);
}

function firstresult(){

	var idinput = document.getElementById("inputid").value;
	
	$$(document).on('pageAfterAnimation','.page[data-page="parentsearch"]',function(e){
	
	$$.post(global_url, {action: 'displayresult', studentid: idinput}, function (data,status) {
		
		document.getElementById('displayresult').innerHTML="";
		document.getElementById('displayresultblank').innerHTML="";
		document.getElementById('displayproceed').innerHTML="";

		var datas = JSON.parse(data);
		console.log(data);
		
		if(parseInt(data)==0){
		$$('#displayresultblank').append('<p>Sorry, there is no record of a student with this ID Number in the system.</p>');
		$$('#displayproceed').append('<div class="content-block"><p class="buttons-row"><a href="#" onclick="secondresult('+datas.studid+')" class="button button-fill color-green" disabled>Proceed</a></p></div>');
		}else{
		$$('#displayresult').append('<p><strong>Name: </strong>'+datas.name+'<br><strong>Department: </strong>'+datas.department+'<br><strong>Course: </strong>'+datas.course+'<br><strong>Year and Section: </strong>'+datas.year+''+datas.section+'</p>');
		$$('#displayproceed').append('<div class="content-block"><p class="buttons-row"><a href="pages/parentresult.html" onclick="secondresult('+datas.studid+')" class="button button-fill color-green">Proceed</a></p></div>');
		}
		
	},JSON);
	
	})
}

function secondresult(studid){

	var syinput = document.getElementById("syinput").value;
	
	$$(document).on('pageAfterAnimation','.page[data-page="parentresult"]',function(e){
	
	$$.post(global_url, {action: 'displayfinalresult', schoolyear: syinput, studentid: studid}, function (data,status) {
		
		document.getElementById('display_studentgrades').innerHTML="";
		//document.getElementById('display_studentinfo').innerHTML="";
		//document.getElementById('display_legend').innerHTML="";
		
		console.log(data);
		var datas = JSON.parse(data);
		console.log(datas);
		
		for(var i = 0; i<datas.length; i++){
		
		if(datas[i].inc == 1){
				
		$$('#display_studentgrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-bluegray"><p style="margin-top: -17%;">INCOMPLETE</p></span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li></ul></div><br></div>');
		
		}else if(datas[i].overall == ""){
		
		$$('#display_studentgrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"><span class="badge color-green">'+datas[i].overall+'</span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Midterm Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].midtermgrade+'</span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Final Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].finalgrade+'</span></div></div></div></li></ul></div><br></div>');
		
		}else{
		
		$$('#display_studentgrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-green"><p style="margin-top: -19%;">'+datas[i].overall+'</p></span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Teacher: <strong>'+datas[i].teachername+'</strong></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Midterm Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].midtermgrade+'</span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Final Grade:</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].finalgrade+'</span></div></div></div></li></ul></div><br></div>');
		
		//$$('#display_studentgrades').append('<div class="list-block"><div class="list-group"><ul><li><strong><div class="item-content item-divider"><div class="item-inner"><div class="item-title">'+datas[i].subjecttitle+'</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].overall+'</span></div></div></div></strong></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Midterm Grade</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].midtermgrade+'</span></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title">Final Grade</div><div class="item-after"> <span class="badge color-bluegray">'+datas[i].finalgrade+'</span></div></div></div></li></ul></div><br></div>');
		}
		
		}
		
	},JSON);
	
	})
	
}

function parentrenewpassword(){
	
	var parentprof = localStorage.getItem("parentprofile");
	var parent = JSON.parse(parentprof);
	var pid = parent.pid;
	
	var passwordinput = document.getElementById("passwordinput").value;
	
	$$.post(global_url, {action: 'parentrenewpassword',parentid: pid, password: passwordinput}, function (data) {
		
		console.log(data);
		myApp.alert('<center><strong>Password successfully<br>renewed.</strong></center>');
		
	},JSON);
	
}

function teacherrenewpassword(){
	
	var teacherprof = localStorage.getItem("teacherprofile");
	var teacher = JSON.parse(teacherprof);
	var tid = teacher.tid;
	
	var passwordinput = document.getElementById("passwordinput").value;
	
	$$.post(global_url, {action: 'teacherrenewpassword',teacherid: tid, password: passwordinput}, function (data) {
		
		console.log(data);
		myApp.alert('<center><strong>Password successfully<br>renewed.</strong></center>');
		
	},JSON);
	
}

function studentrenewinfo(){
	
	var studentprof = localStorage.getItem("studentprofile");
	var student = JSON.parse(studentprof);
	var sid = student.studid;
	
	var stid = document.getElementById("studentidinput").value;
	var scontact = document.getElementById("contactinput").value;
	var sname = document.getElementById("nameinput").value;
	var suname = document.getElementById("usernameinput").value;
	var spassword = document.getElementById("passwordinput").value;
	var sdept = document.getElementById("studentdepartment").value;
	var scrse = document.getElementById("studentcourse").value;
	var syear = document.getElementById("studentyear").value;
	var ssec = document.getElementById("studentsection").value;
	
	$$.post(global_url, {action: 'studentrenewinfo',studid: sid, studentid: stid, contact: scontact, name: sname, username: suname, password: spassword, department: sdept, course: scrse, year: syear, section: ssec}, function (data) {
		
		console.log(data);
		myApp.alert('<center><strong>Account Successfully<br>Updated</strong></center>');
		
	},JSON);
	
}

function studentsetting(){

	$$(document).on('pageAfterAnimation','.page[data-page="studentsetting"]',function(e){

	var studentprof = localStorage.getItem("studentprofile");
	var student = JSON.parse(studentprof);
	var sid = student.studid;
	
	var studid = student.studentid;
	var sname = student.name;
	var sdept = student.department;
	var scrse = student.course;
	var syear = student.year;
	var ssec = student.section;
	var scontact = student.contactnumber;
	var suname = student.username;
	var spassword = student.password; 
	
	document.getElementById("studentidinput").value = studid;
	document.getElementById("contactinput").value = scontact;
	document.getElementById("nameinput").value = sname;
	document.getElementById("usernameinput").value = suname;
	document.getElementById("passwordinput").value = spassword;
	
	document.getElementById("studentdepartment").value = sdept;
	document.getElementById("studentcourse").value = scrse;
	document.getElementById("studentyear").value = syear;
	document.getElementById("studentsection").value = ssec;
    
    })
}

function teacherrenewinfo(){
	
	var teacherprof = localStorage.getItem("teacherprofile");
	var teacher = JSON.parse(teacherprof);
	var teaid = teacher.tid;
	
	var teachid = document.getElementById("teacheridinput").value;
	var tcontact = document.getElementById("contactinput").value;
	var tname = document.getElementById("nameinput").value;
	var tuname = document.getElementById("usernameinput").value;
	var tpassword = document.getElementById("passwordinput").value;
	
	$$.post(global_url, {action: 'teacherrenewinfo',tid: teaid, teacherid: teachid, contactnumber: tcontact, teachername: tname, username: tuname, password: tpassword}, function (data) {
		
		console.log(data);
		myApp.alert('<center><strong>Account Successfully<br>Updated</strong></center>');
		//var success = document.getElementById("updatesuccess");
		//success.click();
		
	},JSON);
	
}

function teachersetting(){

	$$(document).on('pageAfterAnimation','.page[data-page="teachersetting"]',function(e){

	var teacherprof = localStorage.getItem("teacherprofile");
	var teacher = JSON.parse(teacherprof);
	var tid = teacher.teacherid;
	
	var teachid = teacher.teacherid;
	var tname = teacher.teachername;
	var tcontact = teacher.contactnumber;
	var tuname = teacher.username;
	var tpassword = teacher.password; 
	
	document.getElementById("teacheridinput").value = teachid;
	document.getElementById("contactinput").value = tcontact;
	document.getElementById("nameinput").value = tname;
	document.getElementById("usernameinput").value = tuname;
	document.getElementById("passwordinput").value = tpassword;
    
    })
}


function parentrenewinfo(){
	
	var parentprof = localStorage.getItem("parentprofile");
	var parent = JSON.parse(parentprof);
	var parentid = parent.pid;
	
	var pcontact = document.getElementById("contactinput").value;
	var pname = document.getElementById("nameinput").value;
	var puname = document.getElementById("usernameinput").value;
	var ppassword = document.getElementById("passwordinput").value;
	
	$$.post(global_url, {action: 'parentrenewinfo',pid: parentid, contactnumber: pcontact, parentname: pname, username: puname, password: ppassword}, function (data) {
		
		console.log(data);
		myApp.alert('<center><strong>Account Successfully<br>Updated</strong></center>');
		//var success = document.getElementById("updatesuccess");
		//success.click();
		
	},JSON);
	
}

function parentsetting(){

	$$(document).on('pageAfterAnimation','.page[data-page="parentsetting"]',function(e){

	var parentprof = localStorage.getItem("parentprofile");
	var parent = JSON.parse(parentprof);
	var parentid = parent.pid;

	var pname = parent.parentname;
	var pcontact = parent.contactnumber;
	var puname = parent.username;
	var ppassword = parent.password; 

	document.getElementById("contactinput").value = pcontact;
	document.getElementById("nameinput").value = pname;
	document.getElementById("usernameinput").value = puname;
	document.getElementById("passwordinput").value = ppassword;
    
    })
}

















































































































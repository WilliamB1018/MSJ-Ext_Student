function runHandler() {
	document.getElementById("userSignIn").style.display = "block";
	document.getElementById("backgroundTab").className = "tab col s4";
	if(Cookies.get("msj-ext_email") != undefined){
		document.getElementById("login_email").value = Cookies.get("msj-ext_email");
		document.getElementById("login_email").className = "validate valid";
		document.getElementById("email_check").className = "active";
	}
	if(Cookies.get("msj-ext_pwd") != undefined){
		document.getElementById("login_pwd").value = Cookies.get("msj-ext_pwd");
		document.getElementById("login_pwd").className = "validate valid";
		document.getElementById("pwd_check").className = "active";
	}
}

$(document).ready(function () {
  $("select").formSelect();
  $(".tabs").tabs();
  runHandler();
  
  $("#save_btn").click(function () {
    uName = document.getElementById("login_email").value;
	if (uName == undefined || uName == null || uName == "") {
      M.toast({ html: "Please enter your email" });
      return;
    }
	
    if (!uName.includes("@")) {
      M.toast({ html: "Invalid Email" });
      return;
    }
	Cookies.set("msj-ext_email", uName, {expires: 720})
	Cookies.set("msj-ext_pwd", document.getElementById("login_pwd").value, {expires: 720})
  });
  
  $("#save_appearance").click(function() {
    Cookies.set("msj-ext_timeFormat", document.getElementById("time_format_select").value, {expires: 720})
    M.toast({html: "Success!"})
	console.log(Cookies.get("msj-ext_email"));
  })
});

function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if(name.length < 5){
        text = "Please Enter valid Name [mid 5 Zeichen]";
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length < 10){
        text = "Please Enter Correct Subject [mid 10 Zeichen]";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter valid Phone Number [geanu 10 & nur Zahlen]";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email [mind 6 & @]";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 50){
        text = "Please Enter More Than 50 Characters [mind 50 Zeichen]";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}





//---- Validation Form (Email)----//

function validateEmail() {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {

    requiredSubject()
    email.focus();
    return true;
    then
  }
  else {
    alert("Veillez entrer une asdresse courriel vlide !");
    email.focus();
    return false;
  }


}

//---- Validation Form (Subject)----//

function requiredSubject() {
  let Subject = document.getElementById("text").value;

  if (Subject.length == 0) {

    alert("Veillez entrer des informations dansle champ: [ Sujet ] !");
    Subject.focus();
    return true;
    then
  }
  else {

    requiredMessage()
    Subject.focus();
    return false;
  }


}


//---- Validation Form (Message)----//

function requiredMessage() {
  let Body = document.getElementById("message").value;

  if (Body.length == 0) {
   
    alert("Veillez entrer des informations dansle champ: [ Message ] !");
    Body.focus();
    return true;
    then
  }
  else {
    
  
    

    sendEmail()
    Body.focus();
    return false;
    
  }


}


//---- Send Form----//

function sendEmail() {

  let From = document.getElementById("email").value;
  let Subject = document.getElementById("text").value;
  let Body = document.getElementById("message").value;

  Email.send({

    SecureToken: "Clé token smtpjs",

    To: 'fictifv@gmail.com',
    From: From,
    Subject: Subject,
    Body: Body,
  }).then(

    message => alert("Le courriel à été envoyé avec succès ! "),

    resetform()
  );

}


//---- Reset Form ----//

function resetform() {
  document.getElementById("email").value = null;
  document.getElementById("text").value = null;
  document.getElementById("message").value = null;
};



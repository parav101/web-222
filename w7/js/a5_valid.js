
function check_username(){
let username =  document.getElementById("username").value 

  if( !(/^[a-zA-Z]+$/.test(username) && username[0] == username[0].toUpperCase()) ){
     document.getElementById("username_span").innerHTML = "Must start with a cap and only alphabet allowed."
     document.getElementById("submit").disabled = true;
     document.getElementById("username").style.border = '2px solid red'; 
  }

  else{
    document.getElementById("username_span").innerHTML = ""
    document.getElementById("submit").disabled = false
    document.getElementById("username").style.border = '1px solid black'; 

  }

}
function check_phone(){
  let phone = document.getElementById("phone").value
  if(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone))
  {
    document.getElementById("phone_span").innerHTML = ""
    document.getElementById("submit").disabled = false
    document.getElementById("phone").style.border = '1px solid black'; 
  }
  else{
    document.getElementById("phone_span").innerHTML = "in the format: (NNN)NNN-NNNN. E.g., (416)111-2222."
    document.getElementById("submit").disabled = true;
    document.getElementById("phone").style.border = '2px solid red'; 
  }
}


function check_comment(){
  let comment = document.getElementById("comment").value
  if(comment.match(/^\s*$/)){
    document.getElementById("comment_span").innerHTML = "Cannot be blank or only white space."
    document.getElementById("submit").disabled = true;
    document.getElementById("comment").style.border = '2px solid red'; 
  }
  else{
    document.getElementById("comment_span").innerHTML = ""
    document.getElementById("submit").disabled = false;
    document.getElementById("comment").style.border = '1px solid black'; 
  }
}
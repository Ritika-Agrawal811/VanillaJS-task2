
var fullname=document.getElementById('fullname');
var email=document.getElementById('email');
var phoneNumber=document.getElementById('Phone_number');
var password=document.getElementById('password');
var repeat_password=document.getElementById('repeat_password');



document.getElementById('submit').addEventListener('click',function(){
  var name = fullname.value.trim();
  var emailID = email.value.trim();
  var phone = phoneNumber.value.trim();
  var password1 = password.value.trim();
  var repeatPassword = repeat_password.value.trim();
    
   if(name==""){
       document.getElementById('errorname').innerHTML="*Field cannot be empty"
       fullname.style.borderBottom="2px solid rgba(240,0,0,0.5)";
       
   }
    
     else if(name){
        var checkName = /^[a-z][a-z\s]*$ | [a-zA-Z]*$/;
        var result = checkName.test(name);
    
        if(!result){
            document.getElementById('errorname').innerHTML="*Include both First and Last name.";
            fullname.style.borderBottom="2px solid rgba(240,0,0,0.5)";
        }
        
        else{
            document.getElementById('errorname').innerHTML="";
            fullname.style.borderBottom="none";
        }
        
    }
    
    
    
    if(emailID==""){
       document.getElementById('erroremail').innerHTML="*Field cannot be empty";
        email.style.borderBottom="2px solid rgba(240,0,0,0.5)";
   }
    
    else if(emailID){
        var checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var result = checkEmail.test(emailID);
    
        if(!result){
            document.getElementById('erroremail').innerHTML="*Invalid email";
            email.style.borderBottom="2px solid rgba(240,0,0,0.5)";
        }
        
        else{
            document.getElementById('erroremail').innerHTML="";
            email.style.borderBottom="none";
        }
        
    }
    
    
      if(phone==""){
       document.getElementById('errornumber').innerHTML="*Field cannot be empty";
        phoneNumber.style.borderBottom="2px solid rgba(240,0,0,0.5)";
   }
    
    else if(phone){
        var checkPhone = /^\+?([0-9]{3})\)?([0-9]{4})?([0-9]{4})?([0-9]{3})$/;
        var result = checkPhone.test(phone);
    
        if(!result){
            document.getElementById('errornumber').innerHTML="*Include 14 digits starting with +";
            phoneNumber.style.borderBottom="2px solid rgba(240,0,0,0.5)";
        }
        
        else{
            document.getElementById('errornumber').innerHTML="";
            phoneNumber.style.borderBottom="none";
        }
        
    }
    
    
    
      if(password1==""){
       document.getElementById('errorpassword').innerHTML="*Field cannot be empty";
        password.style.borderBottom="2px solid rgba(240,0,0,0.5)";
   }
    
    else if(password1){
        if(password1.length<=6){
            password.style.borderBottom="2px solid rgba(240,0,0,0.5)";
            document.getElementById('errorpassword').innerHTML="password must be more than 6";  
        }
        
        else{
            password.style.borderBottom="none";
            document.getElementById('errorpassword').innerHTML="";
        }
       
    }
    
       if(repeatPassword==""){
       document.getElementById('errorsamepassword').innerHTML="*Field cannot be empty";
        repeat_password.style.borderBottom="2px solid rgba(240,0,0,0.5)";
      }
    
    else if(repeatPassword)
        {
            if(password1!= repeatPassword){
            document.getElementById('errorsamepassword').innerHTML="*Doesn't match the password above";
            repeat_password.style.borderBottom="2px solid rgba(240,0,0,0.5)";
            }
            
            else{
                repeat_password.style.borderBottom="none";
                document.getElementById('errorsamepassword').innerHTML="";
                
            }
        }
    
    
});

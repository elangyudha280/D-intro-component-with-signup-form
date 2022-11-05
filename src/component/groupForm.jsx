
import react,{Component} from 'react';

// npm validator
import validator from 'validator'


// COMPONENT ERROR MESSAGE INPUT
const ErrorMessage = (props)=>{
    return(
        <p className="error-message" id={props.idP}>{props.errorMessage}</p>
    )
}


// COMPONENT INPUT 
const InputItem = (props)=>{
    return (
        <div className="input-item">
            <input type={props.typeInput}   className="input-data" id={props.inputId} placeholder={props.placeholder} />
            <ErrorMessage errorMessage={props.errorMessage} idP={props.idErrorMessage}  />
            <img src="images/icon-error.svg" className="img-error"/>
        </div>
    )
}


// EVENNT TO VALIDATION FORM
const validation = (e)=>{
     let idInput = {
       firstName: document.querySelector('#firstName').value.trim(),
       lastName : document.querySelector('#lastName').value.trim(),
        email : document.querySelector('#email').value.trim(),
        password : document.querySelector('#password').value.trim()
     }

     let idError = {
         firstNameMessage: document.querySelector('#First-error'),
         lastNameMessage: document.querySelector('#Last-error'),
         emailMessage: document.querySelector('#Email-error'),
         passwordMessage: document.querySelector('#Password-error'),
     }





// JIKA SEMUA DATA KOSONG
if(!validator.isEmpty(idInput.firstName) && !validator.isEmpty(idInput.lastName) && validator.isEmail(idInput.email) &&!validator.isEmpty(idInput.password)){
    idError.firstNameMessage.style.visibility = 'hidden'
    idError.lastNameMessage.style.visibility = 'hidden';
    idError.emailMessage.style.visibility = 'hidden';
    idError.passwordMessage.style.visibility = 'hidden';

    return   console.log('ok')
}
else{
    e.preventDefault();

    idError.firstNameMessage.style.visibility = 'visible'
    idError.lastNameMessage.style.visibility = 'visible';
    idError.emailMessage.style.visibility = 'visible';
    idError.passwordMessage.style.visibility = 'visible';
 }

//  JIKA YANG KOSONG HANYA INPUT FIRSTNAME
if(validator.isEmpty(idInput.firstName)){
     idError.firstNameMessage.style.visibility = 'visible'
}
else{
 idError.firstNameMessage.style.visibility = 'hidden'
}

// JIKA YANG KOSONG HANYA INPUT LASTNAME
 if(validator.isEmpty(idInput.lastName)){
 idError.lastNameMessage.style.visibility = 'visible';
 
}
else{
 idError.lastNameMessage.style.visibility = 'hidden';
}


// JIKA YANG KOSONG HANYA EMAIL
    if(!validator.isEmail(idInput.email)){

        idError.emailMessage.style.visibility = 'visible';
    }
   else{
    idError.emailMessage.style.visibility = 'hidden';
   }

//    JIKA YANG KOSONG PASSWORD
    if(validator.isEmpty(idInput.password)){
    idError.passwordMessage.style.visibility = 'visible';
    
   }else{
    idError.passwordMessage.style.visibility = 'hidden';
   }
     

};


// COMPONENT FORM GROUP

class InputGroup extends Component {

    render(){
        return(
            <section className="input-group" >
            <form name="myForm" onSubmit={validation} autoComplete="off">
                <InputItem typeInput="text" placeholder="first name" inputId="firstName" errorMessage="First Name cannot be empty" idErrorMessage="First-error"/>
             <InputItem typeInput="text" placeholder="last name" inputId="lastName" errorMessage="Last Name cannot be empty" idErrorMessage="Last-error"/>
             <InputItem typeInput="email" placeholder="email address" inputId="email" errorMessage="Looks likes this is not an email" idErrorMessage="Email-error"/>
             <InputItem typeInput="password" placeholder="password" inputId="password" errorMessage="Password cannot be empty" idErrorMessage="Password-error" />
             <button className="btn-submit" type="submit">claim your free trial</button>
             </form>
             <p className="info-form">By cliking the button, you are agreeing to our <span className="info-bold">Term and Services</span> </p>
            </section>
        )
    }

}



export default InputGroup;


import react,{Component} from 'react';


const InputItem = (props)=>{
    return (
        <div className="input-item">
            <input type={props.typeInput} className="input-data" id={props.inputId} placeholder={props.placeholder} />
            <p className="error-message">{props.errorMessage}</p>
            <img src="images/icon-error.svg" className="img-error"/>
            
        </div>
    )
}

class InputGroup extends Component {

    render(){
        return(
            <section className="input-group">
             <InputItem typeInput="text" placeholder="first name" errorMessage="First Name cannot be empty"/>
             <InputItem typeInput="text" placeholder="last name" errorMessage="Last Name cannot be empty"/>
             <InputItem typeInput="email" placeholder="email address" errorMessage="Looks likes this is not an email"/>
             <InputItem typeInput="password" placeholder="password" errorMessage="Password cannot be empty"/>
             <button className="btn-submit">claim your free trial</button>
             <p className="info-form">By cliking the button, you are agreeing to our <span className="info-bold">Term and Services</span> </p>
            </section>
        )
    }

}

export default InputGroup;

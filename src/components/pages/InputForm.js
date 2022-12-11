import React,{useState, useEffect, useMemo} from "react";
import '../Style.css';

const InputForm = (props) =>{

    //For error handleing
    const [error, setError] = useState({});
    //For checkbox and radio button error
    const [checkErrors, setChecckErrors] = useState({});

    // const errorMessage ={
    //     agree: "Please select the Agree button",
    // }

    const [isSubmit, setIsSubmit] = useState(false);
    //For Agree and Disagree

    const [agree, setAgree] = useState(false);
    const handleAgree =(event) =>{
        //setAgree(...agree,event.target.value);
       const  valuses = event.target.value
        valuses == 1? setAgree(true) : setAgree(false)
        // if(valuses == 1){
        //     setAgree(true);
        // }else setAgree(false);
    };
    
    

    //For input all simple string filed 
    const { fname, lname, email, email2, number, mobile, url, message, }=props.user;
    const handleChange = (event)=>{
        props.setUser({...props.user, [event.target.name]:event.target.value})
    };
    //For input profession checkbox filed 
    const handleProfession= (event) =>{
        const {value, checked} = event.target
        if(checked){
            props.setProfession((oldProfession)=>{
                return([...oldProfession, value, ' ']);
            });
        }else{
            props.setProfession((oldProfession)=>{
                return([...oldProfession.filter((event)=>(event !==value)) ]);
            });  
        }     
    };

    //For input hobbies checkbox filed 
    const handlehobbies=(event) =>{
        const {value, checked} = event.target
        if(checked){
            props.setHobbies((oldHobbies)=>{
                return([...oldHobbies, value,' ']);
            });
        }else{
            props.setHobbies((oldHobbies)=>{
                return([...oldHobbies.filter((event)=>(event !==value))]);
            });
        }
    };
    //For input Contact radio filed 
    const handleContact=(event) =>{
        props.setContact(event.target.value)
    };  
   
    //For handle submition 

    const handleSubmit=(event)=>{
        const error = validate(props.user, props.profession, props.contact, props.hobbies, agree)
        setError(validate(props.user, props.profession, props.contact, props.hobbies, agree))
        setIsSubmit(true)

       
        if(Object.keys(error).length===0)
        {
            props.viewData(props.user, props.profession, props.contact, props.hobbies)
        };
    };


    useEffect(()=>{
        if(Object.keys(error).length=== 0 && isSubmit){
            console.log(props.user, props.profession, props.hobbies, props.contact, agree)
        };
    }, [error])
    console.log(error);
    const validate = (values)=>{
        const errors = {};
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const mobilePattern = /(\d{2,3})\-?(\d{3,4})\-?(\d{4})/i;
        // const urlPattern = ('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');

        // if(values.profession == null){
        //     errors.profession ='Please Select any one ore more options';
        // }

        if(!values.fname){
            errors.fname ='Please Enter your first name';
        }else if(values.fname.length >15){
            errors.fname = 'Please Enter your First name within 15 character';
        }

        if(!values.lname){
            errors.lname ='Please Enter your last name';
        }else if(values.lname.length >15){
            errors.fname = 'Please Enter your last name within 15 character';
        }

        if(!values.email){
            errors.email = "Please Enter your email";
        }else if(values.email.length >50){
            errors.email ="Please enter your email within 50 character";
        }else if(!emailPattern.test(values.email)){
            errors.email = "Your email dose not match any pattern";
        }

        if(!values.email2){
            errors.email2 = "Please Enter your confirm email ";
        }else if(values.email2 !== values.email){
            errors.email2 = "Email dose not match with previous email";
        }

        if(!values.number){
            errors.number = "Please Enter your mobile Number";
        }else if(!mobilePattern.test(values.number) || values.number.length >50 ){
            errors.number = "Your Mobile number dose not match with Japanese formate";
        }

        // if(!values.contact){
        //     errors.contact = "Please Select any contact option"
        // }

        if(!values.message){
            errors.message ="Please write your message."
        }else if(values.message.length > 500){
            errors.message ="Please write your message within 500 character."
        }

        // if(!values.agree){
        //     errors.agree = 'Please Select the Agree';
        // }else if(agree !== 1){
        //     errors.agree = 'Please Select the Agree';
        // }

        return errors;
        
    }
   
    return(
        
    <div className="card card-default">
    <div className="card-header">
        <h4>Input the all field</h4>
    </div>

    <form>
        <div className="container">
            
            {/* <p className="errortxthd">Maybe some fields are missing</p> */}
     
            <div className="form-group " >
                <label className="label requiredS" requiredS>Your Profession</label>
                <div className="card">
                    <div className="skill">
                        <label ><input type='checkbox' name='profession' value='System Engineer' onChange={handleProfession} /><span> System Engineer</span></label><br/>
                        <label ><input type='checkbox' name='profession' value='Web Developer ' onChange={handleProfession} /><span>Web Developer</span></label><br/>
                        <label ><input type='checkbox' name='profession'  value='Robotics' onChange={handleProfession} /><span>Robotics</span></label><br/>
                        <label><input  type='checkbox' name='profession' value='Customer Service' onChange={handleProfession} /><span>Customer Service</span></label><br/>
                        <label><input  type='checkbox' name='profession' value='Others' onChange={handleProfession} /><span>Others</span></label><br/>
                    </div>
                </div>
        
                <p className="errortxt">{error.profession}</p>
            </div>
                
            <div className="form-group " >
                <label className="label requiredS" >Your First Name</label>
                <input className="form-control" type='text' name='fname' value={fname} placeholder="Md Kamrul" onChange={handleChange}/>
                <p className="errortxt">{error.fname}</p>
            </div>

            <div className="form-group " >
                <label className="label requiredS" >Your last Name</label>
                <input className="form-control" type='text' name='lname' value={lname} placeholder="Hasan" onChange={handleChange}/>
                <p className="errortxt">{error.lname}</p>
            </div>
            <div className="form-group" >
                <label className="label requiredS" >Email</label>
                <input className="form-control" type='email' name='email' value={email} placeholder="xxxx@gmail.com" onChange={handleChange}/>
                <p className="errortxt">{error.email}</p>
            </div>
            <div className="form-group" >
                <label className="label requiredS" >Confirm Email</label>
                <input className="form-control" type='email' name='email2' value={email2} placeholder="Confirm Email" onChange={handleChange}/>
                <p className="errortxt">{error.email2}</p>
            </div>
            
            <div className="form-group" >
                <label className="label requiredS" >Mobile Number</label>
                <input className="form-control" type='text' name='number' value={number} placeholder="080-0000-0000" onChange={handleChange}/>
                <p className="errortxt">{error.number}</p>
            </div>
            <div className="form-group rad" >
                <label className="label requiredS " >Contact Method</label> <br/>
                <label><input className="contact"  type='radio' name='contact' value='Mobile' onChange={handleContact}/><span>By Mobile </span> 
                </label>
                <label><input className="contact" type='radio' name='contact'  value='Email' defaultChecked onChange={handleContact} /> <span>By Email</span> </label>  
                <p className="errortxt">{error.contact}</p>
            </div>
            <div className="form-group" >
                <label className="label" >Protfolio Link</label>
                <input className="form-control" type='text' name='url' value={url} placeholder="www.protfolio.com" onChange={handleChange}/>
                <p className="errortxt">{error.url}</p>
            </div>

            <div className="form-group" >
                <label className="label" >Your Hobbies</label>
                <div className="hobbies">
                    <label><input type='checkbox'  name='hobbies' value='Reading Book' onChange={handlehobbies}/><span>Reading Book</span>  </label> <br/>
                    <label><input type='checkbox' name='hobbies' value='Wantching Movie' onChange={handlehobbies}/><span>Wantching Movie</span> </label> <br/>
                    <label><input type='checkbox' name='hobbies' value='Long Drive' onChange={handlehobbies}/><span>Long Drive</span> </label>

                </div>
                
            </div>

            <div className="form-group">
                <label className="label requiredS">Your Message</label><br/>
                <textarea type='textarea' name="message" placeholder="Write somthing within 500 character." value={message} onChange={handleChange}></textarea>
                <p className="errortxt">{error.message}</p>
            </div>

            <div className="form-group agree" >
                <label className="label requiredS" >About personal information</label> <br/>
                <p>Please agree to our "Handling of Personal Information" before using this website.</p>
                <label><input className="contact"  type='radio' name='agree' value='1' onChange={handleAgree}/>Agree 
                </label>
                <label><input className="contact" type='radio' name='agree'  value='2' defaultChecked   onChange={handleAgree}/> Disagree</label>  
                <p className="errortxt">{error.agree}</p>
            </div>
            <hr/>

            <div className="action">
            <button className="button" type="button" onClick={()=> window.location.reload(false)}>Reload</button>
            <a type="submit" className="button" onClick={handleSubmit}>Next</a>
        
            </div>
        </div>
    </form>
    
    </div>


    )

}

export default InputForm;
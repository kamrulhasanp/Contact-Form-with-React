import React,{useState, useMemo} from "react";
import '../Style.css';

const ViewForm = (props) =>{

    const handleSubmit=()=>{
        props.submitData();
    }
   
    return(
    <div className="card card-default">
    <div className="card-header">
        <h4>Confirm the all value</h4>
    </div>
    <form>
        
        <div className="container">
         
          <div className="form-group " >
                <label className="label" >Your Profession</label>
                <div className="card">
                    <div className="skill">
                        <label ><span>{props.profession}</span></label>
                       
                    </div>
                </div>
            </div> 
            
            <div className="form-group " >
                <label className="label" >Your first Name</label>
                <input className="form-control" type='text' name='fname' value={props.user.fname} />
            </div>

            <div className="form-group " >
                <label className="label" >Your Last Name</label>
                <input className="form-control" type='text' name='lname' value={props.user.lname} />
            </div>
            <div className="form-group" >
                <label className="label" >Email</label>
                <input className="form-control" type='email' name='email' value={props.user.email} />
            </div>
            
            <div className="form-group" >
                <label className="label" >Mobile Number</label>
                <input className="form-control" type='text' name='number' value={props.user.number}/>
            </div>
            <div className="form-group" >
                <label className="label " >Contact Method</label> 
                <div className="card">
                    <div className="skill">
                        <label><span>Over the {props.contact}</span> </label>
                    </div>
                    
                </div>
                
               
            </div>
            <div className="form-group" >
                <label className="label" >Protfolio Link</label>
                <input className="form-control" type='text' name='url'  value={props.user.url}/>
            </div>

            <div className="form-group" >
                <label className="label" >Your Hobbies</label>
                <div className="hobbies">
                    <div className="card">
                        <div className="skill">
                            <label><span>{props.hobbies}</span>  </label> <br/>
                        </div>
                        
                    </div>   
                </div>
                
            </div>

            <div className="form-group">
                <label className="label">Your Message</label><br/>
                <textarea type='textarea' name="message">{props.user.message}</textarea>
            </div>

           
            <hr/>

            <div className="action">
            <button className="button"><a type='buton' name='reload'> Back</a></button>
            <button className="button" type="submit" onClick={handleSubmit}>Submit</button>
       
            </div>
        </div>
    </form>
    
    </div>


    )

}

export default ViewForm;



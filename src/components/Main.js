import React, {useMemo, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import ViewForm from "./pages/ViewForm";
import CompleteForm from "./pages/CompleteForm";

import InputForm from "./pages/InputForm";

const Main = () =>{
    const [step, setStep] = useState(1);

    const [user, setUser] = useState({fname:'', lname:'',email:'',email2:'',number:'',url:'', message:''});
    const [profession, setProfession] = useState([]);
    const [contact, setContact] = useState(['Email']);

    const [hobbies, setHobbies] = useState([]);

    const handleViewForm = () =>{
        setStep(2);
    }

    const handleCompleteForm = () =>{
        setStep(3);
    }

    const contents = useMemo(()=>{
        switch(step){
            case 2:
                return <ViewForm user={user} profession={profession} hobbies={hobbies} contact={contact} submitData={handleCompleteForm} />
            case 3:
                return <CompleteForm />
            default:
                return <InputForm 
                user={user} 
                setUser={setUser} 
                profession={profession} 
                setProfession={setProfession} 
                hobbies={hobbies} 
                setHobbies={setHobbies} 
                contact={contact}
                setContact = {setContact}
                viewData={handleViewForm}
                />
        }
    },[step, user, setUser, profession, setProfession, contact, setContact, hobbies, setHobbies])
    
    return(
        <div>
           {contents}
            
        </div>
    )
}

export default Main;

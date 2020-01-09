import React,{Component} from 'react'
import './Feedback.css'

import sl_icon from '../../Assets/user.png';
import em_icon from '../../Assets/email.png';

class Feedback extends React.Component{

    constructor(props){
        super(props);
        this.state = {emailvalue: '', namevalue: ''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
    }
    
    handleSubmit(event){
        event.preventDefault();
        alert("Form submitted");        
    }

    render(){
        return(
            <React.Fragment>
                
                <main class="feedback-form">
                    
                    <section class="container1">
                        <label class = "title" for="">Feedback</label>
                    </section>

                    <form action="" class="container2" onSubmit={this.handleSubmit}>
                                            
                        <section class="edittext">            
                            <input type = "text" placeholder="Name" name=""  minlength = "4" maxlength="30" onChange={this.handleChange} required/>
                            <img src={sl_icon} class = "icon" alt="no-image" width="30px" height="30px"/>
                        </section>
                        
                        <section class="edittext">                  
                            <input id = "emailtext" type = "text" placeholder="Email" name = ""  minlength = "5" maxlength="50" onChange={this.handleChange} required/>                
                            <img src={em_icon} class = "icon" alt="no-image" width="30px" height="30px"/>  
                        </section>

                        <p class = "comments" for="">Comments</p>            
                        <section class="edittext">
                            <textarea name="" id="" cols="30" rows="5" required></textarea>
                        </section>

                        <input class = "btn" type="submit" name = "" value="Submit"/>
                    </form>                                                 
                    
                </main>
            </React.Fragment>
        )
    }
}

export default Feedback;
import React,{Component} from 'react'
import './Home.css'

import prof from '../../Assets/profile.jfif';


class Home extends React.Component{

    render(){
        return(
            <React.Fragment>                
                <main class="home-form">


                    <section class="container">
                        <img src={prof} class = "profilepic" alt="no-image" width="70px" height="70px" />
                
                        <detail class="slnumber">
                            <p>Chef Name:</p>                            
                            <input type="text" value="Andy" id="slnumber" disabled/>                                           
                        </detail>
                        
                    </section>
                    
                    <section class="container2">                                            
                        <summary class="sl">
                            <p>Email:</p>
                            <input type="text" value="Andy@masterchef.com" id="" disabled/>
                        </summary>
                        
                        <summary class="sl">
                            <p>Nationality:</p>
                            <input type="text" value="Indonesian" id="" disabled/>
                        </summary>
                        
                        <summary class="sl">
                            <p>Phone Number:</p>
                            <input type="text" value="082367189281" id="" disabled/>
                        </summary>

                        <summary class="sl">        
                            <p>Balance:</p>
                            <input type="text" value="Rp. 1.241.000,00" id="" disabled/>
                        </summary>
                    </section>

                    
                </main>
            </React.Fragment>
        )
    }

}

export default Home
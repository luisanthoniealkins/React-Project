import React,{Component} from 'react'

import './Target.css'

class Target extends React.Component{
    render(){
        return(
            <main class = "package-form">
                <section class="container1">
                    <p class="form-title">Chef Target</p>    
                </section>        

                <section class="container2">
                    
                    <p>Fish Cooked</p>    
                    <input type="range" min = "1" max = "100" value="73" class = "bar" disabled/>
                    <input type="text" class = "rangelabel" name="" id="" value="73 out of 100" disabled/>

                    <p>Chicken Cooked</p>    
                    <input type="range" min = "1" max = "100" value="43" class = "bar" disabled/>            
                    <input type="text" class = "rangelabel" name="" id="" value="43 out of 100" disabled/>
                    
                    <p>Beef Cooked</p>    
                    <input type="range" min = "1" max = "100" value="56" class = "bar" disabled/>            
                    <input type="text" class = "rangelabel" name="" id="" value="56 out of 100" disabled/>

                    <p>Bird Cooked</p>    
                    <input type="range" min = "1" max = "100" value="10" class = "bar" disabled/>            
                    <input type="text" class = "rangelabel" name="" id="" value="10 out of 100" disabled/>
                </section>
            
            </main>
        )
    }
}

export default Target
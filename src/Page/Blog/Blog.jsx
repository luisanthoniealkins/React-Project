import React, {Component} from 'react'

import './Blog.css'


class Promo extends React.Component{
    render(){
        return(
            <main class = "promo-form">
        
                <section class="container1">
                    <p class="form-title">Blog</p>    
                </section>        
        
                <section class="container2">                                                                  
                    <article class="content">
                        <p class = "content-title">4 Cooking Tips:</p>
                        <p class = "content-date">Monday,19/10/2019</p>
                        <div class="content-text">
                            <p>1. Set up your workspace by gathering clean tools, bowls and utensils. And make sure to keep a trashcan within arm’s reach.</p>
                            <p>2. To create an egg wash, whisk together a large egg with one tablespoon of water until smooth. Use as a glue to seal pastries, then brush on top for a glossy appearance.</p>
                            <p>3. Peel tomatoes with ease! Cut an X in the top, and then simmer in a pot of hot water for 15 to 30 seconds. Cool down and the skin will fall right off.</p>
                            <p>4. Get comfortable! Wear comfy clothes and an apron when you work in the kitchen and you won’t have to worry about getting dirty.</p>
                        </div>
                    </article>     
                    <article class="content">
                        

                        <p class = "content-title">Healthy Life Tips</p>
                        <p class = "content-date">Monday,25/10/2019</p>
                        <div class = "content-text"> 
                            <p>1.   Healthy diet, which was calculated and rated based on the reported intake of healthy foods like vegetables, fruits, nuts, whole grains, healthy fats, and omega-3 fatty acids, and unhealthy foods like red and processed meats, sugar-sweetened beverages, trans fat, and sodium.</p>
                            <p>2.  Healthy physical activity level, which was measured as at least 30 minutes per day of moderate to vigorous activity daily.</p>
                            <p>3.   Healthy body weight, defined as a normal body mass index (BMI), which is between 18.5 and 24.9.</p>
                            <p>4.   Smoking, well, there is no healthy amount of smoking. “Healthy” here meant never having smoked.</p>
                            <p>5.   Moderate alcohol intake, which was measured as between 5 and 15 grams per day for women, and 5 to 30 grams per day for men. Generally, one drink contains about 14 grams of pure alcohol. That’s 12 ounces of regular beer, 5 ounces of wine, or 1.5 ounces of distilled spirits.</p>

                        </div>

                        






                        
                    </article>     
                </section>                            
            </main>

        )
    }
}

export default Promo
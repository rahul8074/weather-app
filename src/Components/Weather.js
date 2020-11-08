import React from 'react';
import './Weather.css';

const Weather=({description,city,country,temperature,error})=>{

    //showing picture
    function matchVal(){
    if(description){
        const rainKeywords=['rain','rainy','raining']
        const clearKeywords=['clear','clear sky','sky']
        const weatherDescription=description.split(' ')
        const CloudskeyWords=['cloudy','clouds','cloud','overcast']
        for(let i=0;i<weatherDescription.length;i++){
            if(CloudskeyWords.includes(weatherDescription[i])){
                console.log(weatherDescription[i],'We Have a match')
                return (
                <div  className="image">
                <img src="https://source.unsplash.com/300x256/?cloud,cloudy,clouds" alt="clouds" />
                </div>
                );
            }
            else if(clearKeywords.includes(weatherDescription[i])){
                console.log(weatherDescription[i],'We have a match')
                return(
                   
                    <div  className="image">
                     <img src="https://source.unsplash.com/300x256/?sky,clear sky" alt="clear sky" />
                    </div>
                )

            }
            else if(rainKeywords.includes(weatherDescription[i])){
                return(
                    
                    <div  className="image">
                   <img src="https://source.unsplash.com/300x256/?rain,raining,rainy" alt="Raining"/>
                    </div>
                )
            }

        }
        console.log('keywords: ',CloudskeyWords)
        console.log(weatherDescription)
    }
    }
    return(
    <div className='container' >
    {/* verify true or false */}
    {city && country && <p>{city} , {country }</p>}
    {temperature && <p id="temp" >{temperature}°C</p>}
    {description && <p id="desc" >Status: {description} <i class="fa fa-car" /> </p>}
    {error &&<p> {error}</p>}
    {description&& matchVal()}
    
    </div>
);
}

export default Weather;
import React from "react";
import "../assets/css/navbar.css";
import instagram from"../assets/images/Instagram.svg";
import facebook from"../assets/images/Facebook.png";
import whatsapp from"../assets/images/WhatsApp.svg";
export class NavBar extends React.Component {
    render() {
        return (<div>

            
            <ul className ="topnav">
                
                
                
               
                
                <li className="left"><a href="/" >Home</a></li>
                <li className="left"><a href="/about">About</a></li>
                <li className="left"><a href="/service">Service</a></li>
                <li className="left"><a href="/portfolio">Portfolio</a></li>
                <li className="left"><a href="/contact" >Contact</a></li>
                <li className="right" ><a href="https://www.instagram.com/cinoy__/"><img src={instagram} className ="logo" alt="instagram.logo"/></a></li>
                <li className="right" ><a href="https://www.facebook.com/cinoy.anil/" className = "logo"><img src={facebook} className= "logo" alt ="facebook.logo"/></a></li>
                <li className="right" ><a href = "https://wa.me/919605535765"><img src={whatsapp} className = "logo" alt ="whatsapp.logo"/></a></li>
            </ul>

        </div>)
    }
}
import avatar from "../assets/images/avatarabout.png";
import "../assets/css/about.css"
export function About() {
    return (
        <div>
            <h1 className="about">About Me</h1>
            <div className="aboutinfo">

                    <div className="aboutimage"><img src={avatar} alt ="about-image" className = "avatar"></img></div>
                    <p className="description">
                        Hi, I’m Cinoy V, currently working as a Software Engineer at Market Simplified India Ltd in Platform Department.<br></br> I have a Bachelor’s degree in IT from Kerala Technological Unviersity .
                    </p>
                </div>

        </div>)
}
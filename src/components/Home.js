import "../assets/css/home.css"
import photo from "../assets/images/avatar.png"
export function Home() {
    return (
        <div >
            <div className="intro" >
            <img src={photo}  alt="Cinoy"></img>
                
                <h1 className="name">Hi, I’m Cinoy</h1>
                
                <h1 className="job">JS Developer</h1>
                <h2 >based in India.</h2>
                
            </div>
            
        </div>
    )
}
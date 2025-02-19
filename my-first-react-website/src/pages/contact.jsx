import "./contact.css";
import email from "../assets/emailLogo.png"
import linkedIn from "../assets/linkedin-logo.jpg";
import github from "../assets/githubLogo.png";


export function Contact() {
    return (
        <div className="contactBody">
            <h1>Contact</h1>
            <p>blah blah blah</p>
            <div className="contactLogos">
                <a href={`mailto:shreyathoth@vt.edu?subject=Wow I love your website!&body=Hi Shreya, I think you're so cool and I need to be your friend!`}><img src={email} alt="Mail"/></a>
                <a href="https://www.linkedin.com/in/shreya-thothathri/"><img src={linkedIn} alt="LinkedIn"/></a>
                <a href="https://github.com/shreyaorange28"><img src={github} alt="Github"/></a>
            </div>


        </div>
    );
}
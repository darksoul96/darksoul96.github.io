import "./contact.css"
import { SocialIcon } from 'react-social-icons'
import whatsapp from '../assets/svg-files/whatsapp.png';

export default function Contact() {
    return (
        <section className="contact">
            <h1>Connect with me</h1>

            <div id="socials">
                <SocialIcon url="https://twitter.com/agustin_ruiz96" className="socialIcon"/>
                <SocialIcon url="https://github.com/darksoul96" className="socialIcon"/>
                <SocialIcon url="https://www.linkedin.com/in/agustin-federico-ruiz-991904220/" className="socialIcon"/>
                <img src={whatsapp} alt="" id="whatsapp-logo" className="socialIcon"/>
                <SocialIcon url="mailto:agustinruiz96@gmail.com?Subject=Hello%20world!" className="socialIcon"></SocialIcon>
                
            </div>

        </section>
    )
}
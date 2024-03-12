import "./technologies.css"
import angularLogo from '../assets/svg-files/angular.svg';

export default function Technologies() {
    return (
        <section className="technologies">
            <h1>Technologies Section</h1>

            <div className="technologies-carousel">
                <div className="carousel-element">
                    <img src={angularLogo} alt="" className="logo-element"/>
                </div>
                
            </div>
        </section>
    )
}
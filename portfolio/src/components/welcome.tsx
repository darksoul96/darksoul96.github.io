import { useEffect } from "react";
import "./welcome.css"


interface WelcomeProps {
    goToAbout: () => void;
}

export default function Welcome({ goToAbout }: WelcomeProps) {

    return (
        <section className="welcome">
            <h1>Welcome</h1>
            <button onClick={goToAbout}>Go to About</button>
        </section>
    )
}
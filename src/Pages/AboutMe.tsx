import React from "react";
import Navigation from "../Sections/Navigation";

interface AboutMeProps {
    active: string;
}

const AboutMe = ({ active }: AboutMeProps) => {
    return(
        <>
            <Navigation active={active}/>
            <div>AboutMe</div>
        </>
    )
}

export default AboutMe;
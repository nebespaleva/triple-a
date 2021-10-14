import React from "react";
import Navigation from "../../Sections/Navigation";
import { pageProps } from "../Home/Home";


const AboutMe = ({ active }: pageProps) => {
    return(
        <>
            <Navigation active={active}/>
            <div>AboutMe</div>
        </>
    )
}

export default AboutMe;
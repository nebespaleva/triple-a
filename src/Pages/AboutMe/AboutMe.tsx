import '../Home/style.scss';

import Navigation from "../../Sections/Navigation";
import React from "react";
import { pageProps } from "../Home/Home";

const AboutMe = ({ active }: pageProps) => {
    return(
        <div className='wrapper'>
            <Navigation active={active}/>
            <div>AboutMe</div>
        </div>
    )
}

export default AboutMe;
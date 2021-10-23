import '../Home/style.scss';

import Navigation from "../../Sections/Navigation";
import React from "react";

interface TagsProps {
    active: string;
}

const Tags = ({ active }: TagsProps) => {
    return(
        <div className='wrapper'>
            <Navigation active={active}/>
            <div>
                TAGS
            </div>
        </div>
    )
}

export default Tags;
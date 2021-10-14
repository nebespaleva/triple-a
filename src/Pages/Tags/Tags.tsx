import React from "react";
import Navigation from "../../Sections/Navigation";

interface TagsProps {
    active: string;
}

const Tags = ({ active }: TagsProps) => {
    return(
        <>
            <Navigation active={active}/>
            <div>
                TAGS
            </div>
        </>
    )
}

export default Tags;
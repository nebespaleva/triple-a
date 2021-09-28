import React from "react";

interface ButtonProps {
    styles: string;
    title: string;
    handleClick: () => void;
}

const Button:React.FC<ButtonProps> = ( { styles, title, handleClick} ) => {
    return(
        <button
            className={styles}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default Button;
import React from "react";
import GeneralPostDescription from "../../Components/GeneralPostDescription";
import './style.scss';



const HeaderPost = () => {
    return(
        <div className='header-post'>
            <GeneralPostDescription
                themeTitle='Featured article'
                postTitle='World’s Most Dangerous Technology Ever Made.'
                author='Ralph Hawkins'
                postDate='May 7, 2019'
                postDescription='Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.'
            />
        </div>
    )
}

export default HeaderPost;
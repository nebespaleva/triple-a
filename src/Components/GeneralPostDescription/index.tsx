import React from "react";
import './style.scss'

export interface GeneralPostDescriptionProps {
    themeTitle: string;
    postTitle: string;
    author: string;
    postDate: string;
    postDescription: string;
    src?: string;
    otherPosts?: boolean;
}

const GeneralPostDescription = ({ 
    themeTitle,
    postTitle,
    author,
    postDate,
    postDescription }: GeneralPostDescriptionProps) => {
    return(
        <div 
            className='description'>
            <h3 className='description-theme'>{themeTitle}</h3>
            <h2 className='description-postTitle'>{postTitle}</h2>
            <div className='description-info'>
                <span className='description-info-block'>
                    {author}
                </span>
                <span className='description-info-block'>
                    {postDate}
                </span>
            </div>
            <span className='header-post__description-short'>
                {postDescription}
            </span>
        </div>
    )
}

export default GeneralPostDescription;
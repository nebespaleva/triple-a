import React from "react";
import './style.scss';

interface HeaderPostProps {
    themeTitle: string;
    postTitle: string;
    author: string;
    postDate: string;
    postDescription: string;
}

const HeaderPost = ({ 
    themeTitle,
    postTitle,
    author,
    postDate,
    postDescription }: HeaderPostProps) => {
    return(
        <div className='header-post'>
            <div className='header-post__description'>
                <h3 className='header-post__description-theme'>{themeTitle}</h3>
                <h2 className='header-post__description-postTitle'>{postTitle}</h2>
                <div className='header-post__description-info'>
                    <span className='header-post__description-info-block'>
                        {author}
                    </span>
                    <span className='header-post__description-info-block'>
                        {postDate}
                    </span>
                </div>
                <span className='header-post__description-short'>
                    {postDescription}
                </span>
            </div>
        </div>
    )
}

export default HeaderPost;
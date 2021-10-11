import React from "react";
import { GeneralPostDescriptionProps } from "../GeneralPostDescription";
import './style.scss';

const RecentPostItem = (
    { themeTitle, 
        author, 
        postTitle, 
        postDate, 
        postDescription, 
        src, 
        otherPosts=false 
    }: GeneralPostDescriptionProps) => {
    return(
        <div className={otherPosts ? 'other-post' : 'recent-post'}>
            <div className={otherPosts ? 'other-post__img-wrapper' : 'recent-post__img-wrapper'}>
                <img src={src} alt='recent post'/>
            </div>
            <div className='recent-post__description'>
                <h3 className='recent-post__description-theme'>
                    {themeTitle}
                </h3>
                <h2 className='recent-post__description-postTitle'>
                    {postTitle}
                </h2>
                <div className='recent-post__description-info'>
                    <span className='recent-post__description-info-block'>
                        {author}
                    </span>
                    <span className='recent-post__description-info-block'>
                        {postDate}
                    </span>
                </div>
                <span className='recent-post__description-short'>
                    {postDescription}
                </span>
            </div>
        </div>
    )
}

export default RecentPostItem;
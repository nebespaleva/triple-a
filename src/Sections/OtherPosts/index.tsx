import React from "react";
import RecentPostItem from "../../Components/RecentPostItem";
import { recentPost } from "../RecentPosts";
import other1 from '../../assets/img/OtherPosts/other1.png';
import other2 from '../../assets/img/OtherPosts/other2.png';
import other3 from '../../assets/img/OtherPosts/other3.png';
import other4 from '../../assets/img/OtherPosts/other4.png';
import './style.scss';

const OtherPosts = () => {
    const articles: recentPost[] = [
        {
            theme: 'Nature',
            title: 'Tempor deserunt Sunt Qui',
            author: 'Connie Robertson',
            date: 'November 3, 2012',
            description: 'Ea qui dolor aute cupidatat ad pariatur proident. Mollit nulla tempor aute reprehenderit ut dolore mollit nisi consequat excepteur ex officia pariatur irure.',
            img: other1
        },
        {
            theme: 'Plants',
            title: 'Occaecat Anim eu Qui',
            author: 'Eleanor Williamson',
            date: 'September 28, 2014',
            description: 'Qui ipsum consectetur ad incididunt et aliquip exercitation laboris nisi reprehenderit. Et excepteur commodo esse enim ea aliqua officia reprehenderit.',
            img: other2
        },
        {
            theme: 'Food',
            title: 'Fugiat Incididunt Voluptate Consequat',
            author: 'Bessie Watson',
            date: 'June 13, 2012',
            description: 'Mollit ea culpa ipsum pariatur eiusmod. Irure et.',
            img: other3
        },
        {
            theme: 'Colorful',
            title: 'Occaecat Anim eu Qui',
            author: 'Ted Simmmons',
            date: 'June 21, 2015',
            description: 'Amet ipsum occaecat aliqua aute nisi laboris nostrud culpa est do. Aliqua esse velit in excepteur esse qui voluptate laboris adipisicing qui irure elit amet excepteur.',
            img: other4
        },
    ]

    const tags: string[] = [
    'Technology', 'Open Source', 'JavaScript', 'Minimalism', 'Self-help', 'Animals', 'Herbivores', 'HTML', 'CSS', 'PHP', 'Web Technologies', 'Career', 'Life', 'Spirituality', 'Food', 'Cooking', 'Sports','Racing', 'Mountain Hiking', 'Cruising',
    ]

    return(
        <div className='other-posts'>
            <div className='other-posts__wrapper'>
                {articles.map(item => {
                    return(
                        <RecentPostItem
                            themeTitle={item.theme}
                            postTitle={item.title}
                            author={item.author}
                            postDate={item.date}
                            postDescription={item.description}
                            src={item.img}
                            otherPosts={true}
                        />
                    )
                })}
            </div>
            <div className='other-posts__search-by-tags'>
                <h3 className='other-posts__search-by-tags__title'>tags.</h3>
                {
                    tags.map(item => {
                        return(
                            <span className='other-posts__search-by-tags__tags'>{item}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OtherPosts;
import React from "react";
import RecentPostItem from "../../Components/RecentPostItem";
import RecentPost1 from '../../assets/img/RecentPosts/recent-post-1.png';
import RecentPost2 from '../../assets/img/RecentPosts/recent-post-2.png';
import RecentPost3 from '../../assets/img/RecentPosts/recent-post-3.png';
import './style.scss';

export interface recentPost {
    theme: string;
    title: string;
    author: string;
    date: string;
    description: string;
    img: string;
}

const RecentPosts = () => {
    const recentPosts: recentPost[] = [
        {
            theme: 'Minimalism',
            title: 'Culpa sit Laboris Exercitation ea Fugiat',
            author: 'Leslie Pena',
            date: 'April 25, 2012',
            description: 'Incididunt occaecat et qui dolore consectetur magna. Lorem veniam ut et labore consequat ut ex sunt. Ut et nostrud aliquip do anim proident ad nulla consectetur eu aute ex anim mollit. Anim aute exercitation nisi fugiat. Dolor velit excepteur commodo proident nulla commodo ullamco labore et esse.',
            img: RecentPost1
        },
        {
            theme: 'Technology',
            title: 'Amet non Ex Officia nulla Cupidatat',
            author: 'Jacob Henry',
            date: 'September 27, 2017',
            description: 'Sint anim Lorem aute duis Lorem incididunt. Nulla nostrud irure id ipsum aute excepteur duis sint. Do occaecat sit dolor magna esse. Mollit incididunt cillum consectetur fugiat adipisicing dolor est id minim amet cillum esse Lorem. Deserunt non duis excepteur aliqua duis eu reprehenderit.',
            img: RecentPost2
        },
        {
            theme: 'Article',
            title: 'Dolor ex Tempor Cotur Culpa li',
            author: 'Darrell Lane',
            date: 'May 16, 2017',
            description: 'Incididunt sint nulla eu adipisicing eu reprehenderit proident consequat est. Nisi consectetur incididunt mollit officia ut cupidatat laborum proident eu velit Lorem deserunt deserunt voluptate. Proident nostrud laborum reprehenderit culpa irure id labore do ad do minim nisi. Incididunt ex.',
            img: RecentPost3
        }
    ]


    return(
        <div className='posts'>
            <h1 className='posts_title'>Recent posts</h1>
            <div className='posts_divider'></div>
            {recentPosts.map(post => {
                return(
                    <RecentPostItem
                        themeTitle={post.theme}
                        postTitle={post.title}
                        author={post.author}
                        postDate={post.date}
                        postDescription={post.description}
                        src={post.img}
                    />
                )
            })}
        </div>
    )
}

export default RecentPosts;
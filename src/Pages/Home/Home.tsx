import './style.scss'

import HeaderPost from "../../Sections/HeaderPost";
import Navigation from "../../Sections/Navigation";
import OtherPosts from "../../Sections/OtherPosts";
import React from "react";
import RecentPosts from "../../Sections/RecentPosts";
import SecondaryPost from "../../Sections/SecondaryPost";

export interface pageProps {
    active: string;
}

const Home = ({ active }: pageProps) => {
    return (
        <div className='wrapper'>
            <Navigation active={active}/>
            <HeaderPost/>
            <RecentPosts/>
            <SecondaryPost/>
            <OtherPosts/>
        </div>
      );
}

export default Home;
import React from "react";
import HeaderPost from "../../Sections/HeaderPost";
import Navigation from "../../Sections/Navigation";
import OtherPosts from "../../Sections/OtherPosts";
import RecentPosts from "../../Sections/RecentPosts";
import SecondaryPost from "../../Sections/SecondaryPost";

export interface pageProps {
    active: string;
}

const Home = ({ active }: pageProps) => {
    return (
        <>
            <Navigation active={active}/>
            <HeaderPost/>
            <RecentPosts/>
            <SecondaryPost/>
            <OtherPosts/>
        </>
      );
}

export default Home;
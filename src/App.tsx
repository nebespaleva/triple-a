import React from 'react';
import Navigation from './Sections/Navigation';
import HeaderPost from './Sections/HeaderPost';
import RecentPosts from './Sections/RecentPosts';
import SecondaryPost from './Sections/SecondaryPost';
import './index.css'


function App() {
  return (
    <>
		<Navigation/>
		<HeaderPost/>
		<RecentPosts/>
    <SecondaryPost/>
    </>
  );
}

export default App;

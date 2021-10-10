import React from 'react';
import Navigation from './Sections/Navigation';
import HeaderPost from './Sections/HeaderPost';
import RecentPosts from './Sections/RecentPosts';
import SecondaryPost from './Sections/SecondaryPost';
import OtherPosts from './Sections/OtherPosts';
import './index.css'

function App() {
  return (
    <>
		<Navigation/>
		<HeaderPost/>
		<RecentPosts/>
		<SecondaryPost/>
    <OtherPosts/>
    </>
  );
}

export default App;

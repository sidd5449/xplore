import React from 'react';
import './Home.css';
import ProfileSide from '../../components/ProfileSide/ProfileSide';

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/ >
        <div className="post">Post</div>
        <div className="right">Right</div>
    </div>
  )
}

export default Home
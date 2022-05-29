import React from 'react';
import './ProfileCard.css';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImg">
            <img src={Cover} alt="" />
            <img src={Profile} alt="" />
        </div>
        <div className="ProfileName">
            <span>Lorem Ipsum</span>
            <span>Senior UI/UX Designer</span>
        </div>
        <div className="followStatus">
            <hr />
            <div className="follow">
                <span>6,890</span>
                <span>Following</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>1</span>
                <span>Following</span>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard
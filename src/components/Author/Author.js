import React from 'react';
import { socialMediaAccounts } from '../../config';

// to be done use link component instead of anchor tag, 
// or we can make a link component
const Author = () => (
    <div className="author u-md-mg-tp">
        <img
            src="/geekyArjun-author.webp"
            alt="Arjun shrivastava-author"
        />
        <div className="author__about">
            <p className="author__about--name">Arjun Shrivastava.</p>
            <p className="author__about--purpose">
                I like to extend and share my knowledge so I thought this would be a
                great way to start.
          <span className="author__about--connecton"> Connect with me on:</span>
            </p>
            <div className="author__about--social-media-accounts">
                {/* eslint-disable */}
                <a href={`${socialMediaAccounts.FB}`} target="__blank" className="fa fa-facebook"></a>
                <a href={`${socialMediaAccounts.Twitter}`} target="__blank" className="fa fa-twitter"></a>
                <a href={`${socialMediaAccounts.LinkedIn}`} target="__blank" className="fa fa-linkedin"></a>
                <a href={`${socialMediaAccounts.YT}`} target="__blank" className="fa fa-youtube"></a>
                <a href={`${socialMediaAccounts.Instagram}`} target="__blank" className="fa fa-instagram"></a>
            </div>
        </div>
    </div>
)

export default Author;
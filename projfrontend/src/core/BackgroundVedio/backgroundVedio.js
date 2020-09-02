
import React from 'react';

import classes from './BackgroundVideo.module.css';
import { Link } from 'react-router-dom';

const BackgroundVideo = () => {
    const videoSource = "https://player.vimeo.com/external/403777528.sd.mp4?s=253a15b2491b958e3f45c1f59747b8068898b516&profile_id=164"
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                     <h4 className="mt-4">Fashion Hub</h4>
                     <p className="mb-2">Now Delivering All Products </p>
                
                    <Link to ="cart">
                    <button type="button" className="btn btn-outline-dark p-2" >Order Now</button>
                    </Link> 
                    <img
                        src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                        alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo


import React from 'react';
import './Nav-bar.css';

const navcontent = ({btnclick}) => {

            return(
                <nav className='navbar'>
                    <h3 className="logo">Global Users</h3>
                    <h1 className='h'>Click below to fetch details</h1>
                    <div className='nav-links'>
                        <button class="btn" onClick={btnclick} color="primary">
                            Get Users
                        </button>
                        
                    </div>
                </nav>
            );
        }

export default navcontent;

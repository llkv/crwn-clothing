import React from 'react';
import './homepage.styles.scss';

const HomePage = ()=>(
    <div ckassName="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">HATS</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">JACKETS</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">SWEATERS</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">WOMEN</h1>
                    <span className="subtitle">MEN</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">MEN</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
        </div>

    </div>
)
export default HomePage;
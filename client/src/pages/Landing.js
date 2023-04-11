import React from 'react'
import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"
import Wrapper from '../assets/wrappers/Testing'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt="jobify" className='logo' />
            </nav>
            <div className="container page">
                {/* info */}
                <div className="info">
                    <h1>Job <span>tracking  </span>app</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dicta architecto blanditiis deleniti voluptas dolore assumenda modi repellendus provident eligendi.</p>
                    <button className="btn btn-hero">Login/Register</button>
                </div>
                <img src={main} alt="job hunt" className='img main-img' />
            </div>
        </Wrapper>
    )
}



export default Landing



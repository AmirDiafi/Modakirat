import React from 'react'
import './stylesheets/drawer.css'
import {FaTimes} from 'react-icons/fa'
import {FaTwitter, FaLinkedin, FaYoutube, FaGithub} from 'react-icons/fa'

class Drawer extends React.Component {
    

    render() { 
        return (
            <div className="drawer" style={this.props.style}>
                <div 
                    className="close-drawer" 
                    onClick={()=>this.props.handleDrawer('close')}>
                    <FaTimes />
                </div>
		<div className="about">
		    <p>
		    This weeb application made specially for the Algerian students for helping them and making the memories easy
		    for all of them.
		    </p>
		    <hr />
		    <footer className="text-center">
		    <a href="https://amirdiafi.com" className="about-me">designed & developed by 
                        <img 
                            loading="lazy"
                            src='https://drive.google.com/uc?export=view&id=1eJb2Cl35Y-Ctx3x8UkDXtBV9owrvAjQx' 
                            alt="Amir Diafi" />
		    <b>Amir Diafi</b></a>
                    <div className="footer-links col col-12">
            <a className='twitter'
                href="https://twitter.com/amir_diafiU" 
                target="_blank"
                rel="noopener noreferrer">
                <FaTwitter/>
            </a>
            <a className='linkedin'
                href="https://www.linkedin.com/in/amirdiafi" 
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedin/>
            </a>
            <a className='youtube'
                href="https://www.youtube.com/channel/UCgbqyUzyD2IfqYoc0RcS2MA" 
                target="_blank"
                rel="noopener noreferrer">
                <FaYoutube/>
            </a>
            <a className='github'
                href="https://github.com/AmirDiafi" 
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub/>
            </a>
		    <hr />
            </div>
		    <p>2020 &copy; Amir Diafi</p>
		    </footer>
		</div>
            </div>
        )
    }
}
 
export default Drawer
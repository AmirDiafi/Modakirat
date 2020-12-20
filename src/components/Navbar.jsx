import React from 'react'
import {FaBars} from 'react-icons/fa'

class Navbar extends React.Component {
    state = {  }
    render() { 
        return (
            <nav className="navbar">
                <span onClick={()=>this.props.handleDrawer()}>
                    <FaBars />
                </span>
                <div className="toggle-theme">
                    <input 
                        type="radio" 
                        checked={this.props.isChecked}
                        name="theme" value="dark" 
                        onChange={(event) => this.props.handleTheme(event)}/>
                    <input 
                        type="radio" 
                        checked={!this.props.isChecked} 
                        name="theme" 
                        value="light" 
                        onChange={(event) => this.props.handleTheme(event)}/>
                </div>
            </nav>
        )
    }
}
 
export default Navbar
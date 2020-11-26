import React from 'react'
import Card from './Card'
import Header from './Header'
import './stylesheets/content.css'
import {FaBars} from 'react-icons/fa'

class Content extends React.Component {
    render() { 
        return (
            <div className="content" style={this.props.style}>
		<nav className="navbar">
		    <span onClick={()=>this.props.handleDrawer()}>
			<FaBars />
		    </span>
		    <div className="toggle-theme">
		        <input type="radio" checked={this.props.isChecked}  name="theme" value="dark" onChange={(event) => this.props.handleTheme(event)} />
		        <input type="radio" checked={!this.props.isChecked} name="theme" value="light" onChange={(event) => this.props.handleTheme(event)}/>
                    </div>
		</nav>
		<Header />
                <div className="cards">
                    {this.props.data.map(item=> (
                        <Card data={item} key={item.id} />
                    ))}
                </div>
            </div>
        )
    }
}
 
export default Content
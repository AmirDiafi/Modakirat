import React from 'react'
import './stylesheets/drawer.css'
import {FaTimes} from 'react-icons/fa'

class Drawer extends React.Component {
    state = { 
        branch: 'all',
        stage: 'all'
    }

    handleChange = (event) => {
        event.preventDefault()
        let {name, value} = event.target
        this.setState({[name]: value})
        setTimeout(()=>this.props.onFilter(this.state.branch, this.state.stage),0)
    }

    render() { 
        return (
            <div className="drawer" style={this.props.style}>
		<div className="close-drawer" onClick={()=>this.props.handleDrawer()}><FaTimes /></div>
                <h4>Filter</h4>
                <hr/>
		    <label htmlFor="stage">By Stage
                    <select name="stage" id="stage" onChange={this.handleChange}>
                        <option value="all">All</option>
                        <option value="license">License</option>
                        <option value="master">Master</option>
                        <option value="doctora">Doctora</option>
                    </select>
		    </label>
                <hr/>
		    <label htmlFor="branch">By Branch
                    <select name="branch" id="stage" onChange={this.handleChange}>
                        <option value="all">All</option>
                        <option value="psychology">Psychology</option>
                        <option value="economic">Economics</option>
                        <option value="physic">Physic</option>
                    </select>
		    </label>
            </div>
        )
    }
}
 
export default Drawer
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
                        <option value="physic">Sociology</option>
                        <option value="economic">Economic</option>
                        <option value="rights">Rights</option>
                        <option value="maths">Maths and Informatic</option>
                        <option value="medical">Medical</option>
                        <option value="material_science">Material Science</option>
                    </select>
		    </label>
            </div>
        )
    }
}
 
export default Drawer
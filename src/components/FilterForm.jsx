import React from 'react'
import './stylesheets/filterForm.css'

class FilterForm extends React.Component {
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
	    <>
            <h4>Filter</h4>
            <div className="filter-form">
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
                        <option value="droit">Droit</option>
                    </select>
                </label>
            </div>
	    </>
        )
    }
}
 
export default FilterForm
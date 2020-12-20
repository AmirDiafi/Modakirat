import React from 'react'
import './stylesheets/header.css'
import { AiOutlineAntCloud } from 'react-icons/ai'
import FilterForm from './FilterForm'

class Card extends React.Component {
    render() { 
        return (
            <header className="text-center">
		        <div className="logo"><AiOutlineAntCloud /></div>
                	<h1>The Memory Cloud - سحابة المذكرات</h1>
		        <p>Everything you need!</p>
                	<hr/>
                	<FilterForm onFilter={this.props.onFilter} />
            </header>
        )
    }
}
 
export default Card
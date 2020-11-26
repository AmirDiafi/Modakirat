import React from 'react'
import './stylesheets/header.css'
import { AiOutlineAntCloud } from 'react-icons/ai'

class Card extends React.Component {
    render() { 
        return (
            <header className="text-center">
		<div className="logo"><AiOutlineAntCloud /></div>
                <h1>The Memory Cloud</h1>
		<p>Everything you need!</p>
            </header>
        )
    }
}
 
export default Card
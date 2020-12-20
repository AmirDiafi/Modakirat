import React from 'react'
import Card from './Card'
import Header from './Header'
import './stylesheets/content.css'
import Navbar from './Navbar'

class Content extends React.Component {

    render() { 
        return (
            <div className="content" style={this.props.style}>
                <Navbar 
                    handleDrawer={this.props.handleDrawer}
                    handleTheme={this.props.handleTheme}
                    isChecked={this.props.isChecked}
                />
                <Header onFilter={this.props.onFilter} />
                <div className="cards" onClick={() => this.props.handleDrawer('close')}>
                    {this.props.data.map(item=> (
                        <Card data={item} key={item.id} />
                    ))}
                </div>
            </div>
        )
    }
}
 
export default Content
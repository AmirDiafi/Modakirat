import React from "react"
import { BsCloudDownload } from 'react-icons/bs'
import './stylesheets/card.css'

class Card extends React.Component {
    render() { 
        return (
            <div className="card-item">
                <div className="head">
                    <a 
                    href={this.props.data.link} 
                    download={this.props.data.title}>
                        <BsCloudDownload />
                    </a>
                </div>
                <div className="body">
                    <p className="title">
                        {this.props.data.title}
                    </p>
		    <p className="date">Data: {this.props.data.date}</p>
                    <div className="tags">
                        <span>{this.props.data.grade}</span>
                        <span>{this.props.data.specialty}</span>
                        <span>{this.props.data.fer3}</span>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Card
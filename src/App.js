import React from 'react';
import './App.css';
import Routers from './components/Routers'
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './components/Footer'
import { FaPaperPlane } from 'react-icons/fa'
import ProfileImg from './assets/images/profile-messenger.jpg'

class App extends React.Component {

state = {isOpen: false}

handleOpen = () => {
    this.setState({isOpen: !this.state.isOpen})
}

render() {

return (
    <Router>
      <Routers />
      <div 
        className="fixed-messenger">
		<div 
			className={this.state.isOpen?"icon open":"icon"} 
			onClick={this.handleOpen}><FaPaperPlane />
			<div 
			className={this.state.isOpen
				?"outline hidden"
				:"outline"}></div>
		</div>
		<div className={this.state.isOpen?"body open":"body"}>
			<div className="head">
				<div className="img">
					<img src={ProfileImg} alt="" />
				</div>
				<div className="info">
				<h5>Moncif Noui</h5>
				<p>أجيب فورا</p>
				</div>
			</div>
			<div className="content">
				<div className='message'>
				<p>مرحبا <span role="img" aria-label='aria-label'>👏</span></p>
				<p>كيف أستطيع خدمتك<span role="img" aria-label='aria-label'>😃</span></p>
				</div>
				<div className="send-message text-center">
				<a rel="noopener noreferrer" className="btn" target="_blank" href="https://wa.me/213556374256">
					<FaPaperPlane/> إرسال رسالة</a>
				</div>
			</div>
		</div>
      </div>
      <Footer />
    </Router>
  )
}
}

export default App

import React from 'react';
import Drawer from './Drawer'
import Content from './Content'
import Data from './Data.json'

class Main extends React.Component {

  state = {
    isOpen: false,
    data: Data,
    isDark: window.localStorage.getItem('theme')==='dark'?true:false
  }

  onFilter = (branch, stage) => {
    this.setState({data: Data.filter(item => item.branch.toLowerCase().includes(branch)&&item.stage.toLowerCase().includes(stage))})
  }

  handleTheme = (event) => {
    window.localStorage.setItem('theme', event.target.value==='dark'?'dark':'light')
    this.setState({isDark: event.target.value==='dark'?true:false})
  }

 handleDrawer = (message) => {
    this.setState({isOpen: message==='close'?false:true})
 }

  render () {
    return (
      <React.Fragment>
        <Drawer 
	        handleDrawer={this.handleDrawer}
          style={{marginLeft: this.state.isOpen?0:'-250%'}} />
        <Content 
          style={{background: this.state.isDark?'#000':'#fff'}}
          isChecked={this.state.isDark} 
          handleTheme={this.handleTheme}
          handleDrawer={this.handleDrawer}
          onFilter={this.onFilter}
          data={this.state.data} />
      </React.Fragment>
    )
  }
}

export default Main

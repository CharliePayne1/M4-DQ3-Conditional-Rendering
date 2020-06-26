import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
state = {
  page: "pokemon"
  }

  // create a function that renders each page 
  // create an event on each button which changes the state and decides which page to render

  getsPage = () => {
    if (this.state.page === "profile") {
      return <Profile />
    } else if (this.state.page === "photo") {
      return <Photos />
    } else if (this.state.page === "cocktail") {
      return <Cocktails />
    } else if (this.state.page === "pokemon") {
    return <Pokemon />
    }
  }

  handlePageChange = (page) => {
    debugger
    this.setState({
      page: page
    })
  }
  

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>;

    return (
      <div>
        <MenuBar handlePageChange={this.handlePageChange}/>
        {this.getsPage()}
      </div>
    )
  }

}

export default MainBox

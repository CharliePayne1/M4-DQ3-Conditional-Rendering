import React from 'react'
const MenuBar = (props) => {

  const handleClick = (event) => {
    props.handlePageChange(event.target.id)
  }

  return (
    <div className="ui four item menu">
      <a className="item active" id="profile" onClick={handleClick}>
        <i className="user large icon" id="profile" />
      </a>

      <a className="item" id="photo" onClick={handleClick}>
        <i className="photo large icon" id="photo" />
      </a>

      <a className="item" id="cocktail" onClick={handleClick}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className="item" id="pokemon" onClick={handleClick}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar

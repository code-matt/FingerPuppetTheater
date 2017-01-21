import React from 'react'
import './input.css'

export default class InputComponent extends React.Component {
  render () {
    return (
      <div>
        <div className="pull-left">
          pic
        </div>
        <form className="form">
          <input type="text" />
          <input type="submit" className="submit"/>
        </form>
      </div>
    )
  }
}


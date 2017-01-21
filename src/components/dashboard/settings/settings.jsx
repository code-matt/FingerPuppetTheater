import React from 'react'
import './settings.css'
import InputComponent from './input/input'

export default class SettingsComponent extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row box4">
          <div className="col-md-8 offset-md-2 box5">
            <InputComponent />
          </div>
          <div className="col-md-8 offset-md-2 box6">
            <InputComponent />
          </div>
        </div>
      </div>
    )
  }
}
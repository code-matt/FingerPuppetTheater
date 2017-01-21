import React from 'react'
import './settings.css'
import InputComponent from './input/input'
import elsa from '../video/elsa.png'
import trump from '../video/trump.png'

export default class SettingsComponent extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='row box4'>
          <div className='col-md-8 offset-md-2 box5'>
            <InputComponent img={trump} />
          </div>
          <div className='col-md-8 offset-md-2 box6'>
            <InputComponent img={elsa} />
          </div>
        </div>
      </div>
    )
  }
}

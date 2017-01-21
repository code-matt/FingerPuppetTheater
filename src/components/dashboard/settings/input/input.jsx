import React from 'react'
import './input.css'

export default class InputComponent extends React.Component {
  render () {
    return (
      <div>
        <div className='pull-left'>
          <img className='hax' src={this.props.img} style={{maxWidth: '100px', maxHeight: '100px'}}/>
        </div>
        <form className='form'>
          <input type='text' />
          <input type='submit' className='submit' />
        </form>
      </div>
    )
  }
}


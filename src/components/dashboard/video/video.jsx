import React from 'react'
// import initGUIControllers from './colorControls.js'
import './video.css'
import elsa from './elsa.png'
import trump from './trump.png'

export default class VideoComponent extends React.Component {
  constructor () {
    super()
    this.componentDidMount = this.componentDidMount.bind(this)
    this.registerColor = this.registerColor.bind(this)

    // this is going to be changing upwards of 60 times a second,
    // no good for redux
    this.trump = undefined
    this.elsa = undefined
    this.lastRecs = []
  }

  componentDidMount () {
    var video = document.getElementById('video')
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')
    var tracker = new window.tracking.ColorTracker(['cyan', 'magenta'])
    var elsa = document.getElementById('elsa')
    var trump = document.getElementById('trump')
    window.tracking.track(video, tracker, { camera: true })
    var component = this
    tracker.on('track', function (event) {
      component.trump = undefined
      component.elsa = undefined
      context.clearRect(0, 0, canvas.width, canvas.height)
      if (event.length === 0) {
        context.clearRect(0, 0, canvas.width, canvas.height)
        component.elsa = context.drawImage(elsa, component.lastRecs.elsa.rect.x - 100, component.lastRecs.elsa.y - 100, 100, 100)
        component.trump = context.drawImage(trump, component.lastRecs.trump.x - 100, component.lastRecs.trump.y - 100, 100, 100)
        return
      }
      event.data.forEach(function (rect) {
        if (rect.color === 'custom') {
          rect.color = tracker.customColor
        }
        context.strokeStyle = rect.color
        // context.strokeRect(rect.x, rect.y, rect.width, rect.height)
        if (rect.color === 'cyan') {
          if (!component.elsa) {
            component.elsa = context.drawImage(elsa, rect.x - 100, rect.y - 100, 100, 100)
            component.lastRecs.push({
              elsa: {
                x: rect.x,
                y: rect.y
              }
            })
          }
        } else if (rect.color === 'magenta') {
          if (!component.trump) {
            component.trump = context.drawImage(trump, rect.x - 100, rect.y - 100, 100, 100)
            component.lastRecs.push({
              trump: {
                x: rect.x,
                y: rect.y
              }
            })
          }
        }
        context.font = '11px Helvetica'
        context.fillStyle = '#fff'
        context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11)
        context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22)
      })
    })
    var v = document.getElementById('video')
    canvas.style.width = '433.33px'
    canvas.style.height = v.style.height
  }
  registerColor (hexColor) {
    var components = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor)
    var customColorR = parseInt(components[1], 16)
    var customColorG = parseInt(components[2], 16)
    var customColorB = parseInt(components[3], 16)

    console.log(customColorR + customColorB + customColorG)
    var colorTotal = customColorR + customColorG + customColorB

    var rRatio = customColorR / colorTotal
    var gRatio = customColorG / colorTotal
    window.tracking.ColorTracker.registerColor('custom', function (r, g, b) {
      var colorTotal2 = r + g + b
      if (colorTotal2 === 0) {
        if (colorTotal < 10) {
          return true
        }
        return false
      }

      var rRatio2 = r / colorTotal2,
        gRatio2 = g / colorTotal2,
        deltaColorTotal = colorTotal / colorTotal2,
        deltaR = rRatio / rRatio2,
        deltaG = gRatio / gRatio2

      return deltaColorTotal > 0.9 && deltaColorTotal < 1.1 &&
        deltaR > 0.9 && deltaR < 1.1 &&
        deltaG > 0.9 && deltaG < 1.1
    })
  }
  render () {
    return (
      <div className='position-div'>
        <video id='video' className='video' style={{height: '325px'}} autoPlay />
        <canvas id='canvas' />
        <img id='elsa' style={{width: '50px', height: '50px', visibility: 'hidden'}} src={elsa} />
        <img id='trump' style={{width: '50px', height: '50px', visibility: 'hidden'}} src={trump} />
      </div>
    )
  }
}

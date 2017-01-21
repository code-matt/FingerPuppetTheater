import React from 'react'
// import initGUIControllers from './colorControls.js'
import './video.css'

export default class VideoComponent extends React.Component {
  constructor () {
    super()
    this.componentDidMount = this.componentDidMount.bind(this)
    this.registerColor = this.registerColor.bind(this)
  }
  componentDidMount () {
    var video = document.getElementById('video')
    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')
    var tracker = new window.tracking.ColorTracker(['cyan'])
    window.tracking.track(video, tracker, { camera: true })
    tracker.on('track', function (event) {
      console.log(event)
      context.clearRect(0, 0, canvas.width, canvas.height)
      event.data.forEach(function (rect) {
        if (rect.color === 'custom') {
          rect.color = tracker.customColor
        }
        context.strokeStyle = rect.color
        context.strokeRect(rect.x, rect.y, rect.width, rect.height)
        context.font = '11px Helvetica'
        context.fillStyle = '#fff'
        context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11)
        context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22)
      })
    })
    // initGUIControllers(tracker)
    this.registerColor('#000000')
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
      <div className='demo-frame'>
        <div className='demo-container'>
          <video id='video' width='600' height='450' autoPlay />
          <canvas id='canvas' width='600' height='450' />
        </div>
      </div>
    )
  }
}

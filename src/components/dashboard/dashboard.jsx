import React from 'react'
import "./dashboard.css"
import VideoComponent from "./video/video"

export default class DashboardComponent extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row box1">
          <div className="col-md-8 offset-md-2 box2">
          <VideoComponent/>
          </div>
          <div className="col-md-8 offset-md-2 box3">
          ima dashboard
          </div>
        </div>
      </div>
    )
  }
}

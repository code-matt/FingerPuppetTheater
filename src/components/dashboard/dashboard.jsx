import React from 'react'
import "./dashboard.css"
import VideoComponent from "./video/video"
import SettingsComponent from "./settings/settings"


export default class DashboardComponent extends React.Component {
  render () {
    return (
      <div>
        <div className='text-center'>
          <h3>Finger Puppet Theatre</h3>
        </div>
        <div className='container'>
          <div className='row box1'>
            <div className='col-md-8 offset-md-2 box2'>
              <VideoComponent />
            </div>
            <div className="col-md-8 offset-md-2 box3">
            <SettingsComponent/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

import React from 'react'
import ButtonList from './ButtonList'
import VideoList from './VideoList'
import SideMenu from './SideMenu'

const MainContainer = () => {
  return (
    <div className='flex'>
      <div>
        <SideMenu/>
      </div>
      <div>
        <ButtonList/>
        <VideoList/>
      </div>
    </div>
  )
}

export default MainContainer
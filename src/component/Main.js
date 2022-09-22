import React from 'react'
import {AiOutlineTool} from 'react-icons/ai'
import {GoTools} from 'react-icons/go'
import {BsTools} from 'react-icons/bs'


const Main = () => {
  return (
  
    <div>
        <div className='main-container'>
            <div className='main-container-1'>
            <h1 className='first-p'>What’s different about Manage?</h1>
            <h3 className='second-p'>Manage provides all the functionality your team needs, <br /> without the complexity. Our software is tailor-made  for  modern digital product teams.</h3>
            </div>
           

            <div className='main-container-2'>
               <h2 className='main-container-2-heading'><div className='icon'><AiOutlineTool className='icon-1'  /></div>Track company-wide progress</h2>
                <h5 className='main-container-2-sub-heading'>See how your day-to-day tasks fit into the wider vision. Go from <br /> tracking progress at the milestone level all the way done to the <br /> smallest of details. Never lose sight of the bigger picture again.</h5>

                <h2 className='main-container-2-heading'><div className='icon'><GoTools className='icon-1' /></div>Advance built-in progress</h2>
                <h5 className='main-container-2-sub-heading'>Set internal delivery estimates and track progress toward company <br /> goals. Our customisable dashboard helps you build out the reports you  <br /> need to keep key stakeholders informed.</h5>

                <h2 className='main-container-2-heading'><div className='icon'><BsTools className='icon-1' /></div>Everything you need in one place</h2>
                <h5 className='main-container-2-sub-heading'>Stop jumping from one service to another to communicate, store files, <br /> track tasks and share documents. Manage offers an all-in-one team <br />  productivity solution.</h5>

            </div>

        </div>
    </div>
  
  )
}

export default Main
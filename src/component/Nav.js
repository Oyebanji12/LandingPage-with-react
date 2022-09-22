import React from 'react'

const Nav = () => {
  return (
    <div>
        <div className='flex-container'>
            <h2 className='logo'>Manage</h2>
            <nav className='flex-item'>
                <li className='flex-child'>Pricing</li>
                <li className='flex-child'>Product</li>
                <li className='flex-child'>About</li>
                <li className='flex-child'>Career</li>
                <li className='flex-child'>Community</li>

            </nav>
            <div className='btn-container'>
            <button className='btn'>Get started</button>
            </div>
        </div>
    </div>
  )
}

export default Nav
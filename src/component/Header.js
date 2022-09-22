import React from 'react'


const Header = () => {
  return (
    <div>
        <div className='container'>
            <div className='div-container'>
                <p className='first-paragraph'><h2> Bring everyone <br /> together to build a <br /> better Product</h2> </p>
                <h3 className='second-paragraph'>Manage make it simple for software team to <br /> plan everyday task while keeping the larger <br /> team goal in place</h3>
                <div>
                    <button className='btn'>Get started</button>
                </div>
            </div>
            <div>
                <img src="https://mo-manage-lp.netlify.app/images/illustration-intro.svg" alt="" className='photo' />
            </div>
            

        </div>
    </div>
  )
}

export default Header
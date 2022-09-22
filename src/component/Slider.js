import React, { useState } from 'react'


const Slider = () => {
    
    const mydata=[
        
        {
            src: 'https://mo-manage-lp.netlify.app/images/avatar-anisha.png',
            name: 'Anisha Ali',
            caption: 'Manage has superchange our team workflow. The ability to maintain visibility on larger milestones at all times keep everyone motivated.',
            id: 0,
            
        },
        {
            src: "https://mo-manage-lp.netlify.app/images/avatar-ali.png",
            name: 'Ali Bravo',
            caption: 'We have been able to cancel other subscription since using manage. There is no cross chanel confusion and everyone is much interested.',
            id: 1,
            
        },
        {
            src: "https://mo-manage-lp.netlify.app/images/avatar-richard.png",
            name: 'Richard Watts',
            caption: 'Manage allow us to provide structure and process. It keep us organise and focused. I cant stop recommeding them to everyone i talk to',
            id: 2,
            
        },
        
        {
            src: 'https://mo-manage-lp.netlify.app/images/avatar-shanai.png',
            name: 'Shaghai Duff',
            caption: 'Their software allow us to track, manage and collaborate on our project from anywhere It keep the whole team in sync without being intrusive.',
            id: 3,
            
    }    
    ]
  
   

const datalength= mydata.length
const lastIndex= datalength - 1

console.log(datalength)
console.log(lastIndex)

const [index, setIndex]= useState(0)

const nextHandler=()=>{
    if(index === lastIndex){
        setIndex(0)
    } else{
        setIndex(index + 1)
    }
    console.log(index)
}
const prevHandler=()=>{
    if(index === 0){
        setIndex(lastIndex)
    } else{
        setIndex(index - 1)
        console.log(index)
    }
}   
  return (
    <div>
        <h1 className='slider-heading'>What they've said</h1>
    <div className='slider-flex'>
        <div><img src={mydata && mydata[index].src} className='img'/></div>
       {/* <div>{mydata && mydata[index].src}</div> */}
        <div className='img-name'>{mydata && mydata[index].name }</div>
        <div className='img-caption'>{mydata && mydata[index].caption}</div>

        </div>
        
    <div className='slider-btn'>    
<button onClick={prevHandler} className='img-btn-prev'></button>
<button onClick={nextHandler} className='img-btn-next'></button>
</div>
           <div className='img-btn'>
            <button className='btn'>Get started</button>
            </div>
    
    
    </div>
  )
}

export default Slider
{/*
 <div className='slider-flex'>
    
        {slider.map((slide)=>(

                <div key={slide.id}>
                <img src={slide.src} alt="img" className='' />
              <div className=''>      {slide.name} </div>
        <div className=''>  {slide.caption} </div> 
        </div> 
            ))}

    </div>
        */}
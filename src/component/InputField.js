// import React from 'react'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import './InputField.css'
// //import data from './Data'

// // infinite scroll
// // 
// // 

// const InputField = () => {
//     const [search, setSearch]= useState('')
//     const [query, setQuery]= useState([])

//     const handleChange=(e)=>{
//          setSearch(e.target.value)
//         console.log(e.target.value)
//     }

//      useEffect(()=>{
//         axios.get('https://autocomplete.clearbit.com/v1/companies/suggest?query="a"')
//          .then((response)=>{
//              setQuery(response.data)
//            console.log(response.data)
            
//         })
//          .catch(error=>console.log(error))
        

//      },[])
// //const myData=data
// //console.log(myData)
// //student-04-a7cc0e5ce7bd@qwiklabs.net
// //wncdZ5bbbzzD
// //qwiklabs-gcp-02-34350d711144

// //const filterQuery= query.filter(quer=>
//  // quer.name.toLowerCase().includes(search.toLowerCase())
//  // )
//   //console.log(filterQuery)
    
//    const filterQuery= query.filter(queries=>
//      queries.name.toLowerCase().includes(search.toLowerCase())
//      )
//      console.log(filterQuery)

//    // const filterDisplays= displays.filter(display=>
//      // display.name.toLowerCase().includes(search.toLowerCase())
//      // )
//      // console.log(filterDisplays)


//   return ( 
//     <div>
//         <div className='search-input'>
//         <input type="text"  placeholder='input your value' value={search} onChange={handleChange}  />
//         </div>
        
//         <div className='data-result'>
//           {filterQuery.map((queries, i)=>{
//             // if search is equal to empty string return  empty string, else return filter query
//             if(search === ""){
//               return null;
//             } else {
//             return(
              
              
//             <a key={i} href={queries.domain} className="data-item" target="_blank"> 
//             {/* {queries.length != 0 ?
//              <p>{queries.name}</p> : ''
//              }  */}
//              <p>{queries.name}</p>
//             </a>
//               )
//             }

//           })}
        

//         {/*   {data.filter(item => {
//   if (query === '') {
//     return item;
//     console.log(item)
//   } else if (item.toLowerCase().includes(query.toLowerCase())) {
//     return item;
//   }
// }).map((item,i)=>(
//                 <div key={i}>{item}</div>
                
// ))} 
// */}
 
//         </div>
//     </div>
//   )
// }

// export default InputField
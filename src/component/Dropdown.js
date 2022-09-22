// import React from 'react'
// import axios from 'axios'
// import { useState, useEffect } from 'react'

// const Dropdown = () => {
//     const [search, setSearch]= useState('')
//     const [users, setUsers]= useState([])
//     const [filteredData, setFilteredData]= useState([])

//     useEffect(()=>{
//         axios.get('https://autocomplete.clearbit.com/v1/companies/suggest?query="a"')
//         .then((response)=>{
//             setUsers(response.data)
//         })

//     },[])

//     useEffect(()=>{
//         setFilteredData(
//             users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()))
//         )
//     },[search, users])


//   return (
//     <div>
//     <input type="text" onChange={(e)=>{setSearch(e.target.value)}}  />
//     {filteredData.length === 0 ? <div>no result</div> : filteredData.map((val, i)=>{
//         return <div key={i}>
//             <p>{val.name}</p>

//         </div>
// })}

//     </div>
//   )
// }

// export default Dropdown


import React, { useEffect, useState } from 'react'
import './Search.css'


const Search = (props) => {
    const [search,setSearch] = useState("nature")
    const apiKey ="c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U"

// const searchHandler = (e)=>{
//     setSearch(e.target.value)
// }

//below is api for search -- no effect here becasue we use function
    const searchHandler = ()=>{
        fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=50`, {
            method: 'GET',
            headers: {
              'Authorization': apiKey,
            },
          })
            .then(response => response.json())
            .then(data => {
                //Sending data from child (Search) to parent (App)
                props.onData(data)
            })
    }

  return (
   <div className='search_wrapper'>
    {/* remeber when we have input we need a state to store value call form binding */}
      <input 
            type='text' 
            placeholder='Search your category' 
            onChange={(e)=>setSearch(e.target.value)}
            // onChange={searchHandler}
        />
      <button onClick={searchHandler}>Search</button>
    </div>
  )
}

export default Search

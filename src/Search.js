import React, { useState } from 'react'
import './App.css';


const Search = (props) => {
const [search,setSearch] = useState()
var apiKey = "c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U";
const category = 'bird'; // Replace with the desired category
const apiUrl = `https://api.pexels.com/v1/search?query=${search}&page=${props.nextPage}&orientation=landscape`;
// const handleSearch =(e)=>{
// setSearch(e.target.value)
// }
const searchHandler =()=>{
  console.log("In search")
  
  fetch(apiUrl, {
      method: 'GET',
      headers: {
      'Authorization': apiKey,
      },
  })
   //step 3way to handle promise using then-- check if data come after console
  .then((response)=>response.json())
  // .then(data=>console.log(data.photos))
  //step 5
  .then((data)=>{
    props.onDataCatch(data,search);
    console.log(data)
  });
}

return (
  // css of search box is in app.css
  <div className='search_wrapper'>
    <input type ="text" placeholder= "search category " onChange={(e)=>setSearch(e.target.value)} />
    <button onClick={searchHandler}>Search</button>
  </div>
  )
}

export default Search
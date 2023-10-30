import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
    const apiKey ="c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U"
    const searchQuery = 'cat';
    const countPicPerPage = 12;
    const apiUrl = `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=${countPicPerPage}`;
    const[data,setData]=useState()

    useEffect(()=>{
        fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': apiKey,
          },
        })
          .then(response => response.json())
          .then(data => {
            // Handle the data returned from the API
          setData(data.photos);
          console.log(data)
          //photos comfrom api in console array of data
          })
    },[])

  return (
      <div className='wrapper'>
        {data &&
            data.map((val)=>(
                // <div>{val}</div>
              <img src={val.src.tiny} className='image'/>
            ))
        }
    </div>
  )
}

export default App

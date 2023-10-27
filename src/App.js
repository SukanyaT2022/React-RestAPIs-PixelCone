import React, { useEffect, useState } from 'react'

const App = () => {

    const apiKey ="c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U"
    const searchQuery = 'dog';
    const countPicPerPage = 5;
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
    <div>
        {data &&
            data.map((val)=>(
                // <div>{val}</div>
              <img src={val.src.tiny}/>
            ))

        }
    </div>
  )
}

export default App

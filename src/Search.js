import React, { useEffect, useState } from 'react';
import './Search.css';

const Search = (props) => {
  console.log(props)
  const [data, setData] = useState();
  const [search, setSearch] = useState('nature');
  const [nextPage, setNextPage] = useState(1);
  const apiKey = 'c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U';
  const [modal, setModal] = useState(false);
  const [storeImage, setStoreImage] = useState('');
  

  // const searchHandler = (e)=>{
  //     setSearch(e.target.value)
  // }

  //below is api for search -- no effect here becasue we use function
  const searchHandler = () => {
    fetch(`https://api.pexels.com/v1/search?query=${search}&per_page=20&page=${nextPage}`, {
      method: 'GET',
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //Sending data from child (Search) to parent (App)
         setData(data) 
      });
  };

  const modalHandler = (image) => {
    setModal(true);
    setStoreImage(image);
  };
  
  const nextPageHandler = ()=>{
    setNextPage(nextPage +1)
  }
  const previousPageHandler = ()=>{
    setNextPage(nextPage -1)
  }

  useEffect(() => {
    searchHandler(); // apiUrl is variable from line9- call function here so it call only one time not call infinity
  }, [nextPage]);


  return (
    <div className="search_wrapper">
      {/* remeber when we have input we need a state to store value call form binding */}
      <input
        type="text"
        placeholder="Search your category"
        onChange={(e) => setSearch(e.target.value)}
        // onChange={searchHandler}
      />
      <button onClick={searchHandler}>Search</button>

      {modal && (
          <div id="modal" className={modal ? 'myModal' : ''}>
            <span className="close" onClick={() => setModal(false)}>
              X
            </span>
            <div className="image">
              <img className="modal_img" src={storeImage} alt="" />
            </div>
          </div>
        )}
        <div className="data_wrapper">
          {data &&
            data.map((val, index) => (
              <img
                key={index}
                src={val.src.tiny}
                className="image"
                onClick={() => modalHandler(val.src.landscape)}
              />
            ))}
        </div>
        <div className='controlBothButton'>
        <button onClick={previousPageHandler} className="nextButton">
          Prev
        </button>
        <button onClick={nextPageHandler} className="nextButton">
          Next
        </button>
        </div>
      </div>


  );
};

export default Search;

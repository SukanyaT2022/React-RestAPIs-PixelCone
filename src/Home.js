import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './Search';
import NavBarComp from './NavBarComp';

const Home = () => {
  const apiKey = 'c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U';
  const countPicPerPage = 21;
  const [nextPage, setNextPage] = useState(1);
  const [search,setSearch] = useState("beach")
  const apiUrl = `https://api.pexels.com/v1/search?page=${nextPage}&query=${search}&per_page=${countPicPerPage}?`;
  const [data, setData] = useState();
  const [modal, setModal] = useState(false);
  const [storeImage, setStoreImage] = useState('');
  const [flag,setFlag] = useState(false)

  const apiCall = () => {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.photos);
        console.log(data);
      });
  };

  useEffect(() => {
      apiCall(); 
  }, [nextPage]);

  const dataCatcher = (val,ser) => {
    setSearch(ser)
    setData(val.photos);
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

  return (
    <>
      <NavBarComp  />
      <Search onDataCatch = {dataCatcher} />  
      <div className="wrapper">

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
    </>
  );
};

export default Home;

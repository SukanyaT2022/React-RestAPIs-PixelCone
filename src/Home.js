import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./Search";
import NavBarComp from "./NavBarComp";
const Home = () => {
  const apiKey = "c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U";
  const searchQuery = "child";
  const countPicPerPage = 12;
  const apiUrl = `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=${countPicPerPage}`;
  const [data, setData] = useState();
  const [modal, setModal] = useState(false);
  const [storeImage, setStoreImage] = useState('');
  const [nextPage, setNextPage] = useState('');


  const apiCall =(apiLink)=>{
    fetch(apiLink, {
      method: "GET",
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.photos);
        setNextPage(data.next_page)
        console.log(data);
      });
  }

  useEffect(() => {
   apiCall(apiUrl) // apiUrl is variable from line9- call function here so it call only one time not call infinity

  }, []);

  const dataCatcher = (val) => {
    setData(val.photos);
  };
  const modalHandler = (image) => {
    setModal(true);
    setStoreImage(image);
  };

  return (
    <>
    <NavBarComp/>
    <div className="wrapper">
  
      <Search onData={dataCatcher} />

      {modal && (
        <div id="modal" className={modal ? "myModal" : ""}>
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
      <button onClick={()=>apiCall(nextPage)}>Next Page</button>
    </div>
    </>
  );
};


export default Home;


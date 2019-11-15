/* ------------------------------------------------- */

import React, { useState, useEffect } from "react";
// removing the line ' import axios from "axios" ' ;

/* ------------------------------------------------- */

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

/* ------------------------------------------------- */
// adding the import ; 
import { axiosWithAuth } from "../utilities/axiosWithAuth";

/* ------------------------------------------------- */

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  /* ------------------------------------------------- */

  useEffect(() => {
    axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then(response => {
      console.log("Get Response", response.data)
      setColorList(response.data)
      console.log("colorList", colorList)
    })
    .catch(error => {
      console.log("Get Error", error)
    })
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

/* ------------------------------------------------- */

export default BubblePage;

/* ------------------------------------------------- */
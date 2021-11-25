import React from "react";
import Calender from '../parts/Calender';
import { Link } from 'react-router-dom';

export default function Page2() {
  const arr = [...Array(100).keys()];
  console.log(arr);
  return (
    <>
      <Calender />
      <Link to={{ pathname: "/" }}>back home</Link>
    </> 
  );
}

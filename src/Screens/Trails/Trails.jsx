import React from 'react';
// import { Link } from 'react-router-dom';
import Search from '../../Components/Search/Search';
import TrailList from '../../Components/TrailList/TrailList';
import './Trails.css';

export default function Trails() {
  return (
    <>
       <div className="top-container">
          <Search />
        </div>
       <TrailList />
    </>
  )
}

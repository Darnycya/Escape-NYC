import React from 'react';
import './Trails.css';


export default function Trails() {
  return (
    <>
    <div className="top-container">
     <div className="search-container">
        <input className="searchbar" placeholder="Search"></input><button>Go</button>
        </div> 
        <div className="filter-container">
          Filter:
          <div className="filters">
          Level:<br/>
        <input className="filter" type="checkbox" id="Easy" name="Easy"
           />
        <label for="scales">Easy</label><br/>
        <input className="filter" type="checkbox" id="Medium" name="Medium"
           />
        <label for="scales">Medium</label><br/>
        <input className="filter" type="checkbox" id="Hard" name="Hard"
           />
            <label for="scales">Hard</label><br />
          </div>
          <div className="filters">
          Distance:<br/>
        <input className="filter" type="checkbox" id="0-25" name="0-25"
           />
        <label for="scales">0-25</label><br/>
        <input className="filter" type="checkbox" id="25-50" name="25-50"
          />
        <label for="scales">25-50</label><br/>
        <input className="filter" type="checkbox" id="50-100" name="50-100"
           />
          <label for="scales">50-100</label><br />
          <input className="filter" type="checkbox" id="100+" name="100+"
           />
          <label for="scales">100+</label><br />
        </div>
        <div className="filters">
          Rating:<br/>
        <input className="filter" type="checkbox" id="0-25" name="0-25"
         un  />
        <label for="scales">0-25</label><br/>
        <input className="filter" type="checkbox" id="25-50" name="25-50"
         />
        <label for="scales">25-50</label><br/>
        <input className="filter" type="checkbox" id="50-100" name="50-100"
         />
          <label for="scales">50-100</label><br />
          <input className="filter" type="checkbox" id="100+" name="100+"
         />
          <label for="scales">100+</label><br />
      </div>
      </div>
      </div>
<div className="trails">
      
        <div className="trail">
          <div className="trail-image-container">
            <img className="trail-image" alt="" src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"></img>
          </div>
          <div className="trail-description-container">
            Name:<br />
            Level:<br />
            Distance:<br />
            Rating:<br />
            Username<br/>
            </div>
      </div>
      
      <div className="trail">
          <div className="trail-image-container">
            <img className="trail-image" alt="" src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"></img>
          </div>
          <div className="trail-description-container">
            Name:<br />
            Level:<br />
            Distance:<br />
            Rating:<br />
            Username<br/>
            </div>
      </div>
      
      <div className="trail">
          <div className="trail-image-container">
            <img className="trail-image" alt="" src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"></img>
          </div>
          <div className="trail-description-container">
            Name:<br />
            Level:<br />
            Distance:<br />
            Rating:<br />
            Username<br/>
            </div>
      </div>
      
      <div className="trail">
          <div className="trail-image-container">
            <img className="trail-image" alt="" src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"></img>
          </div>
          <div className="trail-description-container">
            Name:<br />
            Level:<br />
            Distance:<br />
            Rating:<br />
            Username<br/>
            </div>
        </div>

        <div className="trail">
          <div className="trail-image-container">
            <img className="trail-image" alt="" src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"></img>
          </div>
          <div className="trail-description-container">
            Name:<br />
            Level:<br />
            Distance:<br />
            Rating:<br />
            Username<br/>
            </div>
        </div>

        </div>
      </>
  )
}
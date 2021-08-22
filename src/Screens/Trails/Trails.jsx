import React from 'react';
import './Trails.css';


export default function Trails() {
  return (
    <>
    <div className="top-container">
        <div className="search-container">
        <input className="searchbar" placeholder="Search"></input><button className="search-button">Go</button>
        </div>
        {/* <div className="filter-container">
          Filter:
          <div className="filters">
          <div className="filter-labels">Level:</div>
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
          <div className="filter-labels">Distance:</div>
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
        <div className="filter-labels">Rating:</div>
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
      </div> */}
      </div>
<div className="trails">
      
        <div className="trail">
          <div className="trail-image-container">
            <img className="trail-image" alt="" src="https://hikethehudsonvalley.com/wp-content/uploads/2015/05/Spring2014_RWAN_955.jpg"></img>
          </div>
          <div className="trail-description-container">
            <h6><b>Name:</b> Anthony's Nose</h6>
            <h6><b>Level:</b> Medium</h6>
            <h6><b>Distance From NYC:</b> 40 miles</h6>
            <h6><b>Length:</b> 2.6 miles roundtrip</h6>
            <h6><b>Time To Climb:</b> 2.5 hours</h6>
            <h6><b>Rating:</b>  <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img>
              <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img>
              <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img>
              <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img></h6>
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
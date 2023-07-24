import React from 'react';
import { Link } from 'react-router-dom';
import './TrailList.css';

const Trail = (props) => {
  
    return (
      <>
        <Link className="trail-link" to={`/trails/${props._id}`}>
        <div className="trail">
          <div className="trail-image-container">
                <img className="trail-image" src={props.trailUrl} alt={props.name} />
          </div>
          <div className="trail-description-container">
            <h6><b>Name:</b> {props.name}</h6>
            <h6><b>Level:</b> {props.difficulty}</h6>
            <h6><b>Distance From NYC:</b> {props.distanceFromNyc} miles</h6>
            <h6><b>Time To Climb:</b> {props.climbingTime} hours</h6>
            <h6><b>Rating:</b>
              {props.rating === 1 && <>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img></>}
               
              {props.rating === 2 && <>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img></>}
              
              {props.rating === 3 && <>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img></>}
              
              {props.rating === 4 && <>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img></>}
              
              {props.rating === 5 && <>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img>
                <img alt="star" className="star" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNnGdm_9JNZzTDOKVhALeT_bw6Pvh5nZFraKlT4njFdpjul7HmqchP1uyRy6NGyyDq8I&usqp=CAU"></img></>}
              
            </h6>
            </div>
          </div>
          </Link>
        </>
    )
}
export default Trail



import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function HomePage() {
  return (
    <div>
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Bear_Mountain_Bridge%2C_NY_from_river_level_loking_East.JPG"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://scenichudson.org/wp-content/uploads/2019/10/OA_Mohonk-Mt-House-Lemon-Labyrinth_imaginelovinglife.com_-1400x933.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2018/02/Hand-Luggage-Only-10-6.jpg?resize=1000%2C667&ssl=1"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/newyorkstate/Untitled_design_11__5aa30857-758c-46f4-85b9-9f84bfce6b65.jpg"
      alt="Fourth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.lakeplacid.com/f/styles/standard_header/public/listing/3060/33214.jpg?itok=740AtG5j"
      alt="Fifth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.tripsavvy.com/thmb/P-bXun5awTzyyfgnDnG41iO14H4=/667x667/smart/filters:no_upscale()/cascasde-mountain-ny-5a3015dc4e46ba0036642503.jpg"
      alt="Sixth slide"
    />
  </Carousel.Item>
    </Carousel>
      
      <div className="mission-statement">
        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
      </div>
      
      <div className="review-container">
        <div className="review1">
          <img className='review-icon' src="https://i.pinimg.com/originals/08/1e/8d/081e8df05d58af26f39ef168e9f3815b.jpg"></img>
          <div className="review-words"><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
        
        </div>


        <div className="review2">
          <img className='review-icon' src="https://www.charityprotravel.com/sites/default/files/styles/news_large/public/field/image/lancebass.jpg?itok=i1zcIV0y"></img>
          
          <div className="review-words"><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
        </div>


        <div className="review3">
          <img className='review-icon' src="https://qph.fs.quoracdn.net/main-qimg-892c66e7940edc2760418aed185d379c"></img>
          <div className="review-words"><p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
        </div>
        </div>


    </div>
  )
}

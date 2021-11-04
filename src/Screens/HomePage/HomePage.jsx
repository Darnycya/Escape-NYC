import React from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function HomePage() {

  AOS.init({
    duration: 1200,
  })

  return (
    <div className="content">
      <video src="https://res.cloudinary.com/darnycya/video/upload/v1636040486/EscapeVideo_cpmekt.mov" onloadedmetadata="this.muted = true" muted playsinline autoPlay loop  width="100%" height="auto"></video>
      
      <div className="mission-statement" data-aos="fade-up">
        <div className="iPhoneContainer">
          <img className="iPhone" alt="iphone" src="https://res.cloudinary.com/darnycya/image/upload/v1629500330/EscapeComingSoon_zdixo6.png"></img>
        </div>
        <div className="statement">
          <p className="actual-statement">With lockdowns happening every which way, NYCs need a breath of fresh air and a dose of a new scenery. And luckily, we’re all here to help each other. On EscapeNYC, you can find hiking trails in NY that are close by. Here, we make it easy for you to plan out your nature day to escape the concrete jungle. And if you’d like to lend a helping hand, you can post your favorite trails that you have found that should be explored by your fellow New Yorkers. <b>Happy trailing!</b> </p>
    </div>
        </div>
      
      <div className="review-container">
        <div className="review1">
          <img className='review-icon' alt="Beyonce" src="https://i.pinimg.com/originals/08/1e/8d/081e8df05d58af26f39ef168e9f3815b.jpg"></img>
          <div className="review-words"><p>"I was truly losing my mind in the city. There were maybe like 3 trees and they all were in Central Park. But then I found EscapeNYC and started leaving the city and exploring the rest of NY and it is so beautiful."<br />
            <br /></p>
           <p className="names"> -Beyoncé Knowles-Carter</p>
        </div>
        
        </div>


        <div className="review2">
          <img className='review-icon' alt="Lance" src="https://www.charityprotravel.com/sites/default/files/styles/news_large/public/field/image/lancebass.jpg?itok=i1zcIV0y"></img>
          
          <div className="review-words"><p>"When I lived in Hollywood I would hike almost every morning. I came to visit NYC for a week and was dying on this flat surface. My friend told me about EscapeNYC and I found such beautiful hikes."<br />
            <br /></p>
           <p className="names"> -Lance Bass</p>
          </div>
        </div>


        <div className="review3">
          <img className='review-icon' alt="Some guy" src="https://qph.fs.quoracdn.net/main-qimg-892c66e7940edc2760418aed185d379c"></img>
          <div className="review-words"><p>"I'm a huge techie and I love checking out new web apps and I came across EscapeNYC. This site is so cool and the UI/UX is steller. The next time I visit NYC I'm going to definitely use this app. It's so easy to search and find new trails."<br />
            <br /></p>
           <p className="names"> -John Lee</p></div>
        </div>
        </div>


    </div>
  )
}

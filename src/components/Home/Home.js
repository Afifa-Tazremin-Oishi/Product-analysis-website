import React from 'react';
import { Link } from 'react-router-dom';
import Carusel from '../Carusel/Carusel';
import useReview from '../hooks/useReview';
import laptopimg from '../image/camera-2.jpg';
import './Home.css';

const Home = () => {
  const [review, setReview] = useReview();
  const items = review.slice(0, 3);
  return (
    <div>
      <div className='home'>
      <div className="leftSide__home">
          <h2>Camera For Start <span>Photography</span></h2>
          <h2>Best <span>Camera</span> For Starting </h2>
          
        <p>
        <small><strong>What is camera in photography?</strong>camera, in photography, device for recording an image of an object on a light-sensitive surface; it is essentially a light-tight box with an aperture to admit light focused onto a sensitized film or plate. 35mm single-lens reflex (SLR) camera.</small>
        </p>

        <Link to='./review' className='home__button'>More Details</Link>
      </div>

      <div className="rightside__home">
        <img src={laptopimg} alt="laptop" />
      </div>
    </div>
    
      <div className='homesection__review'>
        <h2>Customer Reviews(03)</h2>
                  <div className='carusel__Items'>
        {
          items.map(review =>
            <Carusel
              key={review.id}
              review={review}
          ></Carusel>)
          }
          </div>
        <Link to='./review' className='home__button'>See All Reviews</Link>
      </div>
    </div>
  )
}

export default Home;
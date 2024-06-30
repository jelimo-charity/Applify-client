import React from 'react';
import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import '../App.css';
import NavBar from '../components/Navbar';

const Landing: React.FC = () => {
  return (
    <div>
      <section>
        <NavBar />
        <div className="home-description">
          <div className="info">
            <h1>
              Job <span>Tracking</span> App
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              aliquam doloribus blanditiis obcaecati. Possimus commodi,
              laudantium totam ipsa sapiente ducimus? Veritatis ipsam
              necessitatibus explicabo incidunt nisi quae dolore?
              Perferendis, voluptas?
            </p>
            <Link to="/register">
              <button>Login/Register</button>
            </Link>
          </div>
          <img src={main} alt="job hunt" className='jobhunt' />
        </div>
      </section>
    </div>
  );
};

export default Landing;

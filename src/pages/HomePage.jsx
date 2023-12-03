import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className="text-light-prime bg-home bg-cover bg-no-repeat bg-center h-screen w-screen flex items-center">
      <div className="w-container mx-auto">
        <h1 className="uppercase text-3xl mb-5">
          Welcome to the world of convenience and freedom of movement!
        </h1>
        <p className="text-xl w-[500px]">
          We specialize in finding and renting the perfect car for your next
          adventure.
          <br />
          We're ready to adapt to your plans. Whether it's a long trip or a
          short weekend getaway, we'll find the optimal option for your needs.
          <br />
          <Link to="/catalog" className="text-primary underline">
            Search car
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HomePage;

import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function About() {
  return (
    <div className="flex gap-4 flex-col items-center">
      <h1 className="text-6xl mb-4 text-center">Github Finder</h1>
      <p className="mb-4 text-2xl font-light text-center">
        A React app to search Github profiles and see profiles details
      </p>

      <p className="text-lg text-center">
        Developed with ❤ by <strong>JERENASON Junnot Daniel</strong>
      </p>

      <p className="text-lg text-center">Follow me on</p>
      <div className="flex gap-4 text-2xl">
        <a href="https://www.facebook.com/junnot.daniel" target="_blank">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}

export default About;

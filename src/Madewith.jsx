
import React from 'react';
import {FaHtml5,FaCss3,FaJs,FaReact,FaCoffee,FaHeart} from 'react-icons/fa';
var Madewith = () => {
  return (
    <div class="made-with">
      <h1>Made With:</h1>
      <ul>
        <li title="HTML5"><FaHtml5 /></li>
        <li title="CSS3"><FaCss3/></li>
        <li title="Javascript"><FaJs/></li>
        <li title="React"><FaReact/></li>
        <li title="Coffee"><FaCoffee/></li>
        <li title="Love"><FaHeart/></li>

      </ul>
    </div>

  );
};
export default Madewith

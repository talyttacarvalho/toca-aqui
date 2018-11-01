import React from 'react';
// import logo from './logo.svg';
import './Card.css';
import PropTypes from 'prop-types';

function Card(props){
  return(
    <div className='my-card'>
      {props.children}
    </div>
  )
}

Card.propTypes = {
  // children: PropTypes.element.isRequired se fosse um só filho, mas como é mais de um é um array
  children: PropTypes.node.isRequired
};

export default Card;
import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name : "NokduJeon",
    image :
    "http://aeriskitchen.com/wp-content/uploads/2018/03/garlic_chive_jeon_01-1-1.jpg",
    rating : 4.3
  },
  {
    id:2,
    name : "TteokBokkI",
    image :
    "http://aeriskitchen.com/wp-content/uploads/2018/09/spicy_tteokbokki_01-1-1.jpg",
    rating : 4.5
  },
  {
    id:3,
    name : "OnionRings",
    image :
    "http://aeriskitchen.com/wp-content/uploads/2016/04/onion_rings_01-.jpg",
    rating : 3.3
  },
  {
    id:4,
    name : "KoreanEggBread",
    image :
    "http://aeriskitchen.com/wp-content/uploads/2012/03/egg_bread_01-.jpg",
    rating : 4.8
  },
  {
    id:5,
    name : "KimchiJeon",
    image :
    "http://aeriskitchen.com/wp-content/uploads/2010/02/kimchi_jeon_01-1.jpg",
    rating : 4.0
  }
  ];

function Food({ fav, picture, rating }) {
  return (
    <div>
    <h1>I like {fav}</h1>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={fav} />
    </div>
  );
}

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating:PropTypes.number
}

function App() {
  return (
  <div>
    {
      foodILike.map(
        dish => 
          <Food 
          key ={dish.id} 
          fav={dish.name}
          picture={dish.image}
          rating = {dish.rating} />
      )
    }
  </div>
  );
}



export default App;

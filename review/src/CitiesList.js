import React from "react";
import PropTypes from "prop-types";

const CitiesList = props => {
  console.log("Props", props);
  // map over citiesProp return a dom elment for each city name in list
  return <div>{props.citiesProp.map(c => <div>{c.city}</div>)}</div>;
};

CitiesList.propTypes = {
  greeting: PropTypes.string.isRequired,
  name: PropTypes.string,
  citiesProp: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      state: PropTypes.string,
      population: PropTypes.number,
      land_area: PropTypes.number
    })
  )
};

export default CitiesList;
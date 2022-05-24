import React from 'react';
import {v4 as uudv4} from 'uuid';
import Country from './Country';

const Countries = (props) => {
  return (

    <section>
    {props.countries.map((country)=>{
      const countryNew= {country, id:uudv4()}

      return <Country {...countryNew} key={countryNew.id}/>
    })}
    
  </section>
    
  );
};

export default Countries;
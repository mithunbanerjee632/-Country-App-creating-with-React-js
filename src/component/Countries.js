import React from 'react';
import {v4 as uudv4} from 'uuid';
import Country from './Country';
import style from './countries.module.css';

const Countries = (props) => {
  return (

    <section className={style.countries}>
    {props.countries.map((country)=>{
      const countryNew= {country, id:uudv4()}

      return <Country {...countryNew} key={countryNew.id}/>
    })}
    
  </section>
    
  );
};

export default Countries;
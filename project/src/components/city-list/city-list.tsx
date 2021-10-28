/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from 'react';

import { City } from '../../types/offer';

type CityListProps = {
  cityList: City[],
  selectedCity: string,
  setSelectedCity: (city: string) => void,
}

function CityList({ cityList, selectedCity, setSelectedCity }: CityListProps): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {
        cityList.map((city) => (
          <li className="locations__item">
            <a onClick={() => { setSelectedCity(city.name); }} className={`locations__item-link tabs__item ${selectedCity === city.name ? 'tabs__item--active' : ''}`} href="#">
              <span>{city.name}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default CityList;

/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from 'react';
// import { citiesList } from '../../const';

type CityListProps = {
  cityList: string[],
  selectedCity: string,
  setSelectedCity: (city: string) => void,
}

function CityList({ cityList, selectedCity, setSelectedCity }: CityListProps): JSX.Element {

  return (
    <ul className="locations__list tabs__list">
      {
        cityList.map((cityName) => (
          <li className="locations__item">
            <a onClick={() => { setSelectedCity(cityName); }} className={`locations__item-link tabs__item ${selectedCity === cityName ? 'tabs__item--active' : ''}`} href="#">
              <span>{cityName}</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default CityList;

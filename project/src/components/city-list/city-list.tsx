import React from 'react';
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
          <li className="locations__item" key={city.name}>
            <button onClick={() => { setSelectedCity(city.name); }} className={`locations__item-link tabs__item ${selectedCity === city.name ? 'tabs__item--active' : ''}`}>
              <span>{city.name}</span>
            </button>
          </li>
        ))
      }
    </ul>
  );
}

export default React.memo(CityList);

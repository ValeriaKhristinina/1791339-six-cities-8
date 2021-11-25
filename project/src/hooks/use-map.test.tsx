import { renderHook } from '@testing-library/react-hooks';
import useMap from './use-map';
import { CITIES } from '../const';

describe('Hook: useMap', () => {

  it('should return map', () => {
    const mapRef = { current: document.createElement('div') };
    const { result } = renderHook(() =>

      useMap(mapRef, CITIES[0]),
    );

    const map = result.current;

    expect(map).not.toBe(null);
    expect(map.map?.getCenter().lat).toBe(CITIES[0].location.latitude);
  });
});

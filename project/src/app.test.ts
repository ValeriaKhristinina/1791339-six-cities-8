import {AuthorizationStatus, isCheckedAuth} from './const';

describe('Function: isCheckedAuth', () => {
  it('should return "true" when AuthorizationStatus is Unknown', () => {

    const unknownAuthorizationStatus = AuthorizationStatus.Unknown;
    expect(isCheckedAuth(unknownAuthorizationStatus))
      .toBe(true);
  });
});

import 'jest-localstorage-mock';

import {
  toggleTheme,
  userIsLoggedIn,
  userIsLoggedOut,
  appIsLoading,
  appIsNotLoading,
} from './appSlice';

describe('actions', () => {
  it('should create an action to toggle the theme', () => {
    const expectedAction = { type: toggleTheme.type };
    expect(toggleTheme()).toEqual(expectedAction);
  });

  it('should create an action to log the user in', () => {
    const expectedAction = { type: userIsLoggedIn.type };
    expect(userIsLoggedIn()).toEqual(expectedAction);
  });

  it('should create an action to log the user out', () => {
    const expectedAction = { type: userIsLoggedOut.type };
    expect(userIsLoggedOut()).toEqual(expectedAction);
  });

  it('should create an action to indicate app loading', () => {
    const expectedAction = { type: appIsLoading.type };
    expect(appIsLoading()).toEqual(expectedAction);
  });

  it('should create an action to indicate app not loading', () => {
    const expectedAction = { type: appIsNotLoading.type };
    expect(appIsNotLoading()).toEqual(expectedAction);
  });
});

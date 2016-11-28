import { LocationManagerPage } from './app.po';

describe('location-manager App', function() {
  let page: LocationManagerPage;

  beforeEach(() => {
    page = new LocationManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

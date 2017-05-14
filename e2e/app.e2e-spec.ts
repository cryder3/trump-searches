import { TrumpSearchesPage } from './app.po';

describe('trump-searches App', function() {
  let page: TrumpSearchesPage;

  beforeEach(() => {
    page = new TrumpSearchesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

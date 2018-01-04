import { AngularTrufflePage } from './app.po';

describe('angular-truffle App', () => {
  let page: AngularTrufflePage;

  beforeEach(() => {
    page = new AngularTrufflePage();
  });

  it('should display message saying app works', async() => {
    page.navigateTo();
    expect(await page.getParagraphText()).toEqual('app works!');
  });
});

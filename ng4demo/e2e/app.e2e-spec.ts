import { Ng4demoPage } from './app.po';

describe('ng4demo App', () => {
  let page: Ng4demoPage;

  beforeEach(() => {
    page = new Ng4demoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

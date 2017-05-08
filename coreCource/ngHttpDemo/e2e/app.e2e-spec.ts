import { NgHttpDemoPage } from './app.po';

describe('ng-http-demo App', () => {
  let page: NgHttpDemoPage;

  beforeEach(() => {
    page = new NgHttpDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

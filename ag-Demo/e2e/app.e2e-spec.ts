import { AgDemoPage } from './app.po';

describe('ag-demo App', function() {
  let page: AgDemoPage;

  beforeEach(() => {
    page = new AgDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

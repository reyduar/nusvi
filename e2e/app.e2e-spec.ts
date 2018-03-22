import { NusviWebappPage } from './app.po';

describe('nusvi-webapp App', () => {
  let page: NusviWebappPage;

  beforeEach(() => {
    page = new NusviWebappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

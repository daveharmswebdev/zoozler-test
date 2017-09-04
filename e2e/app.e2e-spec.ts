import { ZoozlerTestPage } from './app.po';

describe('zoozler-test App', () => {
  let page: ZoozlerTestPage;

  beforeEach(() => {
    page = new ZoozlerTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

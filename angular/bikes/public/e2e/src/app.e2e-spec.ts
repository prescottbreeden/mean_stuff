import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app name', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('BikesRus');
  });

  it('should display complete inventory', () => {
    expect(page.getAllBikes());
  });
});

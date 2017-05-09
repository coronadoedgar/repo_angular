import { ProjectApiPage } from './app.po';

describe('project-api App', () => {
  let page: ProjectApiPage;

  beforeEach(() => {
    page = new ProjectApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

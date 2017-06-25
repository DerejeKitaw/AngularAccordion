import { AngularAccordionPage } from './app.po';

describe('angular-accordion App', () => {
  let page: AngularAccordionPage;

  beforeEach(() => {
    page = new AngularAccordionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

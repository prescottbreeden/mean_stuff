import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('title')).getText();
  }

  getAllBikes() {
    return element(by.css('bikes__item')).isPresent();
  }
}

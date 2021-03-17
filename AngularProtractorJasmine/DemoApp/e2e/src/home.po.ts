
import { browser, by, element } from 'protractor';

export class homePage 
{
  public baseUrl ='http://localhost:4200/';

  navigateTo(): any
  {
    //browser.ignoreSynchronization= false;
    browser.waitForAngularEnabled(true);
    return browser.get(this.baseUrl);

  }
  getbrowserTitle(): any 
  {
    return browser.getTitle();
   
  }
}
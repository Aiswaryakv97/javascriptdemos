import { browser, by, element } from 'protractor';

export class AppPage 
{
   public baseUrl="https://opensource-demo.orangehrmlive.com/";


   navigateTo(): any
   {
     browser.ignoreSynchronization= true;
     //browser.waitForAngularEnabled;
    return browser.get(browser.baseUrl);
  }


    getbrowserTitle(): any
  {
    return browser.getTitle();
  }

  setUsername(word: string): void
  {
    element(by.id('txtUsername')).sendKeys(word);
  }

  setPassword(word: string): void
  {
    element(by.id('txtPassword')).sendKeys(word);
  }

  clickloginbutton() :any
  {
    element(by.id('btnLogin')).click();
  }

  clickToWelcomeUser(): any
  {
    element(by.partialLinkText('Welcome')).click();
  }

  clickToLogout(): any
  {
    element(by.xpath('//*[@id="welcome-menu"]/ul/li[2]/a')).click();

  }

}

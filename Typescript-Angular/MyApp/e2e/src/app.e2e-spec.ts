import { assert } from 'console';
import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Orange HRM Test Suite App 1', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo;
    browser.sleep(3000);
  });

  it('Valid Login test01',async()=>
  {
    page.setUsername('Admin');
    page.setPassword('admmin123');
    page.clickloginbutton();
    page.clickToWelcomeUser();
    page.clickToLogout();
    expect(page.getbrowserTitle()).toEqual('OrangeHRM');
    
    
  });

  it('Invalid Login test01',async()=>
  {
    page.setUsername('Admin');
    page.setPassword('kdfhkjf');
    page.clickloginbutton();
      });
 
});

import { homePage } from './home.po';
import { browser, logging } from 'protractor';

describe('DemoApp Test Suite App 1', () => {
  let home: homePage;

  beforeAll( ()=>
  {
   home= new homePage();
 home.navigateTo();
   browser.sleep(3000);
   
  }) 


  it('Angular Test01', async()=>
    {

        home.getbrowserTitle
        expect(home.getbrowserTitle()).toMatch('DempApp');
        browser.sleep(3000);


})
it('Angular Test02', async()=>
    {

        
        browser.sleep(3000);


})
});
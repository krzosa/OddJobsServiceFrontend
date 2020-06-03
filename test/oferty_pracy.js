const {describe, it, before, after} = require('mocha');
const expect = require('chai').expect;
const {Eyes} = require('eyes.selenium');
const path = require('path');
const express = require('express');
const webdriver = require('selenium-webdriver');
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
require('chromedriver');

const {By, until} = webdriver



describe('oferty pracy', function () {
  let driver;

  this.timeout(60000);

  before(async () => {
    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
      await driver.get('http://localhost:3000');
      await delay(3000);
      driver.manage().window().maximize();
  });
 after(async () =>  driver.quit());

  
  it('All button should work', async function () {
   await driver.findElement(By.linkText("Oferty pracy")).click();
   await delay(3000);
  
   let formFilter = await driver.findElement(By.xpath("//input[@placeholder='Miasto']")).isDisplayed();
   expect(formFilter).to.equal(true);

   formFilter = await driver.findElement(By.xpath("//input[@placeholder='Miasto']")).isDisplayed();
   expect(formFilter).to.equal(true);
  });
});
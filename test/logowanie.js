const {describe, it, before, after} = require('mocha');
const expect = require('chai').expect;
const {Eyes} = require('eyes.selenium');
const path = require('path');
const express = require('express');
const webdriver = require('selenium-webdriver');
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
require('chromedriver');

const {By, until} = webdriver



describe('app', function () {
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

  
  it('Check Nie ma takiego konta lub złe hasło', async function () {
   await driver.findElement(By.linkText("Logowanie")).click();
   await delay(3000);

   await driver.findElement(By.id("username")).sendKeys("Vasya");
   await delay(3000);

   await driver.findElement(By.id("password")).sendKeys("Vasya");
   await delay(3000);

   await driver.findElement(By.id("zal")).click();
   await delay(3000);

   const alerttext = await driver.switchTo().alert().getText();
   expect(alerttext).to.equal("Nie ma takiego konta lub złe hasło");

   await driver.switchTo().alert().accept();

   await driver.findElement(By.xpath("//a[@class='navbar-brand']")).click();
    
  });

  it('Check warning', async function () {
    await driver.findElement(By.linkText("Logowanie")).click();
    await delay(3000);

    await driver.findElement(By.id("zal")).click();
    await delay(3000);

    let texterror = await driver.findElement(By.id("userNameId")).getText();
    expect(texterror).to.equal("Uzupełnij nazwę użytkownika");

    texterror = await driver.findElement(By.id("passwordId")).getText();
    expect(texterror).to.equal("Uzupełnij hasło");
 
 
    await driver.findElement(By.xpath("//a[@class='navbar-brand']")).click();
     
   });
});
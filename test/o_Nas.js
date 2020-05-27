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

  
  it('Check kontent, Test1', async function () {
   await driver.findElement(By.linkText("O nas")).click();
   await delay(3000);

   let text = await driver.findElement(By.tagName("h1")).getText();
   expect(text).to.equal("Co robimy?");

   text = await driver.findElement(By.tagName("h2")).getText();
   expect(text).to.equal("Zobacz najciekawsze oferty");

   text = await driver.findElement(By.xpath("//div[2]//h1")).getText();
   expect(text).to.equal("Kontakt");

   let card = await driver.findElement(By.id("card1")).isDisplayed();
   expect(card).to.equal(true);

   card = await driver.findElement(By.id("card2")).isDisplayed();
   expect(card).to.equal(true);

   card = await driver.findElement(By.id("card3")).isDisplayed();
   expect(card).to.equal(true);

   let footer = await driver.findElement(By.id("kan")).getText();
   expect(footer).to.equal("Dla kandydatów");

   footer = await driver.findElement(By.id("firm")).getText();
   expect(footer).to.equal("Dla firm");

   footer = await driver.findElement(By.id("grup")).getText();
   expect(footer).to.equal("Grupa Pracuj");

   footer = await driver.findElement(By.id("inform")).getText();
   expect(footer).to.equal("Informacje");

   let icon = await driver.findElement(By.id("inst")).isDisplayed();
   expect(icon).to.equal(true);

   icon = await driver.findElement(By.xpath("//i[@class='fab fa-twitter']")).isDisplayed();
   expect(icon).to.equal(true);

   await driver.findElement(By.xpath("//a[@class='navbar-brand']")).click();
   await delay(3000);

    
  });

  it('Check lub dodaj wlasne, Test2', async function () {
    await driver.findElement(By.linkText("O nas")).click();
    await delay(1500);

    await driver.findElement(By.xpath("//h2[@id='dodaj']//a")).click();
    await delay(1500);

    let button = await driver.findElement(By.id("log")).isDisplayed();
    expect(button).to.equal(true);

    button = await driver.findElement(By.id("reg")).isDisplayed();
    expect(button).to.equal(true);
 
    await driver.findElement(By.xpath("//a[@class='navbar-brand']")).click();
     
   });
});
const {describe, it, before, after} = require('mocha');
const expect = require('chai').expect;
const {Eyes} = require('eyes.selenium');
const path = require('path');
const express = require('express');
const webdriver = require('selenium-webdriver');
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
require('chromedriver');


const {By, until} = webdriver

describe('test', function () {
  let driver;

  this.timeout(60000)

  before(async () => {
    driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build()
      await driver.get('http://localhost:3000');
      await delay(3000);
      driver.manage().window().maximize();
  });
  after(async () => await driver.quit())

  it('start and stop, Test=1', async function () {
    const title = await driver.getTitle();
    expect(title).to.equal("Prace dorywcze");
  });
});
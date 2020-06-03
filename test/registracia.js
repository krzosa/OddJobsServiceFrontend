const {describe, it, before, after} = require('mocha');
const expect = require('chai').expect;
const {Eyes} = require('eyes.selenium');
const path = require('path');
const express = require('express');
const webdriver = require('selenium-webdriver');
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
require('chromedriver');

const {By, until} = webdriver



describe('registracia', function () {
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
   await driver.findElement(By.linkText("Rejestracja")).click();
   await delay(3000);

   let button = await driver.findElement(By.id("log")).isEnabled();
   expect(button).to.equal(true);
   
   button = await driver.findElement(By.id("reg")).isEnabled();
   expect(button).to.equal(false);

   let checkBoxs = await driver.findElement(By.xpath("//input[@type='checkbox']")).isSelected();
   expect(checkBoxs).to.equal(false);

   await driver.findElement(By.xpath("//input[@type='checkbox']")).click();
   await delay(150);

   checkBoxs = await driver.findElement(By.xpath("//input[@type='checkbox']")).isSelected();
   expect(checkBoxs).to.equal(true);

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
    
  });

  it('Check error empti input', async function () {
    await driver.findElement(By.linkText("Rejestracja")).click();
    await delay(3000);

    await driver.findElement(By.id("zareg")).click();
    await delay(1500);

    let texterror = await driver.findElement(By.id("errorFirstName")).getText();
    expect(texterror).to.equal("Uzupełnij imię");

    texterror = await driver.findElement(By.id("errorLastName")).getText();
    expect(texterror).to.equal("Uzupełnij nazwisko");

    texterror = await driver.findElement(By.id("errorUserName")).getText();
    expect(texterror).to.equal("Uzupełnij nazwę użytkownika");

    texterror = await driver.findElement(By.id("errorPhoneNumber")).getText();
    expect(texterror).to.equal("Uzupełnij numer telefonu");

    texterror = await driver.findElement(By.id("errorEmail")).getText();
    expect(texterror).to.equal("Uzupełnij email");

    texterror = await driver.findElement(By.id("errorPassword")).getText();
    expect(texterror).to.equal("Uzupełnij hasło");

    texterror = await driver.findElement(By.id("errorChecked")).getText();
    expect(texterror).to.equal("Zaznacz oświadczenie");
 
    await driver.findElement(By.xpath("//a[@class='navbar-brand']")).click();
    await delay(1500);
     
   });

   it('Check error input, TestId=1', async function () {
    await driver.findElement(By.linkText("Rejestracja")).click();
    await delay(1500);

    await driver.findElement(By.id("firstName")).sendKeys("Vasya1");
    await delay(1500);

    await driver.findElement(By.id("lastName")).sendKeys("Vasya1");
    await delay(1500);

    await driver.findElement(By.id("userName")).sendKeys("test");
    await delay(1500);

    await driver.findElement(By.id("phoneNumber")).sendKeys("1111111");
    await delay(1500);

    await driver.findElement(By.id("email")).sendKeys("vasya@gmail.com");
    await delay(1500);

    await driver.findElement(By.id("password")).sendKeys("vasya");
    await delay(1500);

    await driver.findElement(By.id("passwordRepeat")).sendKeys("vasya");
    await delay(1500);

    await driver.findElement(By.xpath("//input[@type='checkbox']")).click();
    await delay(1500);

    await driver.findElement(By.id("zareg")).click();
    await delay(1500);

    const alerttext = await driver.switchTo().alert().getText();
    expect(alerttext).to.equal("Nie zarejestrowano");
    await driver.switchTo().alert().accept();

    let texterror = await driver.findElement(By.id("errorFirstName")).getText();
    expect(texterror).to.equal("Nieprawidłowe znaki");

    texterror = await driver.findElement(By.id("errorLastName")).getText();
    expect(texterror).to.equal("Nieprawidłowe znaki");

    texterror = await driver.findElement(By.id("errorUserName")).getText();
    expect(texterror).to.equal("Użytkownik o podanej nazwie użytkownika istnieje");

    texterror = await driver.findElement(By.id("errorPhoneNumber")).getText();
    expect(texterror).to.equal("Numer telefonu jest za krótki");

    await driver.findElement(By.xpath("//a[@class='navbar-brand']")).click();
    await delay(1500);

   });

   it('Check error input, TestId=2', async function () {
    await driver.findElement(By.linkText("Rejestracja")).click();
    await delay(1500);

    await driver.findElement(By.id("firstName")).sendKeys("V");
    await delay(1500);

    await driver.findElement(By.id("lastName")).sendKeys("V");
    await delay(1500);

    await driver.findElement(By.id("userName")).sendKeys("t");
    await delay(1500);

    await driver.findElement(By.id("phoneNumber")).sendKeys("111111111");
    await delay(1500);

    await driver.findElement(By.id("email")).sendKeys("vasya@gmail.com");
    await delay(1500);

    await driver.findElement(By.id("password")).sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    await delay(1500);

    await driver.findElement(By.id("passwordRepeat")).sendKeys("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    await delay(1500);

    await driver.findElement(By.xpath("//input[@type='checkbox']")).click();
    await delay(1500);

    await driver.findElement(By.id("zareg")).click();
    await delay(1500);

    const alerttext = await driver.switchTo().alert().getText();
    expect(alerttext).to.equal("Nie zarejestrowano");
    await driver.switchTo().alert().accept();

    let texterror = await driver.findElement(By.id("errorFirstName")).getText();
    expect(texterror).to.equal("Imie jest za krótkie");

    texterror = await driver.findElement(By.id("errorLastName")).getText();
    expect(texterror).to.equal("Nazwisko jest za krótkie");

    texterror = await driver.findElement(By.id("errorUserName")).getText();
    expect(texterror).to.equal("Nazwa użytkownika jest za krótka");

    texterror = await driver.findElement(By.id("errorPhoneNumber")).getText();
    expect(texterror).to.equal("Użytkownik o podanym numerze telefonu istnieje");

    texterror = await driver.findElement(By.id("errorPassword")).getText();
    expect(texterror).to.equal("Hasło jest za długie");

    await driver.findElement(By.xpath("//a[@class='navbar-brand']")).click();
    await delay(1500);

   });

   it('Check error input, TestId=3', async function () {
    await driver.findElement(By.linkText("Rejestracja")).click();
    await delay(1500);

    await driver.findElement(By.id("firstName")).sendKeys("vasya");
    await delay(1500);

    await driver.findElement(By.id("lastName")).sendKeys("vasya");
    await delay(1500);

    await driver.findElement(By.id("userName")).sendKeys("vasya");
    await delay(1500);

    await driver.findElement(By.id("phoneNumber")).sendKeys("555555555");
    await delay(1500);

    await driver.findElement(By.id("email")).sendKeys("vasya@gmail.com");
    await delay(1500);

    await driver.findElement(By.id("password")).sendKeys("vasya");
    await delay(1500);

    await driver.findElement(By.id("passwordRepeat")).sendKeys("vasya");
    await delay(1500);

    await driver.findElement(By.xpath("//input[@type='checkbox']")).click();
    await delay(1500);

    await driver.findElement(By.id("zareg")).click();
    await delay(1500);

    const alerttext = await driver.switchTo().alert().getText();
    expect(alerttext).to.equal("Nie zarejestrowano");
    await driver.switchTo().alert().accept();

    let texterror = await driver.findElement(By.id("errorUserName")).getText();
    expect(texterror).to.equal("Użytkownik o podanej nazwie użytkownika istnieje");

    texterror = await driver.findElement(By.id("errorPhoneNumber")).getText();
    expect(texterror).to.equal("Użytkownik o podanym numerze telefonu istnieje");

    texterror = await driver.findElement(By.id("errorEmail")).getText();
    expect(texterror).to.equal("Użytkownik o podanym adresie email istnieje");

    await driver.findElement(By.xpath("//a[@class='navbar-brand']")).click();
    await delay(1500);
   });

   it('Check error input, TestId=4', async function () {
    await driver.findElement(By.linkText("Rejestracja")).click();
    await delay(1500);

    await driver.findElement(By.id("firstName")).sendKeys("vasya");
    await delay(1500);

    await driver.findElement(By.id("lastName")).sendKeys("vasya");
    await delay(1500);

    await driver.findElement(By.id("userName")).sendKeys("vasya2");
    await delay(1500);

    await driver.findElement(By.id("phoneNumber")).sendKeys("555555555555");
    await delay(1500);

    await driver.findElement(By.id("email")).sendKeys("a@gmail.com");
    await delay(1500);

    await driver.findElement(By.id("password")).sendKeys("v");
    await delay(1500);

    await driver.findElement(By.id("passwordRepeat")).sendKeys("v");
    await delay(1500);

    await driver.findElement(By.xpath("//input[@type='checkbox']")).click();
    await delay(1500);

    await driver.findElement(By.id("zareg")).click();
    await delay(1500);

    const alerttext = await driver.switchTo().alert().getText();
    expect(alerttext).to.equal("Nie zarejestrowano");
    await driver.switchTo().alert().accept();

    let texterror = await driver.findElement(By.id("errorPhoneNumber")).getText();
    expect(texterror).to.equal("Numer telefonu jest za długi");

    texterror = await driver.findElement(By.id("errorPassword")).getText();
    expect(texterror).to.equal("Hasło jest za krótkie");

    await driver.findElement(By.xpath("//a[@class='navbar-brand']")).click();
    await delay(1500);
   });

});
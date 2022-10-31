import {loginPage} from "../locators/LoginPage";
import {layout} from "../locators/Layout";

const { I } = inject();

export const expectNotToSeeElement = (locator: string) => {
    I.wait(1);
    I.dontSeeElement(locator);
};

export const expectToSeeElement = (locator: string) => {
    I.waitForElement(locator, 10);
    I.seeElement(locator);
};

export const expectToSeeOpened = async (url: string) => {
    const currentUrl: string = await I.grabCurrentUrl();
    I.assertStringIncludes(currentUrl, url);
};

export const expectToSee = (text: string, locator: string) => {
    I.waitForElement(locator, 10);
    I.see(text, locator);
};

export const expectToSeeWelcomeText = () => {
    I.waitForText("Welcome");
    I.waitForText("node runner!");
    I.see("Welcome Back! Please enter your Node UI password.", loginPage.locators.welcomeText);
};

export const expectUserLoggedInSuccessfully = async () => {
    I.waitForElement(layout.locators.logo,5)
    I.assertNotEqual(Object(await I.grabCookie('token')).value, null);
};
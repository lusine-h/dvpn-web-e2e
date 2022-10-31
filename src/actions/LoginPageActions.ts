import {loginPage} from "../locators/LoginPage";
import CommonActions from './CommonActions';

const { I } = inject();

export default class LoginPageActions extends CommonActions{
    public async logsIn(cred): Promise<void> {
        this.types(cred, loginPage.locators.passwordField);
        this.clicksOn(loginPage.locators.loginButton);
    }
}

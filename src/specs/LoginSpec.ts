import {User} from '../actions/User';
import { existingUsers, nodeUI } from '../data';
import {
    expectToSeeOpened,
    expectToSeeWelcomeText,
    expectUserLoggedInSuccessfully
} from "../assertions/assertions";

const user: User = new User();

Feature('Login page tests');

Before(async () => {
    user.navigatesTo(nodeUI.loginPage);
    expectToSeeOpened(nodeUI.baseURL)
});

Scenario('Login with valid password', async () => {
    expectToSeeWelcomeText()
    user.logsIn(existingUsers.validPassword);
    expectUserLoggedInSuccessfully();
})
    .tag('@loginTest')
    .tag('@validPassword');

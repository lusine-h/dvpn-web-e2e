const { I } = inject();

export default class CommonActions {
    public navigatesTo(url: string): void {
        I.amOnPage(url);
    }

    public clicksOn(selector: CodeceptJS.LocatorOrString, where?: CodeceptJS.LocatorOrString): void {
        I.waitForElement(selector, 10);
        I.click(selector, where);
    }

    public types(text, selector: CodeceptJS.LocatorOrString): void {
        I.waitForElement(selector, 10);
        I.fillField(selector, text);
    }

    public switchesToNextTab(num: number = 1, sec: number = 5): void {
        I.wait(sec);
        I.switchToNextTab(num);
    }

    public switchesToPreviousTab(num: number = 1, sec: number = 5): void {
        I.wait(sec);
        I.switchToPreviousTab(num);
    }

    public waits(sec: number = 2) {
        I.wait(sec);
    }
}

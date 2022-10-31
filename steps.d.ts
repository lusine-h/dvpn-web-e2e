/// <reference types='codeceptjs' />
type AssertWrapper = import('codeceptjs-assert');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, AssertWrapper {
    //AssertWrapper
    assert(actual: any, expected: any, message?: string): any;
    assertDeepEqual(actual: any, expected: any, message?: string): any;
    assertDeepStrictEqual(actual: any, expected: any, message?: string): any;
    assertEqual(actual: any, expected: any, message?: string): any;
    assertFail(actual: any, expected: any, message?: string, operator?: string): any;
    assertOk(value: any, message?: string): any;
    assertNotEqual(actual: any, expected: any, message?: string): any;
    assertNotDeepStrictEqual(actual: any, expected: any, message?: string): any;
    assertNotDeepEqual(actual: any, expected: any, message?: string): any;
    assertStatusCode(actual: any, expected: any): any;
    assertBodyIsNotEmpty(body: any): any;
    assertKeyInObjectExists(keys: string, obj: object): void;
    assertKeyInObjectNotExists(keys: string, obj: object): any;
    assertEach(items: any[], predicate: Function, message: string): void;
    assertExists(items: any[], predicate: Function, message: string): void;
    assertStringIncludes(actual: string, substring: string): void;

  }
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}

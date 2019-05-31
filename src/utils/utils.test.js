import * as functions from "./utils";

const TRANSLATE_DAYS = [0, 1, 0, 1, 1, 0, 0];
const NUMBER_DAYS = [0, 2, 3];
const WEEKENDS = ["Sat", "Sun"];
const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const INDIVIDUAL_DAYS = ["Mon", "Tue", "Wed", "Thu"];

describe("Check if functions exists", () => {
  test("randomWeekNumber does exists", () =>
    expect(functions.randomWeekNumber).toBeDefined());

  test("getRandomDays does exists", () =>
    expect(functions.getRandomDays).toBeDefined());

  test("getRandomRide does exists", () =>
    expect(functions.getRandomRide).toBeDefined());

  test("getDaysFromIndex does exists", () =>
    expect(functions.getDaysFromIndex).toBeDefined());

  test("randomGenerator does exists", () =>
    expect(functions.randomGenerator).toBeDefined());

  test("translateDays does exists", () =>
    expect(functions.translateDays).toBeDefined());

  test("checkSelected does exists", () =>
    expect(functions.checkSelected).toBeDefined());
});

describe(" Testing days functions ", () => {
  test("RandomWeekNumber with no parameters", () =>
    expect(functions.randomWeekNumber()).toBeDefined());

  test(" getDaysFromIndex with no parameters ", () =>
    expect(functions.getDaysFromIndex()).toBe(0));

  test(" getDaysFromIndex with parameters [0,2,3] ", () =>
    expect(functions.getDaysFromIndex(NUMBER_DAYS)).toEqual([
      "Sun",
      "Tue",
      "Wed"
    ]));

  test(" checkSelected check weekends ", () =>
    expect(functions.checkSelected(WEEKENDS)).toEqual(["Weekends"]));

  test(" checkSelected check WeekDays ", () =>
    expect(functions.checkSelected(WEEK_DAYS)).toEqual(["Week Days"]));

  test(" checkSelected check individual days ", () =>
    expect(functions.checkSelected(INDIVIDUAL_DAYS)).toEqual(INDIVIDUAL_DAYS));

  test(" translateDays is working ", () =>
    expect(functions.translateDays(TRANSLATE_DAYS)).toEqual([
      "Mon",
      "Wed",
      "Thu"
    ]));
});

describe(" Testing helpers functions ", () => {
  test("getRandomDays is working", () =>
    expect(functions.getRandomDays()).toBeDefined());

  test("randomGenerator is working", () =>
    expect(functions.randomGenerator()).toBeDefined());
});

import { describe, it, expect } from "vitest";
import { classNames } from "./index";

describe("Styles", () => {
  it("Should merge two class names", () => {
    const classes = classNames("foo", "boo");
    expect(classes).toBe("foo boo");
  });

  it("Should ignore falsy boolean class", () => {
    const classes = classNames("foo", false);
    expect(classes).toBe("foo");
  });

  it("Should ignore undefined class", () => {
    const classes = classNames("foo", undefined);
    expect(classes).toBe("foo");
  });
});

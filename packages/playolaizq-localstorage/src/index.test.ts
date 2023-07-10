import { describe, it, expect } from "vitest";
import { getLocalStorageItem, setLocalStorageItem } from "./index";

describe("Local Storage", () => {
  it("Should add and retrieve an item to local storage", () => {
    const key = "";
    const value = "Hello World!";
    setLocalStorageItem(key, value);

    const item = getLocalStorageItem(key);
    expect(item).toStrictEqual(value);
  });
});

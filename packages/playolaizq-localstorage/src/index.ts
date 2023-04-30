/**
 * It retrieves an item by key from the browser's local storage.
 * @param {String} key
 * @returns unknown
 *
 * @example
 * getLocalStorageItem("list"); // returns [{ id: 1, label: "List item 1" }]
 */

export function getLocalStorageItem(key: string): unknown {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

/**
 * It sets an item to the browser's local storage.
 * @param {String} key
 * @param {unknown} value
 *
 * @example
 * setLocalStorageItem("list", [{ id: 1, label: "List item 1" }]);
 */

export function setLocalStorageItem(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

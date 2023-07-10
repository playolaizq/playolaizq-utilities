/**
 * It merges a group of class names.
 * @param  {...Array} classes
 * @returns string
 *
 * @example
 * classNames("foo", "boo", false && "koo"); // returns "foo boo"
 */

export function classNames(...classes: Array<string | boolean | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

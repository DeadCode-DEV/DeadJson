type BufferEncoding =
  | "ascii"
  | "utf8"
  | "utf-8"
  | "utf16le"
  | "ucs2"
  | "ucs-2"
  | "base64"
  | "base64url"
  | "latin1"
  | "binary"
  | "hex";

interface options {
  encoding: BufferEncoding;
}
export interface Path {
  path?: string;
  options: options;
}

export interface space {
  spaces?: number;
}
export interface DataOBJ extends Record<string, object> {
  /** Returns a string representation of an object. */
  toString(): string;

  /** Returns a date converted to a string using the current locale. */
  toLocaleString(): string;

  /** Returns the primitive value of the specified object. */
  valueOf(): Object;

  /**
   * Determines whether an object has a property with the specified name.
   * @param v A property name.
   */
  hasOwnProperty(v: PropertyKey): boolean;

  /**
   * Determines whether an object exists in another object's prototype chain.
   * @param v Another object whose prototype chain is to be checked.
   */
  isPrototypeOf(v: Object): boolean;

  /**
   * Determines whether a specified property is enumerable.
   * @param v A property name.
   */
  propertyIsEnumerable(v: PropertyKey): boolean;
}
export interface DeadJSONInterface {
  add(key: string, data: any): any;
  delete(key: any): any;
  get(): any;
  save(space: space): any;
}
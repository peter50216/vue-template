export function assert<T>(value: T, message?: string): asserts value {
  if (!Boolean(value)) {
    try {
      throw new Error(message ?? "assertion error");
    } catch (e) {
      console.warn(e);
      throw e;
    }
  }
}

export function assertExists<T>(
  value: T | null | undefined,
  message = "value does not exist"
): T {
  assert(value != null, message);
  return value;
}

export function assertNotReached(): never {
  assert(false, "not reached");
}

export function checkEnumVariant<T extends string>(
  enumType: { [key: string]: T },
  value: string | null | undefined
): T | null {
  if (
    value === null ||
    value === undefined ||
    !Object.values<string>(enumType).includes(value)
  ) {
    return null;
  }
  return value as T;
}

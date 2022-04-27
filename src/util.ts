export function assert<T>(value: T, message?: string): asserts value {
  if (!value) {
    try {
      throw new Error(message ?? "assertion error");
    } catch (e) {
      console.warn(e);
      throw e;
    }
  }
}

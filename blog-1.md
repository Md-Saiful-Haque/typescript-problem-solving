# Why `any` is a Type Safety Hole and Why `unknown` is Safer in TypeScript

## Introduction

TypeScript is designed to add **type safety** to JavaScript. However, using `any` can completely defeat this purpose. On the other hand, `unknown` provides flexibility while still keeping type safety intact. This blog explains why `any` is risky and how `unknown` with type narrowing is a better alternative.

---

## Why `any` is Dangerous

The `any` type disables TypeScript's type checking. Once you use `any`, you can do anything with the value without errors.

### Example:

```typescript
let data: any = "Hello";

data.toUpperCase(); // Works
data.push(10);      // No error (but will crash at runtime!)
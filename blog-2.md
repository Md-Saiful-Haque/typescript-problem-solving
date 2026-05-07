# How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

---

## Introduction

In large TypeScript applications, developers often work with a master interface that contains many properties. However, different parts of the application may only need a few of those properties.

Instead of rewriting multiple similar interfaces, TypeScript provides utility types like `Pick` and `Omit` to create smaller specialized versions of existing interfaces.

This approach follows the **DRY (Don't Repeat Yourself)** principle by reducing duplicate code and improving maintainability.

---

# Understanding the DRY Principle

DRY means:

> "Avoid writing the same code multiple times."

Duplicate type definitions make code harder to maintain because changing one interface may require updating many other interfaces manually.

Utility types solve this problem by reusing existing types.

---

# `Pick` Utility Type

`Pick` creates a new type by selecting specific properties from another interface.

## Example of Pick

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
}

type UserProfile = Pick<User, "id" | "name" | "email">;

const profile: UserProfile = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};
```
## Why use Pick?

Suppose you need user information for a public profile page. You do not need sensitive data like passwords.

Instead of creating another interface manually, Pick allows you to reuse the existing User interface safely.

- Less repetition
- Better consistency
- Easier maintenance

---

## The Omit Utility Type

Omit creates a new type by removing specific properties from an existing interface.


## Example of Omit
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
}

type SafeUser = Omit<User, "password">;

const user: SafeUser = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  age: 25,
};
```
## Why use Omit?

In many cases, certain properties should not be exposed, such as passwords or private data.

Using Omit avoids rewriting almost identical interfaces.

---

## Without Pick and Omit

Without utility types, developers often create duplicate interfaces manually:
```typescript
interface UserProfile {
  id: number;
  name: string;
  email: string;
}

interface SafeUser {
  id: number;
  name: string;
  email: string;
  age: number;
}
```

This creates several problems:
- Duplicate code
- Harder maintenance
- Increased chance of inconsistency
- More effort when updating interfaces

## Conclusion

Pick and Omit are powerful TypeScript utility types that help developers create specialized "slices" of a master interface without duplicating code.
- Pick selects needed properties
- Omit removes unnecessary properties
By reusing existing interfaces, these utility types keep code clean, maintainable, scalable, and fully aligned with the DRY (Don't Repeat Yourself) principle.
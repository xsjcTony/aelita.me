---
slug: allow-all-except-specific-types
title: Allow All Except Specific Types
date: 2025-07-14
categories: ['ts']
lang: en
duration: 15
description: Learn how to allow all types except specific ones in TypeScript.
---

> Hey, I have a function and I want to make its parameter accept any types **except** `number`. How can I achieve that?

Sometimes you might need this, so let's think about it. Generally if we write `arg: number`, it means we only accept the `number` type. But now we want to do the opposite, hence it should be a ternary looks like this:

```ts twoslash
function foo<T>(arg: T extends number ? never : T) {
  // ...
}
```

We should return `never` if the type is `number`, then the compiler will warn us if we pass a `number` to this function. However, writing it this way have several drawbacks:

- The excluded type is hardcoded to `number`.
- It's not reusable.

So instead, we can build a utility type that allows us to ban any type we want, and also provide the ability to specify the union type to be excluded from (default to `any`):

```ts twoslash
type BanType<BannedType, PassedInType> = PassedInType extends BannedType
  ? never
  : PassedInType

// use <T extends ...> to limit the passed in type if required
declare function banNumber<T>(bar: BanType<number, T>): void

banNumber('string') // ✅
banNumber(true) // ✅
// @errors: 2345
banNumber(123) // ❌
```

:::note
The built-in utility type

abcd
:::

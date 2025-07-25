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


Sometimes you might need this, so let's think about it.

First you may think about the built-in utility type `Exclude`, which allows you to exclude specific types from a union type. However, it doesn't work for this case because it requires a union type to exclude from, but unfortunately `any` is **NOT** a union type.


```ts title='bad-example.ts' twoslash
declare function foo(arg: Exclude<any, number>): void

foo('string') // ✅
foo(true) // ✅
foo(123) // ✅ this still works and raises no error 😢
```


As you can see, passing a `number` to the `foo` function does not raise any error, because `Exclude<any, number>` resolves to `any`. To address this, we need to narrow the type of the parameter to exclude `number` specifically.

We can introduce a generic type which will automatically inferred as the passed in type, and checks if it assignable to `number`. If it is, we can return `never`, which will effectively ban the type from being passed to the function.

The built-in utility type `Exclude` is an alias of what we are trying to do above, so we can write it in both ways:


```ts twoslash
// @errors: 2345
declare function banNumber<T>(arg: T extends number ? never : T): void

banNumber('string') // ✅
banNumber(true) // ✅
banNumber(123) // ❌

// or using `Exclude`
declare function banNumberWithExclude<T>(arg: Exclude<T, number>): void

banNumberWithExclude('string') // ✅
banNumberWithExclude(true) // ✅
banNumberWithExclude(123) // ❌
```

---


Because generic type is introduced, we can extend the usage it in a bunch of ways.

- We can limit the type that can be passed in, to only allow certain types except `number`:


```ts twoslash
// @errors: 2345
type UnionTypeWithNumber = string | number | null

declare function banNumber<
  T extends UnionTypeWithNumber
>(arg: Exclude<T, number>): void

banNumber('string') // ✅
banNumber(null) // ✅
banNumber(123) // ❌
banNumber(true) // ❌ because now only `string | null` is allowed
```


- We can also use it to ban other types by introducing another generic type:


```ts twoslash
// @errors: 2558
// @errors: 2345
declare function banTypes<BannedTypes, T>(arg: Exclude<T, BannedTypes>): void

banTypes<string, number | boolean | null>(123) // ✅
banTypes<string, number | boolean | null>('string') // ❌

// ⚠️ Passing `any` as second generic argument won't work
banTypes<string, any>('string')
```


:::caution
In order to take advantage of this, you have to explicitly pass the second generic type to limit the type of the parameter, unless you give it a default type like `T = SomeType`.

You **CANNOT** use `T = any` because it will resolve to `any` as the parameter's type, hence passing anything as the argument is acceptable.
:::

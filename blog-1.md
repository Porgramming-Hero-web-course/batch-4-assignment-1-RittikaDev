## The significance of union and intersection types in Typescript

#### Union types

Union types in TypeScript allow us to define a variable or parameter that can hold values of multiple types. For example, below allows value to be either a string or a number.

```
let value: string | number;
```

In the above example, value can be either of the two types — string or number. It can accept any of these two types as its value.

#### Intersection types

On the other hand, intersection types, combine multiple types into one, meaning the variable must satisfy all the types For example, below variable employee requires one employee to have both OfficialInfo and PersonalInfo properties.

```
let employee: OfficialInfo & PersonalInfo;
```

# 3 задание

Реализуйте функцию protectObjectValueFromChange, которая в качестве входных параметров принимает объект и имя поля
Функция должна запретить изменение указанного свойства

Например

```ts
    const testObject = {
        a: 5;
    }

    protectObjectValueFromChange(testObject, 'a');
    testObject.a = 10; // TypeError: Cannot assign to read only property
```

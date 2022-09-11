import { strict as assert } from "assert";
import { copyObject } from "../solution.js";

const testObject = {
    a: 'stringExample',
    b: 5,
    c: true,
    d: {
        a: 'stringExample',
        b: 5,
        c: false,
        d: () => console.log('Я вложенная функция'),
    },
    e: (lol, kek) => {
        console.log(lol, kek)
    },
}

export const simpleCopyTest = () => {
    const copy = copyObject(testObject);

    assert.equal(JSON.stringify(testObject) === JSON.stringify(copy), true);
}

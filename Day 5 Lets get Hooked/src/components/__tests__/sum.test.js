import {sum} from "../sum";

test("Sum function should calculate the sum of two numbers" , ()=>{
    const result = sum(23 , 34);

    // Assertion: (not mandatory but suggested...)
    expect(result).toBe(57);
});
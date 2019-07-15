//#region Variable

// var -> global or local in function
// let -> use in scope
// const -> stable var can't channge
// name var is sensitive 
const t = [1, 3, 5]
// t = [4, 4, 4] can't assign
// but edit 
t[0] = 4;
t[1] = 4;
t[2] = 4;
console.log(t);
Object.freeze(t) // set t can't edit

//#endregion

//#region Escapestring
var escapeString1 = 'Gun \'and \' Mick "and"';
var escapeString2 = "Gun \"and \" Mick \\'and'";
var tr = typeof escapeString2 == "string" ? true : false; // typeOf
console.log(tr);
//#endregion

//#region ref index string
var sampleString = "Gun"
sampleString[0] = "F"; // can't change can new assign
console.log(sampleString[0]); // G
sampleString[0]; // get first char
sampleString[sampleString.length - 1]; // get last char
//#endregion

//#region Multi Array 
var myVar = [[1, 2, 3], [4, 5, 6], [[10, 11, 12], 13, 14]]
console.log(myVar[0][2]); // 3
console.log(myVar[2][0][1]); // 11
console.log(myVar[2][1]); // 13
//#endregion

//#region Array
// push -> push on array
// pop -> remove last element
// shift -> remove first element
// unshift -> push become fisrt element
let a = 5, b = 6;
var x = 5, y = 6;
console.log(`Before : ${a} ${b}`);
[a, b] = [b, a]
console.log(`After : ${a} ${b}`);
const source = [1, 2, 3, 4, 5, 6, 7];
const arr = (list) => {
    // rest op in array
    const [, , ...ar] = list;
    return ar;
};
console.log(source);
console.log(arr(source));
//#endregion

//#region Import Export
/* import
    import { name } from './nameFile' -> import ทีละตัว
    import * as obj from './nameFile' -> importทั้งหมดในไฟล์นั้น มาเก็บเป็น obj ตัวนึงเอาไปเรียกใช้
 */
/* export
    export เอาไว้หน้า var, const ,funct, class ที่อยาก export หรือ
    สร้าง var, const ,funct, class ไว้ก่อน
    แล้ว export { name } -> name ของ var, const ,funct, class ที่อยาก export
 */
//#endregion 



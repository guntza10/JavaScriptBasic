//#region JSON
/* 
    var strinJSON = JSON.stringify(JsonData) -> convert data to JsonString
    var javaScriptObject = JSON.parse(strinJSON);
*/
//#endregion

//#region Comparison
/* 
    === -> compare wthout covert both -> check b4 type of both same
    == -> convert both before compare
    3 === '3' -> false
    3 === 3 -> true
    3 == '3' -> true
 */
//#endregion Comparison

//#region Math
Math.random() // rand 0 to 1 -> can be 0 not be 1 
Math.random() * 10 // rand 0 to 10 -> can be 0 not be 10 
Math.round() // less than 0.5 ปัดลง more than 0.5 ปัดขึ้น
Math.floor() // ปัดลงเสมอ
//#endregion

//#region object
var myObject = {
    id: "1400600172982",
    name: "Gun",
    sex: "Male",
    // array
    SongLike: [
        "rock",
        "pop",
        "jazz"
    ],
    // object
    SongLike2: {
        rock: "OneOkRock",
        pop: "taylor",
        jazz: "Bruno"
    }
}
console.log(myObject.SongLike[0]);
console.log(myObject.SongLike2["rock"]);
console.log(myObject["SongLike2"]["pop"]);
console.log(myObject.SongLike2.jazz);
//ref property key
console.log(myObject['id']);
console.log(myObject["id"]);
console.log(myObject.id);
myObject.name = "Mick";
myObject['name'] = "Mick";
//delete property
delete myObject.name;
// add property
myObject['tel'] = "0845167512"; // add property tel
//#endregion

//#region DefaultValue
// function CheckDefault(num) {
//     return num || 2;
// }
// function CheckDefault2(num = 2) {
//     return num;
// }
//#endregion

//#region parseInt
var numB = '5';
var numC = '1111';
console.log(parseInt(numB));
console.log(parseInt(numB, 10)); //แปลงสตริงตัวเลขฐาน 10
console.log(parseInt(numC, 2)); //แปลงสตริงตัวเลขฐาน 2
//#endregion

//#region Ternary (short if)
var a = 10;
var b = 10;
console.log((a > b) ? "yes" : "no");
console.log((a > b) ? "a > b" : (a < b) ? "a > b" : "a = b"); // multi condition
//#endregion

//#region Function
const anonymousFuncFull = function () {
    return "Test anonymousFuncFull";
};
// arrow func
const anonymousFuncShort1 = () => {
    return "Test anonymousFuncShort1";
};
// arrow func return 1 value
const anonymousFuncShort2 = () => "Test anonymousFuncShort2";
//#endregion

//#region javascript query

// filter -> find array follow condition
// map -> select field follow condition
const list = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const list2 = [4, 5, 6, 7];
var test = list.filter(x => x > 0).map(x => Math.floor(x)).reduce((sum, num) => sum + num, 0); // 0 ที่เป็น initial var จะกำหนดหรือไม่ก็ได้
console.log(test);

//#endregion

//#region Rest Operation
// With Function Parameter
function sum(x, y, z) {
    const args = [x, y, z]
    return args.reduce((sum, num) => sum + num, 0);
}
// use rest operation -> ไม่ว่าอะไรที่รับเข้ามาจะถือว่าเป็น array เดียวกัน [...args]
function sumWthRestOperation(...args) {
    return args.reduce((sum, num) => sum + num, 0);
}
console.log(`Normal : ${sum(1, 2, 3)}`);
console.log(`Use Rest Ope : ${sumWthRestOperation(1, 2, 3, 4)}`);
//#endregion

//#region Assing var from object wth property key
var voxel = {
    x: 2,
    y: 3,
    z: 5
}
const { x: X, y: Y, z: Z } = voxel;
console.log(`${X} ${Y} ${Z}`);

//#endregion

//#region parameter with property object
var objTest = {
    max: 9,
    min: 3
}
function sumWthPropertyObjParameter({ max, min }) {
    return max + min;
}
console.log(`SumWthPropertyObjParam : ${sumWthPropertyObjParameter(objTest)}`)
//#endregion

//#region function createObject แบบสั้น
const CreateObj = (name, age, gender) => ({ name, age, gender }); // parameterที่ส่งเข้าไป คือ property ของ obj
console.log(CreateObj("Gun", 24, "male"));
//#endregion

//#region Clas
class testClass {
    constructor(name, lastName) {
        this._name = name;
        this._lastName = lastName;
    }
    get name() { return this._name; }
    set name(newName) { this._name = newName; }
    get lastName() { return this._lastName; }
    set lastName(newLastName) { this._lastName = newLastName; }
    // method
    concatName() {
        return `${this._name} ${this._lastName}`;
    }
}
var testObj = new testClass('Jomphop', 'Saibuatong');
testObj.name = 'Gun'; //set
console.log(testObj.name); //get
console.log(testObj.concatName()); // method of class
//#endregion
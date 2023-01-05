// let Math = require("../../myapp/Math");

// // Falsy value =>  null,undefined,NaN,false,"",0,false

// xdescribe("My falsy test suite", () => {
//   test("my first test", () => {
//     let a = 5;
//     expect(a).toBe(5);
//   });
//   test("checking null", () => {
//     let a = null;
//     expect(a).toBeNull();
//     expect(a).toBeFalsy();
//   });
// });

// xdescribe("My calculator class", () => {
//   let totalSum = 0;
//   // setup
//   // beforeEach() everytime set totalSum is eqal to zero
//   beforeEach(() => {
//     totalSum = 0;
//     console.log("Before Each");
//   });

//   // beforeAll() executed first & only once
//   beforeAll(() => {
//     console.log("Before All");
//   });

//   // tear down
//   // afterEach()
//   afterEach(() => {
//     console.log("After Each");
//   });
//   // afterAll() sabse bad me executed hoga or sabse baad me bhi
//   afterAll(() => {
//     console.log("After All");
//   });

//   test("should test sum method", () => {
//     expect(Math.sum(2, 5)).toBe(7);
//     expect(Math.sum(-1, -5)).toBe(-6);
//     expect(Math.sum()).toBe("Please enters numbers");
//     expect(Math.sum("a", "b")).toBe("Please enters numbers");
//   });

//   test("should test square method", () => {
//     expect(Math.square(2)).toBe(4);
//     expect(Math.square(-5)).toBe(25);
//     expect(Math.square()).toBe("Please enter numbers");
//     expect(Math.square(Infinity)).toBe(Infinity);
//   });

//   test("add total again", () => {
//     let total = Math.sum(2, 3);
//     totalSum = totalSum + total;
//     expect(totalSum).toBe(5);
//   });

//   test("add total again", () => {
//     let total = Math.sum(2, 3);
//     totalSum = totalSum + total;
//     expect(totalSum).toBe(5);
//   });
// });

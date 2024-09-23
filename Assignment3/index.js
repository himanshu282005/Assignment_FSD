let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // Output: [1, 2, 3, 4]


let arr2 = [1, 2, 3, 4];
arr2.pop();
console.log(arr2); // Output: [1, 2, 3]

let arr3 = [1, 2, 3, 4];
arr3.shift();
console.log(arr3); // Output: [2, 3, 4]


let arr4 = [2, 3, 4];
arr4.unshift(1);
console.log(arr4); // Output: [1, 2, 3, 4]


let arr6 = [1, 2, 3, 4];
let newArr = arr6.slice(1, 3);
console.log(newArr); // Output: [2, 3]


let arr5 = [1, 2, 3, 4];
arr5.splice(2, 1, 9); // Replace 3 with 9
console.log(arr5); // Output: [1, 2, 9, 4]

let arr7 = [1, 2, 3, 4];
let index = arr7.indexOf(3);
console.log(index); // Output: 2

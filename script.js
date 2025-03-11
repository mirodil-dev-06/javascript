// 1- Massivdagi eng katta va eng kichik elementlarni topish

// function findMinMax(arr) {
//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 1; i < arr.length; i++){
//         if (arr[1] < min) min = arr[i];
//         if (arr[1] > max) max = arr[i];
//     }
//     return {min, max};
// }
// let arr = [3, 1, 4, 1, 5, 9, 2, 6];

// console.log(findMinMax(arr));


// 2- Matnni teskari tartibda chiqarish

// function reverseStr(str) {
//     return str.split('').reverse().join('');
// }
// let str = "Salom Dunyo";
// console.log(reverseStr(str));


// 3- Massivni teskari tartibda chiqarish

    // function reverseArr(arr) {
    //     return arr.reverse();
    // }
    // let arr = [1, 2, 3, 4, 5]
    // console.log(reverseArr(arr))

// 4- Massivda berilgan elementni qidirish

    // function findElement(arr, target) {
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[1] === target) return i;
    //     }
    //     return -1;
    // }
    // let arr = [10, 20, 30, 40, 50];
    // console.log(findElement(arr, 30))
// function summ() {
//     console.log(2 + 2)
// }

// function summ1(x, y) {
//     console.log(x + y)
// }


// function summ2(x) {
//     let z = x + 15
//     return console.log(z)
// }

// summ2(234)

// let div = document.getElementById('theDiv');


// let list = document.getElementsByClassName('color');
// for (let i = 0; i < list.length; i++) {
//     console.log(list[i])

// }

// function myFunc() {
//     console.log('here');
//     let color = document.getElementById('theColor');

//     color.style.background = 'red';
//     let blocks = document.getElementsByClassName( "color" ); // находим элементы с классом block
//     for( let i = 0; i < blocks.length; i++){ // проходим циклом по всем элементам массивоподобного объекта
//       blocks[i].background = "green"; // устанавливаем зеленый цвет текста каждому элементу
//     }		
//   }

// div.innerHTML = 'world'

// arr = [1,2,3,4,5,6,7,8,9,10]


// console.log("Обычное деление /:", 5/2) //2.0
// console.log("Деление с остатком %:", 5%2) //0

// for (let index = 0; index < arr.length; index++) {
//     if (arr[index]%2 ==1) {
//         console.log(arr[index])
//     }
    
// }

// for (let index in arr) {
//     console.log("Index:", index, "Elem:", arr[index])
// }


// let duble = function(d) {return d + 2 + 2};
// alert(duble(5))

// a = 3 
// b = 9
// console.log("starting  - ","a:", a, "b:", b)

// // a = 9
// // b = 3

// a = a + b //3+9=12
// console.log("1. ","a:", a, "b:", b)

// b = a - b //12-9=3
// console.log("2. ","a:", a, "b:", b)

// a = a - b //12-3=9
// console.log("a:", a, "b:", b)

arr = [1,2,3,4,342,5,1,12,23,1,4];
let summ = 0;
for (let i in arr) {
    summ += arr[i];
}
console.log(summ)

console.log('Обычное деление /', 5/2)
console.log('Остаток деление %', 5%2)
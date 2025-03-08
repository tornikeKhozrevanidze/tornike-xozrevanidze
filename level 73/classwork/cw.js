// 1) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა სია შემდეგ კი დაბეჭდეთ ამ სიის ჯამი
function array(arr){
    let p = 0
    let b = arr.length
    for(let i = 0; i < b; i++){
        p += arr[i]
    }
    return p
}
console.log(array([2, 4, 6, 8]));

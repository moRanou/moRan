


let a = {
    name: "小明",
}
let b = a;
console.log(b)
a.name = "小花",
console.log(b);


let b = JSON.parse(JSON.stringify(a))
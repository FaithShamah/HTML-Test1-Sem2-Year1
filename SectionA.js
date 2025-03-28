let x = [1, 2, 3];
let y = x;
y.push(4);
console.log(x);


function test() {
    var a = 5;
    if (true) {
    var a = 10;
    }
    return a;
   }
   console.log(test());

// NO.1 : b
// NO.2 : c
// NO.3 : b
// NO.4 : b
// NO.5 :b
// NO.6 : d
// NO.7 : a
// NO.8 : c
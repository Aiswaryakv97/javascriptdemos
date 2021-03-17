
let location = new Map([['01','Delhi'],['02','Mumbai'],['03','Bengaluru']]);

var itr = location.keys();

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

var itr = location.entries();

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

var itr = location.values();

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());



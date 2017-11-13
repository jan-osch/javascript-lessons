const {Programmer, makeDots} =  require('./second');

const p = new Programmer(['JS', 'HTML', 'CSS']);

p.code();
console.log(makeDots(100));

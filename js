var arr = [];
while(arr.length < 6){
    var r = Math.floor(Math.random() * 49) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

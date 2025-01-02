function stringChop(str, size) {
  // your code here
	let btr = [];
 if(str.length==0)
{
    return btr
}

for (let i = 0; i < str.length; i += size) {
  let j = i + size; 
  btr.push(str.slice(i, j)); 
}

return btr
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

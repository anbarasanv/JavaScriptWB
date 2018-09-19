function stringFunctors(ch, fn){ 
	chars = ch.split('') 
	console.log(chars)
    return chars.map(function(c){ 
    		return String.fromCharCode(fn(c.charCodeAt(0)))
            }).join('')}
function plus1(value){
	return value+1
   }
function minus1(value){
  return value-1
}
console.log(stringFunctors("ABC",plus1)) // expected output:BCD
console.log(stringFunctors("XYZ",minus1)) // expected output:WXY

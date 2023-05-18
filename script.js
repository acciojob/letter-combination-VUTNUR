function letterCombinations(input_digit) {
  //Complete the function
	let mapping ={
		"2":"abc" 
	    "3": "def"
		"4":"ghi"
		"5":"jkl"
		"6":"mno" 
		"7":"pqrs" 
		"8":"tuv" 
		"9":"wxyz"
	}
 let result[];
 function solve(index, asf) {
	 if(index>=input_digit.length){
		 result.push(asf);
		 return;
	 }
 	let currstring=mapping[input_digit[index]]
	 for(let i=0;i<currstring.lenght;i++){
		 solve(index+1,asf+currstring[i])
	 }
 }
}

module.exports = letterCombinations;

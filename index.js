function spreadthewealth(arr) {

var sum = 0;

//sum values of the array
for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
}

//get the remainder of the sum 
const remainder = sum / arr.length; 

//subtract remainder from the sum
sum -= remainder

//get average integer of the array
avg = sum/arr.length;
var newArr = [];

//replace the array elements by the average 
for (var j = 0; j<arr.length; j++) {
newArr[j] = avg;
}

 if (remainder !== 0) {
        newArr.push(remainder);
    }
return newArr
}

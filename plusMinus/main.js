function plusMinus(arr) {
let quantPos = 0, quantNeg = 0, quantNeu = 0;
const size = arr.length;

for(let i = 0; i < size; i++){
    if(arr[i] > 0){
        quantPos++;
    } else if (arr[i] < 0) {
        quantNeg++;
    } else{
        quantNeu++
    }
}

const pos = (quantPos/size).toFixed(6);
const neg = (quantNeg/size).toFixed(6);
const neu = (quantNeu/size).toFixed(6);

console.log(pos);
console.log(neg);
console.log(neu);

}

plusMinus([1, 2, -3, 0, 4]);
function countSort(arr) {
    
    const size = arr.length;
    const limit = size/2;
    const phrase = Array.from({length: 100}, () => []);
    for(let i = 0; i < size; i++){
        
        if (i < limit){
            phrase[arr[i][0]].push("-")
        } else{
            phrase[arr[i][0]].push(arr[i][1]);
        }
    }

    
    console.log(phrase.flat().join(" "));

}

countSort([[0, 'a'], [1, 'b'], [0, 'c'], [1, 'd']]);
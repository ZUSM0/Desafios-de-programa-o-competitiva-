function staircase(n) {
    let piramide = "";
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(j < n-i-1){
              piramide += " ";  
            } else{
                piramide += "#";
            }  
        }
        console.log(piramide);
        piramide = "";
    }
}

staircase(6)
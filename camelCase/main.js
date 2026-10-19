function camelcase(s) {
    const offlineQuery = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let palavras = 1;

    for(let i = 0; i < s.length; i++){
        if (offlineQuery.includes(s[i])){
            palavras += 1;
        }
    }

    console.log(palavras);

}

camelcase("saveChangesInTheEditor")
function polindromo(frase) {
    return frase.split("").map(x => x.toLowerCase()).join("").replace(/\W/g, "").split("").
    reverse().join("") === frase.split("").map(x => x.toLowerCase()).join("").replace(/\W/g, "");
 
}
 console.log(polindromo("fr4ase teste"))
const anoAtual = new Date().getFullYear();
const Nascimento = 2007;
const idade = anoAtual - Nascimento;

if (idade >= 16) {
    console.log("Você pode votar este ano!");
} else {
    console.log("Você não pode votar este ano.");
}
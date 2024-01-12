const numeroSecreto = Math.floor(Math.random() * 10 + 1);

const numeroJugador=parseInt(prompt('Ingresa el valor del 1 al 10'));

console.log(`Este es el número con el que juegas ${numeroJugador}`);

if(numeroJugador === numeroSecreto)
{
    console.log('Felicidades adivinaste el número secreto');
}
else if(numeroJugador<numeroSecreto){
    console.log('El número es demasiado bajo');
}
else{
    console.log('El número es muy alto, intenta de nuevo');
}


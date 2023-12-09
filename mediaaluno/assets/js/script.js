const inputNumero = document.querySelector('inputnumero');
const btnJogar = document.querySelector('btnJogarNovamente');
const btnJogarNovamente = document.querySelector('btnJogarNovamente');
const erros = document.querySelector('erros');
const chances = document.querySelector('chances');
const dica = document.querySelector('dica');

let errou = [];
let numerosGerados = Math.floor(Math.random() * 100) + 1;

const numerosChance = 6;

btnApostar.addEventListener('click', function Apostado() {
    
    let numeroApostado = Number(inputNumero.value);

    if (numeroApostado <=0 || numeroApotado >100 || isNaN(numeroApostado)) {
       alert('Digite um número válido!');
         inputNumero.value = '';
        inputNumero.focus();
        return;

    }if(numeroApostado === numerosGerados){
        alert('Você acertou!');
        btnApostar.disabled = true;
        btnJogarNovamente.className = 'Exibir';
         dica.textContent = `O número sorteado foi ${numerosGerados}`;

    }else{

        if (errou.indexOf(numeroApostado) >= 0) {
            alert(`Você já apostou o número ${numeroApostado} tente outro!`);
      
        }else{
            erros.push(numeroApostado);
            let numeroDeErros = erros.length;
            let numeroDeChances = numerosChance - numeroDeErros;

            erros.textContent = `Você já errou: ${erros.join(', ')}`;
            chances.textContent = chancesRestantes;

        }if(chancesRestantes === 0){
            alert(`Suas chances acabaram! O número sorteado foi ${numerosGerados}`)
            btnApostar.disabled = true;
            btnJogarNovamente.className = 'Exibir';
            dica.textContent = `O número sorteado foi ${numerosGerados}`;

        }else{
             let dica = numeroApostado > numerosGerados ? 'Muito alto' : 'Muito baixo';
            dica.textContent = `Dica: ${dicaAposta} que o numero ${numeroApostado}` ;
        }
        
    }
});
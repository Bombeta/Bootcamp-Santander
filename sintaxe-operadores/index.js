/*
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
*/

function twoNumbers(x, y){
    let output; 
    
    output = comparetwoNumbers(x,y);  
    output += compareSum(x,y);
    console.log(output);    
}

function comparetwoNumbers(x,y){
    let iguais;
    let diferentes;
    if(x === y){
        iguais = `Os números ${x} e ${y} são iguais.`;        
        return iguais;
    }else{
        diferentes = `Os números ${x} e ${y} não são iguais.`;        
        return diferentes;
    }
        
}

function compareSum(x, y){
   let soma = x + y;
   let compare10;
   let compare20;
   let output2;

    if(soma > 10){
        compare10 = 'maior que 10';        
    }else{
       compare10 = 'menor que 10';       
    }

    if(soma > 20 ){
        compare20 = 'maior que 20';       
    }else{
        compare20 = 'menor que 20';
    }
    output2 = ` Sua soma é ${soma}, que é ${compare10} e ${compare20}. `;   
    return output2;
}

twoNumbers(1,2);
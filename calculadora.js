function Calculadora (){
    const Escolher = Number (prompt("Escolha uma operação \n 1- soma\n 2- subtração\n 3- multiplicação\n 4- divisão numero real\n 5- divisão numero inteiro"));


    if (!Escolher || Escolher >=6){
        alert ("Operação inválida");
        Calculadora();
    }

    else {
        let n1 = Number(prompt("Insira o primeiro numero"));
        let n2 = Number(prompt("Insira o segundo numero"));
        let resultado;

        if (!n1 || !n2){             // Verificando se as variaveis são nulas ou vazias
            alert ("Parametros insválidos")
            Calculadora();
        }
        else {
            function soma(){
                resultado =n1 +n2;
                alert (`${n1} + ${n2} = ${resultado}`)
            }   
            function subtracao(){
                resultado = n1 - n2;
                alert (`${n1} - ${n2} = ${resultado}`)
            }
            
            function multiplicacao(){
                    resultado =n1 * n2;
                    alert (`${n1} x ${n2} = ${resultado}`)
            }
            function divisaoReal(){
                resultado =n1 / n2;
                alert (`${n1} / ${n2} = ${resultado}`)
            }
            function divisaoInt(){
                    resultado =n1 % n2;
                    alert (`O resto da divesão \n${n1} / ${n2} = ${resultado}`)
            }    
            
            function NovaOperacao(){
                let operacao = prompt("Voce deseja fazer uma nova operação ?\n 1- sim\n 2- Não");

                if (operacao ==1){
                    Calculadora();
                }
                else if (operacao !=1 & operacao !=2){
                    alert ("Parametro inválido")
                    NovaOperacao();
                }
                alert("Até a proxima");


            }
                
                
            
                
             switch (Escolher){
                    case 1:
                        soma();
                        break
                    case 2:
                        subtracao();
                        break
                    case 3:
                        multiplicacao();
                        break
                    case 4:
                        divisaoReal();
                        break
                    case 5:
                        divisaoInt ();    
                        break           
            }
            NovaOperacao();
        }   
            
    }   
       
 }    
Calculadora();
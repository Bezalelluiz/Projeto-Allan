<svelte:head>
    <link rel="stylesheet" href="/style/escola.css">
</svelte:head>

<script>
    
    
	import { trocarEstadoDoJogo } from './Estado.js'

    
    let texto = 'Encontre as peças para formar a arma de portal e avançar para o próximo nivel!'
    let arma = 2
    let chave = 0   
    function entrar(){
        if(chave == 1){
        porta()
        }
        else{
            texto = 'A porta está trancada, encontre a chave para abri-lá!'
        }
    }

    function porta(){
        trocarEstadoDoJogo('sala')
    }
  

    function abrirvazio(){
        document.querySelector('.armariovazio1').style.visibility = 'visible'
        document.querySelector('.armariovazio').style.visibility = 'hidden'
        document.querySelector('.cabo').style.visibility = 'visible'
        document.querySelector('.armariotrancado').style.visibility = 'hidden'
        document.querySelector('.armario').style.visibility = 'hidden'
        document.querySelector('.porta').style.visibility = 'hidden'
        document.querySelector('.armario2').style.visibility = 'hidden'
        document.querySelector('.rick').style.visibility = 'hidden'
    }

    function abrir(){
        document.querySelector('.armario1').style.visibility = 'visible'
        document.querySelector('.armario').style.visibility = 'hidden'
        document.querySelector('.nucleo').style.visibility = 'visible'
        document.querySelector('.armariotrancado').style.visibility = 'hidden'
        document.querySelector('.armariovazio').style.visibility = 'hidden'
        document.querySelector('.porta').style.visibility = 'hidden'
        document.querySelector('.armario2').style.visibility = 'hidden'
        document.querySelector('.rick').style.visibility = 'hidden'
    }

    function abrir2(){
        if (arma == 0) {
            document.querySelector('.armario1').style.visibility = 'visible'
            document.querySelector('.armario').style.visibility = 'hidden'
            document.querySelector('.chave').style.visibility = 'visible'
            document.querySelector('.armariotrancado').style.visibility = 'hidden'
            document.querySelector('.armariovazio').style.visibility = 'hidden'
            document.querySelector('.porta').style.visibility = 'hidden'
            document.querySelector('.armario3').style.visibility = 'hidden'
            document.querySelector('.armario2').style.visibility = 'hidden'
            document.querySelector('.rick').style.visibility = 'hidden'
            
            } else {
                texto = 'Parece que você não pode abrir isso agora, tente encontrar as partes da arma antes!'
          }
    }

      function coletar(){
        this.style.visibility = 'hidden'

        arma --
        texto = `falta encontrar ${arma} peças da arma`
        document.querySelector('.armariovazio1').style.visibility = 'hidden'
        document.querySelector('.armario1').style.visibility = 'hidden'
        document.querySelector('.armariotrancado').style.visibility = 'visible'
        document.querySelector('.armariovazio').style.visibility = 'visible'
        document.querySelector('.armario2').style.visibility = 'visible'
        document.querySelector('.porta').style.visibility = 'visible'
        document.querySelector('.armario').style.visibility = 'visible'
        document.querySelector('.rick').style.visibility = 'visible'
        if (arma == 0) {
            texto ='Parece que ainda falta 1 parte da arma, tente encontrar em outro local!'
            
        }
        
    }
    
    function trancado(){
        texto = 'Trancado!'
       setTimeout(() => {
        texto = 'Tente abrir outro armario!'
       }, 1000);
       setTimeout(() => {
        texto = 'Encontre as peças para formar a arma de portal e avançar para o próximo nivel!'
       }, 3000);   
    }
    function pegarchave(){
        this.style.visibility = 'hidden'
        document.querySelector('.armario').style.visibility = 'visible'
        document.querySelector('.armario3').style.visibility = 'hidden'
        document.querySelector('.armario1').style.visibility = 'hidden'
        document.querySelector('.armariotrancado').style.visibility = 'visible'
        document.querySelector('.armariovazio').style.visibility = 'visible'
        document.querySelector('.armario2').style.visibility = 'visible'
        document.querySelector('.porta').style.visibility = 'visible'
        document.querySelector('.rick').style.visibility = 'visible'
        
        chave ++
    }

</script>

<div class="escolaboard">
    <div class="fundo"><img src="/images/corredor_escola.png" alt="escola">
        <div class="armariovazio1">
            <div class="imagem"><img src="/images/armariovazio.png" alt="armario">
                <div class="cabo" on:click={coletar}><img src="/images/empunhadura.png" alt="cabo"></div>
            </div>
        </div>
        <div class="armario1">
            <div class="imagem2"><img src="/images/armario.png" alt="armario">
                <div class="nucleo" on:click={coletar}><img src="/images/nucleo.png" alt="nucleo"></div>
            </div>
        </div>
        <div class="armario3">
            <div class="imagem2"><img src="/images/armario.png" alt="armario">
                <div class="chave" on:click={pegarchave}><img src="/images/chave.png" alt="chave"></div>
            </div>
        </div>
    </div>
    <div class="armario" on:click|once= {abrir}></div>
    <div class="armario2" on:click= {abrir2}></div>
    <div class="armariotrancado" on:click={trancado}></div>
    <div class="armariovazio" on:click|once = {abrirvazio}></div>
    <div class="porta" on:click={entrar}></div>
    <div class="chave"></div>
    <div class="dialogo"><h1>{texto}</h1></div>
    <div class="rick"><img src="/images/rick_20.png" alt="rick"></div>
    
</div>

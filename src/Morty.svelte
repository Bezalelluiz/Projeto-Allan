<svelte:head>
    <link rel="stylesheet" href="/style/morty.css">
</svelte:head>

<script>

    import {trocarEstadoDoJogo} from './Estado'

    let arma = 3
    let texto = 'Encontre as peças para formar a arma de portal e avançar para o proximo nivel!'

    function coletar(){
        this.style.visibility = 'hidden'
        arma --
        texto = `falta encontrar ${arma} peças da arma`
        aparecer()
    }

    function aparecer(){
        if(arma == 0){
            texto = 'você encontrou todas as peças entre no portal para prosseguir!'
            document.querySelector('.portal').style.visibility= 'visible'
        
        }
    }
    function portal(){
        trocarEstadoDoJogo ('privada')

    }       

</script>




<div class="mortyboard">
    <div class="fundo"><img src="/images/background..png" alt="fundo"></div>
    <div class="cabo" on:click={coletar}><img src="/images/empunhadura.png" alt="cabo"></div>
    <div class="nucleo" on:click={coletar}><img src="/images/nucleo.png" alt="nucleo"></div>
    <div class="corpo" on:click={coletar}><img src="/images/cano.png" alt="cano"></div>
    <div class="portal" on:click={portal}><img src="/images/portal.png" alt="portal"></div>
    <div class="dialogo"><h1>{texto}</h1></div>
    <div class="morty"><img src="/images/morty.png" alt="morty"></div>
        
</div>
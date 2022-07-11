<svelte:head>
    <link rel="stylesheet" href="/style/planeta.css">
</svelte:head>

<script>
    import VoltarMenu from './VoltarMenu.svelte'
	import { estado } from "./Estado.js"
    import {trocarEstadoDoJogo} from './Estado'
    
    let arma = 3
    let texto ='Encontre as peças para formar a arma de portal e avançar para o próximo nivel!' 
    
    function coletar(){
        this.style.visibility = 'hidden'
        arma --
        texto = `restam ${arma} peças da arma!`
        aparecer()
    }

    function aparecer(){
        if(arma == 0){
            texto = 'Você encontrou todas as peças entre no portal para prosseguir!'
            document.querySelector('.portal').style.visibility= 'visible'
        
        }
    }
    function portal(){
        trocarEstadoDoJogo ('prisao')

    }       

</script>




<div class="planetaboard">
    <div class="fundoplaneta"><img src="/images/planetaapocalipse.png" alt="fundo"></div>
    <div class="dialogo"><h1>{texto}</h1></div>
    <div class="cabo" on:click={coletar}><img src="/images/empunhadura.png" alt="cabo"></div>
    <div class="nucleo" on:click={coletar}><img src="/images/nucleo.png" alt="nucleo"></div>
    <div class="corpo" on:click={coletar}><img src="/images/cano.png" alt="cano"></div>
    <div class="portal" on:click={portal}><img src="/images/portal.png" alt="portal"></div>
    <div class="rick"><img src="/images/rick_20.png" alt="rick"></div>
</div>
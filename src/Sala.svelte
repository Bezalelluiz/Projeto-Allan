<svelte:head>
    <link rel="stylesheet" href="/style/sala.css">
</svelte:head>

<script>
    import {trocarEstadoDoJogo} from './Estado'
    let texto ='Encontre a peça que falta para prosseguir'
    let arma = 1
    
    function portal(){
        trocarEstadoDoJogo ('planeta')

    }   
    function coletar(){
        this.style.visibility = 'hidden'
        arma --
        aparecer()
    }

    function aparecer(){
        if(arma == 0){
            texto = 'Você encontrou todas as peças entre no portal para prosseguir!'
            document.querySelector('.portal').style.visibility= 'visible'
        
        }
    }   
</script>

<div class="salaboard">
    <div class="fundo">
        <img src="/images/sala de aula.png" alt="">
    </div>
    <div class="portal" on:click={portal}><img src="/images/portal.png" alt="portal"></div>
    <div class="dialogo"><h1>{texto}</h1></div>
    <div class="corpo" on:click={coletar}><img src="/images/cano.png" alt="cano"></div>
    <div class="rick"><img src="/images/rick_20.png" alt="rick"></div>
</div>
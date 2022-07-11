<svelte:head>
    <link rel="stylesheet" href="/style/privada.css">
</svelte:head>

<script>

    import { trocarEstadoDoJogo } from "./Estado";

    let texto = 'Encontre as peças para formar a arma de portal e avançar para o proximo nivel!'
    
    function abrir(){
        document.querySelector('.privada1').style.visibility = 'visible'
        document.querySelector('.nucleo').style.visibility = 'visible'
        document.querySelector('.cabo').style.visibility = 'hidden'
        document.querySelector('.corpo').style.visibility = 'hidden'
    }
    
    function coletar(){
        this.style.visibility = 'hidden'
        
        document.querySelector('.privada1').style.visibility = 'hidden'
        document.querySelector('.cano').style.visibility = 'visible'
        document.querySelector('.cabo').style.visibility = 'visible'
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
        trocarEstadoDoJogo ('menu')

    }       
</script>


<div class="board">
    <div class="fundo">
        <img src="/images/planetaprivada.png" alt="privada">
        <div class="privada1"><img src="/images/privada ampliada.png" alt="">
            <div class="nucleo" on:click={coletar}><img src="/images/nucleo.png" alt="nucleo"></div>
        </div>
    </div>
    <div class="cabo" on:click={coletar}><img src="/images/empunhadura.png" alt="cabo"></div>
    <div class="corpo" on:click={coletar}><img src="/images/cano.png" alt="cano"></div>
    <div class="portal" on:click={portal}><img src="/images/portal.png" alt="portal"></div>
    <div class="dialogo"><h1>{texto}</h1></div>
    <div class="privada" on:click|once={abrir}></div>
</div>
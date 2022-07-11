<svelte:head>
    <link rel="stylesheet" href="/style/privada.css">
</svelte:head>

<script>

    import { trocarEstadoDoJogo } from "./Estado";
    let arma = 3
    let texto = 'Encontre as peças para formar a arma de portal e avançar para o proximo nivel!'
    
    function abrir(){
        if (arma == 1) {
            document.querySelector('.privada1').style.visibility = 'visible'
            document.querySelector('.nucleo').style.visibility = 'visible'
            document.querySelector('.morty').style.visibility = 'hidden'
        } 
        else {
            texto = 'Você ainda não encontrou as outras partes da arma!'
        }
    }
    
    function coletar(){
        this.style.visibility = 'hidden'
        arma --
        document.querySelector('.privada1').style.visibility = 'hidden'
        document.querySelector('.morty').style.visibility = 'visible'
        texto = `falta encontrar ${arma} peças da arma`
        aparecer()
    }

    


    function aparecer(){
        if(arma == 0){
            texto = 'você encontrou todas as peças entre no portal para prosseguir!'
            document.querySelector('.portal').style.visibility = 'visible'
        
        }
    }
    function portal(){
        trocarEstadoDoJogo ('motor')

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
    <div class="morty"><img src="/images/morty.png" alt="morty"></div>
</div>
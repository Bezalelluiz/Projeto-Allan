<svelte:head>
    <link rel="stylesheet" href="/style/rick.css">
</svelte:head>

<script>
    
    import VoltarMenu from './VoltarMenu.svelte'
	import { estado } from "./Estado.js"
	import { trocarEstadoDoJogo } from './Estado.js'
    
    
    let arma = 0

    function coletar(){
        document.querySelector('.maquina').style.visibility = 'visible'
        document.querySelector('.display').style.visibility = 'visible'
        document.querySelector('.arma').style.visibility = 'visible'
    }

    function coletando(){

        document.querySelector('.display').style.visibility = 'visible'
        document.querySelector('.arma').style.visibility = 'visible'
        document.querySelector('.armario2').style.visibility = 'visible'
    }

    function aparecer(){
        if(arma == 3){
            document.querySelector('.portal').style.visibility = 'visible'
        }
    }

    function portal(){
        trocarEstadoDoJogo('escola')
    }

     function fechar(){
        this.style.visibility = 'hidden';
        document.querySelector('.maquina').style.visibility = 'hidden'
        document.querySelector('.arma').style.visibility = 'hidden'   
        document.querySelector('.armario2').style.visibility = 'hidden' 
    }

    function coletou(){
        arma ++
        document.querySelector('.arma').style.visibility = 'hidden'
        aparecer()
    }

 
</script>

<div class="rickboard">

    <div class="fundorick">
        <div class="display" on:click={fechar}>
            <div class="maquina">
                <div class="arma" on:click={coletou}>arma</div>
            </div>
            
        </div>
        <div class="armario" on:click={coletando}>
            <div class="pegando" on:click={coletou}></div>
        </div>
        <div class="maquina1" on:click={coletar}></div>
        <div class="armario2"></div>
        <div class="itens" on:click={aparecer}></div>
        <div class="portal" on:click={portal}></div>
        
    
    </div>

		
</div>



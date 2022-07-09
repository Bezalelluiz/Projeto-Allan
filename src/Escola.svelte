<svelte:head>
    <link rel="stylesheet" href="/style/escola.css">
</svelte:head>

<script>
    
    import VoltarMenu from './VoltarMenu.svelte'
	import { estado } from "./Estado.js"
	import { trocarEstadoDoJogo } from './Estado.js'
    
    
    let arma = 0

    function coletar(){
        document.querySelector('.maquina').style.visibility = 'visible'
        document.querySelector('.display').style.visibility = 'visible'
        document.querySelector('.pegar').style.visibility = 'visible'
    }


    function coletando(){
        document.querySelector('.armario').style.visibility = 'visible'
        document.querySelector('.display').style.visibility = 'visible'
        document.querySelector('.pegar').style.visibility = 'visible'
    }



    function portal(){
        
        trocarEstadoDoJogo('conselho')
        
    }
    
    
    
    function aparecer(){
        if(arma == 3){
            document.querySelector('.portal').style.visibility = 'visible'
        }
    }
    

    function fecharvaso(){
        this.style.visibility = 'hidden'
        document.querySelector('.maquina').style.visibility = 'hidden'
        document.querySelector('.pegar').style.visibility = 'hidden'
        
    }

    function coletou(){
        arma ++
        aparecer()
    }

    function porta(){
        trocarEstadoDoJogo('sala')
    }
</script>

<div class="board1">

    <div class="fundo1">
        <div class="display" on:click={fecharvaso}>
            <div class="maquina">
                <div class="pegar" on:click={coletou}>arma</div>
            </div>
            
        </div>
        <div class="rick" img='/images/rick_20.png'></div>
        <div class="armario" on:click={coletando}>
        <div class="pegando" on:click={coletou}></div>
        </div>
        <div class="arma" on:click={coletar}></div>
        <div class="itens" on:click={aparecer}></div>
        <div class="portal" on:click={portal}></div>
        <div class="porta" on:click={porta}></div>
        
        
    
    </div>

		
</div>

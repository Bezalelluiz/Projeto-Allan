<svelte:head>
    <link rel="stylesheet" href="/style/jogar.css">
</svelte:head>

<script>
    
    import VoltarMenu from './VoltarMenu.svelte'
	import { estado } from "./Estado.js"
	import { trocarEstadoDoJogo } from './Estado.js'
    
    
   

    function rick(){
        
        trocarEstadoDoJogo ('rick')
        
    }

    function morty(){
        
        trocarEstadoDoJogo ('morty')
        
    }

    function menu(){

        trocarEstadoDoJogo ('menu')
    }


</script>

<div class="gameboard">

    <div class="fundogame">
        <div class="personagem">Escolha seu Personagem</div>
            
        
        <div class="rick" on:click={rick}></div>
        <div class="morty" on:click={morty}></div>
    
        <div class="voltar" on:click={menu}></div>
        
    
    </div>

		
</div>



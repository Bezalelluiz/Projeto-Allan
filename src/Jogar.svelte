<svelte:head>
    <link rel="stylesheet" href="/style/jogar.css">
</svelte:head>

<script>
    
    
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

    let texto = 'Escolha seu Personagem!'
</script>

<div class="board">

    <div class="fundo">
        
        <img src="/images/Sala final.png" alt="jogar">
        
        <div class="rick" on:click={rick}><img src="/images/rick_20.png" alt="rick"></div>
        <div class="morty" on:click={morty}><img src="/images/morty.png" alt="morty"></div>
    
        <div class="voltar" on:click={menu}></div>
        
    
    </div>
    <div class="dialogo"><h1>{texto}</h1></div>
		
</div>



<svelte:head>
	<link rel="stylesheet" href="/style/sobre.css">
</svelte:head>

<script>
	import VoltarMenu from './VoltarMenu.svelte'
    import { estado } from "./Estado.js"
	import { trocarEstadoDoJogo } from './Estado.js'
    
    
   


    function menu(){

trocarEstadoDoJogo ('menu')
}

</script>



<div class="nomes">
   
    <div class="bezalel">
        Bezalel Luiz 
    </div>
    <div class="decio">
        Decio Joab
    </div>
    <div class="gabriel">
        Gabriel Vinicius
    </div>
    <div class="gean">
        Gean de Lima
    </div>
    <div class="vinicius">
        Vinicius Mendonça
    </div>
    <div class="voltarmenu" on:click={menu}>VOLTAR AO MENU</div>
</div>


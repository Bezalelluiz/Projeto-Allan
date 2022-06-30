<script>
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

<div class='menu' on:click={() => trocarEstadoDoJogo('menu')}>
	Voltar ao menu
</div>

<style>
    div{
        
    background-image: linear-gradient(to bottom,#6ee641,#22a2bd);;   
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: 1000;
    font-family: Georgia, 'Times New Roman', Times, serif;
    width: 200px;
    height: 50px;
    border: black;
    border-radius: 15px;
    cursor: pointer;

    }
</style>


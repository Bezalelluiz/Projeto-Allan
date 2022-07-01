<script>
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

<div class='menu' on:click={() => trocarEstadoDoJogo('menu')}>
	Voltar ao menu
</div>


<style>
    div{
        
    background-color: hsla(0, 0%, 99%, 0);   
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: 1000;
    font-family: Georgia, 'Times New Roman', Times, serif;
    width: 100%;
    height: 50px;
    border: none;
    cursor: pointer;

    }
</style>


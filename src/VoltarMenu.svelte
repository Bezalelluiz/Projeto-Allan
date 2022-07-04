<script>
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

<div class='menu' on:click={() => trocarEstadoDoJogo('menu')}>
	Voltar ao menu
</div>


<style>
    div{
        
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 1000;
    font-family: Georgia, 'Times New Roman', Times, serif;
    width: 100%;
    height: 50px;
    border: none;
    cursor: pointer;
    right: 0;

    }
</style>


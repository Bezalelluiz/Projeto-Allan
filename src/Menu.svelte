<svelte:head>
    <link rel="stylesheet" href="/style/menu.css">
</svelte:head>
<script>
	
	import { trocarEstadoDoJogo } from './Estado'
</script>

<div class="conteudo">


    <div class="imagem">
        <img src="./images/imagem.png" alt="logo">
    </div>
     
        <div class="clicando">
            <div class="botoes" on:click={()=> trocarEstadoDoJogo ('jogar')}>
                Jogar
            </div>
            <div class="botoes" on:click={()=> trocarEstadoDoJogo ('sobre')}>
                Sobre
            </div>
            <div class="botoes" on:click={()=> trocarEstadoDoJogo ('comojogar')}
                >Como Jogar
            </div>
        </div>
</div>


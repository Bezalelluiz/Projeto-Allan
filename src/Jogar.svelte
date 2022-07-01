<svelte:head>
    <link rel="stylesheet" href="/style/jogar.css">
</svelte:head>

<script>
    
    import VoltarMenu from './VoltarMenu.svelte'
	import { estado } from "./Estado.js"
	import { trocarEstadoDoJogo } from './Estado.js'
    
    
    let chave = 0

    function coletar(){
        document.querySelector('.vaso').style.display = 'flex'
        document.querySelector('.display').style.display = 'flex'
        document.querySelector('.pegar').style.display = 'flex'
    }

    function entrarcasa(){
        if (chave == 1) {
            
            trocarEstadoDoJogo ('casa')
        }
    }

    function fecharvaso(){
        this.style.display = 'none';
    }

    function coletou(){
        chave ++
    }
</script>

<div class="gameboard">

    <div class="fundogame">
        <div class="display" on:click={fecharvaso}>
            <div class="vaso">
                <div class="pegar" on:click={coletou}>chave</div>
            </div>
            
        </div>
        <div class="entraporta" on:click={entrarcasa}></div>
        <div class="chave" on:click={coletar}></div>

        
    
    </div>

		
</div>



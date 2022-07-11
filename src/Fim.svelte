<svelte:head>
    <link rel="stylesheet" href="/style/fim.css">
</svelte:head>

<script>
    import {trocarEstadoDoJogo} from './Estado'
    
    let texto = 'Parabéns você libertou o Morty!'
    function reiniciar(){
        trocarEstadoDoJogo('menu')
    }

    
</script>

<div class="board">
    <div class="fundofim"><img src="/images/PRISÃO.png" alt="fundo"></div>
    <div class="dialogo"><h1>{texto}</h1></div>
    <div class="rick"><img src="/images/rick_20.png" alt="rick"></div>
    <div class="morty"><img src="/images/morty.png" alt="morty"></div>
    <div class="reiniciar"><button on:click={reiniciar}>RESTART</button></div>
</div>
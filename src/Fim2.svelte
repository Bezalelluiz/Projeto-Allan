<svelte:head> 
    <link rel="stylesheet" href="/style/fim2.css">
</svelte:head>

<script>
    import { trocarEstadoDoJogo } from "./Estado";
    let texto = 'Parabéns, você libertou o Rick!'

    function reiniciar(){
        trocarEstadoDoJogo('menu')
    }
</script>

<div class="board">
    <div class="fundo"><img src="/images/sela do rick.png" alt="sela"></div>
    <div class="dialogo"><h1>{texto}</h1></div>
    <div class="morty"><img src="/images/morty.png" alt="morty"></div>
    <div class="rick"><img src="/images/rick_20.png" alt="rick"></div>
    <div class="reiniciar"><button on:click={reiniciar}>RESTART</button></div>
</div>
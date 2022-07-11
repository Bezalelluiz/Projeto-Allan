<svelte:head>
    <link rel="stylesheet" href="/style/prisaorick.css">
</svelte:head>

<script>
    import { trocarEstadoDoJogo } from "./Estado";
    let texto = "Encontre o cartão para abrir a sela!"
    let cartao = 0
    function abrir(){
        if(cartao == 1){
            trocarEstadoDoJogo('fim2')
        }
        else{
            texto = "Você não pode abrir isso sem o cartão de acesso, encontre-o para abrir a sela!"
        }
    }

    function coletar(){
        this.style.visibility = "hidden"
        cartao ++
    }
</script>

<div class="board">
    <div class="fundo">
        <img src="/images/sela do rick2.png" alt="sela">
        <div class="cartao" on:click={coletar}><img src="/images/selarick.png" alt="cabo"></div>
        <div class="sela" on:click={abrir}></div>
    </div>
    <div class="dialogo"><h1>{texto}</h1></div>
    <div class="morty"><img src="/images/morty.png" alt="morty"></div>
</div>
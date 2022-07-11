<svelte:head>
    <link rel="stylesheet" href="/style/prisao.css">
</svelte:head>

<script>
    import VoltarMenu from './VoltarMenu.svelte'
	import { estado } from "./Estado.js"
    import {trocarEstadoDoJogo} from './Estado'
    
    let texto = 'Encontre a chave para libertar o Morty!'
    let chave = 0

    function pegar(){
        this.style.visibility ='hidden'
        chave ++
    }
    function abrir(){
        if(chave == 1){
            trocarEstadoDoJogo('fim')
        }
        else{
            texto ='Você não pode abrir isso sem uma chave!'
        }
    }
</script>

<div class="board">
    <div class="fundoprisao"><img src="/images/prisao.png" alt="fundo"></div>
    <div class="dialogo"><h1>{texto}</h1></div>
    <div class="chave" on:click={pegar}><img src="/images/selamorty.png" alt="chave"></div>
    <div class="cela" on:click={abrir}></div>
    <div class="rick"><img src="/images/rick_20.png" alt="rick"></div>
</div>
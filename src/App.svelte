<script>
	import  Menu  from "./Menu.svelte";
	import Jogo from  './Jogar.svelte'
	import Sobre from './Sobre.svelte'
	import ComoJogar from './ComoJogar.svelte'
	
	import { estado } from './Estado'
</script>

{#if $estado === 'menu'}
	<!-- notem como cada componente/módulo que crianos no svelte vira um tag -->
	<Menu/>
{:else if $estado === 'sobre'}
	<Sobre/>
{:else if $estado === 'jogar'}
	<Jogo/>
	{:else if $estado === 'comojogar'}
	<ComoJogar/>
{/if}
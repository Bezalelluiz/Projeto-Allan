<script>
	import  Menu  from "./Menu.svelte";
	import Jogar from  './Jogar.svelte'
	import Sobre from './Sobre.svelte'
	import ComoJogar from './ComoJogar.svelte'
	import Rick from "./Rick.svelte";
	import Escola from "./Escola.svelte"
	import Conselho from "./Conselho.svelte"
	import { estado } from './Estado'


</script>

<main>
	{#if $estado === 'menu'}
		<!-- notem como cada componente/módulo que crianos no svelte vira um tag -->
		<Menu/>
	{:else if $estado === 'sobre'}
		<Sobre/>
	{:else if $estado === 'jogar'}
		<Jogar/>
	{:else if $estado === 'comojogar'}
		<ComoJogar/>
		{:else if $estado === 'rick'}
		<Rick/>
		{:else if $estado === 'escola'}
		<Escola/>
		{:else if $estado === 'escola'}
		<Conselho/>
	{/if}
</main>

<style>
main{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
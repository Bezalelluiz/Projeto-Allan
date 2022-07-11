<script>
	import  Menu  from "./Menu.svelte";
	import Jogar from  './Jogar.svelte'
	import Sobre from './Sobre.svelte'
	import ComoJogar from './ComoJogar.svelte'
	import Rick from "./Rick.svelte";
	import Escola from "./Escola.svelte"
	import Sala from './Sala.svelte'
	import { estado } from './Estado'
import Morty from "./Morty.svelte";
import Planeta from "./Planeta.svelte";
import Prisao from "./Prisao.svelte";
import Fim from "./Fim.svelte";


</script>

	<main>
	{#if $estado === 'menu'}
		
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
		{:else if $estado === 'sala'}
		<Sala/>
		{:else if $estado === 'morty'}
		<Morty/>
		{:else if $estado === 'planeta'}
		<Planeta/>
		{:else if $estado === 'prisao'}
		<Prisao/>
		{:else if $estado === 'fim'}
		<Fim/>
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
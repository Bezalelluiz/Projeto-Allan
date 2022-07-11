import { writable } from 'svelte/store'

// o estado do jogo guarda a informação sobre a tela questamos no momento
export let estado = writable('motor');

export function trocarEstadoDoJogo(novoEstado) {
	estado.set(novoEstado)
}
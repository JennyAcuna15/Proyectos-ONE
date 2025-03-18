let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();
    
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return; 
    }
    
    listaAmigos.push(nombreAmigo);
    
    inputAmigo.value = '';
    
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos

function actualizarListaAmigos() {
    let listaVisual = document.getElementById('listaAmigos');
    listaVisual.innerHTML = "";
    
    for (let i = 0; i < listaAmigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = listaAmigos[i];
        listaVisual.appendChild(itemLista);
    }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, agregue al menos un amigo.');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    
    let amigoSorteado = listaAmigos[indiceAleatorio];
    
    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<strong> El amigo sorteado es: ${amigoSorteado}</strong>`;

}




function onload(){
    const pet = document.createElement('div');
    updatePosition(100,100);
    pet.classList.add('ssh-pet');
    document.body.appendChild(pet);
}

window.addEventListener('load', onload)
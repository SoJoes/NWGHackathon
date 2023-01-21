function ssh() {
  function onload() {
    const size = {
      height: 120,
      width: 120,
    };
    const position = {
      x: 0,
      y: 0,
    };
    const pet = document.createElement('div');
    pet.id = "mypet";
    updatePosition(100, 100);
    pet.classList.add('ssh-pet');
    document.body.appendChild(pet);

    function updatePosition(x, y) {
      pet.style.left = (position.x = x) + 'px';
      pet.style.top = (position.y = y) + 'px';
    }
  }
  window.addEventListener('load', onload);
}

let script = document.createElement('script');
script.type = 'text/javascript';
script.text = `(${ssh.toString()})()`;
script.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(script);
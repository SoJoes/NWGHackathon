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
    window.pet = document.createElement('div');
    window.pet.id = "mypet";
    window.pet.style.left = "100px";
    window.pet.style.top = "100px";
    window.pet.classList.add('ssh-pet');
    document.body.appendChild(pet);
    window.pet.addEventListener('mousedown', function(){
        window.addEventListener('mousemove', divMove, true);
        console.log("B");
    });
    console.log("here");

    function mouseDown(e){
        window.addEventListener('mousemove', divMove, true);
        console.log("B");
    }
  }
    function divMove(e){
        window.pet.style.left = e.clientX + 'px';
        window.pet.style.top = e.clientY + 'px';
        console.log("D");
    }

    function mouseUp(){
        window.removeEventListener('mousemove', divMove, true);
        console.log("C");
    }
  window.addEventListener('load', onload);
  window.addEventListener('mouseup', mouseUp, false);
  console.log("A");
}

let script = document.createElement('script');
script.type = 'text/javascript';
script.text = `(${ssh.toString()})()`;
script.onload = function() {
  this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(script);
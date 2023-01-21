// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      increment()
    };
  }
}

function getProgress() {
	return document.getElementById("progressbar").getAttribute("aria-valuenow");
	return document.getElementById("progressbar").getAttribute("style","width");
	return document.getElementById("progressbar").innerHTML;
	}

function setProgress(value) {
	document.getElementById("progressbar").setAttribute("aria-valuenow",value);
	document.getElementById("progressbar").setAttribute("style","width: " +value+ "%");	
	document.getElementById("progressbar").innerHTML = (value+ "%"); 
}
function increment() {
	var j = getProgress();
    j = parseInt(j)
	if(j < 100){
        j += 34
        j = j.toString()
        setProgress(j);	
	}else{
		alert("Progress Complete!");
        // Evolve function here
	}
}

function ssh() {
  function onload() {
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

// make script
let script = document.createElement('script');
script.type = 'text/javascript';
script.text = `(${ssh.toString()})()`;
// when script is loaded, remove yourself
script.onload = function() {
  this.parentNode.removeChild(this);
};
// append script to webpage
(document.head || document.documentElement).appendChild(script);

var 



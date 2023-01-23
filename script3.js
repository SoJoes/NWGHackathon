document.getElementById("Jacana2").style.display = "none";
document.getElementById("Jacana3").style.display = "none";
document.getElementById("Jacana").style.display= "block";


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
    increment();
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
    if(document.getElementById("Jacana").style.display== "block") {
      document.getElementById("Jacana").style.display = "none";
      document.getElementById("Jacana3").style.display = "none";
      document.getElementById("Jacana2").style.display= "block";
    }else if( document.getElementById("Jacana2").style.display== "block"){
      document.getElementById("Jacana").style.display = "none";
      document.getElementById("Jacana3").style.display = "block";
      document.getElementById("Jacana2").style.display= "none";
    }
   
		alert("Jacana Evolved!");
    setProgress("0")
        // Evolve function here
	}
  
  chrome.storage.sync.set({'level': j, 'bar': 'hi'}, function() {
    console.log('Settings saved');
  });
  chrome.storage.sync.get(['level', 'bar', 'poo'], function(items) {
    console.log('Settings retrieved', items);
  });
}




var ElementButton = document.getElementById("newElement")
ElementButton.onclick = function() {
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
    };
  }
}



var pages = document.getElementsByClassName("Main");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < pages.length; i++) {
  pages[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}


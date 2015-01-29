/*
document.body.onload = addHeader;
document.body.onload = addFooter;
*/
window.onload = function(){
	addHeader();
	addFooter();
};

function addHeader () { 
  var header = document.querySelector("header"); 
  var nav = document.createElement("nav");
  var ul = document.createElement("ul");
  var li = document.createElement("li");
  var a = document.createElement("a");
  
  li.textContent = "this is a link";

  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(li);
  li.appendChild(a);
}


function addFooter () { 
  var footer = document.querySelector("footer"); 
	footer.textContent = "Copyright © L. Zanotti 2015";
	document.body.appendChild(footer);
}

//document.querySelector
//element.setAttribute(attribute, value);


  //   li.classList.add('current');

  //   header.textContent = "Testing, testing, can you see this?";
  //   element.setAttribute(attribute, value);
  
  // document.body.appendChild(header);
  // document.body.appendChild(nav);
  // document.body.appendChild(ul);
  // document.body.appendChild(li);
  // document.body.appendChild(a);

//   // Create a new, plain <span> element
// var sp1 = document.createElement("span");

// // Get a reference to the element, before we want to insert the element
// var sp2 = document.getElementById("childElement");
// // Get a reference to the parent element
// var parentDiv = sp2.parentNode;

// // Insert the new element into the DOM before sp2
// parentDiv.insertBefore(sp1, sp2);

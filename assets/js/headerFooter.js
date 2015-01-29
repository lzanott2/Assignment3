document.body.onload = addHeader;
document.body.onload = addFooter;


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


// Everything below needs to go into the header.

// <nav>
//   <ul>
//     <li class="current">Home</li>
//     <li><a href="resume.html">Resume/CV</a></li>
//     <li><a href="blog.html">Blog</a></li>       
//     </ul> 
// </nav>
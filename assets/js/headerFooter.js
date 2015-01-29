addHeader();
addFooter();

function addHeader () { 
  var header = document.querySelector("header"); 
  var nav = document.createElement("nav");
  var ul = document.createElement("ul");
  
  var li = document.createElement("li");
  li.classList.add("current");
  li.textContent = "Home";

  var li = document.createElement("li");
  var a = document.createElement("a");
  a.setAttribute('href','resume.html');
   a.textContent = "Resume";

  var li = document.createElement("li");
  var a = document.createElement("a");
  a.setAttribute('href','blog.html');
  a.textContent = "Blog";

  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(li);
  li.appendChild(a);
}


function addFooter () { 
  var footer = document.querySelector("footer"); 
  var span = document.createElement('span');
  span.textContent = "Copyright © L. Zanotti 2015";
  footer.appendChild(span);
}


// Everything below needs to go into the header.

// <nav>
//   <ul>
//     <li class="current">Home</li>
//     <li><a href="resume.html">Resume/CV</a></li>
//     <li><a href="blog.html">Blog</a></li>       
//     </ul> 
// </nav>

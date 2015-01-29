addHeader();
addFooter();

function addHeader () { 
  var header = document.querySelector("header"); 
  var nav = document.createElement("nav");
  var ul = document.createElement("ul");
  
  var li = document.createElement("li");
  li.classList.add("current");
  li.textContent = "Home";
  ul.appendChild(li);

  var li2 = document.createElement("li");
  var a2 = document.createElement("a");
  a2.setAttribute('href','resume.html');
  a2.textContent = "Resume";
  ul.appendChild(li2);
  li2.appendChild(a2);

  var li3 = document.createElement("li");
  var a3 = document.createElement("a");
  a3.setAttribute('href','blog.html');
  a3.textContent = "Blog";
  ul.appendChild(li3);
  li3.appendChild(a3);

  header.appendChild(nav);
  nav.appendChild(ul);
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

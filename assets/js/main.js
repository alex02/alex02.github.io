function ade(a,b,c){return a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c,!1)}document.addEventListener("DOMContentLoaded",function(){ade(document.getElementById("mobile-menu"),"click",function(){this.classList.toggle("opened");this.setAttribute("aria-expanded",this.classList.contains("opened"));document.getElementById("home-menu").classList.toggle("opened")})});
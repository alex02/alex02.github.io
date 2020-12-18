document.addEventListener("DOMContentLoaded", function(event)
{
   var me = document.getElementById('mobile-menu'),
       he = document.getElementById('home-menu'),
       f = function()
         {
          this.classList.toggle('opened');
          this.setAttribute('aria-expanded', this.classList.contains('opened'));
          he.classList.toggle('opened');
         };
         
   return me.addEventListener('click', f, false);
});
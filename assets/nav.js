(function(){
  var h=document.querySelector('.site-header'), nav=h&&h.querySelector('.nav');
  if(!nav) return;
  nav.id=nav.id||'main-nav';
  var b=document.createElement('button');
  b.type='button';b.className='nav-toggle';b.setAttribute('aria-controls',nav.id);b.setAttribute('aria-expanded','false');
  b.innerHTML='<span class="bars" aria-hidden="true"></span><span class="nav-toggle-label">Menu</span>';
  nav.parentNode.insertBefore(b,nav.nextSibling);
  function set(open){h.classList.toggle('nav-open',open);b.setAttribute('aria-expanded',open?'true':'false');b.querySelector('.nav-toggle-label').textContent=open?'Close':'Menu';}
  b.addEventListener('click',function(){set(!h.classList.contains('nav-open'));});
  nav.addEventListener('click',function(e){if(e.target.closest('a'))set(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&h.classList.contains('nav-open')){set(false);b.focus();}});
  document.addEventListener('click',function(e){if(h.classList.contains('nav-open')&&!h.contains(e.target))set(false);});
  window.addEventListener('resize',function(){if(window.innerWidth>960)set(false);});
})();

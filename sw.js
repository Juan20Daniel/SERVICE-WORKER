
//código para encontrar cuantos elementos tienen extensión .css
self.addEventListener('fetch', event =>{
	console.log(event.request.url.includes('.css')); 
});

self.addEventListener('fetch', evento =>{
  if(evento.request.url.includes('.js')){
    console.log(evento.request.url);
    let respuesta = fetch('color.js');

    evento.respondWith( respuesta );
  }
});

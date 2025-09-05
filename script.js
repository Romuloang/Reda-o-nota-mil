
// Animação de transição entre páginas
document.addEventListener('DOMContentLoaded', function() {
	const body = document.body;
	body.classList.add('fade-transition');

	// Intercepta cliques em links internos
	document.querySelectorAll('a[href]').forEach(function(link) {
		const href = link.getAttribute('href');
		if (href && !href.startsWith('http') && !href.startsWith('#')) {
			link.addEventListener('click', function(e) {
				e.preventDefault();
				body.classList.add('fade-out');
				setTimeout(function() {
					window.location.href = href;
				}, 600); // tempo igual ao transition do CSS
			});
		}
	});
});

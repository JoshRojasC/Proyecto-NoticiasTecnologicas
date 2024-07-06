// <!-- Aque voy a agregar el JS para que cuando se haga click en el menu el vibre el logo -->
    document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll('.link');
    const logo = document.getElementById('logo');

        links.forEach(link => {
        link.addEventListener('click', function () {
            logo.classList.add('vibrate');

            // Remover la clase de vibración después de 0.6 segundos (3 ciclos de vibración)
            setTimeout(() => {
                logo.classList.remove('vibrate');
            }, 600);
        });
        });
    });
document.addEventListener('DOMContentLoaded', () => {
  // Lógica para el formulario de contacto (contact-form)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
      alert('Mensaje enviado (simulado).');
    });
  }

  // Lógica para el formulario de registro (signup-form)
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nombre = signupForm.nombre.value;
      const apellido = signupForm.apellido.value;
      const correo = signupForm.correo.value;
      const contraseña = signupForm.contraseña.value;

      const datos = {
        nombre: `${nombre} ${apellido}`,
        correo: correo,
        contraseña: contraseña,
        idRol: 2
      };

      try {
        const res = await fetch('http://localhost:3001/api/usuarios', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(datos)
        });

        const resultado = await res.json();
        if (res.ok) {
          alert('Usuario registrado correctamente');
          signupForm.reset();
        } else {
          alert('Error: ' + resultado.error);
        }
      } catch (err) {
        console.error('Error de conexión:', err);
        alert('Error de conexión con el servidor');
      }
    });
  }
});
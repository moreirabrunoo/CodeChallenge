document.getElementById('registroForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío por defecto del formulario

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const birthdate = document.getElementById('birthdate').value;

    const data = {
        name: name,
        lastname: lastname,
        birthdate: birthdate
    };

    fetch(' https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('respuesta').innerHTML = `Respuesta del servidor: ${JSON.stringify(data)}`;
    })
    .then(response => console.log(data))
    .catch(error => {
        console.error('Error al enviar la solicitud:', error);
    });
});


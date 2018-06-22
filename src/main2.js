var contenido = document.querySelector('#contenido')

        function traer() {
            fetch('http://192.168.1.12:8887/cohorts/lim-2018-03-pre-core-pw/users(1).json?static=1')
                .then(res => res.json())
                .then(datos => {
                    // console.log(datos)
                    tabla(datos)
                })
        }

        function tabla(datos) {
            // console.log(datos)
            contenido.innerHTML = ''
            for(let valor of datos){
                // console.log(valor.nombre)
                contenido.innerHTML += `
                
                <tr>
                    <th scope="row">${ valor.id }</th>
                    <td>${ valor.name }</td>
                    <td>${ valor.email }</td>
                    <td>${ valor.estado ? "Activo" : "Eliminado" }</td>
                </tr>
                
                `
            }
        }


//MOOK: Datos de ejemplo
const mensajes = [
    {
        name: "Juan",
        content: 'Hola!',
        time: '16:01',
        id: 1
    },
    {
        name: "Maria",
        content: 'Hola que tal juan!',
        time: '16:03',
        id: 2
    },
    {
        name: "Juan",
        content: 'Todo bien por suerte, y vos?',
        time: '16:05',
        id: 3
    }
]

function eliminarMensajePorId (id_mensaje){
    for(let mensaje of mensajes){
        console.log(mensaje.id, id_mensaje)
        console.log(Number(mensaje.id) === Number(id_mensaje))
        if(Number(mensaje.id) === Number(id_mensaje)){
            console.log('hola')
            const posicion_mensaje = mensajes.indexOf(mensaje)
            mensajes.splice(posicion_mensaje, 1)
            return true
        }
    }
    return false
}


/* const nombres = ['pepe', 'juan', 'maria']

const posicion_juan = nombres.indexOf('juan')
nombres.splice(posicion_juan, 1) */


//Hacer una funcion llamada eliminarMensajePorId(id_mensaje) 
//Que reciba el id_mensaje y lo elimine
//pro tip: splice

//Diccionario
const CHAT_COMPONENT = {
    ELEMENTS: {
        LIST: document.querySelector('#messages-list'),
        FORM: document.querySelector('#message-form'),
        FORM_STATUS: document.querySelector('#form-status')
    }
}

function renderMessages (){
    //Quiero acumular todos los mensajes en la variable messages_string_HTML
    let messages_string_HTML = ''
    for(const message of mensajes){
        const message_string_HTML = `
            <div>
                <span>${message.name}</span>
                <p>${message.content}</p>
                <span>${message.time}</span>
                <button class='delete-message-btn' data-message-id="${message.id}">Eliminar</button>
                <hr/>
            </div>
        `
        //Acumulamos cada mensaje generado en la lista de mensajes
        messages_string_HTML = messages_string_HTML + message_string_HTML
    }
    
    //Ahora que tenemos todo el string generado, vamos a mostrarlo en la pagina
    //.innerHTML es una propiedad de los elementos que interpreta HTML de un string
    //EJ: contenedor.innerHTML = '<h1>Hola</h1>' // Se va a imprimir un H1 en pantalla con ese contenido
    CHAT_COMPONENT.ELEMENTS.LIST.innerHTML = messages_string_HTML

    //Llamar por clase a todos los botones de eliminar
    const lista_btn_eliminar = CHAT_COMPONENT.ELEMENTS.LIST.getElementsByClassName('delete-message-btn')
    for(let btn_eliminar of lista_btn_eliminar) {
        //Cuando le den click a este btn que ocurra...
        btn_eliminar.addEventListener(
            'click',
            (evento)=> {
                console.log('boton accionado', evento.target)
                const btn_accionado = evento.target
                //Estamos llamando al valor de data-message-id attribute
                //console.log(btn_accionado.dataset.messageId)
                const id_mensaje = btn_accionado.dataset.messageId
                const resultado = eliminarMensajePorId(id_mensaje)
                if(!resultado){
                    alert("Mensaje no se pudo eliminar")
                }

                renderMessages()

            }
        )
    }
}

//Si la persona entra a la pagina le renderizo los mensajes
renderMessages()

function handleSubmitNewMessage (event){
    //El formulario por defecto recarga la pagina
    //Con preventDefault lo evitamos
    event.preventDefault()

    //Que es event.target?
    //el elemento que desencadeno el evento submit
    //En este caso el event.target seria el <form></form> ya que es quien desencadeno el evento submit
    //console.log(event.target)

    //Puedo llamar a un cierto input por su atributo name, a partir del formulario
    //console.log(event.target.message.value)
    const new_message = event.target.message.value
    const form_status = {
        ok: false, //Si hay o no error
        message: null //El texto de status
    }
    if(!new_message){
        form_status.ok = false
        form_status.message = 'Debes escribir algo en el mensaje' 

    }
    else if(new_message.length > 30){
        form_status.ok = false
        form_status.message = 'Mensaje muy largo'
    }
    else{
        form_status.ok = true
        form_status.message = 'mensaje enviado'

        //Creamos la fecha de envio del mensaje
        const fecha_actual = new Date()
        const hora_actual = fecha_actual.getHours()
        const minuto_actual = fecha_actual.getMinutes()

        //Creamos el nuevo mensaje
        const new_message_object = {
            name: "Matias",
            content: new_message,
            id: mensajes.length + 1,
            time: `${hora_actual}:${minuto_actual}`
        }

        //Agregamos el nuevo mensaje a la lista
        mensajes.push(new_message_object)

        //Como modificamos la lista de mensajes, debemos re-pintar (re-renderizar) la lista de mensajes
        renderMessages()

        event.target.reset()
    }

    //Manejo de status de formulario
    if(form_status.ok){
        CHAT_COMPONENT.ELEMENTS.FORM_STATUS.classList.add('success')
        CHAT_COMPONENT.ELEMENTS.FORM_STATUS.classList.remove('error')
    }
    else{
        CHAT_COMPONENT.ELEMENTS.FORM_STATUS.classList.add('error')
        CHAT_COMPONENT.ELEMENTS.FORM_STATUS.classList.remove('success')
    }
    CHAT_COMPONENT.ELEMENTS.FORM_STATUS.innerText = form_status.message
}

CHAT_COMPONENT.ELEMENTS.FORM.addEventListener(
    'submit',
    handleSubmitNewMessage
)
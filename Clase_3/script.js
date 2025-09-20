/* 
Una clase es una estructura que tiene JS para crear objetos
 */

class MessagesManager {
    messages = []
    
    getMessages(){
        return this.messages
    }

    agregar(author, content){
        
        const fecha_actual = new Date()
        const hora_actual = fecha_actual.getHours()
        const minuto_actual = fecha_actual.getMinutes()
        const time = `${hora_actual}:${minuto_actual}`
        this.messages.push({
            name: author,
            content: content,
            time: time,
            id: this.messages.length + 1
        })
    }

    eliminarPorId(id_mensaje){
        for(let mensaje of this.messages){
            if(Number(mensaje.id) === Number(id_mensaje)){
                const posicion_mensaje = this.messages.indexOf(mensaje)
                this.messages.splice(posicion_mensaje, 1)
                return true
            }
        }
        return false
    }

    vaciar(){
        this.messages = []
    }
}

const messages_manager = new MessagesManager()





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
        FORM_STATUS: document.querySelector('#form-status'),
        DELETE_ALL: document.getElementById('delete-all-messages')
    }
}

function renderMessages (){
    const mensajes = messages_manager.getMessages()
    //Quiero acumular todos los mensajes en la variable messages_string_HTML
    let messages_string_HTML = ''
    /* 
    if (mensajes.length == 0) {
        eliminar_todo_btn.disabled = true
    }
    else{
        eliminar_todo_btn.disabled = false
    }    
    */

    if (mensajes.length === 0){
        CHAT_COMPONENT.ELEMENTS.DELETE_ALL.classList.add('hidden')
    }
    else {
        CHAT_COMPONENT.ELEMENTS.DELETE_ALL.classList.remove('hidden')
    }
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
                const resultado = messages_manager.eliminarPorId(id_mensaje)
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
    event.preventDefault()


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

        messages_manager.agregar('Yo', new_message)

        renderMessages()

        event.target.reset()
    }

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


const eliminar_todo_btn = document.getElementById('delete-all-messages')
function eliminarTodosLosMensajes(){
    messages_manager.vaciar()
    renderMessages()
}
eliminar_todo_btn.addEventListener(
    'click',
    eliminarTodosLosMensajes
)

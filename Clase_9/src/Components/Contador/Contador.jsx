/* 
Crear un componente llamado contador con la logica de nuestro contador
/Components/Counter/Counter.jsx

Tendra 3 props:
- Limite: Valor maximo del contador
- Minimo: Valor minimo del contador
- Initial: Valor inicial del contador

<Counter limite={10} minimo={0} initial={0} /> 
*/

import { useState } from "react"


function Contador({ limite = 10, minimo = 0, initial = 0 }) {

    const [contador, setContador] = useState(initial)
    const [error, setError] = useState(null)

    function onIncrement() {
        if(contador < limite){
            setContador(contador + 1)
            setError(null)
        }
        else{
            setError('El maximo del contador es ' + limite)
        }
    }

    function onDecrement() {
        if(contador > minimo){
            setContador(contador - 1)
            setError(null)
        }
        else{
            setError('El minimo del contador es ' + minimo)
        }
    }

    function onReset() {
        setContador(minimo)
    }

    return (
        <div>
            <button onClick={onReset}>Reiniciar</button>
            <button onClick={onDecrement}>-</button>
            <span>{contador}</span>
            <button onClick={onIncrement}>+</button>
            {
                error 
                && <span style={{color: 'red'}}>{error}</span>
            }
        </div>
    )
}

export default Contador
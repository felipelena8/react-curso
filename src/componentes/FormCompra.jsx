import React, { useState } from 'react'

function FormCompra({ mostrar, setMostrar, generarOrden, items, ordenCompra, vaciarCarrito }) {
    const enviarDatos = (e) => {
        e.preventDefault();
        if (validacionEmail()) {
            const orden = { ...items }
            orden.buyer = { name: (nombre + ' ' + apellido), phone: telefono, email: email }
            generarOrden(orden)
            setTimeout(() => setDatosEnviados(true), 500)
            vaciarCarrito();
        } else setIncorrecto(true)
    }
    const validacionEmail = () => {
        return confirmacionEmail === email;
    }
    const [incorrecto, setIncorrecto] = useState(false)
    const [datosEnviados, setDatosEnviados] = useState(false)
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [confirmacionEmail, setConfirmacionEmail] = useState('')

    return (
        <div className={mostrar ? 'contenedorForm' : 'contenedorForm d-none'}>
            <div className='formBox'>
                {!datosEnviados ?
                    <form onSubmit={(e) => enviarDatos(e)} ><h3>Ingrese sus datos para finalizar la compra</h3><div className='groupDatos'>
                        <div className="group-1">
                            <input type="text" placeholder='Nombre' required onChange={(e) => setNombre(e.target.value)} />
                            <input type="text" placeholder='Apellido' required onChange={(e) => setApellido(e.target.value)} />
                            <input type="number" placeholder='Telefono' className='telefono' required onChange={(e) => setTelefono(e.target.value)} /></div>
                        <div className='group-2'>
                            <input type="email" placeholder='Email' id='mail-2' required onChange={(e) => { setEmail(e.target.value); if (incorrecto) setIncorrecto(false) }} style={{ background: incorrecto ? 'red' : 'white' }} />
                            <input type="email" placeholder='Confirmar email' id='mail-2' required onChange={(e) => { setConfirmacionEmail(e.target.value); if (incorrecto) setIncorrecto(false) }} style={{ background: incorrecto ? 'red' : 'white' }} />
                            <button type='submit' className='btn'>Enviar</button>
                        </div>
                    </div>
                    </form>
                    :
                    <><h2>Gracias {nombre}!</h2><p>Su orden de compra es: {ordenCompra}</p>
                    </>
                }
                <button onClick={() => setMostrar(false)} className='btnCerrar'>Cerrar</button>
            </div>
        </div >
    )
}

export default FormCompra
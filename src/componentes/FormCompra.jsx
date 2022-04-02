import React, { useState } from 'react'

function FormCompra({ mostrar, setMostrar, generarOrden, items, ordenCompra }) {
    const enviarDatos = () => {
        if (validacionEmail) {
            const orden = { ...items }
            orden.buyer = { name: (nombre + ' ' + apellido), phone: telefono, email: email }
            generarOrden(orden)
            setTimeout(() => setDatosEnviados(true), 200)

        }
    }
    const validacionEmail = () => {
        return confirmacionEmail === email;
    }
    const [datosEnviados, setDatosEnviados] = useState(false)
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [confirmacionEmail, setConfirmacionEmail] = useState('')

    return (
        <div className={mostrar ? 'contenedorForm' : 'contenedorForm d-none'}>
            <form className='form' onSubmit={e => { e.preventDefault(); }} >
                {!datosEnviados ? <><h3>Ingrese sus datos para finalizar la compra</h3>
                    <div className='groupDatos'>
                        <div className="group-1">
                            <input type="text" placeholder='Nombre' required onChange={(e) => setNombre(e.target.value)} />
                            <input type="text" placeholder='Apellido' required onChange={(e) => setApellido(e.target.value)} />
                            <input type="text" placeholder='Telefono' required onChange={(e) => setTelefono(e.target.value)} /></div>
                        <div className='group-2'>
                            <input type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                            <input type="email" placeholder='Confirmar email' required onChange={(e) => setConfirmacionEmail(e.target.value)} />
                            <button type='submit' className='btn' onSubmit={() => enviarDatos()}>Enviar</button>
                        </div>
                    </div></>
                    :
                    <><h2>Gracias {nombre}!</h2><p>Su orden de compra es: {ordenCompra}</p>
                    </>
                }
                <button onClick={() => setMostrar(false)}>Cerrar</button>
            </form >
        </div >
    )
}

export default FormCompra
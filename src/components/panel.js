import React from 'react'
import '../css/panel.css'
import { useNavigate } from 'react-router-dom'

export default function Panel() {
    
    const navigate = useNavigate()

    const onPressCreate = () => {
        navigate('/create')
    }

    const onPressHome = () => {
        navigate('/')
    }

    const onPressDelete = () => {
        navigate('/delete')
    }
    return(
        <div className="container"><br/><br/><br/><br/><br/><br/><br/>
            <center>
            <button type="button" className="btn btn-success" id='crear' onClick={onPressCreate}>Crear</button><br/><br/>
            <button type="button" className="btn btn-danger" id='eliminar' onClick={ onPressDelete}>Eliminar</button><br/><br/>
            <button type="button" className="btn btn-link" id='editar' onClick={onPressHome} >Volver Al Inicio</button><br/>
            </center>
        </div>
    )
}
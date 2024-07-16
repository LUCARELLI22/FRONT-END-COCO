import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registrar } from '../../fetching/auth.fetching'
import './Register.css'
const RegisterScreen = () => {
const [errorText, setErrorText] = useState('')
const navigate = useNavigate()
    const handleSubmit = async (event) =>{
        try{
            event.preventDefault()
            const usuario = {
                email: event.target.email.value,
                password: event.target.password.value
            }
            console.log(usuario)
            await registrar(usuario)
            setErrorText('')
            navigate('/login')
        }
        catch(error){
            setErrorText(error.message)
        }
    }
return (
    <div className='register'>
        <form onSubmit={handleSubmit} className='register-form'>
        <h1>Registrate</h1>
            <div>
                <label htmlFor="email">INGRESE SU EMAIL : </label>
                <input placeholder='usuario@gmail.com' id='email' name='email'/>
            </div>
            <div>
                <label htmlFor="password">INGRESE SU CONTRASEÑA : </label>
                <input type="text" placeholder='******' id='password' name='password' />
                
            </div>
            {
                errorText 
                &&
                <span style={{color: 'red'}}>{errorText}</span>
            }
            <button type='submit'>Registrar</button>
        </form>
    </div>
)
}

export default RegisterScreen
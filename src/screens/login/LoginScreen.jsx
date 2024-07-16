import React, { useState } from 'react'
import { login } from '../../fetching/auth.fetching'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"

const LoginScreen = () => {
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
            await login(usuario)
            setErrorText('')
            navigate('/home')
        }
        catch(error){
    
            setErrorText(error.message)
        }
    }
return (
    
    <div className="login">
        <article>Un programa de gestión de productos eficaz puede marcar la diferencia entre el éxito y el fracaso de un producto. Al contar con una estrategia clara y bien definida, las empresas pueden aumentar sus posibilidades de crear productos que sean amados por los usuarios y generen beneficios para la empresa.</article>
        <h1>COMIENZA TU SESION</h1>
        <form onSubmit={handleSubmit}>
            <div className='forml'>
                <label htmlFor="email">Ingrese su email:</label>
                <input placeholder='joeDoe@gmail.com' id='email' name='email'/>
            </div>
            <div className='forml'>
                <label htmlFor="password">Ingrese su contraseña:</label>
                <input type="text" placeholder='******' id='password' name='password' />
            </div>
            {
                errorText 
                &&
                <span style={{color: 'red'}}>{errorText}</span>
            }
            <span>Si aun no estas registrado, <Link to={'/register'}>registrate</Link></span>
            <button type='submit'>INICIAR SESION</button>
        </form>
        
    </div>
)
}

export default LoginScreen
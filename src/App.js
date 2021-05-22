import React, {useRef, useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './App.css';

const App = () => {

  const [captchaValido, setCaptchValido] = useState(null);
  const [usuarioValido, setUsuarioValido] = useState(false);

  const captcha = useRef(null);

  const onChange = () => {
    if(captcha.current.getValue()){
      setCaptchValido(true);
    }
  }

  const submit = (e) => {
    e.preventDefault();

    if(captcha.current.getValue()){
      setUsuarioValido(true);
      setCaptchValido(true);
    } else{
      setUsuarioValido(false); 
      setCaptchValido(false);
    }
  }

  return (
    <div className="contenedor">
      {!usuarioValido &&

      <div className="registrate">
        <h1>Registrate</h1>
          <form className="formulario" action="" onSubmit={submit}>
            <input type="text" name="usuario" id="usuario" placeholder="Usuario" required/>
            <input type="password" name="password" id="password" placeholder="Contraseña" required/>
            <input type="password" name="password2" id="password2" placeholder="Repetir Contraseña" required/>

            <div className="recaptcha">
              <ReCAPTCHA
                ref={captcha}
                sitekey="6LePIOQaAAAAAFx8fWWzNSVLkuoSFQvDqvP-Nhcn"
                onChange={onChange}
              />,
            </div>

            {captchaValido === false && <div className="error-captcha">Por favor acepta el captcha</div>}
            

            <button type="submit">Iniciar Sesion</button>
          </form>
      </div>

      }

      {usuarioValido && // esto es como si pusiera solo un IF, sin el ELSE. "si es verdadero, entonces hace esto"
        <div>
            <h1>Bienvenido</h1>
        </div>
      }

      
    </div>
  );
}

export default App;

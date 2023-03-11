
import { useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {

  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [send, setSend] = useState(false);
  const [errorSelect, setErrorSelect] = useState("");
  

  const onChangeUserName = (event) =>{
    setUserName(event.target.value);
  };
  const onChangeUserLastName = (event) =>{
    setUserLastName(event.target.value);
  };
  const onChangeUserMail = (event) =>{
    setUserMail(event.target.value);
  };
  const onChangeSelectValue = (event) =>{
    setSelectValue(event.target.value);
  };


  const handleSubmit = (event) =>{
    event.preventDefault();

    const validUserName = userName.trim();
    if(validUserName.length < 3){
      setErrorSelect("Por favor chequea que la información sea correcta, Nombre debe tener mas de 3 caracteres");
      return;
    }

    const validUserLastName = userLastName.trim();
    if(validUserLastName.length <= 6){
      setErrorSelect("Por favor chequea que la información sea correcta, Apellido debe tener minimo 6 caracteres");
      return;
    }

    const validMail = userMail.trim();
    const regexMail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;    
    if(validMail.length <= 6){
      setErrorSelect("Por favor chequea que la información sea correcta, debes ingresar una cuenta de correo electronico");
      return;
    } else if (!regexMail.test(validMail)) {
      setErrorSelect("Por favor chequea que la información sea correcta, debes ingresar una cuenta de correo electronico valida");
      return;
    }
    

    if (selectValue === ""){
      setErrorSelect("Por favor chequea que la información sea correcta, Debes seleccionar un curso");
      return;
    }

    setSend(true);
    setErrorSelect("");
  };

  return (
    <div className="App">
      <div>
        <h1>Cursos de programación:</h1>
        <h3>Si estas interesado inscríbete aquí:</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingresa tu nombre:' value={userName} onChange={onChangeUserName} />
        <input type="text" placeholder='Ingresa tu Apellido:' value={userLastName} onChange={onChangeUserLastName} />
        <input type="mail" placeholder='Ingresa tu Correo:' value={userMail} onChange={onChangeUserMail} />
        <select placeholder='Cursos:' value={selectValue} onChange={onChangeSelectValue}>
          <option value="" disabled default>Cursos:</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Fullstack">Fullstack</option>
        </select>
        <input type="submit" value="Enviar" />
      </form>

    <div className='error'>{errorSelect}</div>

      {send ? <Card userName={userName} userLastName={userLastName} userMail={userMail} selectValue={selectValue} />: "" }

    </div>
  );
}

export default App

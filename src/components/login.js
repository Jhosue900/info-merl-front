import "../css/login.css";
import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate()

    const [info, setInfo] = useState({
        user: "",
        code: ""
    })

    const handleChange = event => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
          });
    };

    const onPress = () => {
        let user = info.user
        let code = info.code

        if (user == "Coordinacion2023/merl" && code == "202311") {
            navigate('/panel')
        }else{
            alert("Datos Incorrectos")
        }
    }
  return (
    <div className="container"><br/><br/>


    
    <center><h2 className="login">Ingresar</h2><hr className="hr"/></center>
    <br/><br/>
      <div className="mb-3 row">
        <center><div className="col-sm-3" id="input">
          <input type="text" className="form-control" name="user" id="inputPassword" placeholder="Usuario" onChange={handleChange} value={info.user}/>
        </div><br/>
        <div className="col-sm-3" id="input">
          <input type="password" className="form-control" name="code" id="inputPasswords" placeholder="Codigo" onChange={handleChange} value={info.code}/>
        </div>
        </center>

        <center><div className="col-12"><br/>
        <button className="btn btn-dark" id="button" onClick={onPress}>Validar</button>
        </div></center>
      </div>
      
    </div>
  );
}

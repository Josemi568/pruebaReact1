import React from "react";
import "./App.css";

const deseos=[
    {texto: "ir a la luna", cumplido:false},
    {texto: "hacer videojuego", cumplido:false},
    {texto: "comprar pc", cumplido:true},
    {texto: "jugar kh3", cumplido:true}
]

const App=() =>
<div className="app">
    <h1>Lista de deseos</h1>
    <fieldset className="deseo-input__field">
    <legend className="deseo-input__label">Deseos</legend>
    <input placeholder="introduce tu deseo" className="deseo-input"></input>
    </fieldset>

    <ul className="lista-deseos">
        { deseos.map ( deseo => (
            <li className={`lista-deseos__item ${deseo.cumplido ? 'lista-deseos__item--cumplido': ''}`}>
                <input type="checkbox" checked={deseo.cumplido}/>
                <label className="deseo-input__label">{deseo.texto}</label>
            </li>
        ))
        }
    </ul>

    <button type="button" className="deseos-clear">Eliminar deseo cumplido</button>
</div>

export default App;
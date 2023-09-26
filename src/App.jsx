import { useState } from "react";
export default App;
function App() {
  const [contador, setContador] = useState(0)
  if (contador < 0 || contador > 10) {
    return (setContador(0))
  }
  return (
    <>
      <div className="principal">
        <h1>Vamos começar o desafio : {contador}</h1>
        <div className="botao">
          
            <button onClick={() => setContador(contador + 1)}><h3>Aumentar</h3></button>
            <button onClick={() => setContador(contador - 1)}><h3>Diminuir</h3></button>
            <button onClick={() => setContador(0)}><h3>Zerar</h3></button>
          
        </div>

      </div>


    </>


  )
}
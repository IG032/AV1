import './App.css';

function App() {
  const nome = "Igor Evêncio"
  const hobby = "Jogar videogame"
  const filme = "O Senhor dos Anéis"
  const curso = "Desenvolvimento de Sistemas"
  const cor = "Branco"
  function mensagem() {
    alert("Você seguiu " + nome)
  }
  return (
    <div className="card">
      <img
      src=""
      alt="Foto de perfil"
      />
      <h1>{nome}</h1>
      <p>
        <strong>Hobby:</strong> {hobby}
      </p>
      <p>
        <strong>Filme favorito:</strong> {filme}
      </p>
      <p>
        <strong>Curso:</strong> {curso}
      </p>

      <p>
        <strong>Cor favorita:</strong> {cor}
      </p>

      <button onClick={mensagem}>Seguir</button>
    </div>
  );
}

export default App;

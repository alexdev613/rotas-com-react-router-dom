import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
        <h1>Bem vindo a página Home!</h1>
        <span>Esta é a página principal do site!</span>
        <br /><br />

        <Link to="/sobre">Ir para página Sobre</Link>
    </div>
  )
}
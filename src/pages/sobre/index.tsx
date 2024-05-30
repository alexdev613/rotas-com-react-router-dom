import { Link } from 'react-router-dom';

export function Sobre() {
  return (
    <div>
        <h1>Bem vindo a página Sobre!</h1>
        <span>Aqui nesta página, você encontrar tudo SOBRE nós!</span>
        <br /><br />

        <Link to="/" >Ir para a página Home</Link>
    </div>
  )
}
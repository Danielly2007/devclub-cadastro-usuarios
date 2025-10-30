import './style.css'
import DeleteIcon from '../../assets/img/delete.png'

function Home() {

  const users = [{
    id: '1',
    name: 'João Silva',
    age: 28,
    email: 'judasilva@gmail.com'
  },
  {
    id: '2',
    name: 'Maria Souza',
    age: 34,
    email: 'masouza@gmail.com'
  },

  {
    id: '3',
    name: 'Pedro Oliveira',
    age: 22,
    email: 'pedrinho@gmail.com'
  },
  ]

  return (
    <div className="container">
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input type="text" placeholder="Nome" name='nome' />
        <input type="number" placeholder="Idade" name='idade' />
        <input type="email" placeholder="Email" name='email' />
        <button type="button">Cadastrar</button>
      </form>

      {
        users.map((user) => (
          <div key={user.id} className='card'>
            <div className="">
              <p>Nome:  <span>{user.name} </span> </p>
              <p>Idade: <span>{user.age}  </span> </p>
              <p>Email: <span>{user.email}</span> </p>
            </div>

            <div className='btn'>
              <button>
                <img src={DeleteIcon} />
              </button>
            </div>

          </div>
        ))
      }

    </div>
  )
}

export default Home

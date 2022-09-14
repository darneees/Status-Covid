import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FiActivity } from 'react-icons/fi';
import './styles.css';
import api from './services/api';


function App() {

  const [input, setInput] = useState('');
  const [uf, setUf] = useState({});

  async function handleSearch() {

        if (input === '') {
          alert("Preencha com uma UF!")
          return;
        }
        try {

          const response = await api.get(`${input}/`);
          setUf(response.data)
          setInput("")

        }catch {
          alert("Ops erro ao buscar");
          setInput("")
        }
      }

  return (


    <div className='mainContainer'>

      <div className="container">

        <h1 className="title">
          <FiActivity size={30} color="#ebf4f5" className='icon' />
          Status Covid
        </h1>

        <div className="content01">

          <div className='inputState'>
            <input type="text" placeholder="Digite uma UF ( ex: sp )"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="buttonSearch" onClick={handleSearch} >
              <FiSearch size={20} color="#111111" />
            </button>
          </div>

        </div>


        {/* Resultado da busca */}
        {Object.keys(uf).length > 0 && (
          <main className='main'>

            <h2>Estado: <em>{uf.state}</em></h2>

            <div className='mainSpn'>
              <span>Casos Registrados: {uf.cases}</span>
              <span>Mortes Registrados: {uf.deaths}</span>
              <span>Suspeitas Registrados: {uf.suspects}</span>
            </div>
        
          </main>
        )}

      </div>

    </div>

  );
}

export default App;


import Boas from './components/paginas/Boas';
import Registo from './components/paginas/Registo';
import Interesse from './components/paginas/Interesse';
import Dashboard from './components/paginas/Dashboard';
import Aprender from './components/paginas/Aprender';
import Desafios from './components/paginas/Desafios';
import Portfolio from './components/paginas/Portfolio';
import Oportunidade from './components/paginas/Oportunidade';
import Perfil from './components/paginas/Perfil';

import { Route, Routes,BrowserRouter } from 'react-router-dom';
import Detalhe from './components/paginas/Detalhe';
import Certificado from './components/paginas/Certificado';

function App() {
  

  return (

    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Boas/>  } /> 
          <Route path="/registo" element={ <Registo/>  } />
          <Route path="/dashboard" element={ <Dashboard/>  } />  
          <Route path="/interesse" element={ <Interesse/>  } /> 
          <Route path="/aprender" element={ <Aprender/>  } /> 
          <Route path="/desafios" element={ <Desafios/>  } /> 
           <Route path="/portfolio" element={ <Portfolio/>  } /> 
            <Route path="/perfil" element={ <Perfil/>  } /> 
             <Route path="/oportunidade" element={ <Oportunidade/>  } /> 
             <Route path="/detalhe" element={ <Detalhe/>  } /> 

              <Route path="/certificado" element={ <Certificado/>  } /> 
        </Routes>
      </BrowserRouter>


    </div>
      
     
     

     

  
   
              
    
      
      
       
      
   


  
  )
}

export default App

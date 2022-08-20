import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About'; 
import Projects from './components/Projects';
import Skills from './components/Skill';
import ContactMe from './components/ContactMe';
import Home from './components/Home';
import Market from './components/Market';
import Content from './components/Content';
import Recycle from './components/Recycle';
import { useState } from 'react';

/*    <About />
      <Projects />
      <Skills />
      <ContactMe />
*/

function App() {
  const [balance, setBalance] = useState(100);
  const [check, setCheck] = useState(false);

  return (
    <main>
      <Header balance={balance} />
      <Home check={check}/>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
      <Content check={check}/>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
      <Market balance={balance} setBalance={setBalance} setCheck={setCheck}/>
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
      <Recycle balance={balance} setBalance={setBalance} />
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
    </main>
  );
}

export default App;
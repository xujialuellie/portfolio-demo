import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Content from './components/Content'; 
import Projects from './components/Projects';
import Skills from './components/Skill';
import Link from './components/Link';


function App() {
  return (
    <main>
      <Header />
      <Content />
      <Projects />
      <Skills />
      <Link />
    </main>
  );
}

export default App;
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Featured from './components/Featured-projects';
import Contact from './components/Contact';
import { motion } from 'framer-motion';
import './Styles.css';


import './App.css'

function App() {
  return (
    <div className='app'>
       <BrowserRouter>
          <motion.header
          initial={{y: -200}}
          animate={{y: 0}}
          transition={{
            duration: '2',
            delay: '0.5'
        }}
          >
              <Link className='link' to='/Home'>Code with Lexzy</Link>
                <Link className='link' to='/About'>About</Link>
                <Link className='link' to='/Skills'>Skills</Link>
                <Link className='link' to='/Featured'>Featured Projects</Link>
                <Link className='link' to='/Contact'>Contact</Link>
             
            </motion.header>
          <Routes>
            <Route path='/Home' element={ <Home /> }/>
            <Route path='/About' element={ <About /> }/>
            <Route path='/Skills' element={ <Skills /> }/>
            <Route path='/Featured' element={ <Featured /> }/>
            <Route path='/Contact' element={ <Contact /> }/>
          </Routes>
       </BrowserRouter>
       </div>

      //  Olawale Onabanjo
  )
}

export default App

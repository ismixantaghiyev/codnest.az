import Main from './components/main/Main';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Projects from './components/Projects/Projects';
import About from './components/about/About';
import partnyor1 from './components/img/partnyor1.png'
import partnyor2 from './components/img/partnyor2.png'
import partnyor3 from './components/img/partnyor3.png'
import partnyor4 from './components/img/partnyor4.png'
import partnyor5 from './components/img/partnyor5.png'
import partnyor6 from './components/img/partnyor6.png'
import { createContext } from 'react';

export const Context = createContext()


function App() {
  const events = [
    {
      id: 1,
      img: partnyor1,
      title: "ARPA",
    },
    {
      id: 2,
      img: partnyor2,
      title: "PRIMA CONSULTING",
    },
    {
      id: 3,
      img: partnyor3,
      title: "CABC GLOBAL",
    },
    {
      id: 4,
      img: partnyor4,
      title: "OMAR NN GROUP",
    },
    {
      id: 5,
      img: partnyor5,
      title: "DEZINNO MMC",
    },
    {
      id: 6,
      img: partnyor6,
      title: "TEXNIK",
    }
  ]

  const values={
    events
  }

  return (
    <div className="App">
      <Context.Provider value={values}>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Main />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;

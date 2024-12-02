import './App.css'
import Header  from "./components/header";
import Footer  from "./components/footer";
import { Outlet } from 'react-router-dom';
function App() {

  return (
    <div>
    <div className='header-bg'>
      <Header />
    </div>
      <div className='main-section'>
        <Outlet />
      </div>
     <Footer /> 
    </div>
  )
}

export default App
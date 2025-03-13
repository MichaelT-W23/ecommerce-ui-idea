import { AppRouter } from './router'
import Navbar from './components/NavBar';
import './App.css'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <p className="text-2xl">TEST WEBSITE</p>
      <AppRouter />
    </>
  );
}

export default App
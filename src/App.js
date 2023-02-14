
import './App.css';
import Form from './components/AutoSave/AutoSave';
import Navbar from './components/Navbar/Navbar';
import Selected from './components/Select/Select';
import Main from './main/Main';
import AllocateDays from './pages/Random/AllocateDays';
import MultipleRandom from './pages/Random/MultipleRandom';
import Random from './pages/Random/Random';

function App() {
  return (
   <>
    <Navbar />
    <Form />
    <Selected />
    {/* <Random /> */}
    <MultipleRandom />
    <AllocateDays />
   </>
  );
}

export default App;

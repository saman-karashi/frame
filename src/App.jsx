
import {useState,useEffect} from 'react';
import Modal from './components/modal';
import { createPortal } from 'react-dom';
import Overlay from './components/overlay';
import Homepage from './pages/home';

function App() {
const [modalIsActive,setModalIsActive] = useState(false);


useEffect(()=>{
modalIsActive && window.scrollTo(0,0)
},[modalIsActive])

  return (
    <>
    <Homepage setModalIsActive={setModalIsActive} />
    {modalIsActive && createPortal(<Modal setModalIsActive={setModalIsActive} />,document.getElementById('modal'))}
    {modalIsActive && <Overlay setModalIsActive={setModalIsActive}/>}
    </>
  );
}

export default App;

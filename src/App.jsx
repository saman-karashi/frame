
import './App.css';
import {useState} from 'react';
import Modal from './components/modal';
import { createPortal } from 'react-dom';
import Overlay from './components/overlay';

function App() {
const [modalIsDisplayed,setModalDisplayed] = useState(false);


  return (
    <div className="container">
      <div className='buttons'>
        <button onClick={()=> setModalDisplayed(true)}>
          دیدگاه مدیریتی محض
        </button>
        <button onClick={()=> setModalDisplayed(true)}>
          نوع بار(دیدگاه نسبتافنی)
        </button>
        <button onClick={()=> setModalDisplayed(true)}>
          طول فیدرهای فشار متوسط و میزان فروش انرژی
        </button>
        <button onClick={()=> setModalDisplayed(true)}>
          طول فیدر میزان فروش و پراکندگی مشترک
        </button>
        <button onClick={()=> setModalDisplayed(true)}>
         طول فیدرهای متوسط میزان فروش انرژی و نوع بار
        </button>
      </div>
      {modalIsDisplayed && createPortal(<Modal setModalDisplayed={setModalDisplayed} />,document.getElementById('modal'))}
      {modalIsDisplayed && <Overlay setModalDisplayed={setModalDisplayed} />}
    </div>
  );
}

export default App;

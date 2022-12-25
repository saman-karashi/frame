import {useState} from 'react';
import { Calendar,CardChecklist,ImageAlt,JournalCheck} from 'react-bootstrap-icons';
import CardBox from '../../components/cardBox';
import {Row,Col} from 'react-bootstrap';

const Homepage = ({setModalIsActive}) => {

return (
<Row className='g-5'>
    <Col lg={6}>
        {/* Icon */}
        <div className='py-3 px-4 d-flex align-items-center bg-light rounded-2'>
            <Calendar size={"35px"} />
            <h5 className='me-3'>چک لیست های میدانی</h5>
        </div>
        {/* Box */}
    <CardBox setModalIsActive={setModalIsActive} />
    </Col>
    <Col lg={6}>
        {/* Icon */}
        <div className='py-3 px-4 d-flex align-items-center bg-light rounded-2'>
            <Calendar size={"35px"} />
            <h5 className='me-3'>چک لیست های میدانی</h5>
        </div>
        {/* Box */}
      <CardBox setModalIsActive={setModalIsActive} />
    </Col>
</Row>
  )
}

export default Homepage
import React from 'react';
import {Row,Col} from 'react-bootstrap';
import {CardChecklist,ImageAlt,JournalCheck} from 'react-bootstrap-icons';

const CardBox = ({setModalIsActive}) => {
return (
<div className='card-box row g-4 bg-light rounded-4 px-3 py-4 mt-2'>
    <div onClick={()=> setModalIsActive(true)} className='ms-auto border align-items-center d-flex box-card bg-white px-4 py-5 rounded-2'>
        <div className="rounded-circle p-2 bg-orange-300">
            <CardChecklist size={'35px'} className="text-orange-600" />
        </div>
        <span className='me-4'>بررسی کلی</span>
    </div>
    <div onClick={()=> setModalIsActive(true)} className='border align-items-center d-flex box-card bg-white px-4 py-5 rounded-2'>
        <div className="rounded-circle p-2 bg-dark-300">
            <ImageAlt size={'35px'} className="text-dark-600" />
        </div>
        <span className='me-4'>مسیریابی و نقشه برداری نقشه های توزیع</span>
    </div>
    <div onClick={()=> setModalIsActive(true)} className='border align-items-center d-flex box-card bg-white px-4 py-5 rounded-2'>
        <div className="rounded-circle p-2 bg-purple-300">
            <JournalCheck size={'35px'} className="text-purple-600"/>
        </div>
        <span className='me-4'>محاسبات مکانیکی در طراحی شبکه های توزیع</span>
    </div>
    <div onClick={()=> setModalIsActive(true)} className='border align-items-center d-flex box-card bg-white px-4 py-5 rounded-2'>
        <div className="rounded-circle p-2 bg-pink-300">
            <CardChecklist size={'35px'} className="text-pink-600"/>
        </div>
        <span className='me-4'>تدوین پرونده الکترونیکی در طراحی شبکه های توزیع</span>
    </div>
    <div onClick={()=> setModalIsActive(true)} className='border align-items-center d-flex box-card bg-white px-4 py-5 rounded-2'>
        <div className="rounded-circle p-2 bg-blue-300">
            <CardChecklist size={'35px'}  className="text-blue-600"/>
        </div>
        <span className='me-4'>تدوین پرونده الکترونیکی در طراحی شبکه های توزیع</span>
    </div>
    <div onClick={()=> setModalIsActive(true)} className='border align-items-center d-flex box-card bg-white px-4 py-5 rounded-2'>
        <div className="rounded-circle p-2 bg-blue-300">
            <CardChecklist size={'35px'}  className="text-blue-600"/>
        </div>
        <span className='me-4'>تدوین پرونده الکترونیکی در طراحی شبکه های توزیع</span>
    </div>
</div>
)
}

export default CardBox
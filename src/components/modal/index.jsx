import React from 'react'

const Modal = ({setModalDisplayed}) => {
  return (
    <>
    <div className='close-modal' onClick={()=> setModalDisplayed(false)}>بستن</div>
    <div className='modal--inner'>
        <div>
            <h3 className='modal-heading'>خوشه ۱</h3>
            <ul>
                <li><a href="#">جنوب استان کرمان</a></li>
                <li><a href="#">استان سیستان و بلوچستان</a></li>
                <li><a href="#">استان فارس</a></li>
                <li><a href="#">استان هرمزگان</a></li>
                <li><a href="#">استان بوشهر</a></li>
            </ul>
        </div>
        <div>
        <h3 className='modal-heading'>خوشه ۲</h3>
            <ul>
                <li><a href="#"> استان خراسان جنوبی</a></li>
                <li><a href="#">استان کهگیلویه و بویراحمد</a></li>
                <li><a href="#">استان ایلام</a></li>
                <li><a href="#">استان خراسان شمالی</a></li>
                <li><a href="#">استان چهارمحال بختیاری</a></li>
                <li><a href="#">استان سمنان</a></li>
            </ul>
        </div>
        <div>
        <h3 className='modal-heading'>خوشه ۳</h3>
            <ul>
                <li><a href="#">شمال استان کرمان</a></li>
                <li><a href="#">استان زنجان</a></li>
                <li><a href="#">استان یزد</a></li>
                <li><a href="#">استان اذربایجان شرقی</a></li>
                <li><a href="#">استان مرکزی</a></li>
                <li><a href="#">استان لرستان</a></li>
                <li><a href="#">استان کردستان</a></li>
                <li><a href="#">استان همدان</a></li>
                <li><a href="#">استان کرمانشاه</a></li>
                <li><a href="#">استان اردبیل</a></li>
                <li><a href="#">استان گلستان</a></li>
                <li><a href="#">استان قزوین</a></li>
                <li><a href="#">غرب استان مازندران</a></li>
                <li><a href="#">استان قم</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Modal
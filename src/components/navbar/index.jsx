import React from 'react'
import {Navbar as NavMenu,InputGroup,Form,Image} from 'react-bootstrap';
import {Search,Bell,ChatDots,ChevronDown} from 'react-bootstrap-icons';
import userImg from '../../assets/userImg.jpg';

const Navbar = () => {
  return (
    <NavMenu expand={false} fixed="top" variant='dark' className='bg-primary'>
        <div className='container py-2 d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <NavMenu.Toggle />
                <NavMenu.Brand className="text-white">سپام</NavMenu.Brand>
                <div className='vertical-line me-3' style={{width:'3px', height:'30px',background:'#f4f4f4'}}></div>
            </div>
            <div className='d-flex align-items-center'>
                <InputGroup  className="d-none d-lg-flex shadow-sm text-white position-relative ms-3">
                    <Form.Control placeholder='جستجو' className='rounded-2 bg-transparent p-2'/>
                    <div className='position-absolute bg-primary p-2' style={{zIndex:'5',left:'0px',top:'0px'}}>
                        <Search style={{cursor:'pointer'}} size={"20px"} color={'#f4f4f4'} />
                    </div>
                </InputGroup>
                <span className='navbar--bell-icon d-none d-lg-block'>
                    <Bell style={{cursor:'pointer'}} size={"20px"} color={"#f4f4f4"} />
                </span>
                <span className='d-none d-lg-block mx-4'>
                <ChatDots style={{cursor:'pointer'}} size={"20px"} color={"#f4f4f4"} />
                </span>
                <div style={{cursor:'pointer'}} className='text-white me-lg-4 d-flex align-items-center'>
                    <Image src={userImg} width={"35px"} height={"35px"} className="rounded-circle"/>
                    <small className='mx-3' style={{whiteSpace:'nowrap'}}>
                        محمد شهریاری
                    </small>
                    <ChevronDown size={"18px"}/>
                </div>
            </div>
        </div>
    </NavMenu>
  )
}

export default Navbar
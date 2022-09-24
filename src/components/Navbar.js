import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './About';
import Careers from './Careers';
import CompanyBlock from './CompanyBlock';
import NewsandMedia from './NewsandMedia';
import Partners from './Partners';
import Products from './Products';
import Services from './Services';

const Home = lazy(()=>import('./Home'));
const Technology = lazy(()=>import('./Technology'));
const Contact = lazy(()=>import('./Contact'))

const Navbar = () => {
    return (
        <div className='main-nav '>
            <BrowserRouter>
                <ul >
                    <li ><Link to='Home'>Home</Link></li>
                    <li className='drop-down'>Enterprises
                        <ul>
                            <li><Link to='Services' >Services</Link></li>
                            <li><Link to='Products' >Products</Link></li>
                        </ul>
                    </li>
                    <li ><Link to='Technology'>Technology</Link></li>
                    <li><Link to='Resourses'>Resourses</Link></li>
                    <li className='drop-down'> Company
                        <ul>
                            <li><Link to='About' >About Us</Link></li>
                            <li><Link to='Careers'>Careers</Link></li>
                            <li><Link to='NewsandMedia'>News And Media</Link></li>
                            <li><Link to='Partners'>Partners</Link></li>
                        </ul>
                    </li>
                    <li ><Link to='Contact'>Contact Us</Link></li>
                </ul>
                <Suspense fallback="Loading...">
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/Home' element={<Home/>} />
                        <Route path='/Services' element={<Services/>} />
                        <Route path='/Products' element={<Products/>} />
                        <Route path='/Technology' element={<Technology/>} />
                        <Route path='/Resourses' element={<CompanyBlock/>} />
                        <Route path='/About' element={<About/>} />
                        <Route path='/Careers' element={<Careers/>}/>
                        <Route path='/NewsandMedia' element={<NewsandMedia/>}/>
                        <Route path='/Partners' element={<Partners/>}/>
                        <Route path='/Contact' element={<Contact/>} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}

export default Navbar
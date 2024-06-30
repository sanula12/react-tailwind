import{headerLogo} from '../assets/images';
import{hamburger} from '../assets/icons';

import{navLinks} from '../constants';

const Nav = () => {
  return (
    <header className='py-8 absolute z-10 w-full ms-16 '>
        <nav className='flex justify-between items-center
        max-containor'>
            <a href="/">
                <img src={headerLogo} 
                alt='Logo'
                width={130}
                height={29}/>
            </a>
            
            <ul className='flex-1 flex
            justify-center items-center gap-16 max-lg:hidden'>

               {navLinks.map((item) =>(
                <li key={item.label} className='
                font-montserrat leading-normal text-lg text-slate-gray'>
                    <a href={item.href}>
                        {item.label}
                    </a>
                </li>
               ) 
            )} 
            </ul>
            <div className='hidden max-lg:block'>
                <img src={hamburger}
                width={25}
                height={25} alt="" />
            </div>
        </nav>
    </header>
  )
}

export default Nav

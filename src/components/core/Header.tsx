import React, { useEffect, useRef, useState } from 'react';
import { links } from '../../data'
import { formatName } from '../../utils';

import bars from '../../assets/images/three_bars.svg';
import cancel from '../../assets/images/cancel.svg';

const BigNavLinks: React.FC = () => {
  return (
    <ul className='hidden md:flex gap-2 justify-between items-center text-white font-semibold'>
      {links.map((link) => {
        const { id, name } = link;
        return (
          <li key={id} className={`${name === 'getStarted' && 'button'}`}>
            <a href={`#${name}`}>{formatName(name)}</a>
          </li>
        )
      })}
    </ul>
  )
}

const SmallNavLinks: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, name: string) => {
    event.preventDefault();
    setIsOpen(false);
  
    // Find the target element and scroll into view
    const targetElement = document.getElementById(name);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflowY = 'hidden';
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Cleanup function to reset overflowY when component unmounts
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen]);

  return (
    <div className='md:hidden'>
      <img src={bars} alt="navigation links icon" onClick={() => setIsOpen(true)} />
      {isOpen && (
        <div ref={menuRef} className={`fixed z-10 left-0 top-0 py-8 w-full align bg-white transform transition-all duration-500 ease-in-out ${
          isOpen && 'animate-fadeIn'
        }`}>
          <div className='flex justify-between'>
            <div className='flex items-end w-10 gap-1 text-white font-bold'>
              <img src="/logo.svg" alt="logo" />
              <div className='text-wrap text-teal-900'>Pix<span>e</span>l Bloom</div>
            </div>
            <img src={cancel} alt="cancel icon" onClick={() => setIsOpen(false)} />
          </div>
          <ul className='py-6'>
            {links.map((link) => {
              const { id, name } = link;
              return (
                <li key={id} className={`${name === 'getStarted' ? 'button text-white w-fit' : 'font-bold text-teal-900 py-3'}`}>
                  <a href={`#${name}`} onClick={(event) => handleLinkClick(event, name)}>{formatName(name)}</a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

const Header: React.FC = () => {
  return (
    <div className='align flex items-center md:gap-28 lg:gap-72 py-8'>
      <div className='flex items-end w-10 gap-1 text-white font-bold'>
        <img src="/logo.svg" alt="logo" />
        <div className='text-wrap'>Pix<span>e</span>l Bloom</div>
      </div>
      <div className='flex-1'>
        <BigNavLinks />
      </div>
      <SmallNavLinks />
    </div>
  )
}

export default Header
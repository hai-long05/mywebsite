import React from 'react'

const NavItem = ['Home', 'About', 'Skills', 'Portfolio', 'Contact']

const Nav = () => {
  return (
    <header className='fixed px-[10%] py-[20px] flex justify-between items-center w-[100%]' >
      <a href="" className='text-[20px] text-[#fff] no-underline font-semibold cursor-default'>Portfolio.</a>

      <nav>
        {NavItem.map((item) => (
          <a href="" className='text-[18px] text-[#fff] no-underline font-medium ml-[35px] hover:text-[#0ef]'>{item}</a>
        ))}
      </nav>
    </header>
  )
}

export default Nav
import react from 'react'

const Header = (props) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-gray-800 text-white">
      <div className="flex items-center">
        <href href="/">
          <a className="font-bold text-xl tracking-tight">{props.name} </a>
        </href>
        <nav className="ml-4">
          <href href="/about">
            <a className="px-2 py-1 font-medium hover:bg-gray-700 rounded-md">About</a>
          </href>
          <href href="/contact">
            <a className="px-2 py-1 font-medium hover:bg-gray-700 rounded-md">Contact</a>
          </href>
        </nav>
      </div>
      <div>
        <button className="flex items-center px-2 py-1 font-medium text-gray-500 rounded-md hover:text-white hover:bg-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
          <span className="ml-2">User</span>
        </button>
      </div>
    </header>
  )
}

export default Header

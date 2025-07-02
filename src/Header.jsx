import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false)
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  // Check authentication status on component mount and when localStorage changes
  useEffect(() => {
    const checkAuthStatus = () => {
      const userData = localStorage.getItem('user')
      if (userData) {
        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)
        setIsLoggedIn(parsedUser.isLoggedIn || false)
      } else {
        setUser(null)
        setIsLoggedIn(false)
      }
    }

    checkAuthStatus()

    // Listen for storage changes (when user logs in/out in other tabs)
    window.addEventListener('storage', checkAuthStatus)
    
    // Listen for custom auth events within the same tab
    window.addEventListener('authStateChanged', checkAuthStatus)
    
    return () => {
      window.removeEventListener('storage', checkAuthStatus)
      window.removeEventListener('authStateChanged', checkAuthStatus)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    setIsLoggedIn(false)
    setIsAdminDropdownOpen(false)
    setIsToolsDropdownOpen(false)
    
    // Dispatch custom event to notify other components of auth state change
    window.dispatchEvent(new Event('authStateChanged'));
    
    navigate('/login')
  }

  return (
    <nav className="bg-navy-900 shadow-lg sticky top-0 z-50" style={{backgroundColor: '#1e3a8a'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center group hover:opacity-80 transition-opacity">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">NWR</span>
              </div>
            </div>
            <div className="text-white font-semibold text-xl tracking-wide">
              Northern Western Railways
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/" 
                className="text-white hover:bg-blue-700 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                to="/pass-applications" 
                className="text-white hover:bg-blue-700 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Pass Applications
              </Link>
              
              {/* Admin Dropdown */}
              <div className="relative group">
                <button 
                  className="text-white hover:bg-blue-700 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                  onClick={() => setIsAdminDropdownOpen(!isAdminDropdownOpen)}
                >
                  Admin Menu
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isAdminDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      <Link 
                        to="/list-of-users" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsAdminDropdownOpen(false)}
                      >
                        List of Users
                      </Link>
                      <Link 
                        to="/admin/new-user" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsAdminDropdownOpen(false)}
                      >
                        Add New User Account
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Tools Dropdown */}
              <div className="relative group">
                <button 
                  className="text-white hover:bg-blue-700 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                  onClick={() => setIsToolsDropdownOpen(!isToolsDropdownOpen)}
                >
                  Tools
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isToolsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      <Link 
                        to="/update-profile" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsToolsDropdownOpen(false)}
                      >
                        Update Profile
                      </Link>
                      <Link 
                        to="/change-password" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsToolsDropdownOpen(false)}
                      >
                        Change Password
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              {isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <span className="text-white text-sm">
                    Welcome, {user?.username}
                  </span>
                  <button 
                    onClick={handleLogout}
                    className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 border border-red-600"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className="bg-white text-blue-900 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 border border-white"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import train from './assets/train.jpg'
import { ChevronRight, Car, CreditCard, FileText, Clock, MapPin, Shield, Tag, Zap } from 'lucide-react'

const Home = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900 opacity-10 transform -skew-x-12 z-0"></div>
        <div className="flex h-full">
          {/* Left Content */}
          <div className={`w-1/2 p-12 flex flex-col justify-center transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'}`}>
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Northern Western Railways
            </div>
            <h1 className="text-6xl font-bold text-blue-900 mb-4 leading-tight">
              Smart <span className="text-green-600">Parking</span>
            </h1>
            <h2 className="text-5xl font-bold mb-2 leading-tight">
              with <span className="text-green-600">FASTag</span> technology
            </h2>
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              for seamless <span className="text-green-600">access</span>
            </h2>
            
            <p className="text-xl text-gray-700 mb-10 max-w-xl">
              NWR's digital parking pass system with integrated FASTag technology enables contactless entry and exit for employees and visitors across all railway facilities.
            </p>
            
            <div className="flex space-x-6">
              <Link 
                to="/pass-applications"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors duration-200 flex items-center shadow-lg hover:shadow-xl"
              >
                Apply for FASTag Pass
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/login"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-4 rounded-md text-lg font-medium transition-colors duration-200 flex items-center"
              >
                Login to Account
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Right Image - Full height */}
          <div className={`w-1/2 h-full relative transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/20"></div>
            <img 
              src={train} 
              alt="Railway station parking facility" 
              className="w-full h-full object-cover rounded-bl-3xl shadow-2xl"
            />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center text-blue-900 font-semibold">
                <Tag className="w-5 h-5 mr-2" />
                <span>FASTag enabled parking at all NWR facilities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FASTag Feature Highlight */}
      <div className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">FASTag Integration</h2>
              <p className="text-xl text-blue-100 mb-6">
                Our parking system now features FASTag technology for contactless entry and exit, reducing wait times and improving security.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Zap className="w-6 h-6 mr-3 text-green-400 flex-shrink-0 mt-1" />
                  <span>Instant automatic authentication at entry/exit points</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-6 h-6 mr-3 text-green-400 flex-shrink-0 mt-1" />
                  <span>Cashless and contactless parking fee collection</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-6 h-6 mr-3 text-green-400 flex-shrink-0 mt-1" />
                  <span>Detailed digital records of all parking transactions</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-6 h-6 mr-3 text-green-400 flex-shrink-0 mt-1" />
                  <span>Reduced congestion at parking entrances and exits</span>
                </li>
              </ul>
            </div>
            <div className="md:w-2/5 bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative z-10">
                  <Tag className="w-12 h-12 text-white mb-4" />
                  <h3 className="text-2xl font-bold mb-2">NWR FASTag Pass</h3>
                  <p className="text-blue-100 mb-4">Contactless Parking Access</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-100">Valid for all NWR facilities</span>
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-blue-900">50+</div>
              <div className="text-gray-600">Parking Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-blue-900">5,000+</div>
              <div className="text-gray-600">Parking Spaces</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-blue-900">30 sec</div>
              <div className="text-gray-600">Average Entry Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-blue-900">24/7</div>
              <div className="text-gray-600">Secure Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full px-12 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-blue-900 text-center mb-4">Parking Pass Services</h3>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Our comprehensive vehicle parking pass system with FASTag technology offers multiple services to ensure smooth operations for all NWR employees and visitors.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <Link 
              to="/pass-applications"
              className="bg-blue-50 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 block border border-blue-100 hover:border-blue-300 group"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-blue-200 transition-colors duration-300">
                <FileText className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-2xl font-semibold text-blue-900 mb-4">Pass Applications</h4>
              <p className="text-lg text-gray-600">Apply for FASTag-enabled vehicle parking passes online with our streamlined digital application process.</p>
              <div className="mt-6 text-blue-600 font-medium flex items-center">
                Apply now <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>

            <div className="bg-blue-50 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-green-300 group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-green-200 transition-colors duration-300">
                <Tag className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-2xl font-semibold text-blue-900 mb-4">FASTag Linking</h4>
              <p className="text-lg text-gray-600">Link your existing FASTag to your NWR parking account for seamless access to all facilities.</p>
              <div className="mt-6 text-green-600 font-medium flex items-center">
                Link now <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </div>

            <div className="bg-blue-50 p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-orange-300 group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-orange-200 transition-colors duration-300">
                <Shield className="w-10 h-10 text-orange-600" />
              </div>
              <h4 className="text-2xl font-semibold text-blue-900 mb-4">Security Features</h4>
              <p className="text-lg text-gray-600">Our digital passes include advanced security features with encrypted FASTag technology to prevent unauthorized access.</p>
              <div className="mt-6 text-orange-600 font-medium flex items-center">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="w-full px-12 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-blue-900 text-center mb-4">How It Works</h3>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Getting your NWR FASTag parking pass is simple with our easy-to-follow process
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900 font-bold text-xl">1</div>
              <h4 className="text-xl font-semibold text-blue-900 mb-2">Register</h4>
              <p className="text-gray-600">Create your account with your NWR employee credentials</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900 font-bold text-xl">2</div>
              <h4 className="text-xl font-semibold text-blue-900 mb-2">Apply</h4>
              <p className="text-gray-600">Submit your vehicle details and link your FASTag ID</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900 font-bold text-xl">3</div>
              <h4 className="text-xl font-semibold text-blue-900 mb-2">Approval</h4>
              <p className="text-gray-600">Receive approval notification via email within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-900 font-bold text-xl">4</div>
              <h4 className="text-xl font-semibold text-blue-900 mb-2">Access</h4>
              <p className="text-gray-600">Drive through FASTag-enabled lanes for automatic authentication</p>
            </div>
          </div>
        </div>
      </div>

      {/* FASTag Benefits */}
      <div className="w-full px-12 py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-blue-900 text-center mb-4">FASTag Benefits</h3>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Experience the advantages of our FASTag-enabled parking system
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-3">Faster Access</h4>
              <p className="text-gray-600">No more waiting in queues. Drive through and let the FASTag system authenticate your vehicle automatically.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-3">Cashless Transactions</h4>
              <p className="text-gray-600">All parking fees are automatically deducted from your linked account with detailed digital receipts.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mb-3">Enhanced Security</h4>
              <p className="text-gray-600">Advanced encryption and authentication ensures only authorized vehicles can access NWR parking facilities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="w-full px-12 py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to upgrade to FASTag parking?</h3>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of NWR employees who already enjoy contactless, hassle-free parking with our FASTag-enabled system.
          </p>
          <Link 
            to="/login"
            className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-md text-lg font-medium transition-colors duration-200 inline-flex items-center shadow-lg"
          >
            Get Started Today
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
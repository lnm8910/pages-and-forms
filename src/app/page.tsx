import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our Registration System
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Our user-friendly registration application makes it simple to collect and manage user information. 
            Whether you're organizing an event, building a membership database, or gathering contact details, 
            our streamlined process ensures a smooth experience for both you and your users.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Simple Form Interface</h3>
                  <p className="text-gray-600 text-sm">Clean, intuitive design that's easy to navigate</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Instant Data Display</h3>
                  <p className="text-gray-600 text-sm">View submitted information immediately after registration</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Responsive Design</h3>
                  <p className="text-gray-600 text-sm">Works perfectly on desktop, tablet, and mobile devices</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Secure & Reliable</h3>
                  <p className="text-gray-600 text-sm">Built with modern security practices and validation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link 
              href="/registration"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200 transform hover:scale-105"
            >
              Start Registration
            </Link>
            
            <p className="text-gray-600">
              Ready to get started? Click the button above to begin your registration process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
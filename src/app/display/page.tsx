'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
}

export default function Display() {
  const [formData, setFormData] = useState<FormData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedData = localStorage.getItem('registrationData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    } else {
      router.push('/');
    }
  }, [router]);

  if (!formData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Registration Details</h1>
        
        <div className="space-y-4">
          <div className="border-b pb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <p className="text-gray-900">{formData.firstName}</p>
          </div>

          <div className="border-b pb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <p className="text-gray-900">{formData.lastName}</p>
          </div>

          <div className="border-b pb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <p className="text-gray-900">{formData.email}</p>
          </div>

          <div className="border-b pb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <p className="text-gray-900 whitespace-pre-line">{formData.address}</p>
          </div>
        </div>

        <button
          onClick={() => router.push('/')}
          className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
        >
          Back to Form
        </button>
      </div>
    </div>
  );
}
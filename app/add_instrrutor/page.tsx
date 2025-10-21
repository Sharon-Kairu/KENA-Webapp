'use client'
import React, {useState} from 'react'
import AdminSidebar from '../components/navigation/AdminSidebar'

const page = () => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      national_id: '',
      date_of_birth: '',
      category: '',
      password1: '',
      password2: '',
    })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (formData.password1 !== formData.password2) {
        setMessage('Passwords do not match.');
        setLoading(false);
        return;
    }

    try {
        const response = await fetch('http://localhost:8000/api/instructors/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            phone_number: formData.phone_number,
            national_id: formData.national_id,
            date_of_birth: formData.date_of_birth,
            category: formData.category.toLowerCase(),
            password: formData.password1,
        }),
        });

        const data = await response.json();

        if (response.ok) {
        setMessage('Instructor registered successfully!');
        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            national_id: '',
            date_of_birth: '',
            category: '',
            password1: '',
            password2: '',
        });
        } else {
        setMessage(data.detail || 'Error registering instructor.');
        }
    } catch (error) {
        console.error(error);
        setMessage('Something went wrong. Please try again.');
    } finally {
        setLoading(false);
    }
    };

  return (
    <div id='add_instructor' className='bg-gray-100 flex min-h-screen'>
        <AdminSidebar/>
        <div className='flex-1'>
            <div className='bg-white rounded-2xl shadow-xl p-8 w-full '>
                <h2 className='text-3xl font-semibold text-center text-gray-800 mb-8'>
                 Register an Instructor
                </h2>

                <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {/* First Name */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>First Name</label>
              <input
                name='first_name'
                placeholder='First Name'
                value={formData.first_name}
                onChange={handleChange}
                className='border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full'
              />
            </div>

            {/* Last Name */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Last Name</label>
              <input
                name='last_name'
                placeholder='Last Name'
                value={formData.last_name}
                onChange={handleChange}
                className='border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full'
              />
            </div>

            {/* Email */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
              <input
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                className='border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full'
              />
            </div>

            {/* Phone */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number</label>
              <input
                name='phone_number'
                placeholder='Phone Number'
                value={formData.phone_number}
                onChange={handleChange}
                className='border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full'
              />
            </div>

            {/* National ID */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>National ID</label>
              <input
                name='national_id'
                placeholder='National ID'
                value={formData.national_id}
                onChange={handleChange}
                className='border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full'
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Date of Birth</label>
              <input
                type='date'
                name='date_of_birth'
                value={formData.date_of_birth}
                onChange={handleChange}
                className='border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full'
              />
            </div>
            {/* Category */}
            
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Driving Category</label>
                <select
                  name='category'
                  value={formData.category}
                  onChange={handleChange}
                  className='border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full'
                >
                  <option value=''>Select Category</option>
                  <option value='Driving'>Driving</option>
                  <option value='Computer'>Driving</option>
                  
                </select>
              </div>
            
            {/* Password */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Password</label>
              <input
                type='password'
                name='password1'
                placeholder='Password'
                value={formData.password1}
                onChange={handleChange}
                className='border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full'
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Confirm Password</label>
              <input
                type='password'
                name='password2'
                placeholder='Confirm Password'
                value={formData.password2}
                onChange={handleChange}
                className='border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full'
              />
            </div>

            <div className='col-span-1 md:col-span-2'>
              <button
                type='submit'
                disabled={loading}
                className='w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300'
              >
                {loading ? 'Registering...' : 'Register Student'}
              </button>
            </div>

          </form>
          {message && (
            <p className='mt-6 text-center text-sm text-gray-700'>{message}</p>
          )}

            </div>
        </div>

    </div>
  )
}

export default page
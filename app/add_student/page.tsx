'use client'
import React, { useState } from 'react'
import AdminSidebar from '../components/navigation/AdminSidebar'

const Page = () => {
  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    national_id: '',
    date_of_birth: '',
    course: '',
    category: '',
    discount: '',
    price: '',
    password1: '',
    password2: '',
  })

  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const calculateBasePrice = (course: string, category: string): number => {
    if (course === 'computer') return 5000
    if (course === 'driving') {
      if (category === 'class 1') return 15000
      if (category === 'class 2') return 18000
      if (category === 'class 3') return 20000
      if (category === 'class 4') return 22000
      if (category === 'class 5') return 25000
    }
    if (course === 'both') {
      if (category === 'class 1') return 18000
      if (category === 'class 2') return 20000
      if (category === 'class 3') return 23000
      if (category === 'class 4') return 25000
      if (category === 'class 5') return 28000
    }
    return 0
  }

  const applyDiscount = (basePrice: number, discount: string): number => {
    const percentage = parseFloat(discount)
    if (!percentage || percentage <= 0) return basePrice
    return Math.max(basePrice - (basePrice * percentage) / 100, 0)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    let updatedData = { ...formData, [name]: value }

    const basePrice = calculateBasePrice(updatedData.course, updatedData.category)
    const finalPrice = applyDiscount(basePrice, updatedData.discount)
    updatedData.price = finalPrice.toString()

    setFormData(updatedData)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const res = await fetch('http://127.0.0.1:8000/users/register/student/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setMessage('✅ Student registered successfully!')
        setFormData({
          username: '',
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          national_id: '',
          date_of_birth: '',
          course: '',
          category: '',
          discount: '',
          price: '',
          password1: '',
          password2: '',
        })
      } else {
        const data = await res.json()
        setMessage('❌ Error: ' + JSON.stringify(data.errors))
      }
    } catch (error) {
      setMessage('⚠️ Server error, please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const shouldShowCategory =
    formData.course === 'driving' || formData.course === 'both'

  return (
    <div id='add_student' className='flex bg-gray-100 min-h-screen'>
      <AdminSidebar />

      <div className='flex-1 flex justify-center items-center p-6'>
        <div className='bg-white shadow-xl rounded-2xl w-full max-w-3xl p-8'>
          <h2 className='text-3xl font-semibold text-center text-gray-800 mb-8'>
            Register a Student
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

            {/* Course */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Course</label>
              <select
                name='course'
                value={formData.course}
                onChange={handleChange}
                className='border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full'
              >
                <option value=''>Select Course</option>
                <option value='computer'>Computer</option>
                <option value='driving'>Driving</option>
                <option value='both'>Both</option>
              </select>
            </div>

            {/* Category */}
            {shouldShowCategory && (
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Driving Category</label>
                <select
                  name='category'
                  value={formData.category}
                  onChange={handleChange}
                  className='border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full'
                >
                  <option value=''>Select Category</option>
                  <option value='class 1'>Class 1</option>
                  <option value='class 2'>Class 2</option>
                  <option value='class 3'>Class 3</option>
                  <option value='class 4'>Class 4</option>
                  <option value='class 5'>Class 5</option>
                </select>
              </div>
            )}

            {/* Discount */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Discount (%)</label>
              <input
                type='number'
                name='discount'
                placeholder='Discount (%)'
                value={formData.discount}
                onChange={handleChange}
                min='0'
                max='100'
                className='border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full'
              />
            </div>

            {/* Price */}
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Final Price</label>
              <input
                type='text'
                name='price'
                placeholder='Auto-calculated'
                value={formData.price}
                readOnly
                className='border border-gray-300 rounded-lg p-3 bg-gray-100 cursor-not-allowed w-full'
              />
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

            {/* Submit */}
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

export default Page

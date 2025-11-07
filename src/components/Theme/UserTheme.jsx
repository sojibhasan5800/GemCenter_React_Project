import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserTheme() {
  const [userid, setUserid] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userid.trim() !== '') {
      navigate(`/user/${userid}`) // programmatic navigation
    }
  }

  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-blue-700">🎨 User Theme Page</h1>
      <p className="text-gray-600 mt-4">Enter a user ID to see the User page:</p>

      <form onSubmit={handleSubmit} className="mt-6 flex justify-center gap-4">
        <input
          type="text"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
          placeholder="Enter User ID"
          className="border border-gray-400 px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-600"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        <button
          onClick={() => navigate('/about')}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
        >
          Back to About
        </button>
      </div>
    </div>
  )
}

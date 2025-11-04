import React from 'react'
import ProtectedRoute from '../ProtectedRoute'

export default function page() {
  return (
    <ProtectedRoute>
      <div>Productos</div>
    </ProtectedRoute>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AboutWrapper() {
  return <Outlet />  // এখানে শুধু Outlet থাকবে যাতে child replace করে
}

import React from 'react'
import { useDashboard } from '../hooks/useDashboard'

const DashboardLayout = () => {
    const {data} = useDashboard();
   const {analytics} = data;
   console.log(analytics)
  return (
    <div>
      Dashboard Layout
    </div>
  )
}

export default DashboardLayout

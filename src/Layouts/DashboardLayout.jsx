import React from 'react'
import { useDashboard } from '../hooks/useDashboard'
import Sidebar from '../components/dashboard/Sidebar';
import TopBar from '../components/dashboard/Topbar';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Plus, Upload } from "lucide-react";
import StatCards from '../components/dashboard/StatCards';
import Loading from '../components/shared/Loading'

const DashboardLayout = () => {
    const {data,loading} = useDashboard();
    console.log(data.overview)
   const {analytics} = data;
   console.log(analytics)

  if(loading){
    return <Loading />
  }

  return (
    <div className='flex min-h-screen bg-background'>
      {/* Side Bar */}
      <Sidebar />
      {/* Main Content */}
      <main className='flex-1 px-6 lg:px-8 pb-8 overflow-auto bg-gray-200'>
        <TopBar />
           <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
              <p className="text-muted-foreground text-sm mt-1">Plan, prioritize, and accomplish your tasks with ease.</p>
            </div>
            <div className="flex gap-3 mt-4 sm:mt-0">
              <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all">
                <Plus className="h-4 w-4" /> Add Project
              </button>
              <button className="flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted transition-all">
                <Upload className="h-4 w-4" /> Import Data
              </button>
            </div>
          </div>

           <StatCards overview={data.overview} />



        </motion.div>
      </main>
    </div>
  )
}

export default DashboardLayout

/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const LoginPage = () => {
    const {user,login} = useAuth();
    console.log(user)
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword,setShowPassword] = useState(false);
    const [error, setError] = useState("");
    // console.log(email,password);

    const handleSubmit = async(e)=>{
        e.preventDefault();

        setLoading(true);
        setError("");
        try {
            await login(email,password);
            console.log('Successfully Login');
            navigate("/dashboard")
        } catch (err) {
            console.log("login Error",err.message)
            setError(err.message || 'Failed to Login')
        }finally{
            setLoading(false)
        }
    }

  return (
 <div className="flex min-h-screen overflow-hidden">
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex lg:w-1/2 bg-primary flex-col justify-between p-12"
      >
        <div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
            <span className="text-2xl font-bold text-primary-foreground">Donezo</span>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Organize, track, and deliver projects seamlessly
          </h1>
          <p className="text-primary-foreground/70 text-lg">
            Your all-in-one project management dashboard to plan, collaborate, and achieve milestones with clarity and confidence.
          </p>
        </div>
        <p className="text-primary-foreground/50 text-sm"> &copy; 2026 Donezo. All rights reserved.</p>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex w-full lg:w-1/2 items-center justify-center p-8 bg-card"
      >
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <CheckCircle2 className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold text-foreground">Donezo</span>
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back</h2>
          <p className="text-muted-foreground mb-8">Sign in to continue to your dashboard</p>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 rounded-lg bg-destructive/10 p-3 text-sm text-destructive"
            >
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-10 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-10 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Demo credentials are pre-filled for you
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default LoginPage

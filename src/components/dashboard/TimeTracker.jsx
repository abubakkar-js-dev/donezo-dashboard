// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Pause, Square } from "lucide-react";
import { useState, useEffect } from "react";

const TimeTracker = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);

  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="bg-primary rounded-xl p-5 text-primary-foreground flex flex-col justify-between"
    >
      <h3 className="text-sm font-medium text-primary-foreground/80">Time Tracker</h3>
      <p className="text-3xl font-bold tracking-wider mt-3">{h}:{m}:{s}</p>
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={() => setRunning(!running)}
          className="h-10 w-10 rounded-full bg-info flex items-center justify-center hover:opacity-90 transition-all"
        >
          <Pause className="h-4 w-4 text-info-foreground" />
        </button>
        <button
          onClick={() => { setRunning(false); setSeconds(0); }}
          className="h-10 w-10 rounded-full bg-destructive flex items-center justify-center hover:opacity-90 transition-all"
        >
          <Square className="h-4 w-4 text-destructive-foreground" />
        </button>
      </div>
    </motion.div>
  );
};

export default TimeTracker;

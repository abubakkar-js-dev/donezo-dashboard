// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Video } from "lucide-react";

const Reminders = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="bg-card rounded-xl border border-border p-5 flex flex-col justify-between"
  >
    <h3 className="text-base font-semibold text-foreground mb-3">Reminders</h3>
    <div>
      <p className="text-lg font-bold text-foreground">Meeting with Arc Company</p>
      <p className="text-sm text-muted-foreground mt-1">Time : 02.00 pm - 04.00 pm</p>
    </div>
    <button className="mt-4 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all w-fit">
      <Video className="h-4 w-4" />
      Start Meeting
    </button>
  </motion.div>
);

export default Reminders;
import { motion } from "framer-motion";
import { Plus } from "lucide-react";



const projectNames = [
  "Develop API Endpoints",
  "Onboarding Flow",
  "Build Dashboard",
  "Optimize Page Load",
  "Cross-Browser Testing",
];

const dueDates = [
  "Nov 26, 2024",
  "Nov 28, 2024",
  "Nov 30, 2024",
  "Dec 3, 2024",
  "Dec 6, 2024",
];

const colors = [
  "bg-info",
  "bg-warning",
  "bg-success",
  "bg-primary",
  "bg-destructive",
];

const ProjectList = ({ products }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
    className="bg-card rounded-xl border border-border p-5"
  >
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-base font-semibold text-foreground">Project</h3>
      <button className="flex items-center gap-1 text-sm font-medium text-foreground border border-border rounded-lg px-3 py-1.5 hover:bg-muted transition-colors">
        <Plus className="h-3 w-3" /> New
      </button>
    </div>
    <div className="space-y-3">
      {products.map((product, i) => (
        <div key={product.id} className="flex items-center gap-3">
          <div className={`h-8 w-8 rounded-lg ${colors[i % colors.length]} flex items-center justify-center text-xs font-bold text-primary-foreground`}>
            {projectNames[i]?.charAt(0) || product.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{projectNames[i] || product.name}</p>
            <p className="text-xs text-muted-foreground">Due date: {dueDates[i] || `Dec ${i * 2 + 8}, 2024`}</p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default ProjectList;
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Completed", value: 41 },
  { name: "In Progress", value: 35 },
  { name: "Pending", value: 24 },
];

const COLORS = [
  "var(--color-primary)",
  "var(--color-accent)",
  "var(--color-muted-foreground)",
];

const ProjectProgress = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.7 }}
    className="bg-card rounded-xl border border-border p-5"
  >
    <h3 className="text-base font-semibold text-foreground mb-2">
      Project Progress
    </h3>

    <div className="h-48 relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={85}
            startAngle={90}
            endAngle={-270}
            stroke="none"
            fill={COLORS[0]}
            labelLine={false}
            className="m-4"
          >
            {data.map((entry, index) => (
              <g key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <span className="text-2xl font-bold text-foreground">
          {data[0].value}%
        </span>
        <span className="text-xs text-muted-foreground">
          Project Completed
        </span>
      </div>
    </div>

    <div className="flex items-center justify-center gap-4 mt-2">
      {data.map((item, index) => (
        <div key={item.name} className="flex items-center gap-1.5">
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: COLORS[index % COLORS.length] }}
          />
          <span className="text-xs text-muted-foreground">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default ProjectProgress;
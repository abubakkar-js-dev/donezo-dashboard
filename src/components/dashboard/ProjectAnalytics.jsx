// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const CustomBar = ({ x, y, width, height }) => {
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill="var(--color-primary)"
      rx={6}
    />
  );
};

const ProjectAnalytics = ({ analytics }) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  const chartData = analytics.slice(0, 7).map((item, i) => ({
    day: days[i % 7],
    value: item.views,
    clicks: item.clicks,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-card rounded-xl border border-border p-5"
    >
      <h3 className="text-base font-semibold text-foreground mb-4">
        Project Analytics
      </h3>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barGap={4}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 12,
                fill: "var(--color-muted-foreground)",
              }}
            />

            <Bar
              dataKey="value"
              barSize={32}
              shape={<CustomBar />}
            />

            <Bar
              dataKey="clicks"
              barSize={32}
              shape={<CustomBar />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ProjectAnalytics;
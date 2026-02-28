// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";

const days = ["S", "M", "T", "W", "T", "F", "S"];

// Pad to always have 7 days
const padTo7 = (analytics) => {
  const base = analytics.slice(0, 7);
  while (base.length < 7) {
    base.push({ views: Math.floor(Math.random() * 800 + 400), clicks: 0 });
  }
  return base;
};

const CustomBar = ({ x, y, width, height, fill }) => (
  <rect x={x} y={y} width={width} height={height} fill={fill} rx={8} />
);

const ProjectAnalytics = ({ analytics }) => {
  const padded = padTo7(analytics);

  const chartData = padded.map((item, i) => ({
    day: days[i],
    value: item.views,
  }));

  // Find max value index for the highlight bar
  const maxIndex = chartData.reduce(
    (maxI, item, i, arr) => (item.value > arr[maxI].value ? i : maxI),
    0
  );

  const maxValue = chartData[maxIndex].value;

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

      <div className="h-48 relative">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barGap={6} barCategoryGap="25%">
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "var(--color-muted-foreground)" }}
            />
            <Bar
              dataKey="value"
              barSize={36}
              shape={(props) => {
                const isHighlight = props.value === maxValue;
                return (
                  <CustomBar
                    {...props}
                    fill={
                      isHighlight
                        ? "var(--color-primary)"        
                        : "var(--color-primary-light)"  
                    }
                  />
                );
              }}
              label={{
                position: "top",
                formatter: (val) =>
                  val === maxValue
                    ? `${Math.round((val / Math.max(...chartData.map((d) => d.value))) * 100)}%`
                    : "",
                fontSize: 11,
                fill: "var(--color-primary)",
                fontWeight: 600,
              }}
            >
              {chartData.map((_, index) => (
                <Cell key={index} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ProjectAnalytics;
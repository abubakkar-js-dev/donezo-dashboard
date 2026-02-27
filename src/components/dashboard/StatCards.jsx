// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Users, DollarSign, Activity } from "lucide-react";


const StatCard = ({ title, value, subtitle, icon, highlighted, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className={`rounded-xl p-5 flex flex-col justify-between min-h-35 ${
      highlighted
        ? "bg-primary text-primary-foreground"
        : "bg-card text-card-foreground border border-border"
    }`}
  >
    <div className="flex items-center justify-between">
      <p className={`text-sm font-medium ${highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {title}
      </p>
      <div className={`p-1.5 rounded-lg ${highlighted ? "bg-primary-foreground/10" : "bg-muted"}`}>
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </div>
    <div>
      <p className="text-3xl font-bold">{value}</p>
      <div className="flex items-center gap-1.5 mt-1">
        {icon}
        <span className={`text-xs ${highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </span>
      </div>
    </div>
  </motion.div>
);



const StatCards = ({ overview }) => {
  const cards = [
    {
      title: "Total Projects",
      value: overview.totalUsers > 1000 ? Math.round(overview.totalUsers / 500) : overview.totalUsers,
      subtitle: "Increased from last month",
      icon: <TrendingUp className="h-3 w-3" />,
      highlighted: true,
    },
    {
      title: "Ended Projects",
      value: Math.round(overview.activeUsers / 800),
      subtitle: "Increased from last month",
      icon: <Users className="h-3 w-3" />,
    },
    {
      title: "Running Projects",
      value: Math.round(overview.revenue / 20000),
      subtitle: "Increased from last month",
      icon: <DollarSign className="h-3 w-3" />,
    },
    {
      title: "Pending Project",
      value: Math.round(overview.growth / 10),
      subtitle: "On Discuss",
      icon: <Activity className="h-3 w-3" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, i) => (
        <StatCard key={card.title} {...card} index={i} />
      ))}
    </div>
  );
};

export default StatCards;
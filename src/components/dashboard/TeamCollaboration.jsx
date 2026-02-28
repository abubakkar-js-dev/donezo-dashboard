// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Plus } from "lucide-react";


const projectNames = [
  "Github Project Repository",
  "Integrate User Authentication System",
  "Develop Search and Filter Functionality",
  "Responsive Layout for Homepage",
  "API Integration Module",
];

const statusColors = {
  active: "bg-success/10 text-success",
  inactive: "bg-warning/10 text-warning",
  pending: "bg-info/10 text-info",
};

const statusLabels = {
  active: "Completed",
  inactive: "InProgress",
  pending: "Pending",
};

const avatarColors = [
  "bg-chart-1",
  "bg-chart-2",
  "bg-info",
  "bg-warning",
  "bg-destructive",
];

const TeamCollaboration = ({ users }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    className="bg-card rounded-xl border border-border p-5"
  >
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-base font-semibold text-foreground">Team Collaboration</h3>
      <button className="flex items-center gap-1 text-sm font-medium text-foreground border border-border rounded-lg px-3 py-1.5 hover:bg-muted transition-colors">
        <Plus className="h-3 w-3" /> Add Member
      </button>
    </div>
    <div className="space-y-3">
      {users.slice(0, 4).map((user, i) => {
        const statusKey = i === 2 ? "pending" : user.status;
        return (
          <div key={user.id} className="flex items-center gap-3">
            <div className={`h-9 w-9 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-sm font-semibold text-primary-foreground`}>
              {user.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">
                Working on <span className="font-medium text-foreground">{projectNames[i]}</span>
              </p>
            </div>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[statusKey] || statusColors.inactive}`}>
              {statusLabels[statusKey] || "Pending"}
            </span>
          </div>
        );
      })}
    </div>
  </motion.div>
);

export default TeamCollaboration;

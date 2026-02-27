import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ListTodo,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  CheckCircle2,
  Download,
  Smartphone,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Tasks", icon: ListTodo, path: "/dashboard/tasks", badge: "12+" },
  { label: "Calendar", icon: Calendar, path: "/dashboard/calendar" },
  { label: "Analytics", icon: BarChart3, path: "/dashboard/analytics" },
  { label: "Team", icon: Users, path: "/dashboard/team" },
];

const generalItems = [
  { label: "Settings", icon: Settings, path: "/settings" },
  { label: "Help", icon: HelpCircle, path: "/help" },
];

const Sidebar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logout Done')
    logOut();
    navigate("/login");
  };

  const linkClass = (isActive) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
      isActive
        ? "bg-primary text-primary-foreground"
        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
    }`;

  return (
    <aside className="hidden lg:flex w-60 flex-col bg-sidebar border-r border-sidebar h-screen sticky top-0">
      <div className="flex items-center gap-3 px-6 py-6">
        <CheckCircle2 className="h-7 w-7 text-primary" />
        <span className="text-xl font-bold text-foreground">Donezo</span>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Menu</p>
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => linkClass(isActive)}>
            <item.icon className="h-4 w-4" />
            {item.label}
            {item.badge && (
              <span className="ml-auto text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}

        <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-8 mb-3">General</p>
        {generalItems.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => linkClass(isActive)}>
            <item.icon className="h-4 w-4" />
            {item.label}
          </NavLink>
        ))}

        <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all w-full">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </nav>

      {/* Download Mobile App Card */}
      <div className="px-4 pb-6">
        <div className="bg-primary rounded-xl p-4 text-primary-foreground">
          <div className="flex items-center gap-2 mb-2">
            <Smartphone className="h-5 w-5" />
          </div>
          <p className="text-sm font-bold mb-1">Download our Mobile App</p>
          <p className="text-xs text-primary-foreground/70 mb-3">Get easy in another way</p>
          <button className="flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition-all w-full justify-center">
            <Download className="h-3.5 w-3.5" />
            Download
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

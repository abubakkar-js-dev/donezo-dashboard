import {
  BarChart3,
  Calendar,
  CheckCircle2,
  Download,
  HelpCircle,
  LayoutDashboard,
  ListTodo,
  LogOut,
  Menu,
  Settings,
  Smartphone,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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


const SidebarContent = ({ closeSidebar, linkClass, handleLogout }) => (
  <div className="flex flex-col h-full">
    {/* Logo */}
    <div className="flex items-center justify-between px-6 py-6">
      <div className="flex items-center gap-3">
        <CheckCircle2 className="h-7 w-7 text-primary" />
        <span className="text-xl font-bold text-foreground">Donezo</span>
      </div>
      {/* Close button — mobile only */}
      <button
        onClick={closeSidebar}
        className="lg:hidden p-1 rounded-lg hover:bg-sidebar-accent/50 text-sidebar-foreground"
      >
        <X className="h-5 w-5" />
      </button>
    </div>

    {/* Nav */}
    <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
      <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Menu
      </p>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={closeSidebar}
          className={({ isActive }) => linkClass(isActive)}
        >
          <item.icon className="h-4 w-4 shrink-0" />
          {item.label}
          {item.badge && (
            <span className="ml-auto text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5">
              {item.badge}
            </span>
          )}
        </NavLink>
      ))}

      <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-8 mb-3">
        General
      </p>
      {generalItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={closeSidebar}
          className={({ isActive }) => linkClass(isActive)}
        >
          <item.icon className="h-4 w-4 shrink-0" />
          {item.label}
        </NavLink>
      ))}

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all w-full"
      >
        <LogOut className="h-4 w-4 shrink-0" />
        Logout
      </button>
    </nav>

    {/* Download Card */}
    <div className="px-4 pb-6 mt-4">
      <div className="bg-primary rounded-xl p-4 text-primary-foreground">
        <div className="flex items-center gap-2 mb-2">
          <Smartphone className="h-5 w-5" />
        </div>
        <p className="text-sm font-bold mb-1">Download our Mobile App</p>
        <p className="text-xs text-primary-foreground/70 mb-3">
          Get easy in another way
        </p>
        <button className="flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition-all w-full justify-center">
          <Download className="h-3.5 w-3.5" />
          Download
        </button>
      </div>
    </div>
  </div>
);

const Sidebar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logOut();
    navigate("/");
  };

  const closeSidebar = () => setIsOpen(false);

  const linkClass = (isActive) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
      isActive
        ? "bg-primary text-primary-foreground"
        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
    }`;

  return (
    <>
      {/* ── Mobile Hamburger Button ── */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border shadow-sm text-foreground"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* ── Mobile Overlay ── */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}

      {/* ── Mobile Drawer ── */}
      <aside
        className={`lg:hidden fixed top-0 left-0 z-50 h-full w-72 bg-sidebar border-r border-sidebar-border shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent
          closeSidebar={closeSidebar}
          linkClass={linkClass}
          handleLogout={handleLogout}
        />
      </aside>

      {/* ── Desktop Sidebar ── */}
      <aside className="hidden lg:flex w-60 flex-col bg-sidebar border-r border-sidebar-border h-screen sticky top-0">
        <SidebarContent
          closeSidebar={closeSidebar}
          linkClass={linkClass}
          handleLogout={handleLogout}
        />
      </aside>
    </>
  );
};

export default Sidebar;

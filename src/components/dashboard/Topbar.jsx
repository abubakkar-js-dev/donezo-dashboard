import { Search, Mail, Bell } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import {Command} from 'lucide-react'


const TopBar = () => {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between py-4">
      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search task"
          className="w-full rounded-lg border border-border bg-card px-10 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all ml-8 md:ml-12 lg:ml-0"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded-md flex items-center"><Command className="h-3 h3" /> <span className="text-sm">F</span> </kbd>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground">
          <Mail className="h-5 w-5" />
        </button>
        <button className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
            TM
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-semibold text-foreground"> {user?.name || 'Totok Michael'} </p>
            <p className="text-xs text-muted-foreground">{user?.email || "tmichael20@mail.com"}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
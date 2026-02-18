
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { 
  LayoutDashboard, 
  MessageSquare, 
  BarChart3, 
  ShoppingBag, 
  Users, 
  Calendar,
  Settings,
  LogOut
} from 'lucide-react';

const AppSidebar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const NavItem = ({ to, icon: Icon, label, badge }: { to: string, icon: any, label: string, badge?: string }) => (
    <Link 
      to={to} 
      className={`group flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 mb-1 ${
        isActive(to) 
          ? 'bg-brand-mink text-white' 
          : 'text-brand-polar/50 hover:bg-white/5 hover:text-brand-polar'
      }`}
    >
      <Icon className={`w-4 h-4 ${isActive(to) ? 'text-white' : 'text-brand-polar/50 group-hover:text-brand-polar'}`} />
      <span className="text-sm font-display font-medium tracking-wide flex-1">{label}</span>
      {badge && (
        <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
          isActive(to) ? 'bg-white/20 text-white' : 'bg-brand-mink text-white'
        }`}>
          {badge}
        </span>
      )}
    </Link>
  );

  return (
    <div className="w-64 bg-[#151516] border-r border-white/10 flex flex-col h-screen fixed left-0 top-0 z-50">
      {/* Logo Area */}
      <div className="p-6 mb-2">
        <Link to="/" className="block w-24">
          <Logo />
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 overflow-y-auto no-scrollbar">
        
        <div className="mb-8">
          <div className="px-3 text-[10px] font-mono uppercase tracking-widest text-brand-polar/30 mb-3">
            Golfare
          </div>
          <NavItem to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
          <NavItem to="/app/fitting" icon={MessageSquare} label="Fitting Agent" badge="Live" />
          <NavItem to="/app/analyses" icon={BarChart3} label="Analyser" badge="3" />
          <NavItem to="/app/bag" icon={ShoppingBag} label="Golfbag" />
        </div>

        <div className="mb-8">
          <div className="px-3 text-[10px] font-mono uppercase tracking-widest text-brand-polar/30 mb-3">
            Partner
          </div>
          <div className="h-px w-full bg-white/5 mb-3 mx-3"></div>
          <NavItem to="/app/golfers" icon={Users} label="Mina Golfare" />
          <NavItem to="/app/sessions" icon={Calendar} label="Sessioner" />
          <NavItem to="/app/settings" icon={Settings} label="Inställningar" />
        </div>

      </div>

      {/* User Footer */}
      <div className="p-4 border-t border-white/10 bg-[#1C1C1E]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-mink/20 flex items-center justify-center text-brand-mink font-display font-bold text-xs border border-brand-mink/30">
            EL
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-display font-bold text-white truncate">Erik Lindberg</div>
            <div className="text-[10px] font-mono text-brand-polar/40 truncate">Partner · Dormy</div>
          </div>
          <button className="text-brand-polar/30 hover:text-white transition-colors">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppSidebar;

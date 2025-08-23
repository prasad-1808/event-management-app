import { cn } from '@lib/utils';
import { Button } from '@components/ui/button';
import { Home, ImageIcon, Calendar, User, Settings, LogOut } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Albums', href: '/albums', icon: ImageIcon },
  { name: 'Moments', href: '/moments', icon: Calendar },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function PrimarySidebar() {
  const location = useLocation();
  const pathname = location.pathname;
  const auth = useAuth(); // ✅ hook inside component

  const user = {
    name: auth.user?.profile?.name || 'John Doe',
    role: 'admin',
  };

  const handleLogout = () => {
  auth.signoutRedirect({
    post_logout_redirect_uri: 'http://localhost:5173/', // ✅ redirect to login
  });
};

  return (
    <div className="flex h-full w-64 flex-col bg-sidebar border-r border-sidebar-border">
      {/* Header */}
      <div className="flex h-16 items-center px-6 border-b border-sidebar-border">
        <h1 className="text-xl font-serif font-semibold text-primary">Wedding Moments</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-sidebar-accent',
                isActive
                  ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm'
                  : 'text-sidebar-foreground hover:text-sidebar-accent-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-3 py-2 mb-3">
          <div className="h-8 w-8 rounded-full bg-gradient-gold-rose flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">{user.name}</p>
            <p className="text-xs text-sidebar-foreground/60 truncate capitalize">
              {user.role} access
            </p>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout} // ✅ fixed
          className="w-full justify-start text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}

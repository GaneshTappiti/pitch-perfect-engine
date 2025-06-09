import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { 
  Search, 
  Bell, 
  Settings, 
  User,
  Menu
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if the current path matches the given path
  const isActive = (path: string) => {
    return location.pathname === path || 
      (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-lg bg-blue-600 w-8 h-8 flex items-center justify-center">
              <span className="font-bold text-white text-sm">S</span>
            </div>
            <span className="font-bold text-xl hidden md:inline-block text-gray-900">StartWise</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Home
            </Link>
            <Link 
              to="/workspace" 
              className={`text-sm font-medium transition-colors ${isActive('/workspace') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Workspace
            </Link>
            <Link 
              to="/features" 
              className={`text-sm font-medium transition-colors ${isActive('/features') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Features
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
            >
              About
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full"></span>
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Settings className="h-5 w-5 text-gray-600" />
            </button>
            <div className="h-6 w-px bg-gray-200 mx-1"></div>
            <button className="p-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
              <User className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white hidden md:flex">
            <Link to="/workspace">
              Get Started
            </Link>
          </Button>
          
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white border-l border-gray-200">
              <div className="flex flex-col gap-6 pt-6">
                <Link 
                  to="/" 
                  className={`text-sm font-medium py-2 ${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/workspace" 
                  className={`text-sm font-medium py-2 ${isActive('/workspace') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Workspace
                </Link>
                <Link 
                  to="/features" 
                  className={`text-sm font-medium py-2 ${isActive('/features') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  to="/about" 
                  className={`text-sm font-medium py-2 ${isActive('/about') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link to="/workspace" onClick={() => setIsMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
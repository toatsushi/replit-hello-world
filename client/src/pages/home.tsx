import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      // Could trigger a page reload or other refresh logic here
      window.location.reload();
    }, 1500);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: 'hsl(var(--bg-gray))' }}
    >
      <div className="w-full max-w-md mx-auto">
        
        {/* Status Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border">
            <div 
              className={`w-2 h-2 rounded-full ${
                isLoaded 
                  ? 'bg-green-500' 
                  : 'bg-green-500 animate-pulse'
              }`}
              style={{ 
                backgroundColor: isLoaded 
                  ? 'hsl(var(--success-green))' 
                  : 'hsl(var(--success-green))' 
              }}
            />
            <span 
              className="text-sm font-medium"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              {isLoaded ? 'App loaded successfully' : 'Loading...'}
            </span>
          </div>
        </div>

        {/* Main Hello World Card */}
        <Card className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <CardContent className="p-8 text-center">
            
            {/* Welcome Icon */}
            <div className="mb-6">
              <div 
                className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center shadow-lg bg-gradient-to-br from-blue-500 to-purple-600"
                style={{ 
                  background: 'linear-gradient(135deg, hsl(var(--ios-blue)), hsl(262 83% 58%))' 
                }}
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
              </div>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-3xl font-semibold mb-4"
              style={{ color: 'hsl(var(--text-primary))' }}
            >
              Hello World
            </h1>

            {/* Sub Heading */}
            <p 
              className="text-lg mb-6 leading-relaxed"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              Welcome to your React application powered by Express.js
            </p>

            {/* Technical Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span 
                  className="text-sm font-medium"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  Frontend
                </span>
                <span 
                  className="text-sm font-semibold"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  React.js
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span 
                  className="text-sm font-medium"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  Backend
                </span>
                <span 
                  className="text-sm font-semibold"
                  style={{ color: 'hsl(var(--text-primary))' }}
                >
                  Express.js
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span 
                  className="text-sm font-medium"
                  style={{ color: 'hsl(var(--text-secondary))' }}
                >
                  Status
                </span>
                <span 
                  className="text-sm font-semibold"
                  style={{ color: 'hsl(var(--success-green))' }}
                >
                  Running
                </span>
              </div>
            </div>

            {/* Action Button */}
            <Button 
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="w-full text-white font-medium py-3 px-6 rounded-xl shadow-sm transition-all duration-200 transform hover:scale-105 active:scale-95"
              style={{ 
                backgroundColor: 'hsl(var(--ios-blue))',
                opacity: isRefreshing ? 0.7 : 1
              }}
            >
              {isRefreshing ? 'Refreshing...' : 'Refresh Application'}
            </Button>

          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6">
          <p 
            className="text-sm"
            style={{ color: 'hsl(var(--text-secondary))' }}
          >
            Built with modern web technologies
          </p>
          <div className="flex items-center justify-center space-x-4 mt-3">
            <span 
              className="text-xs px-2 py-1 bg-white rounded-full border"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              Responsive
            </span>
            <span 
              className="text-xs px-2 py-1 bg-white rounded-full border"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              Fast
            </span>
            <span 
              className="text-xs px-2 py-1 bg-white rounded-full border"
              style={{ color: 'hsl(var(--text-secondary))' }}
            >
              Secure
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

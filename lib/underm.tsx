import { Wrench, Sparkles } from 'lucide-react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center gap-4">
          <Wrench className="w-16 h-16 text-purple-400 animate-bounce" style={{ animationDelay: '0ms' }} />
          <Sparkles className="w-16 h-16 text-purple-300 animate-bounce" style={{ animationDelay: '150ms' }} />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Under Maintenance
        </h1>
        
        <p className="text-xl md:text-2xl text-purple-200 mb-8">
          We are currently implementing exciting new features
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <p className="text-purple-100 text-lg">
            Our team is working hard to bring you an improved experience. 
            We will be back online shortly with amazing updates!
          </p>
        </div>
        
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
        </div>
        
        <p className="text-purple-300 text-sm">
          Expected to be back soon. Thank you for your patience!
        </p>
      </div>
    </div>
  );
}
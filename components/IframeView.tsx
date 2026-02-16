
import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface IframeViewProps {
  src: string;
  title: string;
}

const IframeView: React.FC<IframeViewProps> = ({ src, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-brand-black pt-20 flex flex-col relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-brand-black z-0">
          <div className="flex flex-col items-center gap-4">
             <Loader2 className="w-8 h-8 text-brand-mink animate-spin" />
             <p className="text-brand-polar/50 font-mono text-xs uppercase tracking-widest">ESTABLISHING UPLINK...</p>
          </div>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        className="w-full flex-grow border-none relative z-10"
        style={{ height: 'calc(100vh - 80px)' }} // Full height minus navbar
        onLoad={() => setIsLoading(false)}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; camera; microphone"
        allowFullScreen
      />
    </div>
  );
};

export default IframeView;

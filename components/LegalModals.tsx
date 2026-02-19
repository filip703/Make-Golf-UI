
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalsProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

const LegalModals: React.FC<LegalModalsProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';
  
  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
        />
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl max-h-[85vh] flex flex-col bg-[#181818] border border-white/10 shadow-2xl rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-[#1C1C1E]">
             <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-mink/10 flex items-center justify-center text-brand-mink">
                    {isPrivacy ? <Shield className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                </div>
                <div>
                    <h3 className="text-white font-display font-medium text-lg uppercase tracking-wide">
                        {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
                    </h3>
                    <p className="text-[10px] font-mono text-white/40 uppercase">Make Golf AB • Last Updated: Feb 2026</p>
                </div>
             </div>
             <button 
                onClick={onClose}
                className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
             >
                <X className="w-5 h-5" />
             </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 text-sm text-brand-polar/70 leading-relaxed font-sans space-y-6 custom-scrollbar">
             
             {isPrivacy ? (
                <>
                    <section>
                        <h4 className="text-white font-bold mb-2">1. Introduction</h4>
                        <p>Make Golf AB ("we", "us", or "our") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website make.golf, use our fitting software, or purchase our custom hardware products.</p>
                    </section>
                    <section>
                        <h4 className="text-white font-bold mb-2">2. Data We Collect</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Personal Identification:</strong> Name, email address, shipping address, and phone number.</li>
                            <li><strong>Biomechanical Data:</strong> Swing data imported from launch monitors (e.g., Trackman, GCQuad), physical dimensions, and handicap information used to generate your "Make DNA".</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, and usage patterns on our configurator.</li>
                        </ul>
                    </section>
                    <section>
                        <h4 className="text-white font-bold mb-2">3. How We Use Your Data</h4>
                        <p>We use your biomechanical data exclusively to:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Generate parametric CAD models for your custom equipment.</li>
                            <li>Calibrate AI fitting algorithms.</li>
                            <li>Manufacturing: Your data is converted into machine code (G-code) for our 3D printers.</li>
                        </ul>
                    </section>
                    <section>
                        <h4 className="text-white font-bold mb-2">4. Sharing of Information</h4>
                        <p>We do not sell your data. We share data only with:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li><strong>Manufacturing Partners:</strong> Such as Sandvik and Tritone, strictly for the production of your specific order.</li>
                            <li><strong>Service Providers:</strong> Payment processors (Stripe) and hosting services (Vercel/Supabase).</li>
                        </ul>
                    </section>
                    <section>
                        <h4 className="text-white font-bold mb-2">5. GDPR Rights</h4>
                        <p>If you are a resident of the EEA, you have the right to access, correct, or delete your personal data. To request an export of your "Make DNA" file or deletion of your account, contact team@make.golf.</p>
                    </section>
                </>
             ) : (
                <>
                    <section>
                        <h4 className="text-white font-bold mb-2">1. Acceptance of Terms</h4>
                        <p>By accessing make.golf or purchasing our products, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>
                    </section>
                    <section>
                        <h4 className="text-white font-bold mb-2">2. Nature of Custom Hardware</h4>
                        <p>Make Golf manufactures bespoke, 3D-printed sporting equipment. Due to the custom nature of our products:</p>
                        <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li><strong>No Returns on Custom Orders:</strong> Once a club has entered the "Printing" phase, orders cannot be cancelled or refunded.</li>
                            <li><strong>Tolerances:</strong> While we manufacture to aerospace standards, minor surface variations inherent to the sintering process may occur and do not constitute defects.</li>
                        </ul>
                    </section>
                    <section>
                        <h4 className="text-white font-bold mb-2">3. Intellectual Property</h4>
                        <p>The "Make DNA" algorithm, the generated CAD geometries, and the lattice structures inside our clubs are the exclusive intellectual property of Make Golf AB. You may not reverse engineer, scan, or attempt to replicate our designs.</p>
                    </section>
                    <section>
                        <h4 className="text-white font-bold mb-2">4. User Accounts</h4>
                        <p>You are responsible for maintaining the confidentiality of your account. You agree to provide accurate swing data. Make Golf is not responsible for ill-fitting equipment resulting from inaccurate data provided by the user.</p>
                    </section>
                    <section>
                        <h4 className="text-white font-bold mb-2">5. Limitation of Liability</h4>
                        <p>To the maximum extent permitted by law, Make Golf AB shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.</p>
                    </section>
                    <section>
                        <h4 className="text-white font-bold mb-2">6. Governing Law</h4>
                        <p>These terms shall be governed by the laws of Sweden. Any disputes shall be resolved in the district courts of Stockholm.</p>
                    </section>
                </>
             )}
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/5 bg-[#1C1C1E] flex justify-end">
             <button 
                onClick={onClose}
                className="px-6 py-2 bg-white text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-brand-polar transition-colors"
             >
                Close
             </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LegalModals;

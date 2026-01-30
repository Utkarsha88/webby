import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, Users, Database } from 'lucide-react';

const Privacy = () => {
  const policies = [
    {
      icon: <Database size={24} />,
      title: 'Data Collection',
      description: 'We collect only essential information such as email, login details (when required), and contact information.',
    },
    {
      icon: <Lock size={24} />,
      title: 'Credential Usage',
      description: 'Login credentials are used temporarily for activation and are not stored after service completion.',
    },
    {
      icon: <Users size={24} />,
      title: 'No Third-Party Sharing',
      description: 'We do not share customer data with third parties.',
    },
    {
      icon: <Eye size={24} />,
      title: 'Secure Handling',
      description: 'All data is handled securely and responsibly.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <Shield size={32} className="text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="glass-card p-8 md:p-12 space-y-8">
            <div className="text-center pb-6 border-b border-border">
              <p className="text-lg text-foreground font-medium">Your privacy matters to us.</p>
            </div>

            {/* Policy Cards */}
            <div className="grid gap-6">
              {policies.map((policy, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                    {policy.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{policy.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {policy.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Consent */}
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-center">
              <p className="text-foreground leading-relaxed">
                By using our service, you consent to this privacy policy.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;

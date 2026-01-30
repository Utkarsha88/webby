import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <FileText size={32} className="text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="glass-card p-8 md:p-12 space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              By using our services, you agree to the following terms:
            </p>

            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">1</span>
                  Account Credentials Requirement
                </h2>
                <p className="text-muted-foreground leading-relaxed pl-10">
                  To activate Google Gemini / Google AI Pro, customers must provide the email account and password required for subscription activation. This is mandatory for service delivery.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">2</span>
                  Credential Handling
                </h2>
                <p className="text-muted-foreground leading-relaxed pl-10">
                  Customer credentials are used only for subscription activation. We do not misuse, sell, or permanently store passwords after activation.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">3</span>
                  Service Nature
                </h2>
                <p className="text-muted-foreground leading-relaxed pl-10">
                  All services provided are digital subscriptions. Once activated, the service is considered delivered.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">4</span>
                  No Unauthorized Use
                </h2>
                <p className="text-muted-foreground leading-relaxed pl-10">
                  Customers must not resell, share, or misuse the provided subscriptions.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">5</span>
                  Service Validity
                </h2>
                <p className="text-muted-foreground leading-relaxed pl-10">
                  Subscription duration depends on the selected plan. Early termination by the provider is not under our control.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">6</span>
                  Right to Refuse Service
                </h2>
                <p className="text-muted-foreground leading-relaxed pl-10">
                  We reserve the right to refuse service if suspicious activity, fraud, or policy violations are detected.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">7</span>
                  Policy Updates
                </h2>
                <p className="text-muted-foreground leading-relaxed pl-10">
                  Terms may be updated anytime. Continued use means acceptance of updated terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;

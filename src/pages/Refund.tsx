import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { RotateCcw, CheckCircle, XCircle } from 'lucide-react';

const Refund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
              <RotateCcw size={32} className="text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Refund Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="glass-card p-8 md:p-12 space-y-8">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <p className="text-amber-200 leading-relaxed">
                Due to the digital nature of our services, refunds are not applicable once the subscription is activated.
              </p>
            </div>

            {/* Refunds Considered */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <CheckCircle size={20} className="text-emerald-500" />
                Refunds are only considered if:
              </h2>
              <ul className="space-y-3 pl-7">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">Payment is successful but service is not delivered.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">Activation fails due to our technical fault.</span>
                </li>
              </ul>
            </div>

            {/* No Refunds */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <XCircle size={20} className="text-red-500" />
                No refunds for:
              </h2>
              <ul className="space-y-3 pl-7">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">Change of mind</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">Account issues caused by the user</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">Subscription suspension by the platform provider</span>
                </li>
              </ul>
            </div>

            {/* Processing Time */}
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-foreground leading-relaxed">
                <strong>Processing Time:</strong> Approved refunds will be processed within 5–7 business days.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Refund;

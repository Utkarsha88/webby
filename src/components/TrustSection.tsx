import { ShoppingCart, Zap, Smile, Shield, CheckCircle, MessageCircle, Mail, Lock } from 'lucide-react';

const TrustSection = () => {
  const steps = [
    {
      icon: <ShoppingCart size={24} />,
      title: 'Order Securely',
      description: 'Choose your subscription and pay safely via local methods.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Fast Activation',
      description: 'We activate your account within hours, not days.',
    },
    {
      icon: <Smile size={24} />,
      title: 'Enjoy Premium',
      description: 'Access all premium features instantly on your account.',
    },
  ];

  const trustPoints = [
    { icon: <Lock size={18} />, text: 'Secure payment methods' },
    { icon: <CheckCircle size={18} />, text: '100% verified accounts' },
    { icon: <MessageCircle size={18} />, text: 'WhatsApp & Email support' },
    { icon: <Mail size={18} />, text: 'Quick response time' },
  ];

  return (
    <section id="trust" className="py-24 md:py-32 relative noise">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm font-medium mb-6">
            <Shield size={16} className="text-primary" />
            Verified & Trusted
          </div>
          <h2 className="section-title mb-4">
            100% Legit & Trusted — <span className="gradient-text">The Subify Promise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We've built our reputation on transparency and reliability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* How It Works */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">How It Works</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex items-start gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center text-background">
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                    )}
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary">STEP {index + 1}</span>
                    </div>
                    <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee & Screenshots */}
          <div className="space-y-8">
            {/* Scam-Free Guarantee */}
            <div className="glass-card p-6 md:p-8 glow-primary">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Shield size={28} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Scam-Free Guarantee</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    If your credentials don't work or activation fails on our side, we'll refund you according to our money-back policy. No questions asked.
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Activations */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Recent Successful Activations</h4>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-video rounded-xl bg-secondary/50 border border-border flex items-center justify-center overflow-hidden"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
                      <CheckCircle size={24} className="text-primary/40" />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">Proof of activations (blurred for privacy)</p>
            </div>

            {/* Why Trust Us */}
            <div className="glass-card p-6">
              <h4 className="font-semibold mb-4">Why trust us?</h4>
              <div className="grid grid-cols-2 gap-3">
                {trustPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary">{point.icon}</span>
                    {point.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

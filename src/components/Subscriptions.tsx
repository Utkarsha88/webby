import { Bot, Cloud, Youtube, ArrowRight, Clock } from 'lucide-react';
import SubscriptionCard from './SubscriptionCard';

const Subscriptions = () => {
  const subscriptions = [
    {
      icon: <Bot size={28} className="text-background" />,
      title: 'ChatGPT Plus',
      features: [
        'Faster responses with priority access',
        'Access to GPT-4 & latest models',
        'Advanced AI features & plugins',
      ],
      price: 'NPR 499',
      period: 'month',
      hasOffer: false,
    },
    {
      icon: <Cloud size={28} className="text-background" />,
      title: 'Google AI Pro + 2TB',
      features: [
        'Gemini 3 Pro with advanced AI, images, and video'

'1,000 AI credits for Flow and Whisk'

'AI video & filmmaking tools (Veo)'
'Higher limits for Code Assist, CLI, and Antigravity'

'NotebookLM premium research features'

'Gemini inside Google apps'

2 TB cloud storage,
      ],
      price: 'NPR 1399',
      period: 'year',
      hasOffer: true,
    },
    {
      icon: <Youtube size={28} className="text-background" />,
      title: 'YouTube Premium',
      features: [
        'Ad-free videos on all devices',
        'Background play & downloads',
        'YouTube Music Premium included',
      ],
      price: 'NPR 399',
      period: 'month',
      hasOffer: false,
    },
  ];

  return (
    <section id="subscriptions" className="py-24 md:py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-[hsl(200,80%,50%)] to-[hsl(160,70%,45%)] opacity-[0.04] blur-[120px]" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Featured <span className="gradient-text">Opening Offers</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Premium subscriptions at unbeatable Nepal prices. Limited time offers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {subscriptions.map((sub, index) => (
            <SubscriptionCard
              key={sub.title}
              {...sub}
              delay={`${index * 0.1}s`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mb-10">
          <button className="btn-primary text-base px-8 py-4 group">
            View All Subscriptions
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Coming Soon Bar */}
        <div className="glass-card py-4 px-6 flex items-center justify-center gap-3 text-muted-foreground animate-pulse">
          <Clock size={18} className="text-primary" />
          <span className="text-sm font-medium">New services coming soon... Stay tuned!</span>
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;

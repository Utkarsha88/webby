import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { ReactNode } from 'react';

interface SubscriptionCardProps {
  icon: ReactNode;
  title: string;
  features: string[];
  price: string;
  period: string;
  hasOffer?: boolean;
  delay?: string;
}

const SubscriptionCard = ({
  icon,
  title,
  features,
  price,
  period,
  hasOffer = false,
  delay = '0s',
}: SubscriptionCardProps) => {
  return (
    <div
      className="relative glass-card p-6 md:p-8 hover-lift group animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      {/* Opening Offer Badge */}
      {hasOffer && (
        <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full gradient-gold text-background text-xs font-bold flex items-center gap-1 glow-gold z-10">
          <Sparkles size={12} />
          OPENING OFFER!
        </div>
      )}

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      {/* Features */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-muted-foreground">
            <Check size={18} className="text-primary mt-0.5 shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-3xl font-bold gradient-text">{price}</span>
        <span className="text-muted-foreground text-sm">/ {period}</span>
      </div>

      {/* CTA */}
      <button 
        onClick={() => {
          const message = encodeURIComponent(`Hi! I'm interested in the ${title} subscription. Please provide more details.`);
          window.open(`https://wa.me/9779766015476?text=${message}`, '_blank');
        }}
        className="w-full btn-outline group/btn"
      >
        Get Now
        <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
      </button>
    </div>
  );
};

export default SubscriptionCard;

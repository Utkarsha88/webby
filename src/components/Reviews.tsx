import { Star, BadgeCheck, Calendar } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Rama K.',
      review: 'ChatGPT Plus activation was instant! Great service and the pricing is unbeatable for Nepal.',
      avatar: 'R',
      date: 'Jan 15, 2025',
      rating: 5,
      verified: true,
      product: 'ChatGPT Plus',
    },
    {
      name: 'Nanami S.',
      review: 'Speed and reliability — activation was quick and the pricing is great. Highly recommend!',
      avatar: 'N',
      date: 'Jan 12, 2025',
      rating: 5,
      verified: true,
      product: 'Google AI Pro',
    },
    {
      name: 'Karki B.',
      review: 'Very professional and trustworthy service. My YouTube Premium works perfectly on all devices.',
      avatar: 'K',
      date: 'Jan 8, 2025',
      rating: 5,
      verified: true,
      product: 'YouTube Premium',
    },
    {
      name: 'Rann P.',
      review: 'The most reliable subscription service in Nepal. Premium quality and excellent customer support.',
      avatar: 'R',
      date: 'Jan 5, 2025',
      rating: 5,
      verified: true,
      product: 'ChatGPT Plus',
    },
  ];

  return (
    <section id="reviews" className="py-24 md:py-32 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full bg-[hsl(160,70%,45%)] opacity-[0.04] blur-[100px]" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            What <span className="gradient-text">Nepali Users</span> Are Saying
          </h2>
          <p className="section-subtitle mx-auto">
            Join hundreds of satisfied customers across Nepal.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="glass-card p-6 hover-lift animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with Stars and Verified */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>
                {review.verified && (
                  <div className="flex items-center gap-1 text-emerald-500">
                    <BadgeCheck size={16} />
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                )}
              </div>

              {/* Product Badge */}
              <div className="inline-flex self-start px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-3">
                {review.product}
              </div>

              {/* Review Text */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                "{review.review}"
              </p>

              {/* User & Date */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center text-background font-semibold text-sm">
                    {review.avatar}
                  </div>
                  <span className="font-medium text-sm">{review.name}</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Calendar size={12} />
                  <span className="text-xs">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Guidelines */}
        <div className="mt-12 text-center">
          <div className="glass-card inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 px-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BadgeCheck size={16} className="text-emerald-500" />
              <span>Only verified buyers can submit reviews</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star size={16} className="text-gold" />
              <span>Reviews enabled after successful activation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

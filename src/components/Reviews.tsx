import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Rama K.',
      review: 'ChatGPT Plus activation was instant! Great service and the pricing is unbeatable for Nepal.',
      avatar: 'R',
    },
    {
      name: 'Nanami S.',
      review: 'Speed and reliability — activation was quick and the pricing is great. Highly recommend!',
      avatar: 'N',
    },
    {
      name: 'Karki B.',
      review: 'Very professional and trustworthy service. My YouTube Premium works perfectly on all devices.',
      avatar: 'K',
    },
    {
      name: 'Rann P.',
      review: 'The most reliable subscription service in Nepal. Premium quality and excellent customer support.',
      avatar: 'R',
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
              className="glass-card p-6 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                "{review.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center text-background font-semibold text-sm">
                  {review.avatar}
                </div>
                <span className="font-medium text-sm">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

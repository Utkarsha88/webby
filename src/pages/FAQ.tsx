import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HelpCircle, Mail, Clock } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Why do you need my account and password for Gemini?',
      answer: 'To activate Gemini / Google AI Pro, access to the account is required by the platform itself. This is standard for activation.',
    },
    {
      question: 'Is my account safe?',
      answer: 'Yes. Credentials are used only for activation and not stored afterward.',
    },
    {
      question: 'How long does activation take?',
      answer: 'Usually within 15-30 minutes, depending on service load.',
    },
    {
      question: 'Can I change my password after activation?',
      answer: 'Yes. You are advised to change your password immediately after activation.',
    },
    {
      question: 'Do you provide support after purchase?',
      answer: 'Yes. We provide post-purchase support for subscription-related issues.',
    },
    {
      question: 'What if my subscription stops working?',
      answer: 'Contact support immediately. We will verify and assist based on validity.',
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
              <HelpCircle size={32} className="text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground">Find answers to common questions about our services</p>
          </div>

          {/* FAQ Accordion */}
          <div className="glass-card p-6 md:p-8 mb-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                    <span className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold shrink-0">
                        Q{index + 1}
                      </span>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-11">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Support Contact */}
          <div className="glass-card p-8 md:p-12 glow-primary">
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold">Still have questions?</h2>
              <p className="text-muted-foreground">
                Our support team is here to help you with any issues or concerns.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="mailto:subify.np@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Email us at</p>
                    <p className="font-medium">subify.np@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Clock size={20} className="text-emerald-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Response time</p>
                    <p className="font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;

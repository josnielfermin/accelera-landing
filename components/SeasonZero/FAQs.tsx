'use client';
import { useState } from 'react';

const initialFaqs = [
  {
    title: 'How do I earn ACCEL points?',
    description:
      'Earn ACCEL points by depositing USDe and receive xUSDe. You will accumulate points based on duration and total deposit amount. Earn a multiplier boost by depositing xUSDe into supported partner integrations.',
    isOpen: false,
  },
  {
    title: 'How long is Season Zero expected to last?',
    description: 'Season Zero will last for approximately 30 days.',
    isOpen: false,
  },
  {
    title: 'What benefits do ACCEL points provide?',
    description:
      'ACCEL points are our rewards programme that will convert into the ACCEL token airdrop.',
    isOpen: false,
  },
  {
    title: 'Is there a minimum deposit amount?',
    description: 'The minimum amount is 50 USDe.',
    isOpen: false,
  },
];

const FAQs = () => {
  const [faqs, setFaqs] = useState(initialFaqs);

  const toggleFaq = (index: number) => {
    const updatedFaqs = faqs.map((faq, i) =>
      i === index ? { ...faq, isOpen: !faq.isOpen } : faq
    );
    setFaqs(updatedFaqs);
  };

  return (
    <div className="flex flex-col relative z-[2] w-full rounded-[20px] overflow-hidden">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`bg-black/10 backdrop-blur-[6px] py-5 px-8 flex flex-col justify-center w-full transition-all ${
            index < faqs.length - 1 && 'border-b border-woodsmoke-800'
          }`}
          onClick={() => toggleFaq(index)}
        >
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="text-woodsmoke-50 font-medium text-sm text-left select-none">
              {faq.title}
            </div>
            <div
              className={`icon-arrow-right-up text-lg transition-all ${
                faq.isOpen ? 'text-woodsmoke-800' : 'text-pastel-green-500'
              }`}
            />
          </div>

          <div
            className={`overflow-hidden transition-all !ease-[easy-in-out] origin-top transform ${
              faq.isOpen
                ? `max-h-[300px] opacity-100 translate-y-0 h-5 ${
                    faq.description.length > 70 &&
                    'max-2xl:h-8 max-[350px]:h-12'
                  } ${
                    faq.description.length > 150 &&
                    'max-md:h-12 max-xs:h-20 max-[350px]:h-24'
                  } ${faq.description.length < 70 && 'max-[350px]:h-8'}`
                : 'max-h-0 opacity-0 -translate-y-[20%] h-0 pointer-events-none'
            }`}
          >
            <p className="text-woodsmoke-200 font-normal text-xs select-none">
              {faq.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;

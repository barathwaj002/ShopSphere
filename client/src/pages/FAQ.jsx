import { FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Browse products, add your desired items to the cart, proceed to checkout, enter your shipping address, and complete your order."
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Yes. Orders can be cancelled before they are shipped. Once shipped, cancellation is no longer available."
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "ShopSphere currently supports Cash on Delivery, UPI, Debit Cards, Credit Cards and Net Banking."
  },
  {
    question: "How can I track my order?",
    answer:
      "Navigate to My Orders from your profile to check the latest status of your purchase."
  },
  {
    question: "What if I receive a damaged product?",
    answer:
      "Contact our support team within 48 hours with photos of the product. We'll arrange a replacement or refund."
  }
];

function FAQ() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-20">

      <h1 className="mb-12 text-center text-5xl font-black text-white">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-[#0b1023] p-8"
          >

            <div className="mb-4 flex items-center gap-3">

              <FiHelpCircle className="text-violet-400" />

              <h2 className="text-xl font-bold text-white">
                {faq.question}
              </h2>

            </div>

            <p className="leading-8 text-slate-400">
              {faq.answer}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default FAQ;
import React from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItemProps[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <details
          key={i}
          className="group border-b border-charcoal/20 pb-4 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between text-heading-s text-charcoal outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-4">
            <span>{item.question}</span>
            <span className="ml-4 flex-shrink-0 text-charcoal transition-transform duration-300 group-open:rotate-180">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </summary>
          <div className="mt-4 text-body-m text-charcoal whitespace-pre-wrap pr-8">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

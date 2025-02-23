import { Text } from "@radix-ui/themes";
import { faqContent } from "./faqContent";

export default function FAQPage() {
  return (
    <div className="pt-8">
      <div className="fade-slide-in mx-auto max-w-7xl divide-y divide-primary/50 px-4 py-0 sm:px-6  md:py-12 lg:px-8 lg:py-16">
        {faqContent.map(({ id, title, faqs }) => (
          <div className="pt-8" key={id} id={`${id}`}>
            <h2 className="my-2 block text-3xl font-bold tracking-tight md:my-8">
              {title}
            </h2>
            <div className="mb-2 mt-2 md:mt-8">
              <dl className="divide-y divide-primary/30">
                {faqs.map(({ question, answer, id }) => (
                  <div
                    className="pb-8 pt-6 md:grid md:grid-cols-12 md:gap-8"
                    key={id}
                  >
                    <Text
                      className="text-base font-semibold md:col-span-5"
                      color="grass"
                    >
                      {question}
                    </Text>
                    <dd className="mt-2 md:col-span-7 md:mt-0">
                      <Text className="text-base">{answer}</Text>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

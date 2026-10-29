"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ASSET_PREFIX } from "../../../config";

export type AccordionItem = {
  id: string | number;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
};

export type AccordionProps = {
  items: AccordionItem[];
  single?: boolean;
  defaultOpenIds?: Array<AccordionItem["id"]>;
  className?: string;
  itemClassName?: string;
};

export const Accordion: React.FC<AccordionProps> = ({
  items,
  single = false,
  defaultOpenIds = [],
  className = "",
  itemClassName = "",
}) => {
  const [open, setOpen] = React.useState<Set<AccordionItem["id"]>>(
    () => new Set(defaultOpenIds)
  );

  const toggle = (id: AccordionItem["id"], disabled?: boolean) => {
    if (disabled) return;
    setOpen((prev) => {
      const next = new Set(prev);
      const isOpen = next.has(id);
      if (single) {
        next.clear();
        if (!isOpen) next.add(id);
      } else {
        isOpen ? next.delete(id) : next.add(id);
      }
      return next;
    });
  };

  return (
    <div
      className={
        "w-full divide-y divide-[#108155]  border-b border-[#108155] bg-white  " +
        className
      }>
      {items.map(({ id, title, content, disabled }, idx) => {
        const isOpen = open.has(id);
        const panelId = `accordion-panel-${id}`;
        const headingId = `accordion-heading-${id}`;
        return (
          <div
            key={id}
            className={
              "group/acc pr-4 sm:pr-6 " +
              (idx === 0 ? "rounded-t-2xl " : "") +
              (idx === items.length - 1 ? "rounded-b-2xl " : "") +
              itemClassName
            }>
            <button
              id={headingId}
              className={
                "flex w-full items-center justify-between gap-4 py-4 text-left outline-none transition-opacity cursor-pointer " +
                (disabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:opacity-90")
              }
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(id, disabled)}
              disabled={disabled}>
              <h3 className="text-[24px] leading-[32px] font-medium text-gray-900">
                {title}
              </h3>
              <div className="p-[10px] rounded-[50%] bg-[#5e773e]">
                <ChevronDown
                  className={
                    "h-6 w-6 shrink-0 text-white  transition-transform duration-300 " +
                    (isOpen ? "rotate-180" : "rotate-0")
                  }
                  aria-hidden="true"
                />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.section
                  key="content"
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
                  style={{ overflow: "hidden" }}>
                  <div className="pb-5 text-[16px] sm:text-base leading-relaxed w-[100%] md:w-[90%]  text-gray-700">
                    {content}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export const AccordionDemo: React.FC = () => {
  const items: AccordionItem[] = [
    {
      id: 1,
      title: "What Is Panchakarma And How Does It Work?",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            So, what is this panchakarma that everyone is hyping about? To put
            it simply, it is an ancient healing technique which uses natural
            elements to restore health. Panchakarma is made up of two Sanskrit
            words; Pancha meaning ‘five’ and Karma meaning ‘treatment or
            action’.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            The Panchakarma therapy uses five unique treatments namely; Vamana,
            Virechana, Basti, Nasya and Rakthamokshana to treat the toxins
            (Doshas - Vata, Pitta and Kapha).
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            This rejuvenation therapy helps you eliminate the toxins from your
            body through various outlets and balance your energy.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            When was the last time you felt truly energetic to work on your
            hobbies or passions?
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Panchakarma Treatment Types - What Are They?",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            Do you know that there are main 5 treatments in the Pradhanakarma
            process that are specifically customized based on your needs? They
            include:
          </p>
          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0] text-[#171717]">
            <b>Vamana (Medical Vomiting)</b>
          </h3>
          <ul className="pl-[0] sm:pl-[20px]">
            <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[text-gray-700]  max-md:leading-[22px]">
              <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10 17l5-5l-5-5"
                  />
                </svg>
              </div>
              <p className="text-[#171717]">
                The vomiting part might get you, but don’t be scared. This is
                one of the most effective and painless treatments to get all the
                excess kapha (mucus) out of your body. If you are someone
                suffering from sinus, asthma orobesity, Vamana panchakarma
                treatment might be your best fit.
              </p>
            </li>
          </ul>
          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0] text-[#171717]">
            <b>Virechana (Cleansing) </b>
          </h3>
          <ul className="pl-[0] sm:pl-[20px]">
            <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[text-gray-700]  max-md:leading-[22px]">
              <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10 17l5-5l-5-5"
                  />
                </svg>
              </div>
              <p className="text-[#171717]">
                Virechana is another process that removes the excess pitta by
                flushing them out through your intestines.
              </p>
            </li>
          </ul>
          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0] text-[#171717]">
            <b>Basti (Enema)</b>
          </h3>
          <ul className="pl-[0] sm:pl-[20px]">
            <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[text-gray-700]  max-md:leading-[22px]">
              <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10 17l5-5l-5-5"
                  />
                </svg>
              </div>
              <p className="text-[#171717]">
                It is the natural enema - the enema(y) of your constipation.
                Basti focuses on cleaning your intestine through medicated oils
                and ghee. If you are having trouble with digestion and the
                intestine, nothing can be better than this.
              </p>
            </li>
          </ul>
          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0] text-[#171717]">
            <b>Nasya (Nasal Oil Treatment)</b>
          </h3>
          <ul className="pl-[0] sm:pl-[20px]">
            <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[text-gray-700]  max-md:leading-[22px]">
              <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10 17l5-5l-5-5"
                  />
                </svg>
              </div>
              <p className="text-[#171717]">
                Get a clear nose and head with the Nasya treatment. Nasya
                usually involves pouring herbal oils, water or juice through the
                nose to clear out the excess mucus in the nasal region. It’s the
                best to treat your long battle against sinus and migraines.
              </p>
            </li>
          </ul>
          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0] text-[#171717]">
            <b>Rakshtamokshana (Blood Cleansing)</b>
          </h3>
          <ul className="pl-[0] sm:pl-[20px]">
            <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[text-gray-700]  max-md:leading-[22px]">
              <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10 17l5-5l-5-5"
                  />
                </svg>
              </div>
              <p className="text-[#171717]">
                This one might literally bleed you. Just kidding! It’s a
                painless procedure that leeches or small tools to remove your
                impure blood with a simple needle prick or small cut. If you are
                on the lookout for your skin or autoimmune disease; nothing can
                be better than Rakthamokshana.
              </p>
            </li>
          </ul>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            So, what’s on your treatment list?
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "What is the Panchakarma ? Process Like?",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            Now that you are all set to go and get your Panchakarma treatment,
            the first thing that comes to mind is: “What is the process like?”
            It’s nothing more than a simple 3 step process.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            The Ayurveda panchakarma process involves 3 main steps which include
            -
          </p>
          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0] text-[#171717]">
            <b>Purvakarma (Preparation Process)</b>
          </h3>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            A warmup is compulsory before you move on to run or do exercise. And
            that’s how Panchakarma works too - getting your body prepared for
            the treatment.
          </p>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            The Purvakarma process starts by treating and getting your body
            ready to handle the detox. It includes body strengthening routines
            like Pachana (Digestion therapy), Swedana (Sweating therapy) and
            Snehana (Body oiling therapy) to loosen up the doshas in the body.
          </p>

          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0] text-[#171717]">
            <b>Pradhanakarma (Main Process)</b>
          </h3>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            And now enters the main picture. This is when the actual panchakarma
            detox starts. Based on your health issue and body condition; the
            right treatment is chosen among the 5 treatments.
          </p>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            And worry not! These treatments are completely safe as it&apos;s
            personalised just for you.
          </p>

          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0] text-[#171717]">
            <b>Paschatkarma (Post-Treatment Process)</b>
          </h3>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            Just like how you drink water after eating something spicy,
            Paschatkarma is the same. Pschatkarma is like water that helps you
            cool down and heal quickly
          </p>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            The post-treatment process includes having the patient take proper
            rest and lifestyle and diet changes to reach the body balance.
          </p>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            Let me help you break it down through a story. For instance:
            Rakshita is an IT employee looking to get Panchakarma treatment for
            weight loss. This is how the panchakarma process will look like:
          </p>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            Rakshita is admitted into Samwarthika Hospital and starts the
            Purvakarma process with oil massages, herbal medicines and sweating
            for 2 to 3 days.
          </p>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            The Pradhanakarma process for weight loss includes either Vamana or
            Virechana treatment is used to remove the toxins (typically for 2 or
            3 days).
          </p>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            The Paschatkarma process for Rakshita includes taking rest, changing
            her diet and lifestyle to heal her body and maintain the effect of
            the treatment.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "How Long Does The Panchakarma Treatment Last?",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            In most of the panchakarma treatment cases, it usually lasts from 7
            days to a full 28 days depending on your treatment and body needs.
            So, ensure to have at least a 3-week vacation to get the most out of
            your panchakarma treatment and restore your body.
          </p>
        </>
      ),
    },
    {
      id: 5,
      title: "What Is The Treatment Cost Of Panchakarma?",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            Panchakarma treatment is quite expensive due to the need for skilled
            physicians, treatment durations and the price of natural herbs. On
            average, you can expect the cost to vary from ₹40000 to ₹250000 and
            more for 7 days to 21 days package.
          </p>
        </>
      ),
    },
    {
      id: 6,
      title: "Tips For Better Recovery (Quick Healing)",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            Here are some quick tips to get the most out of your Panchakarma
            detox.
          </p>
          <ul className="pl-[0] sm:pl-[20px]">
            <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[text-gray-700]  max-md:leading-[22px]">
              <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10 17l5-5l-5-5"
                  />
                </svg>
              </div>
              <p className="text-[#171717]">
                Rest As Much As Possible: Taking plenty of rest is the key to
                healing quickly. Take them whenever possible.
              </p>
            </li>
            <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[text-gray-700]  max-md:leading-[22px]">
              <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10 17l5-5l-5-5"
                  />
                </svg>
              </div>
              <p className="text-[#171717]">
                Healthy Eating: Ayurveda believes in freshly cooked and easily
                digestible foods. So, after the detox make sure to eat healthy,
                light and fresh food to heal quicker.
              </p>
            </li>
            <li className="grid grid-cols-[25px_auto] max-md:grid-cols-[20px_auto]  my-[20px]  max-md:my-[15px] gap-[12px] text-[text-gray-700]  max-md:leading-[22px]">
              <div className="w-[22px] h-[22px] max-md:w-[20px] max-md:h-[20px] rounded-[50%]  overflow-hidden p-[2px] bg-[#ffab6b] flex justify-center items-center mt-[3px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m10 17l5-5l-5-5"
                  />
                </svg>
              </div>
              <p className="text-[#171717]">
                Listen To The Doctor’s Advice: Follow what your doctor instructs
                you. This way you can gain balance in your health quickly.
              </p>
            </li>
          </ul>
        </>
      ),
    },

    // {
    //   id: 7,
    //   title: &quot;This item is disabled",
    //   content: "You should not be able to open me.",
    //   disabled: true,
    // },
  ];

  return (
    <div className="">
      <Accordion items={items} single defaultOpenIds={[1]} />
    </div>
  );
};

export default function Blogdetail() {
  const data = [
    {
      image: `/assets/images/panchakarma-treatment-guide-2025.webp`,
      title: "What to Expect? A Simple Panchakarma Treatment Guide for 2025",
      date: "07 March 2025",
      content2: (
        <>
          <p className="text-[16px] leading-[24px] mb-[24px] text-[#171717]  font-medium">
            <b>Let’s Panch The Doshas Away With Panchakarma</b>
          </p>
          <p className="text-[16px] leading-[24px] mb-[24px] text-[#171717] ">
            Healing doesn’t have to take too long when you are literally
            draining away your health. With Panchakarma Treatment in Kerala, you
            can heal your body, mind and soul in one go.
          </p>
          <p className="text-[16px] leading-[24px] mb-[24px] text-[#171717] ">
            Get ready to experience the joy of natural healing with Samwarthika
            Ayurveda Hospital. Take your first step to natural healing with
            Panchakarma detox therapy today!
          </p>
        </>
      ),
      content1: (
        <>
          <p className="text-[16px] leading-[24px] mb-[24px] text-[#171717] ">
            Do you feel like your body has a different mind on its own? Are you
            finding yourself lazy even though you are an active person?
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            In Ayurveda, laziness is often linked with the stored toxins inside
            your body. It burdens your mind, body and emotions. But this doesn’t
            have to be you.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            What if I say you can heal yourself, that too naturally!? I am not
            joking. It is possible - with the help of Panchakarma treatment. Now
            you might ask: Do they really work and what is the process to go
            through it?
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717] ">
            In this blog, we will walk you through the entire panchakarma
            process and everything you need to know.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="sticky top-[130px] z-[2] ">
      {data.map((item, index) => (
        <div className="group relative" key={index}>
          <h2 className="text-[33px] leading-[38px] font-light text-[var(--secondary)] max-3xl:text-[30px] max-3xl:leading-[36px] max-2xl:text-[28px] max-2xl:leading-[34px] max-xl:text-[26px] max-xl:leading-[32px] max-md:text-[24px] max-md:leading-[30px]">
            {item.title}
          </h2>
          <h3 className="text-[#e36300] my-[20px] mb-[50px] max-mlg:mb-[30px] text-[26px] leading-[30px] max-xxl:text-[24px] max-xxl:leading-[28px] max-xl:my-[15px] ">
            {item.date}
          </h3>

          <div className="rounded-[10px] overflow-hidden">
            <Image
              src={`${ASSET_PREFIX}${item.image}`}
              width={530}
              height={500}
              alt="Blog list"
              unoptimized
              className="w-full max-h-[500px] object-cover group-hover:scale-[1.1] transition duration-300 ease-linear"
            />
          </div>

          <div className="mt-[50px] ">
            <h3 className="my-[20px] text-[20px] leading-[28px] font-light max-xxl:text-[18px] max-xxl:leading-[26px] group-hover:text-[#649923] transition-colors duration-300 max-mlg:text-[16px] max-mlg:leading-[24px] max-xl:my-[15px]">
              {item.title}
            </h3>

            <div className="text-[16px] leading-[24px] mb-[20px] w-full font-light">
              {item.content1}
            </div>
          </div>

          <div className="mb-[20px]">
            <AccordionDemo />
          </div>
          <div className="text-[16px] leading-[24px] mb-[20px] w-full font-light">
            {item.content2}
          </div>
        </div>
      ))}
    </div>
  );
}

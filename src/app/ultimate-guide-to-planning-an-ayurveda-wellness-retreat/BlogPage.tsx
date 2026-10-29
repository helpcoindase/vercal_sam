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
      title: "What To Expect On Your Ayurveda Wellness Vacation?",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717]">
            Ayurvedic medical tourism is not like any other spa retreat. It is
            more than that. It is a deep, holistic healing experience tailored
            to your unique body type and needs.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717]">
            So, don’t forget to leave the chaos behind at home before you start
            your Ayurvedic healing journey and dive into serenity.
          </p>

          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0]">
            <b>Personalised Treatment Plans</b>
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
                Ayurveda is all about you. The therapies that you will undergo
                will be designed according to your dosha. It is the body type,
                personality and health conditions, which make up you.
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
                Whether you are detoxifying, rejuvenating, relieving stress or
                gaining mental clarity, your experience will be tailored to you.
              </p>
            </li>
          </ul>
          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0] text-[#171717]">
            <b>Personalised Treatment Plans</b>
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
                The approach uses Ayurvedic treatment plans like detox given in
                the form of Panchakarma to yoga, meditation and herbal
                concoctions. It also includes massages, wellness and dietary
                needs.
              </p>
            </li>
          </ul>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717]">
            These therapies don’t just heal you but also leave you feeling
            rejuvenated, energetic and more connected to your inner peace. So,
            what’s actually stopping you from getting started?
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "A Step-by-Step Guide To Planning Your Ayurveda Wellness Vacation",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717]">
            When planning a vacation, there are numerous things to plan out for
            with many options under your sleeve if anything goes wrong. And when
            it comes to health vacation, you need to be more on your toes.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717]">
            But how do you plan it? We have come up with a step-by-step guide to
            help you make the perfect plan -
          </p>

          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0]">
            <b>Choose Your Destination</b>
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
                What is your final choice - India, Thailand, Bali or Sri Lanka?
                All of them provide different experiences. So, consider your
                preferences and needs before choosing one.
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
                From silent, spiritual retreats to luxurious Ayurvedic wellness
                resorts - the location, your needs and your experience matter
                the most.
              </p>
            </li>
          </ul>
          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0]">
            <b>Selecting The Right Resort Or Retreat</b>
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
                Search for registered Ayurveda centres with expert
                practitioners. Ensure it has customized programs according to
                your personal goals. Check their reviews before choosing one.
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
                Whether you want detoxification, rejuvenation or de-stressing,
                make sure it has all that you require.
              </p>
            </li>
          </ul>
          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0]">
            <b>Know Your Health Goals</b>
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
                Have you met with an Ayurveda expert to identify your dosha?
                This will determine which type of treatment best suits you -
                Vata, Pitta or Kapha.
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
                Identify what you want to achieve on the retreat, be it
                detoxification, mental clarity or weight loss.
              </p>
            </li>
          </ul>
          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0]">
            <b>Your Budget</b>
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
                Plan out your budget. Ayurveda is a slow process but also
                expensive compared to other treatments. Opt for treatment plans
                that will fit inside your pocket.
              </p>
            </li>
          </ul>
          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0]">
            <b>Your Travel Plan</b>
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
                Now comes a bigger part of your wellness journey - your travel.
                Book your flights, nearby accommodations and ensure a
                hassle-free journey.
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
                Lastly, do not forget to pack the right clothing and toiletries
                suited for a wellness retreat.
              </p>
            </li>
          </ul>
          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0]">
            <b>Be Realistic</b>
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
                Ayurveda is not a miracle pill. It&apos;s a slow process and
                treatments don&apos;t have the magic power but are a holistic
                approach.
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
                So be patient, understand the process and allow your body to
                heal gradually.
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      title: "What To Do During Your Ayurveda Wellness Vacation?",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717]">
            The practices don’t mean just coming to the treatment every day. You
            need to imbibe everything to enjoy your Ayurvedic wellness retreat.
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
                Engage Fully In Therapies And Yoga: Attempt all classes and
                treatments. From Panchakarma detox to daily yoga, every moment
                is a healing one.
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
                Eat Consciously: Ayurveda focuses on proper nutrition that
                sustains your body. Follow Ayurvedic eating habits and the
                changes are sure to show up in a long time in terms of your
                general well-being.
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
                Reflect & Write: Write your journal; looking back at the journey
                you have undertaken really helps connect one deeper with the
                process and see the change happening.
              </p>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      title: "Post Vacation - Maintaining Your Practices",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717]">
            The journey to wellness doesn’t end with the vacation. There’s more
            to it. True healing starts when Ayurveda becomes your lifestyle. But
            how do you maintain the balance and wellness you achieved?
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717]">
            It’s simple, learn to incorporate it into your daily life. Stick to
            a wellness routine, eat based on your doshas and stick to yoga and
            meditation daily.
          </p>
        </>
      ),
    },
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
      image: `/assets/images/ayurveda-wellness-retreat.webp`,
      title: "Ultimate Guide To Planning An Ayurveda Wellness Retreat",
      date: "11 March 2025",
      content2: (
        <>
          <p className="text-[16px] leading-[24px] mb-[24px] text-[#171717] font-medium">
            <b>Key Takeaways</b>
          </p>
          <p className="text-[16px] leading-[24px] mb-[24px] text-[#171717]">
            When it comes to rebuilding your health, Ayurveda is your perfect
            choice. Ayurveda wellness vacation is not a holiday but an
            investment in your health and well-being.
          </p>{" "}
          <p className="text-[16px] leading-[24px] mb-[24px] text-[#171717]">
            With proper planning, you can experience the power and long-lasting
            benefits of Ayurveda. Take that first step toward healing today;
            your mind, body and spirit will thank you.
          </p>
          <p className="text-[16px] leading-[24px] mb-[24px] text-[#171717]">
            For more tips on Ayurveda and natural healing, follow us on
            Facebook, Instagram and X.
          </p>{" "}
        </>
      ),
      content1: (
        <>
          <p className="text-[16px] leading-[24px] mb-[24px] text-[#171717]">
            How many times have you had the feeling of needing to push the reset
            button on your health? The never-ending stress and health tolls you
            get from constant working are unimaginable.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717]">
            And that’s why people across the globe have been looking for
            holistic ways to cure themselves. With vacation and healing becoming
            the trend, many foreigners are looking for an outing that’s amazing
            and truly healing.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717]">
            But how? Simple - With Ayurveda wellness vacation you can escape
            from the hell hole called a busy life and transform yourself. The
            result? It heals your soul, mind and body from within.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717]">
            This growing trend of medical tourism is shifting the focus from
            just taking a vacation to nourishing the body and mind deeply.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] text-[#171717]">
            But why should you choose Ayurveda for your health journey? In this
            guide, we will tell you exactly how to plan the vacation so you
            don’t have to worry.
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

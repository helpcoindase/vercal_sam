"use client";

import * as React from "react";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../../config";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
      title: "1. Can I Trust This? Will It Help Me With My Health Problem?",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] ">
            If you are someone struggling with chronic health issues, then
            it&apos;s most likely that most treatments have done you no good.
            And especially when it comes to getting medical treatment from
            abroad, you are always confused by information overload.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            You are constantly worried if the hospital is good, the doctors are
            qualified orthe treatment is proper. If you are still wondering if
            Ayurvedic treatment is actually useful or not, then here&apos;s the
            answer.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            Ayurveda has been here for 5000+ years and trusted by many people
            for their better health. Just make sure to look for the best
            hospital through thorough research. And make sure they provide
            personalised treatment, as Ayurveda is all about personalised and
            natural care.
          </p>

          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0]">
            <b>Tip:</b>
          </h3>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            Choose hospitals that are internationally recognised, like NABH
            Accredited and Ayur Diamond.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "2. Are These Treatments Helpful? Will They Help in My Recovery?",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] ">
            &quot;Will this treatment actually help me heal oris it just going
            to be another vacation?&quot; That&apos;s the question most people
            ask. After all, you are spending money and time here to heal and not
            for relaxation.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            You might have seen people talking about herbal tea and massage on
            the internet. But it is more than just that. It understands your
            entire body and pain and helps remove it from the root. Some of the
            options for treatments include Panchakarma, physiotherapy and meal
            plans, which are based on your goals and needs.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            It is about creating a completely new lifestyle to make you feel
            new.
          </p>

          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0]">
            <b>Tip:</b>
          </h3>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            Visit tourist attractions near your Ayurveda hospital in Kerala and
            enjoy your treatment. Kerala has lots of attractions to serve you.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title:
        "3. What If I Can't Communicate Clearly? What If They Don't Understand Me?",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] ">
            &quot;Will they understand what I am experiencing?&quot; It is a big
            deal when you are already facing health issues.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            If you&apos;re someone who speaks languages like German, Russian or
            Japanese, it&apos;s quite normal to be stressed about how well
            you&apos;re understood. But don&apos;t panic!
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            Lots of Ayurvedic centres cater to international visitors, having
            English-speaking doctors and staff. Don&apos;t worry about getting
            lost during the explanation.
          </p>

          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0]">
            <b>Tip:</b>
          </h3>
          <p className="text-[16px] leading-[24px] mb-[15px] ">
            You can communicate freely using English or just use a translation
            device. Maybe signs/actions can do the trick too!
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "4. Will It Be Too Difficult To Get An All-Inclusive Package?",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] ">
            If you have stress due to your health in the first place, then the
            thought of flying on a plane to the other side of the world and
            figuring out where to stay, what to eat and how to get there is
            probably the last thing you want to deal with.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            Most Ayurvedic centres in Kerala offer all-inclusive packages that
            take care of everything - food, accommodation and travel. So you
            only have to think about your health and how to relax, as those
            packages will help reduce your stress while ensuring you spend your
            time happily.
          </p>

          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0]">
            <b>Tip:</b>
          </h3>
          <p className="text-[16px] leading-[24px] mb-[15px] ">
            Look for Ayurveda all-inclusive packages to get the best and
            budget-friendly treatments.
          </p>
        </>
      ),
    },
    {
      id: 5,
      title: "5. Are They Expensive?",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] ">
            Is it going to be expensive? Should I go for this treatment if it
            costs this much? Should I drop the treatment? Such questions are
            never-ending.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            The cost of flights, accommodation, food and local rides can be
            quite alarming. You have to pay for healthcare back home and then
            here for your Ayurvedic treatment.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            The Ayurveda Treatment in Kerala is much more affordable than the
            treatment in Western countries. You don&apos;t just get a complete
            holistic healing for your chronic issues but also a relaxing and
            detoxifying therapy like a vacation.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            And most Ayurvedic treatment packages in Kerala are flexible,
            meaning you can choose one that fits your budget. Once you try
            Ayurveda, you will find the magic in it. India&apos;s budget for
            2025 also helps with easy medical access with the &quot;Heal in
            India&quot; initiative.
          </p>

          <h3 className="mt-[20px] mb-[10px] text-[22px] leading-[30px]  max-xxl:text-[16px] max-xxl:leading-[26px]   max-xl:my-[15px] mt-[0]">
            <b>Tip:</b>
          </h3>
          <p className="text-[16px] leading-[24px] mb-[15px] ">
            Ayurveda hospitals in Kerala provide customised packages for your
            health goals. Choose only what you urgently need instead of going
            for a whole package.
          </p>
        </>
      ),
    },
    {
      id: 6,
      title: "6. How Long Should I Stay and What Is the Treatment Duration?",
      content: (
        <>
          <p className="text-[16px] leading-[24px] mb-[15px] ">
            If you are a working professional, getting leave from the office for
            too long can be quite challenging. The worry that constantly
            stresses you out is, &quot;How long is the treatment going to
            be?&quot;
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            Most treatment packages start from 3 days to 21 days or 28 days at
            the maximum. Speak with the hospital staff to find out your
            specialised treatment duration.
          </p>
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
      image: `/assets/images/ayurvedic-medical-tourism-guide-2025.webp`,
      title: "Your Ultimate Ayurvedic Medical Tourism Guide in 2025",
      date: "25 July 2025",
      content2: (
        <>
          <p className="text-[16px] leading-[24px] mb-[24px]  font-medium">
            <b> Are You Ready to Take Charge of Your Health?</b>
          </p>
          <p className="text-[16px] leading-[24px] mb-[24px] ">
            You deserve to feel better; you deserve to have a plan that
            addresses your individual needs instead of just giving you a whole
            bunch of pills. Ayurveda provides that and more.{" "}
          </p>{" "}
          <p className="text-[16px] leading-[24px] mb-[24px] ">
            It&apos;s not about going to a spa for a weekend for some feel-good
            vibes for a few days. It&apos;s experiencing a meaningful treatment
            that is natural and heals you from the inside out.{" "}
          </p>
          <p className="text-[16px] leading-[24px] mb-[24px] ">
            If you find yourself stuck in the web of chronic health issues or
            stress, now&apos;s the time to be open-minded and open-hearted to
            something different - something that actually considers YOU in the
            process!{" "}
          </p>{" "}
          <p className="text-[16px] leading-[24px] mb-[24px] ">
            Are you ready to make the change and feel better? Book your
            Ayurvedic retreat today at Samwarthika Ayurveda Hospital and start
            your journey to healing, feeling and living better.
          </p>
        </>
      ),
      content1: (
        <>
          <p className="text-[16px] leading-[24px] mb-[24px] ">
            You are completely exhausted. You&apos;ve tried different medicines,
            treatments and every tip provided by the wellness gurus on social
            media. And yet here you are - struggling with your health.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            We get it. And maybe that&apos;s why you want to try your luck with
            Ayurvedic treatment. You researched and found that Ayurveda is able
            to provide relief that Western medicines couldn&apos;t.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            But there&apos;s still a big question mark. &quot;Will this actually
            work for me?&quot; &quot;And where should I go?&quot; and so many
            more.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            And it&apos;s not just you. Most people have the same questions
            running through their minds. And still, millions of people go for
            Ayurvedic treatment in Kerala every year.
          </p>

          <p className="text-[16px] leading-[24px] mb-[15px] ">
            This guide will answer all your questions related to Ayurveda and
            the wellness journey.
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

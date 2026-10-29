"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function FAQ() {
  const faqs = [
    {
      "id": "1",
      "question": "What kinds of insurance are accepted at Samwarthika Ayurveda Hospital?",
      "answer": "Samwarthika Hospital accepts medical insurance policies recognized by the Insurance Authority of India. Payments for treatments are accepted as cash or on a reimbursement basis, depending on the tie-up of the insurer. The hospital is NABH-accredited and follows national standards in healthcare delivery."
    },
    {
      "id": "2",
      "question": "In the case of the cashless treatment, will the treatment be made available?",
      "answer": "Yes, cashless treatment is offered to those patients whose company directly ties up with Samwarthika. The hospital verifies the policy details and seeks the insurer’s approval. Once authorized, treatment will be done without advance payment, subject to policy terms and conditions."
    },
    {
      "id": "3",
      "question": "How is the treatment reimbursement processing done?",
      "answer": "Patients will make payments for their treatments and reimbursements will be processed from their insurance provider. A hospital usually provides a bill along with a discharge summary and any other medical documents required for claims. Since the reimbursement process depends much on the internal handling of the claim, the time required is not fixed."
    },
    {
      "id": "4",
      "question": "Is Samwarthika Ayurveda Hospital NABH-accredited?",
      "answer": "Yes, NABH accreditation means the hospital guarantees the quality and safety of healthcare delivery. This accreditation further strengthens the hospital's eligibility to be part of an insurance network. Therefore, patients receive standardized care and smooth insurance claim processing."
    },
    {
      "id": "5",
      "question": "How does registration under the Insurance Regulatory Authority benefit patients?",
      "answer": "Clearly, by virtue of being registered under the Government of India's Registry of Hospitals in Networks of Insurance, Samwarthika gets listed and accepted by almost all major insurers, leading to smooth processes of claim submission and added avenues for approvals of cashless treatment. Also, it attributes trust and transparency to its patients."
    },
    {
      "id": "6",
      "question": "Do all treatments at Samwarthika go with insurance?",
      "answer": "This depends upon the particular insurance policy and its terms and conditions. While encasement for a considerable amount of Ayurveda therapy is there, maybe some treatments concerning wellness or preventive treatments are not covered. Patients are advised to check with their insurers about coverage before admission."
    },
    {
      "id": "7",
      "question": "What papers are required for applying for insurance claims?",
      "answer": "Patients should submit an insurance card, policy number, identity proof corresponding to their name and medical records. Discharge summaries, prescriptions and bills are essential for reimbursement. The hospital's insurance desk helps patients assemble and submit their applications."
    },
    {
      "id": "8",
      "question": "How long does it take to approve the insurance in cashless treatment?",
      "answer": "Time taken to approve by the firm varies; most range from a few hours to a maximum of a day. The hospital has direct communication to expedite approval from the insurance company. Patients in emergencies receive priority and treatment without payment delay by the insurance company."
    },
    {
      "id": "9",
      "question": "Can Samwarthika admit international patients on their insurance?",
      "answer": "Some international patients can be accommodated in that position if their insurance provider has tie-ups with Indian insurers or utilizes global networks. The insurance desk within the hospital can easily inform you if the insurance covers the treatment. Thereafter, proper documentation must be given for reimbursement claims in case cashless treatment is not possible."
    },
    {
      "id": "10",
      "question": "To whom should an inquiring patient direct their insurance-related questions?",
      "answer": "Counseling patients in procedures to understand cashless and reimbursement schemes with an insurance helpdesk called Samwarthika, which also helps with documentation and communication with the insurers. In addition, it provides clarification as necessary to patients. Patients may choose to visit the desk before admission or at discharge for hassle-free claim processing."
    }
  ];
  // const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState<string | null>("1");
  const toggleFAQ = (id: string) => {
    setActive(active === id ? null : id);
  };
  return (
    <>
      <section className="py-[140px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px] bg-[#f7f6f2]">
        <div className="xxl:w-[50%] w-[60%] m-[auto] max-xxl:w-[65%]  max-2xl:w-[70%]  max-lg:w-[75%] max-mlg:w-[90%] max-w-[120rem]">
          <h3
            className="text-[#304A10] font-[source,serief4] mb-[20px] mt-[0] sm:mt-[8px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[34px] max-mlg:leading-[40px]   font-normal text-start w-[fit-content] tracking-[-1px]">
            Frequently Asked Questions

          </h3>
          {/* <p className="text-[16px] leading-[24xpx]  text-[#341802]  mb-[40px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
            Our Ayurveda therapies combine time-honored healing techniques with
            modern clinical expertise. We offer a wide range of treatments
            including Panchakarma, Abhyanga, Elakizhi, Nasyam and Pizhichil.
            Each therapy is customized to your unique health needs, focusing on
            holistic healing for your body, mind and soul.
          </p> */}
          <div className="grid  gap-[30px] max-2xl:gap-[15px] max-lg:gap-[0px]  mt-[60px] max-2xl:mt-[40px] max-mlg:mt-[20px]">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="group  border-b border-[#bcbcbc]  pb-[30px] max-xxl:pb-[30px]  max-xl:pt-[15px] max-xl:pb-[30px] max-sm:pb-[20px]">
                <button
                  className="flex justify-between items-center w-full  cursor-pointer gap-[10px]"
                  onClick={() => toggleFAQ(faq.id)}>
                  <p
                    className={`text-[20px] leading-[26px] sm:text-[26px] sm:leading-[32px]  text-left text-[#000] font-medium transition duration-300  group-hover:text-[#304A10] ${active === faq.id ? "text-[#304A10]" : ""
                      }`}>
                    {faq.question}
                  </p>
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 min-w-[40px] min-h-[40px] flex justify-center items-center rounded-full bg-[#607840] transition-all duration-300  group-hover:bg-[#607840] ${active === faq.id
                      ? ""
                      : "bg-[transparent] border-[#e5e5e3] border-1"
                      }`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                      className={`transform transition-transform duration-300 max-lg:w-[25px]  max-lg:h-[25px]    ${active === faq.id ? "rotate-90" : ""
                        }`}>
                      <path
                        fill="none"
                        className="group-hover:stroke-[#fff]"
                        stroke={`${active === faq.id ? "#fff" : " #aeaead"}`}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.3"
                        d="m10 17l5-5l-5-5"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`transition-all duration-500 overflow-hidden ${active === faq.id
                    ? "max-h-96 opacity-100 "
                    : "max-h-0 opacity-0"
                    }`}>
                  {/* <h4 className="text-[24px] leading-[22px] text-[#3a3a3a] mt-[8px]">
                    {faq.answerTitle}
                  </h4> */}
                  <div className="text-[16px] leading-[24px] sm:text-[18px] sm:leading-[24px] text-[#434343bf] my-4 font-semibold w-full sm:w-[90%] md:w-[85%] font-normal">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

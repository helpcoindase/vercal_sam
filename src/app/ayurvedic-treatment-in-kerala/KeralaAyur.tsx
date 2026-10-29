"use client";
import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";
export default function KeralaAyur() {
  const faqs = [
    {
      id: "1",
      question: "Poorva Karma - The preparatory treatments",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto w-full">
            <p>
              The preparatory treatments - preparing a Patient for Panchakarma
              treatments are called Poorva Karma have an important role in
              Panchakarma. Snehana - oleation and Swedana - sudation are the two
              basic preparatory treatments. Snehana can be further divided into
              two types; internal and external. internal Snehana is administered
              through the oral route while external Snehana has many different
              ways. Swedana includes Kizhi, Pizhichil, Dhara, Steam bath, etc.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "2",
      question: "Panchakarma",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              Panchakarma is a unique process of purification comprising five
              purification therapies followed in Ayurveda which absolutely
              expels the toxins out of the body. This bio cleansing process
              includes Emesis - Vamana, Purgation - Virechana, Enema - Vasthi,
              nasal drops - Nasya and Bloodletting - Rakthamokshana. Panchakarma
              has three main stages; namely Poorvakarma, Pradhanakarma and
              Paschathkarma. Poorvakarma is the preparatory treatments before
              main treatment; Pradhanakarma is the main treatment and
              Paschathkarma is the measures employed after the main treatment.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "3",
      question: "Abhyanga",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              Abhyanga is the procedure of application of Snehadravya over the
              body with mild pressure. It is one of the most popular and ancient
              therapies of Ayurvedic treatment in Kerala which involves warm oil
              massage over the entire body.
            </p>
            <p>
              The Thaila/Ghritha/Vasa etc. are rubbed over the body in
              directions comfortable to the patient. It improves strength and
              alleviates Vatha. It can be performed as a therapeutic procedure
              as well as a preventive procedure. The patient is made to sit on
              the Abhyanga table with legs extended. The oil heated to optimum
              temperature is applied over the head, ears and soles of feet
              uniformly with mild pressure by therapists standing on both sides
              of the table. Abhyanga is performed in different positions and at
              the end of the procedure, the oil on the body is wiped off with
              tissue paper or towels. A bath can be taken with hot water and
              medicated powder or soap to remove the oil and to clean the body.
              A light semi-solid digestible diet may be advised after a bath.
            </p>
            <p>
              This dates back to the ancient practice of massage to heal people
              suffering from body stiffness and body pain. In addition to that,
              Abhyanga massage also helps people to move without the burdens of
              joint pain. As a result of getting an Abhyanga treatment, the
              metabolic residues from the patient’s body will be removed
              effectively. Consequently, there will be increased blood
              circulation that will help reduce fatigue and stress-related
              disturbances in one’s body. At Samwarthika Ayurveda Hospital, you
              can avail the benefits of abhyanga massage for both preventive
              remedies as well as for therapeutic purposes.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "4",
      question: "Pizhichil",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              Pizhichil with oil is a modified form of Parisheka Sweda developed
              as a specialty of Ayurvedic treatment in Kerala. It is the process
              by which the body is made to perspire by pouring warm medicated
              oil in a specific manner. It has the advantage of producing
              Snehana and Swedana effects at the same moment. The patient is
              made to sit on the treatment table - dhroni with legs extended. A
              gentle massage is performed by therapists attending either side of
              the patient. The oil for Pouring is heated by keeping the vessel
              in a hot water bath and the temperature of the oil must be
              comfortable to the patient. A piece of cloth is dipped in the warm
              oil and squeezed over the body with the right hand. Simultaneously
              gentle massage is done with the left hand also. The oil flows in a
              uniform stream from the thumb facing downwards from a specific
              height or as per the condition of the disease and patient. The
              process is to be continued in different positions. After the
              procedure, the body of the patient is massaged gently and oil is
              wiped off with a clean towel. Rest is advised for a few minutes
              followed by a hot water bath. Medicated powder is applied over the
              scalp and oral medicines according to the condition are given. A
              normal diet is generally prescribed. This process stimulates the
              neuromuscular system; increases peripheral circulation, improves
              the functions of the skin, sense organs and provides nourishment.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "5",
      question: "Shirodhara",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              Shirodhara is a type of application of oil to the head/scalp, in
              which prescribed medicated oil/ liquid is continuously poured over
              the forehead and then allowed to flow over the scalp from a
              specific height for a certain period. The patient is massaged on
              the head with suitable oil. In certain cases, whole-body massage
              is also done before Shirodhara. The patient should lie in the
              supine position on the treatment table - dhroni with a pillow
              under the neck and the Shirodhara device is placed over the head.
              Its height is fixed in such a way that suitably warm oil or
              medicated liquids should fall from a specific height in a
              continuous stream of specific thickness over the forehead. The
              oil/liquid poured is recollected and reheated just above the body
              temperature and again poured in the dharapatram. The attendant
              will move the vessel to both sides of the forehead so that the
              flow of liquid reaches both sides properly. After this process,
              the oil is wiped off and the patient is advised to take a bath
              with medicated warm water after half an hour. This procedure is
              suggested for 7, 14 or21 days as per the severity of the
              disease. Light diet, preferably semisolids and liquids are
              advised. The constant flow of liquid in a specified manner relaxes
              the mind, calms and tranquilizes the patients.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "6",
      question: "Upanaham",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              Upanaha is a kind of Swedana- sudation - in which the medicines
              are made into a paste after boiling with a suitable liquid and
              applied over a specific area. It is covered with leaves and
              bandaged with thick cloth which can be removed after a stipulated
              time. Warm oil is applied in the area where Upanaha is to be done
              and the herbal drugs mixed with thaila/ghritha paste are applied
              in bearable heat. The area where the paste is applied is covered
              and bandaged with a thick cotton cloth. This can be removed and
              cleaned after the prescribed duration followed by the application
              of oil. A normal diet is usually advised. It is a type of Swedana
              - sudation that imparts heat to a specific area resulting in the
              reduction of swelling and pain. It improves blood circulation and
              thus, mobilizes the waste materials of that area.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "7",
      question: "Kizhi Pathra Pinda Sweda/Elakizhi",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              Pathra pinda sweda refers to a kind of Swedana - sudation
              performed by a specially prepared bolus of medicinal leaves. In
              this process, leaves of herbs are cut into pieces and fried with
              rock salt and suitable medicated oil. This hot mixture is tied in
              cotton cloth as boluses for application over the body. The boluses
              are gently applied in a synchronized manner. This bolus is applied
              hot to the skin already smeared with warm medicated oil. To
              maintain its temperature, the bolus is intermittently kept warm by
              heating on the frying pan. At the end of the procedure, the body
              should be wiped off with a dry soft towel and oral medicines are
              suggested. The patient is asked to be under complete rest for at
              least an hour and then allowed to take a bath with warm water. A
              light diet preferably liquids and semi-solids are suggested. It is
              a kind of Swedana - sudation where heat, pressure and oil are
              applied simultaneously with drugs. So this stimulates and
              strengthens the neuro-muscular system resulting in reduction of
              pain and inflammation.
            </p>
            <p>
              Patra Pinda Sweda/Elakizhi is effective in detoxifying and
              eliminating residues from the affected areas of the skin. it is
              used to massage the areas of treatment and is said to benefit
              people who experience back pain, joint pain, muscle cramping,
              arthritis, problems of stress and anxiety, etc. The treatment is
              also said to improve one&apos;s overall immunity and slow down the
              aging process.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "8",
      question: "Churna Pinda Sweda/Podikizhi",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              Churna Swedana is a kind of Swedana- sudation given by powder of
              various herbs made as a bolus and applied over the body after
              heating. Powder of medicinal plants, seeds, lemon and rock salt
              are mixed and fried with medicated oil. This mixture is tied up in
              a cotton cloth to prepare a bolus. This bolus is heated in oil and
              applied with mild pressure over the body after a gentle massage.
              At the end of the procedure, the body is wiped off with a dry soft
              towel. oral medicines are given at the end and the patient is
              advised to take complete rest and then allowed to take bath with
              warm water. Light food preferably liquids and semi-solids are
              advised. It is a kind of fomentation that stimulates nerve
              endings, relaxes muscles and relieves pain.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "9",
      question: "Njavarakizhi",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              Njavarakizhi is a specialty of Ayurvedic treatment in Kerala where
              the whole body or any specific part is made to perspire by the
              application of heated medicinal rice puddings externally in the
              form of boluses tied up in a cotton cloth. A specific variety of
              rice by the name Njavara is cooked with milk and decoction of
              herbs is kept in four pieces of cloth to make 4 boluses. Another
              portion of decoction and milk of the same quantity is mixed and
              heated at low temperature to dip the above boluses for warming the
              Kizhi. The patient is properly massaged with suitable warm oil all
              over the body and head. The warm Kizhi is gently applied in a
              synchronized manner by two therapists on two sides of the
              treatment table - dhroni. The heat of the boluses is bearable to
              the patient and will be maintained throughout the procedure by
              continuous use of four boluses. This procedure is done in
              different positions as per the requirement. At the end of the
              procedure, the paste of medicine remaining over the body is
              scrapped off and the body is wiped off with dry soft towels. Then
              medicated oil is applied over the body herbal medicines are given
              orally. The patient is advised to take complete rest and then
              allowed to take a bath with warm water. Light vegetarian diets
              consisting of liquids or semi-solids are usually prescribed during
              the treatment. By performing this procedure, massage, heat and
              pressure are provided to the body simultaneously with nourishment
              to the muscles and nerve endings.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "10",
      question: "Shirolepana",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              Shirolepana is a procedure of application of a paste of medicines
              on the head for a specific time. The head of the patient is shaved
              and medicated oil is applied over the body and scalp followed by
              the medicated paste applied thickly over the head covered by
              medicated leaves. After the stipulated time, the head is washed
              and Rasnadichoorna is applied. A normal diet is suggested. It
              provides tranquility to the head and brain, soothes the mind and
              nourishes the brain cells. It is found very effective in mental
              retardation, loss of memory and psychiatric problems{" "}
            </p>
          </div>
        </>
      ),
    },
    {
      id: "11",
      question: "Shirovasthi",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              Shirovasti is a procedure in which the medicated oil is kept over
              the head with the help of a cap fixed for a prescribed time. The
              medicated oil heated just above the body temperature is slowly
              poured inside the cap over the head without any discomfort to the
              patient. The oil is filled up to a certain height above the scalp.
              The temperature of the oil will be maintained by replacing it with
              warm oil at regular intervals. At the end of the procedure, the
              oil is to be taken out and head wash is done. After wiping off the
              oil with a clean and dry towel, Rasnadichurna is applied. Gentle
              massage is performed on the shoulder, neck forehead and back
              depending on the advice of the Physician. A light diet, liquids,
              and semisolids are preferable.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "12",
      question: "Kativasthi",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              Kativasthi is a procedure in which comfortably hot medicated oil
              is kept over the lumbosacral area or any adjacent part for a
              certain time with the help of a cap-like hollow structure. The
              patient is given abhyanga all over the body and then Sweda -
              medicated steam on the low back and legs. The oil is heated up to
              warmness over the water bath and poured slowly maintaining the
              uniform temperature throughout the process by replacing warm oil.
              After the prescribed time, oil is removed and the area is wiped
              off followed by cleaning with lukewarm water. The patient is
              advised to take a rest. A normal diet is suggested. Keeping the
              medicated oil for a specific time on the affected area nourishes
              the nerves, muscles and joints in the particular region. The heat
              of the oil also gives passive fomentation. It gives relief from
              symptoms.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "13",
      question: "Uro Vasthi",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              Uro vasthi is the procedure of retaining warm medicated oil on a
              specific area of the chest for a specified time. A trough is made
              with dough on the chest or heart region where medicated oil is
              filled in it and retained for a specific time. After the specified
              time, the oil is removed and the oil is wiped off. The patient is
              advised to take a rest. Usually, the procedure is done for 7days.
              Normal diet advised. Keeping the medicated oil for a specific time
              on the affected area will nourish the nerves, muscles and joints
              in that particular part.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "14",
      question: "Akshi Tharpana",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              In this process, medicated ghee is retained over the eyes for
              15-20 minutes. A gentle massage is given on the head, eyes and
              face. A trough is made with dough around both eyes and medicated
              ghee - a little below body temperature but in liquid form - is
              filled inside. It is to be kept for 15-20 minutes and then the
              ghee is to be collected out and the face is wiped off with a clean
              dry towel.
            </p>
            <p>
              Eyes are covered with petals of lotus or rose and the patient is
              advised to sit away from the sunlight for a day. it may be done
              for 7 to 14 days. This process may nourish the structures in the
              eyes and strengthens the optic nerve.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "15",
      question: "Paschath Karma - Post Operative Regimen",
      answerTitle: "",
      answer: (
        <>
          <div className="overflow-x-auto">
            <p>
              The patient has to take complete rest for an equal period of time
              for which he/she has undergone the therapeutic procedure. Pashcath
              karma is done as the patient requires to regain the strength of
              dhathus and to come to normalcy. The patient has to use hot water
              for all purposes and should observe celibacy - brahmacharya during
              Pashcath Karma. Sleeping during the daytime is to be strictly
              avoided and proper sleep during the night is to be maintained.
              Natural urges should not be controlled forcibly. The patient has
              to be free from physical and mental exertion and should not be
              exposed to smoke, excess cold, sun rays, wind, etc. Traveling,
              sitting idle for a long time and talking in a high voice is to be
              avoided. Soft and low pillows are to be used. Internal medicines
              as advised by the Physician have to be taken carefully by the
              Patient for the best results.
            </p>
          </div>
        </>
      ),
    },
  ];
  // const swiperRef = useRef<SwiperType | null>(null);
  const [active, setActive] = useState<string | null>("1");
  const toggleFAQ = (id: string) => {
    setActive(active === id ? null : id);
  };
  return (
    <>
      <section className="pt-[70px]   max-xl:pt-[60px]  max-md:pt-[40px]">
        <div className="xxl:w-[70%] w-[60%] m-[auto] max-xxl:w-[85%]     max-mlg:w-[90%] max-w-[120rem]">
          <h2
            className="text-[#304A10] font-[source,serief4] mb-[20px] mt-[0] sm:mt-[0px] text-[60px] leading-[65px] max-2xl:text-[52px]
           leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[34px] max-mlg:leading-[40px]   font-normal text-start w-[fit-content] tracking-[-1px] text-center! w-full">
            The Kerala Ayurvedic Treatments
          </h2>
          {/* <p className="text-[16px] leading-[24xpx]  text-[#341802]  mb-[40px]  w-[80%]  max-md:w-[90%] max-sm:w-[100%]">
            Our Ayurveda therapies combine time-honored healing techniques with
            modern clinical expertise. We offer a wide range of treatments
            including Panchakarma, Abhyanga, Elakizhi, Nasyam and Pizhichil.
            Each therapy is customized to your unique health needs, focusing on
            holistic healing for your body, mind and soul.
          </p> */}
          <div className="grid  gap-[20px] max-2xl:gap-[15px] max-lg:gap-[0px]  mt-[60px] max-2xl:mt-[40px] max-mlg:mt-[20px] w-full overflow-hidden">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="group  border-b border-[#bcbcbc]  pb-[20px] max-xxl:pb-[20px]  max-xl:pt-[15px] max-xl:pb-[20px] max-sm:pb-[20px] w-full overflow-hidden">
                <button
                  className="flex justify-between items-center w-full  cursor-pointer gap-[10px]"
                  onClick={() => toggleFAQ(faq.id)}>
                  <p
                    className={`text-[20px] leading-[26px] sm:text-[26px] sm:leading-[32px]  text-left text-[#000] font-medium transition duration-300  group-hover:text-[#304A10] ${active === faq.id ? "text-[#304A10]" : ""
                      }`}>
                    {faq.question}
                  </p>
                  <div
                    className={` p-[5px] md:p-[8px]  flex justify-center items-center rounded-full bg-[#607840] transition-all duration-300  group-hover:bg-[#607840] ${active === faq.id
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
                      ? "max-h-2000 opacity-100 "
                      : "max-h-0 opacity-0"
                    }`}>
                  {/* <h4 className="text-[24px] leading-[22px] text-[#3a3a3a] mt-[8px]">
                    {faq.answerTitle}
                  </h4> */}
                  <div className="text-[18px] leading-[24px] text-[#434343bf] my-4 w-full font-normal overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
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

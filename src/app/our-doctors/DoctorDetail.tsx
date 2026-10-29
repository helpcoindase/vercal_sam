"use client";
import Image from "next/image";
import { ASSET_PREFIX } from "../../../config";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DoctorDetail() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 500);
        }
      }
    };

    // Call once when mounted
    scrollToHash();

    // Listen for hash changes (if navigating again)
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);
  return (
    <section className="pt-[180px]  max-2xl:pt-[100px]   max-xl:pt-[80px]  max-md:pt-[50px]">
      <div className="w-[90%] mlg:w-[80%] 2xl:w-[70%] mx-auto ">
        {/* Title Section */}
        {/* <div className="text-center mb-[40px] mlg:mb-[80px]">
          <p className="m-auto uppercase text-[#361902cc] text-[20px]  leading-[24px] max-xl:text-[18px] max-xl:leading-[22px]  max-lg:text-[16px] max-lg:leading-[20px]  font-medium  text-center w-[fit-content]">
            the management
          </p> 
         <h2 className="m-auto text-[#314a10] font-[source,serief4] mb-[20px] text-[60px] leading-[65px] max-2xl:text-[52px]   leading-[58px] max-xl:text-[46px] max-xl:leading-[50px] max-lg:text-[40px] max-lg:leading-[46px] max-mlg:text-[38px] max-mlg:leading-[42px] font-normal   text-center w-[fit-content]">
            Founder Message
          </h2> 
        </div> */}

        {/* Content Section */}
        <div
          id="dr-k-subramanian"
          className="grid grid-cols-1 group transition-all duration-300 max-mlg:p-[30px] max-lg:p-[35px]  p-[40px] rounded-[45px] mlg:grid-cols-[350px_auto] bg-[#f5f5f5] gap-[40px] mlg:gap-[80px] xl:gap-[120px] max-md:mb-[30px] max-lg:mb-[40px] mb-[50px]">
          {/* Left Column - Image & Name */}
          <div className="text-center mlg:text-left">
            <div className="mb-[20px]  overflow-hidden max-w-[350px] max-h-[400px] rounded-[20px] mx-auto">
              <Image
                src={`${ASSET_PREFIX}/assets/images/dr-kn-subramanian-namboothiri.webp`}
                alt="Dr. K. N. Subramanian Namboothiri"
                width={467}
                height={461}
                className="rounded-[20px] mx-auto mlg:mx-0 group-hover:scale-[1.1] transition duration-300"
              />
            </div>
            <p className="text-[20px] leading-[28px] font-semibold text-[#341802]">
              Dr. K. N. Subramanian Namboothiri
            </p>
            <p className="text-[18px] leading-[26px] text-[#e36300] mt-[4px]">
              BAMS, MD(Ay) - Medical Director
            </p>
          </div>

          {/* Right Column - Message */}
          <div className="flex flex-col justify-between ">
            <div>
              <p className="text-[#000] text-[18px] leading-[26px]  mlg:text-[20px] mlg:leading-[28px] xl:text-[22px] xl:leading-[30px]  w-full mb-[30px]  mlb:mb-[50px]">
                Dr. K. N. Subramanian Namboothiri is an eminent Physician who
                has more than 30 years of practice in General Medicine.
              </p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal">
                He is a retired District Medical Officer from Indian Systems of
                Medicine, Government of Kerala. Dr. Subramanian Namboothiri
                graduated from Vaidyaratnam Ayurveda College, Thrissur and did
                his post-graduation from the prestigious Government College of
                Indian Medicine, Mysore in Kayachikitsa (General Medicine). He
                is specialized in treating neurological disorders like stroke,
                bell’s palsy, parkinsonism etc. He has also proven cases in skin
                disorders and gastro-intestinal disorders. He is also the Chief
                Physician in Vaidyamadom Ayurveda Clinic at Ramamangalam.
              </p>
            </div>
            <Link className="book-app-doc" href="/contact-us/">
              <div className="text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[var(--primary)] transition duration-300  w-fit">
                Book Appointment
              </div>
            </Link>
          </div>
        </div>
        <div
          className="grid grid-cols-1 group transition-all duration-300 max-mlg:p-[30px] max-lg:p-[35px]  p-[40px] rounded-[45px] bg-[#E8F5D9]/60 max-mlg:flex flex-col-reverse mlg:grid-cols-[auto_350px] gap-[40px] mlg:gap-[80px] xl:gap-[120px] max-md:mb-[30px] max-lg:mb-[40px] mb-[50px] "
          id="dr-k-jeevan">
          {/* Left Column - Image & Name */}

          {/* Right Column - Message */}
          <div className="flex flex-col justify-between ">
            <div>
              <p className="text-[#000] text-[18px] leading-[26px]  mlg:text-[20px] mlg:leading-[28px] xl:text-[22px] xl:leading-[30px]  w-full mb-[30px]  mlb:mb-[50px]">
                Dr Jeevan K Jose is an Ayurvedic practitioner with expertise in
                Panchakarma treatment and natural healing.
              </p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[15px]">
                As an alumnus of Mahatma Gandhi University, Kerala and Rajiv
                Gandhi University, Karnataka, Dr Jeevan has trained extensively
                with the topmost Ayurveda doctors and become an M.D in Ayurveda
                (Panchakarma) to treat patients with compassion. His experience
                lies in treating patients’ illnesses with Panchakarma. Dr.
                Jeevan K. Jose, MD (Ay), is the Senior Medical Officer at
                Samwarthika Ayurveda Hospital. A highly experienced Ayurvedic
                clinician, he has successfully treated thousands of patients
                using Panchakarma therapies, specializing in neurological,
                spinal, autism-related orthopedic and lifestyle diseases. With
                a strong background in Ayurveda education and research, Dr.
                Jeevan previously served as Head of Academic Activities at
                Saranya Campus, AVP Coimbatore Ltd. and Director at Aashirwad
                Ayurveda Pharmacy Ltd. He has trained Indian and international
                students, led specialized Ayurveda courses and contributed to
                numerous international seminars and research presentations in
                Argentina, Brazil, Switzerland and the USA. His clinical
                expertise, combined with academic excellence, makes him a key
                figure in Ayurveda practice, education and global healthcare
                collaborations.
              </p>
            </div>
            <Link className="book-app-doc" href="/contact-us/">
              <div className="text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[var(--primary)] transition duration-300  w-fit">
                Book Appointment
              </div>
            </Link>
          </div>
          <div className="text-center mlg:text-left">
            <div className="mb-[20px]  overflow-hidden max-w-[350px] max-h-[400px] rounded-[20px] mx-auto">
              <Image
                src={`${ASSET_PREFIX}/assets/images/dr-jeevan-k-jose.webp`}
                alt="Dr. K. N. Subramanian Namboothiri"
                width={350}
                height={400}
                className="rounded-[20px] mx-auto mlg:mx-0 group-hover:scale-[1.1] transition duration-300"
              />
            </div>
            <p className="text-[20px] leading-[28px] font-semibold text-[#341802]">
              Dr Jeevan K Jose
            </p>
            <p className="text-[18px] leading-[26px] text-[#e36300] mt-[4px]">
              BAMS, MD(Ay),PGDCFT, MBA(Hrm)- Senior Medical Officer
            </p>
          </div>
        </div>

        {/* jomi doctors starts */}
        <div
          id="dr-jomy"
          className="grid grid-cols-1 group transition-all duration-300 max-mlg:p-[30px] max-lg:p-[35px]  p-[40px] rounded-[45px] mlg:grid-cols-[350px_auto] bg-[#f5f5f5] gap-[40px] mlg:gap-[80px] xl:gap-[120px] max-md:mb-[30px] max-lg:mb-[40px] mb-[50px]">
          {/* Left Column - Image & Name */}
          <div className="text-center mlg:text-left">
            <div className="mb-[20px]  overflow-hidden max-w-[350px] max-h-[400px] rounded-[20px] mx-auto">
              <Image
                src={`${ASSET_PREFIX}/assets/images/dr-jomy-joseph.webp`}
                alt="Dr. Jomy Joseph"
                width={467}
                height={461}
                className="rounded-[20px] mx-auto mlg:mx-0 group-hover:scale-[1.1] transition duration-300"
              />
            </div>
            <p className="text-[20px] leading-[28px] font-semibold text-[#341802]">
              Dr Jomy Joseph
            </p>
            <p className="text-[18px] leading-[26px] text-[#e36300] mt-[4px]">
              BAMS,MD(Ay)-Senior Consultant
            </p>
          </div>

          {/* Right Column - Message */}
          <div className="flex flex-col justify-between ">
            <div>
              <p className="text-[#000] text-[18px] leading-[26px]  mlg:text-[20px] mlg:leading-[28px] xl:text-[22px] xl:leading-[30px]  w-full mb-[30px]  mlb:mb-[50px]">
                Dr Jomy Joseph has more than 30 years of clinical experience in general practice.
              </p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal">
                He has completed BAMS from govt. Ayurveda college, Thirppunithura and MD (Ay) from govt Ayurveda college Thrivananthapuram. He had been in Govt service since 1996 and worked at various hospitals in Ernakulam and Palakkad districts. He was the senior medical officer and chief medical officer at Govt Ayurveda hospital, Palakkuzha for 11 years and retired from Govt service as the District Medical Officer(ISM) Kannur.
              </p>
            </div>
            <Link className="book-app-doc" href="/contact-us/">
              <div className="text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[var(--primary)] transition duration-300  w-fit">
                Book Appointment
              </div>
            </Link>
          </div>
        </div>
        {/* jomi doctors ends */}

        {/* rajeev doctor starts */}
        <div
          className="grid grid-cols-1 group transition-all duration-300 max-mlg:p-[30px] max-lg:p-[35px]  p-[40px] rounded-[45px] bg-[#E8F5D9]/60 max-mlg:flex flex-col-reverse mlg:grid-cols-[auto_350px] gap-[40px] mlg:gap-[80px] xl:gap-[120px] max-md:mb-[30px] max-lg:mb-[40px] mb-[50px] "
          id="dr-k-rajeeve">
          {/* Left Column - Image & Name */}

          {/* Right Column - Message */}
          <div className="flex flex-col justify-between ">
            <div>
              <p className="text-[#000] text-[18px] leading-[26px]  mlg:text-[20px] mlg:leading-[28px] xl:text-[22px] xl:leading-[30px]  w-full mb-[30px]  mlb:mb-[50px]">
                Dr. B. Rajeeve is a highly accomplished and versatile medical professional with over three decades of experience in Ayurveda and holistic healthcare.
              </p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[15px]">
                Holding advanced qualifications in Ayurveda (MD), Modern Medicine (MD), Hospital Administration (MBA) and Law (LLB), he brings a unique interdisciplinary perspective to patient care and healthcare management.
              </p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[15px]">
                He earned his BAMS from Government Ayurveda College, Thripunithura under the University of Kerala, followed by an MD in Ayurveda (Dravya Guna) from RGUHS, Bangalore. His extensive clinical journey includes more than 35 years of dedicated Ayurveda practice, with leadership roles as Chief Physician at reputed Ayurveda institutions in Kerala.
              </p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[15px]">
                Dr. Rajeeve has also contributed significantly to academics and healthcare quality systems. He has served as a faculty member, NABH (AYUSH) Principal Assessor and Advisory Member of the Quality Assurance Wing under the National AYUSH Mission, Government of Kerala. His association with Amrita Institute of Medical Sciences as an Honorary Physician further reflects his commitment to integrative medicine.
              </p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[15px]">
                With deep expertise in holistic healing, patient-centered care and healthcare standards, Dr. Rajeeve leads as the Medical Superintendent of Samwarthika Rivera Ayurveda Retreat, ensuring excellence in authentic Ayurvedic treatments and wellness services.

              </p>
            </div>
            <Link className="book-app-doc" href="/contact-us/">
              <div className="text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[var(--primary)] transition duration-300  w-fit">
                Book Appointment
              </div>
            </Link>
          </div>
          <div className="text-center mlg:text-left">
            <div className="mb-[20px]  overflow-hidden max-w-[350px] max-h-[400px] rounded-[20px] mx-auto">
              <Image
                src={`${ASSET_PREFIX}/assets/images/dr-rajeeve.webp`}
                alt="Dr. B. Rajeeve"
                width={350}
                height={400}
                className="rounded-[20px] mx-auto mlg:mx-0 group-hover:scale-[1.1] transition duration-300"
              />
            </div>
            <p className="text-[20px] leading-[28px] font-semibold text-[#341802]">
              Dr. B. Rajeeve
            </p>
            <p className="text-[18px] leading-[26px] text-[#e36300] mt-[4px]">
              BAMS, MD(Ay)MD(Modern Medicine)  Senior Consultant
            </p>
          </div>
        </div>
        {/* rajeev doctor ends */}
        <div
          className="grid grid-cols-1 group transition-all duration-300 max-mlg:p-[30px] max-lg:p-[35px]  p-[40px] rounded-[45px] mlg:grid-cols-[350px_auto] bg-[#f5f5f5] gap-[40px] mlg:gap-[80px] xl:gap-[120px] max-md:mb-[30px] max-lg:mb-[40px] mb-[50px]"
          id="dr-k-valsaladevi">
          {/* Left Column - Image & Name */}
          <div className="text-center mlg:text-left">
            <div className="mb-[20px]  overflow-hidden max-w-[350px] max-h-[400px] rounded-[20px] mx-auto">
              <Image
                src={`${ASSET_PREFIX}/assets/images/dr-valsaladevi-k.webp`}
                alt="Dr. K. N. Subramanian Namboothiri"
                width={350}
                height={400}
                className="rounded-[20px] mx-auto mlg:mx-0 group-hover:scale-[1.1] transition duration-300"
              />
            </div>
            <p className="text-[20px] leading-[28px] font-semibold text-[#341802]">
              Dr. Valsaladevi K
            </p>
            <p className="text-[18px] leading-[26px] text-[#e36300] mt-[4px]">
              BAMS,FAGE,YIC,CNAD,MBA-Senior Consultant
            </p>
          </div>

          {/* Right Column - Message */}
          <div className="flex flex-col justify-between ">
            <div>
              <p className="text-[#000] text-[18px] leading-[26px]  mlg:text-[20px] mlg:leading-[28px] xl:text-[22px] xl:leading-[30px]  w-full mb-[30px]  mlb:mb-[50px]">
                Dr. Valsaladevi K is an alumnus of the prestigious Government
                Ayurveda Medical College, Mysuru.
              </p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal">
                She has varied experience as a clinician and hospital quality
                assurance professional gained by associating with different
                renowned organizations through the years since 1994. She is also
                trained in Emergency Medical Management, Marma Therapy, Ayurveda
                Diet and Clinical Yoga Therapy. Her clinical area of interest is
                child health which comprises of child nutrition, general health
                management, ‘swarnaprashana’ for child immune boosting,
                developmental disorders, ADHD and Autistic Spectrum Disorders
                and other child and teenage health concerns. Dr. Valsaladevi K
                has considerable and successful experience in the conservative
                Ayurveda management of Male and Female Fertility issues.
              </p>
            </div>
            <Link className="book-app-doc" href="/contact-us/">
              <div className="text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[var(--primary)] transition duration-300  w-fit">
                Book Appointment
              </div>
            </Link>
          </div>
        </div>

        {/* Athira start */}
        <div
          className="grid grid-cols-1 group transition-all duration-300 max-mlg:p-[30px] max-lg:p-[35px]  p-[40px] rounded-[45px] bg-[#E8F5D9]/60 max-mlg:flex flex-col-reverse mlg:grid-cols-[auto_350px] gap-[40px] mlg:gap-[80px] xl:gap-[120px] max-md:mb-[30px] max-lg:mb-[40px] mb-[50px]"
          id="dr-athira">


          <div className="flex flex-col justify-between ">
            <div>
              <p className="text-[#000] text-[18px] leading-[26px]  mlg:text-[20px] mlg:leading-[28px] xl:text-[22px] xl:leading-[30px]  w-full mb-[30px]  mlb:mb-[50px]">
                Dr. Athira H is a dedicated Ayurvedic Physician with over a
                decade of clinical experience in classical Ayurveda and
                Panchakarma therapy. A graduate (BAMS) of Rajiv Gandhi
                University of Health Sciences, she further advanced her
                expertise with an MSc in Yoga from Annamalai University.
              </p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[10px] ">
                Her academic foundation, combined with extensive hospital-based
                practice, enables her to deliver evidence-informed, holistic
                healthcare rooted in authentic Ayurvedic principles.
              </p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[10px]">
                Throughout her career, Dr. Athira has managed a wide range of
                OPD and IPD cases, with particular expertise in Panchakarma
                protocol administration, individualized treatment planning and
                comprehensive patient management. She has special clinical
                interest in women’s health and hormonal disorders, including
                PCOS, menstrual irregularities and menopausal concerns. By
                integrating therapeutic Yoga with Ayurvedic treatment
                strategies, she provides a structured approach to lifestyle
                correction, preventive care and long-term wellness. Dr. Athira
                is known for her compassionate patient care, clear
                communication and commitment to quality-driven healthcare
                delivery. Fluent in Malayalam, English and Hindi, she ensures
                accessible and patient-centered consultations aimed at restoring
                balance, enhancing vitality and promoting sustainable healing.
              </p>
            </div>
            <Link className="book-app-doc" href="/contact-us/">
              <div className="text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[var(--primary)] transition duration-300  w-fit">
                Book Appointment
              </div>
            </Link>
          </div>
          <div className="text-center mlg:text-left">
            <div className="mb-[20px]  overflow-hidden max-w-[350px] max-h-[400px] rounded-[20px] mx-auto">
              <Image
                src={`${ASSET_PREFIX}/assets/images/dr-athira.webp`}
                alt="Dr. Athira"
                width={350}
                height={400}
                className="rounded-[20px] mx-auto mlg:mx-0 group-hover:scale-[1.1] transition duration-300"
              />
            </div>
            <p className="text-[20px] leading-[28px] font-semibold text-[#341802]">
              Dr. Athira H
            </p>
            <p className="text-[18px] leading-[26px] text-[#e36300] mt-[4px]">
              BAMS, Msc. in Yoga (Medical Officer)
            </p>
          </div>
        </div>
        {/* Athira end */}
        {/* Dr. Safeela start */}
        <div
          className="grid grid-cols-1 group transition-all duration-300 max-mlg:p-[30px] max-lg:p-[35px]  p-[40px] rounded-[45px] mlg:grid-cols-[350px_auto] bg-[#f5f5f5] gap-[40px] mlg:gap-[80px] xl:gap-[120px] max-md:mb-[30px] max-lg:mb-[40px] mb-[50px]"
          id="dr-safeela">
          <div className="text-center mlg:text-left">
            <div className="mb-[20px]  overflow-hidden max-w-[350px] max-h-[400px] rounded-[20px] mx-auto">
              <Image
                src={`${ASSET_PREFIX}/assets/images/dr-safeela.webp`}
                alt="Dr. Safeela S"
                width={350}
                height={400}
                className="rounded-[20px] mx-auto mlg:mx-0 group-hover:scale-[1.1] transition duration-300"
              />
            </div>
            <p className="text-[20px] leading-[28px] font-semibold text-[#341802]">
              Dr. Safeela S
            </p>
            <p className="text-[18px] leading-[26px] text-[#e36300] mt-[4px]">
              BAMS, Dip. in Yoga Teachers Training. (Resident Medical Officer)
            </p>
          </div>
          <div className="flex flex-col justify-between ">
            <div>
              <p className="text-[#000] text-[18px] leading-[26px]  mlg:text-[20px] mlg:leading-[28px] xl:text-[22px] xl:leading-[30px]  w-full mb-[30px]  mlb:mb-[50px]">
                Dr. Safeela is a dedicated and compassionate Ayurveda physician
                with a BAMS degree from Sree Narayana Institute of Ayurvedic
                Studies and Research and a Diploma in Yoga Teachers Training
                from Dr. APJ Abdul Kalam University.
              </p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[10px] ">
                She has comprehensive clinical training across major Ayurvedic
                specialties including Kayachikitsa, Panchakarma, Salyatantra,
                Shalakya Tantra, Prasootitantra and Kaumarabhritya through
                internships at NABH-accredited and government Ayurveda
                hospitals.
              </p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal">
                Dr. Safeela has hands-on expertise in Panchakarma therapies
                (Vasti, Nasya, Vamana), parasurgical procedures such as
                Jaloukavacharana and Agnikarma and Shalakya procedures
                including Netra Tarpana and related eye treatments. She has also
                served as a Resident Medical Officer, gaining experience in
                managing chronic conditions, particularly diabetic neuropathy.
                With additional training in Yoga therapy and active
                participation in medical camps and national workshops, she is
                committed to delivering holistic, patient-centered Ayurvedic
                care.
              </p>
            </div>
            <Link className="book-app-doc" href="/contact-us/">
              <div className="text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[var(--primary)] transition duration-300  w-fit">
                Book Appointment
              </div>
            </Link>
          </div>
        </div>
        {/* Dr. Safeela end */}



        {/* Dr .Vrindha start */}
        <div
          className="grid grid-cols-1 group transition-all duration-300 max-mlg:p-[30px] max-lg:p-[35px]  p-[40px] rounded-[45px] bg-[#E8F5D9]/60 max-mlg:flex flex-col-reverse mlg:grid-cols-[auto_350px] gap-[40px] mlg:gap-[80px] xl:gap-[120px] max-md:mb-[30px] max-lg:mb-[40px] mb-[50px]"
          id="dr-vrindha">


          <div className="flex flex-col justify-between ">
            <div>
              <p className="text-[#000] text-[18px] leading-[26px]  mlg:text-[20px] mlg:leading-[28px] xl:text-[22px] xl:leading-[30px]  w-full mb-[30px]  mlb:mb-[50px]">
                She is a dedicated and compassionate Ayurvedic physician with strong academic grounding and hands-on clinical experience in reputed Ayurvedic institutions.
              </p>

              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[10px] ">
                Skilled in patient assessment, diagnosis and management, with particular expertise in Panchakarma therapies and holistic treatment approaches.
              </p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[10px] ">
                Completed internship at Vaidyaratnam Ayurveda institutions, gaining experience in inpatient care, clinical examinations, therapeutic procedures and medical record management. Adept at integrating traditional Ayurvedic practices with patient-centered care, including therapeutic yoga support.
              </p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal">
                Committed to promoting wellness through authentic Ayurveda, with strong communication skills, adaptability and a passion for continuous learning and community health service.

              </p>
            </div>
            <Link className="book-app-doc" href="/contact-us/">
              <div className="text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[var(--primary)] transition duration-300  w-fit">
                Book Appointment
              </div>
            </Link>
          </div>
          <div className="text-center mlg:text-left">
            <div className="mb-[20px]  overflow-hidden max-w-[350px] max-h-[400px] rounded-[20px] mx-auto">
              <Image
                src={`${ASSET_PREFIX}/assets/images/dr-vrindha.webp`}
                alt="Dr. Vrindha"
                width={350}
                height={400}
                className="rounded-[20px] mx-auto mlg:mx-0 group-hover:scale-[1.1] transition duration-300"
              />
            </div>
            <p className="text-[20px] leading-[28px] font-semibold text-[#341802]">
              Dr. Vrindha T
            </p>
            <p className="text-[18px] leading-[26px] text-[#e36300] mt-[4px]">
              BAMS(Resident Medical Officer)
            </p>
          </div>
        </div>

        {/* Dr .Vrindha end */}

        {/* Dr. Srihari T.S start */}
        <div
          className="grid grid-cols-1 group transition-all duration-300 max-mlg:p-[30px] max-lg:p-[35px]  p-[40px] rounded-[45px] mlg:grid-cols-[350px_auto] bg-[#f5f5f5] gap-[40px] mlg:gap-[80px] xl:gap-[120px] max-md:mb-[30px] max-lg:mb-[40px] mb-[50px]"
          id="dr-srihari-t-s">
          <div className="text-center mlg:text-left">
            <div className="mb-[20px]  overflow-hidden max-w-[350px] max-h-[400px] rounded-[20px] mx-auto">
              <Image
                src={`${ASSET_PREFIX}/assets/images/dr-srihari-ts.webp`}
                alt="Dr. Srihari T.S"
                width={350}
                height={400}
                className="rounded-[20px] mx-auto mlg:mx-0 group-hover:scale-[1.1] transition duration-300"
              />
            </div>
            <p className="text-[20px] leading-[28px] font-semibold text-[#341802]">
              Dr. Srihari T.S
            </p>
            <p className="text-[18px] leading-[26px] text-[#e36300] mt-[4px]">BAMS Center Manager & Medical Officer</p>
          </div>
          <div className="flex flex-col justify-between ">
            <div>
              <p className="text-[#000] text-[18px] leading-[26px]  mlg:text-[20px] mlg:leading-[28px] xl:text-[22px] xl:leading-[30px]  w-full mb-[30px]  mlb:mb-[50px]">Dr. Srihari T.S. is a dedicated Ayurvedic physician with a Bachelor of Ayurvedic Medicine and Surgery (BAMS) from Nangelil Ayurveda Medical College, Kothamangalam. He serves as the Center Manager and Resident Medical Officer at Samwarthika Rivera Ayurveda Retreat, where he combines clinical expertise with compassionate patient care to ensure every guest experiences authentic Ayurvedic healing.</p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[10px] ">His training includes extensive clinical exposure through internships at renowned institutions, including District Ayurveda Hospitals in Thodupuzha, Kacheripady and Cheruvattoor, NARIP Cheruthuruthy, Government Ayurveda Hospital Nedumbassery and District Ayurveda Hospital Paremavu, Idukki.</p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[10px]">Dr. Srihari is skilled in a wide range of Ayurvedic therapeutic procedures, including Panchakarma therapies, Agnikarma, Siravedham, Jaloukavacharana (leech therapy), wet and dry cupping and orthopedic support techniques such as POP application and bandaging. He is committed to delivering individualized, evidence-informed Ayurvedic care that promotes healing, restoration and long-term wellness.</p>
              <p className="text-[16px] leading-[26px] text-[#4B4B4B] font-normal mb-[10px]">At Samwarthika Rivera, he oversees the smooth functioning of clinical operations while ensuring that every guest receives personalized treatment with professionalism, empathy and attention to detail. His calm demeanor organizational abilities and patient-centered approach make him an integral part of the retreat's mission of holistic healing. "Healing with authenticity, compassion and the timeless wisdom of Ayurveda."</p>
            </div>
            <Link className="book-app-doc" href="/contact-us/">
              <div className="text-[16px] leading-[18px] tracking-[2px] uppercase  font-light  px-5 py-3 bg-[var(--primary)]  border-1 border-[var(--primary)] text-[#fff]   hover:bg-[transparent] hover:text-[var(--primary)] transition duration-300  w-fit">
                Book Appointment
              </div>
            </Link>
          </div>
        </div>
        {/* Dr. Srihari T.S. end */}

      </div>
    </section>
  );
}

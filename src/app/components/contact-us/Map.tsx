export default function Map() {
  return (
    <>
      <section className="py-[140px]  max-2xl:py-[100px]   max-xl:py-[80px]  max-md:py-[50px]">
        {/* Section 2 */}
        <div className="w-[90%] m-[auto] max-w-[130rem]">
          <h3
            className="text-[#314a10] font-[source,serief4] my-[20px] font-normal text-start w-[fit-content]  text-[30px] leading-[36px] sm:text-[34px] sm:leading-[40px]  md:text-[38px] md:leading-[45px] xl:text-[45px] xl:leading-[52px] 2xl:text-[60px] 2xl:leading-[65px] mx-auto">
            Locate us on
          </h3>
          <div className="relative w-[80%] max-lg:w-[90%] max-md:w-full h-auto  max-h-[400px] m-auto aspect-video mt-[30px] md:mt-[40px]">
            <iframe
              className="absolute inset-0 max-h-[500px] h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4702.164211830819!2d76.5857221!3d9.970835600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07dd9a37da2eb7%3A0xc95b645e354d971!2sSamwarthika%20Ayurveda%20Hospital!5e1!3m2!1sen!2sin!4v1755843095183!5m2!1sen!2sin"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Samwarthika Ayurveda Hospital - Google Maps"
            />
          </div>
        </div>
      </section>
    </>
  );
}

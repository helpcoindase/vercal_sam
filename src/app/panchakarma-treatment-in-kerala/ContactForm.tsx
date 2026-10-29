"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ASSET_PREFIX } from "../../../config";
import { submitLeadForm } from "../../lib/formAction";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

// ------------ Types ------------
interface FormDataState {
  website: string;
  useragent: string;
  starttime: string;
  enquiry_date: string;
  enquiry_month: string;
  enquiry_time: string;
  ipaddress: string;
}

interface FormFieldsState {
  checkvalue: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  treatment: string;
  message: string;
}

interface ApiResponse {
  status: string;
  message?: string;
}

// ------------ Component ------------
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    website: "",
    useragent: "",
    starttime: "",
    enquiry_date: "",
    enquiry_month: "",
    enquiry_time: "",
    ipaddress: "",
  });

  const [formFields, setFormFields] = useState<FormFieldsState>({
    checkvalue: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    treatment: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const siteKey = "6Lec2UkqAAAAACDTI9r-Zxooqn8qGAh7SemO9RA4";
  const ENABLE_RECAPTCHA = true;

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();

        const now = new Date();
        const optionsDate: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Kolkata",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        };
        const optionsTime: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        };

        const enquiry_date = new Intl.DateTimeFormat("en-GB", optionsDate)
          .format(now)
          .split("/")
          .join("-");
        const enquiry_time = new Intl.DateTimeFormat(
          "en-IN",
          optionsTime,
        ).format(now);

        const pad = (n: number) => String(n).padStart(2, "0");
        const starttime = `${now.getFullYear()}-${pad(
          now.getMonth() + 1,
        )}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(
          now.getMinutes(),
        )}:${pad(now.getSeconds())}`;

        const dateParts = enquiry_date.split("-");
        let enquiry_month = "";
        if (dateParts.length === 3) {
          enquiry_month = `${dateParts[1]}-${dateParts[2]}`;
        }

        setFormData({
          website: "www.samwarthika.com",
          useragent: navigator.userAgent,
          starttime,
          enquiry_date,
          enquiry_time,
          enquiry_month,
          ipaddress: data.ip,
        });
      } catch (err) {
        console.error("Failed to fetch IP:", err);
      }
    };

    fetchIp();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (ENABLE_RECAPTCHA && !captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }
    setIsLoading(true);
    const fullData = {
      ...formFields,
      ...formData,
      "g-recaptcha-response": captchaValue, // if backend uses this
    };

    try {
      const result = await submitLeadForm(fullData, { redirectUrl: "/thanks/" });
      if (!result.success && result.message) {
        alert(result.message);
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pt-[140px] max-2xl:pt-[100px] max-xl:pt-[80px] max-md:pt-[50px]">
      <div className="w-[85%] m-auto max-2xl:w-[90%]">
        <div className="mt-[0px] w-[90%] m-auto grid grid-cols-[61%_38%] justify-between max-xxl:w-[100%] max-lg:grid-cols-1 max-lg:gap-[10px] max-md:gap-[40px] gap-y-[60px]">
          {/* Left big form card */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#e9f9d4] p-[80px_60px] max-xxl:p-[60px_40px] max-xl:p-[50px_30px] max-lg:p-[40px_20px] rounded-[0px_150px_0px_0px] max-2xl:rounded-[0px_100px_0px_0px]">
            <h3 className="text-[#314a10] font-[source,serief4] my-[20px] font-normal text-start w-[fit-content]  text-[30px] leading-[36px] sm:text-[34px] sm:leading-[40px]  md:text-[38px] md:leading-[45px] xl:text-[45px] xl:leading-[52px] 2xl:text-[60px] 2xl:leading-[65px]">
              Let&apos;s consult with a Doctor
            </h3>
            <p className="text-[#80847b] xxl:text-[20px] xxl:leading-[26px] text-[18px] leading-[24px] max-lg:text-[16px] max-lg:leading-[22px] font-medium">
              Please fill out the form below to submit your requirements
            </p>

            <div className="my-[80px] max-xxl:my-[60px] max-xl:my-[40px] max-lg:my-[30px]">
              <div className="grid grid-cols-2 gap-[30px] max-xl:gap-[20px] max-sm:grid-cols-1">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formFields.name}
                      onChange={handleChange}
                      className="w-full border-b border-gray-400 bg-transparent outline-none px-3 py-3 focus:border-[#304A10] text-[#80847b] placeholder-[#80847b]"
                      placeholder="Name*"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formFields.email}
                      onChange={handleChange}
                      className="w-full border-b border-gray-400 bg-transparent outline-none px-3 py-3 focus:border-[#304A10] text-[#80847b] placeholder-[#80847b]"
                      placeholder="Email*"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="phone"
                      value={formFields.phone}
                      onChange={handleChange}
                      className="w-full border-b border-gray-400 bg-transparent outline-none px-3 py-3 focus:border-[#304A10] text-[#80847b] placeholder-[#80847b]"
                      placeholder="Phone No*"
                      required
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                  <div>
                    <select
                      className="w-full border-b border-gray-400 bg-transparent outline-none px-3 py-3 focus:border-[#304A10] text-[#80847b]"
                      name="country"
                      aria-label="Select Country"
                      aria-required="true"
                      aria-invalid="false"
                      value={formFields.country}
                      onChange={handleChange}
                      required>
                      <option value="">Select Country</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="South Georgia and the South Sandwich Islands">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="Antigua and Barbuda">
                        Antigua and Barbuda
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">
                        British Indian Ocean Territory
                      </option>
                      <option value="Brunei Darussalam">
                        Brunei Darussalam
                      </option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="United States Minor Outlying Islands">
                        United States Minor Outlying Islands
                      </option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Congo, the Democratic Republic of the">
                        Congo, the Democratic Republic of the
                      </option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'Ivoire">Cote D&apos;Ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">
                        Falkland Islands (Malvinas)
                      </option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-Bissau">Guinea-Bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Italy">Italy</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic Republic of">
                        Iran, Islamic Republic of
                      </option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Israel">Israel</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">
                        Korea, Democratic People&apos;s Republic of
                      </option>
                      <option value="Korea, Republic of">
                        Korea, Republic of
                      </option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">
                        Lao People&apos;s Democratic Republic
                      </option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libyan Arab Jamahiriya">
                        Libyan Arab Jamahiriya
                      </option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia, the Former Yugoslav Republic of">
                        Macedonia, the Former Yugoslav Republic of
                      </option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, Federated States of">
                        Micronesia, Federated States of
                      </option>
                      <option value="Moldova, Republic of">
                        Moldova, Republic of
                      </option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">
                        Netherlands Antilles
                      </option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Northern Mariana Islands">
                        Northern Mariana Islands
                      </option>
                      <option value="Svalbard and Jan Mayen">
                        Svalbard and Jan Mayen
                      </option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestinian Territory, Occupied">
                        Palestinian Territory, Occupied
                      </option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Pierre and Miquelon">
                        Saint Pierre and Miquelon
                      </option>
                      <option value="Saint Vincent and the Grenadines">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">
                        Sao Tome and Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia and Montenegro">
                        Serbia and Montenegro
                      </option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Taiwan, Province of China">
                        Taiwan, Province of China
                      </option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic of">
                        Tanzania, United Republic of
                      </option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-Leste">Timor-Leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">
                        Turks and Caicos Islands
                      </option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands, British">
                        Virgin Islands, British
                      </option>
                      <option value="Virgin Islands, U.s.">
                        Virgin Islands, U.s.
                      </option>
                      <option value="Wallis and Futuna">
                        Wallis and Futuna
                      </option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </div>

                  <div>
                    <input
                      type="text"
                      name="city"
                      value={formFields.city}
                      onChange={handleChange}
                      className="w-full border-b border-gray-400 bg-transparent outline-none px-3 py-3 focus:border-[#304A10] text-[#80847b] placeholder-[#80847b]"
                      placeholder="City*"
                      required
                    />
                  </div>

                  <div>
                    <div className="relative">
                      <select
                        className="w-full appearance-none border-b border-gray-400 px-3 py-3 focus:outline-none text-[#80847b] text-wrap focus:border-[#304A10]"
                        name="treatment"
                        aria-label="Slect Treatment"
                        value={formFields.treatment}
                        onChange={handleChange}
                        required>
                        <option value="" disabled>
                          Treatments*
                        </option>
                        <option value="Ayurveda Treatment">
                          Ayurveda Treatment
                        </option>
                        <option value="Panchakarma Treatment">
                          Panchakarma Treatment
                        </option>
                        <option value="Sinusitis Treatment">
                          Sinusitis Treatment
                        </option>
                        <option value="Autism Treatment">
                          Autism Treatment
                        </option>
                        <option value="Weight Loss Treatment">
                          Weight Loss Treatment
                        </option>
                        <option value="Monsoon Treatment">
                          Monsoon Treatment
                        </option>
                        <option value="Parkinsons Ayurvedic Treatment">
                          Parkinsons Ayurvedic Treatment
                        </option>
                        <option value="Sciatica Treatment">
                          Sciatica Treatment
                        </option>
                        <option value="Stroke Treatment">
                          Stroke Treatment
                        </option>
                        <option value="Varicose Veins Treatment">
                          Varicose Veins Treatment
                        </option>
                        <option value="Knee Pain Treatment">
                          Knee Pain Treatment
                        </option>
                        <option value="Post Natal Treatment">
                          Post Natal Treatment
                        </option>
                        <option value="Cervical Spondylosis Treatment">
                          Cervical Spondylosis Treatment
                        </option>
                        <option value="Psoriasis Ayurvedic Treatment">
                          Psoriasis Ayurvedic Treatment
                        </option>
                        <option value="Lumbar Spondylosis Treatment">
                          Lumbar Spondylosis Treatment
                        </option>
                        <option value="Gastroesophageal Reflux Disease Treatment">
                          Gastroesophageal Reflux Disease Treatment
                        </option>
                        <option value="Arthritis Treatment">
                          Arthritis Treatment
                        </option>
                        <option value="Dysmenorrhea Treatment">
                          Dysmenorrhea Treatment
                        </option>
                        <option value="Ulcerative Colitis Treatment">
                          Ulcerative Colitis Treatment
                        </option>
                        <option value="Disc Bulge Protrusion">
                          Disc Bulge Protrusion
                        </option>
                        <option value="Lower Back Pain">Lower Back Pain</option>
                        <option value="Stress Management">
                          Stress Management
                        </option>
                        <option value="Hair Loss Treatment">
                          Hair Loss Treatment
                        </option>
                      </select>

                      {/* Dropdown arrow */}
                      <svg
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative mt-6">
                  <textarea
                    className="w-full border-b border-gray-400 bg-transparent outline-none px-3 py-3 focus:border-[#304A10] text-[#80847b] placeholder-[#80847b]"
                    name="message"
                    rows={2}
                    cols={2}
                    placeholder="Message*"
                    value={formFields.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-[20px] flex-wrap">
              <p className="text-[16px] leading-[23px] text-[#80847b]">
                By clicking the &quot;Submit&quot; button, I agree and accept{" "}
                <br /> the{" "}
                <Link href={"/privacy-policy"} className="underline">
                  privacy policy
                </Link>{" "}
                of Samwarthika.
              </p>

              {ENABLE_RECAPTCHA && (
                <div className="g-captcha scale-80 sm:scale-80 origin-left">
                  <ReCAPTCHA
                    sitekey={siteKey}
                    onChange={handleCaptchaChange}
                    onExpired={() => setCaptchaValue(null)}
                  />
                </div>
              )}

              <button
                type="submit"
                className="text-white cursor-pointer border-[var(--primary)] mt-[30px] max-xl:mt-[20px] uppercase border-1 py-[10px] px-[30px] max-xl:py-[8px] max-xl:px-[25px] max-md:text-[16px] max-md:leading-[18px] flex w-[fit-content] hover:bg-[#e36300] transition bg-[var(--primary)] duration-300 hover:text-[#fff] h-fit"
                disabled={isLoading}>
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          {/* Right-side big image + contact info (desktop) */}
          <div className="grid max-lg:hidden">
            <div className="rounded-[130px_130px_0px_0px] h-[100%] w-[auto] relative after:absolute after:-top-[20px] after:content-[''] after:w-[100%] after:left-[0%] after:border-1 after:rounded-[130px_130px_0px_0px] after:h-[100%] after:border-[#ea8c42] after:z-[1]">
              <div className="overflow-hidden w-[100%] h-[100%]">
                <Image
                  src={`${ASSET_PREFIX}/assets/images/ayurvedic-physiotherapy.webp`}
                  height={700}
                  width={300}
                  alt="Ayurvedic Physiotherapy"
                  className="w-[100%] h-[105%] object-cover object-center rounded-[130px_130px_0px_0px] relative z-[2]"
                />
              </div>
              <div className="z-[25] absolute rounded-[50%] overflow-hidden max-lg:p-[6px] w-[200px] h-[200px] max-xl:w-[150px] max-xl:h-[150px] right-[-10%] max-2xl:right-[-8%] bottom-[-2%] bg-[#fff]">
                <Image
                  width={50}
                  height={50}
                  className="w-[100%] h-[auto]"
                  alt="abt-img"
                  src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                />
              </div>
            </div>
          </div>

          <div className="p-[00px_80px] max-lg:hidden">
            <div>
              <h3 className="text-[#304A10] xxl:text-[35px] xxl:leading-[40px] text-[30px] leading-[36px] max-2xl:text-[28px] max-2xl:leading-[32px] max-xl:text-[24px] max-xl:leading-[28px] max-lg:text-[22px] max-lg:leading-[26px] max-md:text-[20px] max-md:leading-[24px]">
                Samwarthika Ayurveda Hospital{" "}
              </h3>
              <h4 className="text-[#505050] xxl:text-[27px] xxl:leading-[31px] text-[24px] leading-[30px] max-2xl:text-[24px] max-2xl:leading-[30px] max-xl:text-[20px] max-xl:leading-[26px] max-lg:text-[18px] max-lg:leadding-[24px] max-md:text-[16px] maxmd:leading-[22px] font-[mulish]! mb-[25px] max-lg:mb-[20px] max-md:mb-[15px]">
                (A Unit of PGS Ayurvedic Resorts)
              </h4>
            </div>
            <p className="text-[#341802] text-[22px] leading-[30px] max-xl:text-[18px] max-xl:leading-[28px] max-lg:text-[16px] max-lg:leading:-[24px] mb-[8px]">
              Pallikkavu Road Jn., <br /> Arakuzha Road,
              <br /> Muvattupuzha Kerala,
              <br /> India - 686 661
            </p>
          </div>

          <div className="bg-[#ffdcc0] w-full h-[100%] border-1 border-[#ffb175] rounded-[0px_0px_30px_30px] p-[30px] max-lg:hidden">
            <p className="flex gap-[50px] text-[18px] leading-[23px] max-lg:text-[16px] max-lg:leading-[18px] font-semibold max-[400px]:text-[16px] max-[400px]:gap-[40px]">
              <span className="text-[#e36707]">email:</span>{" "}
              <Link
                href="mailto:info@samwarthika.com"
                data-cta="email-cta"
                className="text-[#000000] hover:text-[#e36300] transition duration-300 ease-in-out">
                info@samwarthika.com
              </Link>{" "}
            </p>
            <p className="grid grid-cols-[20px_auto] gap-[50px]! text-[18px] leading-[23px] font-semibold my-[10px] max-[400px]:text-[16px] max-[400px]:gap-[40px]">
              <span className="text-[#e36707]">mobile:</span>
              <Link
                data-cta="call-now"
                href="tel:+919446365601"
                className="text-[#000000] hover:text-[#e36300] transition duration-300 ease-in-out">
                +91 9446 36 56 01
              </Link>
            </p>
            <p className="grid grid-cols-[20px_auto] gap-[50px] text-[18px] leading-[23px] font-semibold my-[10px] max-[400px]:text-[16px] max-[400px]:gap-[40px]">
              <span className="text-[#e36707]">mobile:</span>{" "}
              <Link
                href="tel:+917356622201"
                target="_blank"
                className="text-[#000000] hover:text-[#e36300] transition duration-300 ease-in-out">
                +91 7356 62 22 01
              </Link>{" "}
            </p>
            <div className="w-[100%] my-[20px] h-[1px] bg-[#c3a893]" />
            <div className="flex justify-between gap-[10px] items-center">
              <div className="grid grid-cols-[auto_auto_auto] max-xsm:grid-cols-1 w-full justify-between gap-[60px] items-center max-2xl:gap-[40px] max-xl:gap-[30px] max-xsm:gap-[20px]">
                <p className="text-[20px] leading-[25px] max-2xl:text-[18px] max-2xl:leading-[22px] max-xl:text-[16px] max-xl:leading-[20px] text-[#000]">
                  <span className="font-semibold">Monday </span>to{" "}
                  <span className="font-semibold">
                    <br className="max-xsm:hidden" /> Sunday
                  </span>
                </p>
                <p className="block max-xsm:hidden text-[40px] leading-[30px] max-2xl:text-[36px] max-xl:leading-[38px] text-[#e36300]">
                  24x7
                </p>
                <p className="block max-xsm:hidden text-[40px] leading-[40px] max-2xl:text-[36px] max-xl:leading-[38px] text-[#000] text-center grid max-lg:w-[90px] mr-0">
                  <span className="text-[16px] leading-[18px]">
                    We are open
                  </span>
                  365
                  <span className="text-[16px] leading-[18px]">Days</span>
                </p>
                <div className="hidden max-xsm:flex justify-between w-full items-center">
                  <p className="text-[40px] leading-[30px] max-2xl:text-[36px] max-xl:leading-[38px] text-[#e36300]">
                    24x7
                  </p>
                  <p className="text-[40px] leading-[40px] max-2xl:text-[36px] max-xl:leading-[38px] text-[#000] text-center grid max-lg:w-[90px] mr-0">
                    <span className="text-[16px] leading-[18px]">
                      We are open
                    </span>
                    365
                    <span className="text-[16px] leading-[18px]">Days</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile layout RHS */}
          <div className="hidden max-lg:grid grid-cols-2 max-md:grid-cols-1 gap-[20px] max-md:w-[90%] m-auto">
            <div className="grid">
              <div className="rounded-[130px_130px_0px_0px] max-2xl:rounded-[100px_100px_0px_0px] max-lg:rounded-[100px_0px_0px_100px] h-[100%] w-[auto] relative after:absolute after:-top-[20px] after:content-[''] after:w-[100%] after:left-[0%] after:max-lg:-left-[10px] after:max-lg:top-[0px] after:max-md:-left-[0px] after:max-md:-top-[20px] after:max-lg:h-[100%] after:border-1 after:rounded-[130px_130px_0px_0px] after:max-2xl:rounded-[100px_100px_0px_0px] after:max-lg:rounded-[100px_0px_0px_100px] after:max-md:rounded-[100px_100px_0px_0px] after:h-[100%] after:border-[#ea8c42] after:z-[1] max-lg:h-[100%]">
                <div className="overflow-hidden w-[100%] h-[100%]">
                  <Image
                    src={`${ASSET_PREFIX}/assets/images/ayurvedic-physiotherapy.webp`}
                    height={700}
                    width={300}
                    alt="Ayurvedic Physiotherapy"
                    className="w-[100%] h-[105%] max-lg:h-[105%] object-cover object-center rounded-[130px_130px_0px_0px] max-2xl:rounded-[100px_100px_0px_0px] max-lg:rounded-[100px_0px_0px_100px] max-md:rounded-[100px_100px_0px_0px] relative z-[2]"
                  />
                </div>
                <div className="z-[25] absolute rounded-[50%] overflow-hidden max-lg:p-[6px] w-[200px] h-[200px] max-xl:w-[150px] max-xl:h-[150px] max-md:w-[100px] max-md:h-[100px] right-[-10%] max-2xl:right-[-8%] bottom-[-3%] bg-[#fff] max-lg:right-[auto] max-lg:left-[-8%] max-md:right-[-10%] max-md:left-[auto]">
                  <Image
                    width={50}
                    height={50}
                    className="w-[100%] h-[auto]"
                    alt="Samwarthika Logo"
                    src={`${ASSET_PREFIX}/assets/images/samwarthika-logo.webp`}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md-gap-[10px] gap-[20px]">
              <div className="p-[00px_20px] max-sm:p-0">
                <div>
                  <h3 className="text-[#304A10] xxl:text-[35px] xxl:leading-[40px] text-[30px] leading-[36px] max-2xl:text-[28px] max-2xl:leading-[32px] max-xl:text-[24px] max-xl:leading-[28px] max-lg:text-[22px] max-lg:leading-[26px] max-md:text-[20px] max-md:leading-[24px]">
                    Samwarthika Ayurveda Hospital{" "}
                  </h3>
                  <h4 className="text-[#505050] xxl:text-[27px] xxl:leading-[31px] text-[24px] leading-[30px] max-2xl:text-[24px] max-2xl:leading-[30px] max-xl:text-[20px] max-xl:leading-[26px] max-lg:text-[18px] max-lg:leadding-[24px] max-md:text-[16px] maxmd:leading-[22px] font-[mulish]! mb-[25px] max-lg:mb-[20px] max-md:mb-[15px]">
                    (A Unit of PGS Ayurvedic Resorts)
                  </h4>
                </div>
                <p className="text-[#341802] text-[22px] leading-[30px] max-xl:text-[18px] max-xl:leading-[28px] max-lg:text-[16px] max-lg:leading:-[24px] mb-[8px]">
                  Pallikkavu Road Jn., <br /> Arakuzha Road,
                  <br /> Muvattupuzha Kerala,
                  <br /> India - 686 661
                </p>
              </div>

              <div className="bg-[#ffdcc0] w-full h-[auto] border-1 border-[#ffb175] rounded-[0px_0px_30px_30px] p-[30px] max-xl:p-[25px] max-md:p-[25px_20px] max-lg:rounded-[0px_0px_30px_0px] max-md:rounded-[0px_0px_30px_30px]">
                <p className="flex gap-[40px] max-md:gap-[20px] text-[18px] leading-[23px] max-lg:text-[16px] max-lg:leading-[18px] font-semibold max-[400px]:!text-[16px] max-[400px]:!gap-[40px]">
                  <span className="text-[#e36707]">email:</span>{" "}
                  <Link
                    href="mailto:info@samwarthika.com"
                    data-cta="email-cta"
                    className="text-[#000000]">
                    info@samwarthika.com
                  </Link>{" "}
                </p>
                <p className="flex gap-[40px] max-md:gap-[15px] text-[18px] leading-[23px] max-lg:text-[16px] max-lg:leading-[18px] font-semibold my-[10px] max-[400px]:!text-[16px] max-[400px]:!gap-[40px]">
                  <span className="text-[#e36707]">mobile:</span>
                  <Link
                    data-cta="call-now"
                    href="tel:+919446365601"
                    className="text-[#000000] hover:text-[#e36300] transition duration-300 ease-in-out">
                    +91 9446 36 56 01
                  </Link>
                </p>
                <p className="flex gap-[40px] max-md:gap-[15px] text-[18px] leading-[23px] max-lg:text-[16px] max-lg:leading-[18px] font-semibold my-[10px] max-[400px]:!text-[16px] max-[400px]:!gap-[40px]">
                  <span className="text-[#e36707]">mobile:</span>{" "}
                  <Link
                    href="tel:+917356622201"
                    className="text-[#000000] hover:text-[#e36300] transition duration-300 ease-in-out">
                    +91 7356 62 22 01
                  </Link>{" "}
                </p>
                <div className="w-[100%] my-[20px] h-[1px] bg-[#c3a893]" />
                <div className="flex justify-between gap-[10px] items-center">
                  <div className="grid grid-cols-[auto_auto_auto] max-xsm:grid-cols-1 w-full justify-between gap-[60px] items-center max-2xl:gap-[40px] max-xl:gap-[30px] max-xsm:gap-[20px]">
                    <p className="text-[20px] leading-[25px] max-2xl:text-[18px] max-2xl:leading-[22px] max-xl:text-[16px] max-xl:leading-[20px] text-[#000]">
                      <span className="font-semibold">Monday </span>to{" "}
                      <span className="font-semibold">
                        <br className="max-xsm:hidden" /> Sunday
                      </span>
                    </p>
                    <p className="block max-xsm:hidden text-[40px] leading-[30px] max-2xl:text-[36px] max-xl:leading-[38px] text-[#e36300]">
                      24x7
                    </p>
                    <p className="block max-xsm:hidden text-[40px] leading-[40px] max-2xl:text-[36px] max-xl:leading-[38px] text-[#000] text-center grid max-lg:w-[90px] mr-0">
                      <span className="text-[16px] leading-[18px]">
                        We are open
                      </span>
                      365
                      <span className="text-[16px] leading-[18px]">Days</span>
                    </p>
                    <div className="hidden max-xsm:flex justify-between w-full items-center">
                      <p className="text-[40px] leading-[30px] max-2xl:text-[36px] max-xl:leading-[38px] text-[#e36300]">
                        24x7
                      </p>
                      <p className="text-[40px] leading-[40px] max-2xl:text-[36px] max-xl:leading-[38px] text-[#000] text-center grid max-lg:w-[90px] mr-0">
                        <span className="text-[16px] leading-[18px]">
                          We are open
                        </span>
                        365
                        <span className="text-[16px] leading-[18px]">Days</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end mobile RHS */}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

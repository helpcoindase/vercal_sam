/**
 * SAMWARTHIKA AYURVEDIC HOSPITAL - INTERACTIVE APPLICATION CONTROLLER
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Initialize Canvas Leaves Particle Effect
  initLeafCanvas();

  // Initialize Doctor Swiper
  initDoctorSwiper();

  // Initialize Stats Counters on Scroll
  initCounters();

  // Setup Scroll Listeners
  initScrollEvents();

  // Track appointment and phone CTAs in Google Tag Manager's dataLayer
  initCtaTracking();
});

function initCtaTracking() {
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;

    const cta = event.target.closest('a[href^="tel:"], [onclick*="scrollToBannerForm"]');
    if (!cta) return;

    const isPhoneCta = cta instanceof HTMLAnchorElement && cta.href.startsWith('tel:');
    const dock = cta.closest('[aria-label="Quick Mobile Actions"]');
    const header = cta.closest('header');

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cta_click',
      cta_type: isPhoneCta ? 'call' : 'book',
      cta_text: cta.textContent.trim(),
      cta_location: dock ? 'mobile_bottom_dock' : header ? 'header' : 'page',
      cta_destination: isPhoneCta ? cta.getAttribute('href') : 'appointment_form'
    });
  });
}

/* ==========================================================================
   1. FLOATING BOTANICAL LEAF PARTICLES (Canvas)
   ========================================================================== */
function initLeafCanvas() {
  const canvas = document.getElementById('leafCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const leaves = [];
  const leafCount = Math.min(22, Math.floor(window.innerWidth / 60));

  for (let i = 0; i < leafCount; i++) {
    leaves.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 9 + 6,
      speedX: Math.random() * 0.6 - 0.3,
      speedY: Math.random() * 0.7 + 0.3,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      color: Math.random() > 0.6 ? '#658d39' : '#c69214',
      opacity: Math.random() * 0.35 + 0.15
    });
  }

  function drawLeaf(l) {
    ctx.save();
    ctx.translate(l.x, l.y);
    ctx.rotate(l.rotation);
    ctx.globalAlpha = l.opacity;
    ctx.fillStyle = l.color;

    ctx.beginPath();
    ctx.moveTo(0, -l.size);
    ctx.quadraticCurveTo(l.size * 0.8, 0, 0, l.size);
    ctx.quadraticCurveTo(-l.size * 0.8, 0, 0, -l.size);
    ctx.fill();

    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    leaves.forEach((l) => {
      l.x += l.speedX + Math.sin(l.y * 0.005) * 0.3;
      l.y += l.speedY;
      l.rotation += l.rotationSpeed;

      if (l.y > height + 20) {
        l.y = -20;
        l.x = Math.random() * width;
      }
      if (l.x > width + 20) l.x = -20;
      if (l.x < -20) l.x = width + 20;

      drawLeaf(l);
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. DOCTORS SWIPER SLIDER
   ========================================================================== */
function initDoctorSwiper() {
  if (typeof Swiper !== 'undefined') {
    new Swiper('.doctorsSwiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '#docNextBtn',
        prevEl: '#docPrevBtn'
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 28
        }
      }
    });
  }
}

/* ==========================================================================
   3. INTERACTIVE CONCERN SELECTOR DATA & FUNCTION
   ========================================================================== */
const concernData = {
  spine: {
    badge: 'Spine, Disc & Joint Disorder Protocol',
    title: 'Ayurvedic Spine & Joint Care with Integrated Physio',
    desc: 'Targeting Cervical/Lumbar Spondylosis, Disc Bulge Protrusion, Sciatica, and Osteoarthritis. We combine Kati Vasti, Kizhi herbal poultice therapies, specialized herbal decoctions, and targeted spinal mobilization to relieve compression and rebuild joint lubrication without surgery.',
    feat1: 'Kati Vasti & Greeva Vasti targeted warm oil reservoir',
    feat2: 'Elakizhi & Podikizhi anti-inflammatory herbal fomentation',
    feat3: 'Modern clinical physiotherapy joint rehabilitation',
    feat4: 'Custom classical herbal formulations for cartilage repair',
    duration: '7 to 21 Days',
    dosha: 'Vata Imbalance (Vata-Kapha)',
    therapies: 'Abhyangam, Kati Vasti, Patra Pinda Swedam (Elakizhi), Snehadhara, Kashaya Vasti & Physio Traction.'
  },
  detox: {
    badge: 'Classical Panchakarma Detoxification',
    title: '5-Phase Bio-Cleansing & Cellular Longevity',
    desc: 'A comprehensive Ayurvedic purification designed to purge deep cellular metabolic waste (Ama), reset biological clocks, and revitalize organ systems. Prescribed individually according to pulse diagnosis (Nadi Pariksha).',
    feat1: 'Deep internal oleation (Snehapanam) with medicated ghee',
    feat2: 'Swedanam steam fomentation to loosen tissue toxins',
    feat3: 'Virechana & Vasti targeted biological cleansing',
    feat4: 'Satvik restorative diet (Samsarjana Krama)',
    duration: '14 to 28 Days',
    dosha: 'Tridosha Harmonization (Vata-Pitta-Kapha)',
    therapies: 'Snehapanam, Abhyangam, Swedanam, Virechanam, Kashaya Vasti & Shirodhara.'
  },
  neuro: {
    badge: 'Neurological & Stroke Rehabilitation',
    title: 'Specialized Stroke, Parkinson\'s & Paralysis Care',
    desc: 'Intensive restorative protocol utilizing classical neuro-protective herbal decoctions, royal Pizhichil oil therapy, and neuromuscular kinetic exercises to stimulate neuroplasticity and improve motor coordination.',
    feat1: 'Pizhichil (Continuous warm medicated oil stream bath)',
    feat2: 'Njavarakizhi (Shastika Sali rice cooked in herbal milk)',
    feat3: 'Shirovasti & Nasya for cerebral stimulation',
    feat4: 'Motor rehabilitation & gait re-training',
    duration: '21 to 45 Days',
    dosha: 'Severe Vata Imbalance (Vata-Vyadhi)',
    therapies: 'Pizhichil, Njavarakizhi, Nasya, Shirovasti, Matra Vasti & Neuromuscular Physiotherapy.'
  },
  stress: {
    badge: 'Mind, Stress & Sleep Medicine',
    title: 'Restorative Shirodhara & Nervous System Rebalance',
    desc: 'Designed for chronic corporate burnout, anxiety, tension migraines, and deep-rooted insomnia. Warm medicated botanical oils flow rhythmically across the third eye chakra to calm heightened nervous agitation.',
    feat1: 'Authentic classical Shirodhara & Takradhara',
    feat2: 'Shiroabhyangam & Padabhyangam (Foot herbal massage)',
    feat3: 'Guided Yogic Nidra, Pranayama breathwork & meditation',
    feat4: 'Herbal adaptogens (Brahmi, Ashwagandha, Shankhpushpi)',
    duration: '7 to 14 Days',
    dosha: 'Vata-Pitta Mental Overdrive (Manodosha)',
    therapies: 'Shirodhara, Takradhara, Thalam, Abhyangam, Nasya & Meditation Retreat.'
  },
  skin: {
    badge: 'Ayur Cosmetology & Chronic Skin Care',
    title: 'Psoriasis, Eczema & Natural Radiance Therapy',
    desc: 'Treating the root cause of skin pathologies through internal blood purifiers, therapeutic lepam herbal wraps, and specialized buttermilk dharas to heal lesions and soothe inflammation.',
    feat1: 'Herbal Lepanam medicated paste applications',
    feat2: 'Takradhara (Medicated herbal buttermilk bath)',
    feat3: 'Rakta Shodhana classical blood purification',
    feat4: 'Organic herbal hair rejuvenation (Kesha Chikitsa)',
    duration: '10 to 21 Days',
    dosha: 'Pitta-Kapha Blood Impurities (Rakta Dushti)',
    therapies: 'Takradhara, Lepanam, Virechanam, Shirodhara & Organic Herbal Facials.'
  },
  weight: {
    badge: 'Metabolic & Weight Management',
    title: 'Udwarthanam Powder Massage & Gut Restoration',
    desc: 'Deep dry herbal powder massage to break down subcutaneous fat, boost lymphatic drainage, eliminate water retention, and treat GERD, bloating, and metabolic sluggishness.',
    feat1: 'Udwarthanam (Warm herbal powder friction massage)',
    feat2: 'Kashaya Vasti herbal decoction enemas',
    feat3: 'Agni Deepana metabolic digestive boosters',
    feat4: 'Customized low-glycemic Satvik diet plan',
    duration: '14 to 28 Days',
    dosha: 'Kapha-Vata Metabolic Stagnation (Medoroga)',
    therapies: 'Udwarthanam, Swedana, Kashaya Vasti, Lekhana Basti & Therapeutic Yoga.'
  }
};

function selectConcern(key) {
  const pills = document.querySelectorAll('.concern-pill');
  pills.forEach((p) => p.classList.remove('active'));

  // Highlight selected button
  const selectedBtn = document.querySelector(`.concern-pill[onclick="selectConcern('${key}')"]`);
  if (selectedBtn) {
    selectedBtn.classList.add('active');
  }

  const data = concernData[key];
  if (!data) return;

  const resultCard = document.getElementById('concernResult');
  if (resultCard) {
    resultCard.style.opacity = '0.35';
    resultCard.style.transform = 'translateY(6px)';

    setTimeout(() => {
      const badgeEl = document.getElementById('resultBadge');
      const titleEl = document.getElementById('resultTitle');
      const descEl = document.getElementById('resultDesc');
      const f1El = document.getElementById('resultFeat1');
      const f2El = document.getElementById('resultFeat2');
      const f3El = document.getElementById('resultFeat3');
      const f4El = document.getElementById('resultFeat4');
      const durEl = document.getElementById('resultDuration');
      const doshaEl = document.getElementById('resultDosha');
      const thEl = document.getElementById('resultTherapies');

      if (badgeEl) badgeEl.textContent = data.badge;
      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.desc;
      if (f1El) f1El.textContent = data.feat1;
      if (f2El) f2El.textContent = data.feat2;
      if (f3El) f3El.textContent = data.feat3;
      if (f4El) f4El.textContent = data.feat4;
      if (durEl) durEl.textContent = data.duration;
      if (doshaEl) doshaEl.textContent = data.dosha;
      if (thEl) thEl.textContent = data.therapies;

      resultCard.style.opacity = '1';
      resultCard.style.transform = 'translateY(0)';
      if (window.lucide) window.lucide.createIcons();
    }, 150);
  }
}

/* ==========================================================================
   4. TREATMENT CATEGORY FILTERS
   ========================================================================== */
function filterTreatments(category) {
  const buttons = document.querySelectorAll('.treatment-filter-btn');
  buttons.forEach((btn) => btn.classList.remove('active'));

  const activeBtn = document.querySelector(`.treatment-filter-btn[onclick="filterTreatments('${category}')"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }

  const cards = document.querySelectorAll('.treatment-card');
  cards.forEach((card) => {
    if (category === 'all' || card.getAttribute('data-category') === category) {
      card.style.display = 'flex';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      }, 50);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 250);
    }
  });
}

/* ==========================================================================
   5. STATS NUMBER COUNTER ANIMATION
   ========================================================================== */
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach((counter) => {
          const target = +counter.getAttribute('data-target');
          const isPlus = target < 1000;
          let current = 0;
          const step = Math.ceil(target / 40);

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.textContent = isPlus ? `${target}+` : `${(target / 1000).toFixed(0)}k+`;
              clearInterval(timer);
            } else {
              counter.textContent = isPlus ? `${current}+` : `${(current / 1000).toFixed(1)}k+`;
            }
          }, 35);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.counter');
  if (statsSection) {
    observer.observe(statsSection.closest('section') || statsSection);
  }
}

/* ==========================================================================
   6. MODAL UTILITIES (Open, Close, ESC, Overlay Click)
   ========================================================================== */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (window.lucide) window.lucide.createIcons();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
}

// Close modals when clicking on dark backdrop
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }
});

// ESC Key closes modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-backdrop').forEach((m) => m.classList.add('hidden'));
    document.body.style.overflow = 'auto';
  }
});

/* ==========================================================================
   7. DYNAMIC TREATMENT & DOCTOR MODALS
   ========================================================================== */
function openTreatmentModal(title, desc, duration, benefits) {
  document.getElementById('modalTreatmentTitle').textContent = title;
  document.getElementById('modalTreatmentDesc').textContent = desc;
  document.getElementById('modalTreatmentDuration').textContent = duration;
  document.getElementById('modalTreatmentBenefits').textContent = benefits;
  openModal('treatmentModal');
}

function openDoctorModal(name, role, degree, focus, exp) {
  document.getElementById('modalDoctorName').textContent = name;
  document.getElementById('modalDoctorRole').textContent = role;
  document.getElementById('modalDoctorDegree').textContent = degree;
  document.getElementById('modalDoctorFocus').textContent = focus;
  document.getElementById('modalDoctorExp').textContent = exp;
  openModal('doctorModal');
}

/* ==========================================================================
   8. DOSHA QUIZ CALCULATOR
   ========================================================================== */
function calculateDosha() {
  const q1 = document.querySelector('input[name="q1"]:checked')?.value || 'vata';
  const q2 = document.querySelector('input[name="q2"]:checked')?.value || 'vata';
  const q3 = document.querySelector('input[name="q3"]:checked')?.value || 'vata';

  const counts = { vata: 0, pitta: 0, kapha: 0 };
  counts[q1]++;
  counts[q2]++;
  counts[q3]++;

  let dominant = 'vata';
  if (counts.pitta > counts.vata && counts.pitta >= counts.kapha) dominant = 'pitta';
  else if (counts.kapha > counts.vata && counts.kapha > counts.pitta) dominant = 'kapha';

  const quizContainer = document.getElementById('quizStepContainer');
  const resultContainer = document.getElementById('doshaResultContainer');

  if (dominant === 'vata') {
    document.getElementById('doshaResultName').textContent = 'Vata Dosha Imbalance (Air & Ether)';
    document.getElementById('doshaResultDescription').textContent =
      'Characterized by dry skin, joint stiffness, sciatica, anxiety, and irregular digestion. You will benefit immensely from warm oil Abhyangam, Kati Vasti, and Shirodhara.';
  } else if (dominant === 'pitta') {
    document.getElementById('doshaResultName').textContent = 'Pitta Dosha Imbalance (Fire & Water)';
    document.getElementById('doshaResultDescription').textContent =
      'Characterized by acidity, skin inflammation, irritability, and body heat. Recommended therapies include Takradhara, cooling herbal Lepanam, and Virechana detox.';
  } else {
    document.getElementById('doshaResultName').textContent = 'Kapha Dosha Imbalance (Earth & Water)';
    document.getElementById('doshaResultDescription').textContent =
      'Characterized by sluggish metabolism, weight stagnation, lethargy, and fluid retention. Recommended therapies include Udwarthanam powder massage and metabolic detox.';
  }

  quizContainer.classList.add('hidden');
  resultContainer.classList.remove('hidden');
}

/* ==========================================================================
   9. FORM SUBMISSION HANDLERS (HERO & MAIN MODAL)
   ========================================================================== */
function handleHeroConsult(e) {
  e.preventDefault();
  const name = document.getElementById('heroName').value;
  const phone = document.getElementById('heroPhone').value;
  const concern = document.getElementById('heroHealthGoal').value;

  showToast(`Consultation Booked for ${name}!`, `Our Ayurvedic Medical Director will reach you at ${phone} regarding ${concern}.`);
  e.target.reset();
}

function scrollToBannerForm(serviceName) {
  const formCard = document.getElementById('heroBannerForm') || document.getElementById('heroQuickForm');
  const healthGoalSelect = document.getElementById('heroHealthGoal');
  const messageInput = document.getElementById('message');

  // Auto-fill health goal service if provided
  if (serviceName && healthGoalSelect) {
    let matched = false;
    for (let i = 0; i < healthGoalSelect.options.length; i++) {
      const opt = healthGoalSelect.options[i];
      if (
        opt.value.toLowerCase().includes(serviceName.toLowerCase()) ||
        opt.textContent.toLowerCase().includes(serviceName.toLowerCase()) ||
        serviceName.toLowerCase().includes(opt.value.toLowerCase())
      ) {
        healthGoalSelect.selectedIndex = i;
        matched = true;
        break;
      }
    }
    if (!matched && messageInput) {
      messageInput.value = `Interested in: ${serviceName}`;
    }
  }

  if (formCard) {
    formCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const nameInput = document.getElementById('name') || formCard.querySelector('input[type="text"], input');
    setTimeout(() => {
      if (nameInput) nameInput.focus();
      formCard.classList.add('ring-4', 'ring-ayur-gold', 'scale-[1.01]');
      setTimeout(() => {
        formCard.classList.remove('ring-4', 'ring-ayur-gold', 'scale-[1.01]');
      }, 2000);
    }, 450);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function handleAppointmentSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('heroName')?.value || 'Guest';
  const phone = document.getElementById('heroPhone')?.value || '';
  showToast(`Appointment Confirmed for ${name}!`, `Our medical coordinator will contact you at ${phone} shortly.`);
  e.target.reset();
}

function showToast(title, msg) {
  const toast = document.getElementById('toastNotification');
  if (toast) {
    document.getElementById('toastTitle').textContent = title;
    document.getElementById('toastMsg').textContent = msg;

    toast.classList.remove('translate-y-[-150%]');
    toast.classList.add('translate-y-0');

    setTimeout(() => {
      toast.classList.remove('translate-y-0');
      toast.classList.add('translate-y-[-150%]');
    }, 5500);
  }
}

/* ==========================================================================
   10. FAQ ACCORDION HANDLER
   ========================================================================== */
function toggleFaq(button) {
  const content = button.nextElementSibling;
  const icon = button.querySelector('i[data-lucide="chevron-down"]');
  const isHidden = content.classList.contains('hidden');

  // Close all other FAQs
  document.querySelectorAll('.faq-content').forEach((c) => c.classList.add('hidden'));
  document.querySelectorAll('.faq-trigger i').forEach((i) => (i.style.transform = 'rotate(0deg)'));

  if (isHidden) {
    content.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
  }
}

/* ==========================================================================
   11. NAVIGATION & SCROLL HANDLERS
   ========================================================================== */
function initScrollEvents() {
  const header = document.getElementById('mainHeader');
  const scrollBtn = document.getElementById('scrollTopBtn');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }

  // Language dropdown toggle
  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');
  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', () => langMenu.classList.add('hidden'));
  }

  // Scroll event
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      if (header) {
        header.classList.add('shadow-lg', 'bg-white/95');
        header.classList.remove('bg-white/90');
      }
      if (scrollBtn) {
        scrollBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollBtn.classList.add('opacity-100', 'pointer-events-auto');
      }
    } else {
      if (header) {
        header.classList.remove('shadow-lg', 'bg-white/95');
        header.classList.add('bg-white/90');
      }
      if (scrollBtn) {
        scrollBtn.classList.add('opacity-0', 'pointer-events-none');
        scrollBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }
    }
  });
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function changeLang(langName, code) {
  document.getElementById('currentLang').textContent = code;
  document.getElementById('langMenu').classList.add('hidden');
  showToast(`Language set to ${langName}`, 'Content localized for your convenience.');
}

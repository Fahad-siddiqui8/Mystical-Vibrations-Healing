/**
 * MYSTICAL VIBRATIONS - LUXURY SOUND THERAPY & BIOPHOTONIC HEALING
 * Native Vanilla JavaScript for Interactive Web Audio, Visualizer, Bio-Well Simulator & Booking
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initBioWellExplorer();
  initMenuTabs();
  initFaqAccordion();
  initReservationSystem();
  initSmoothScroll();
});

/* ==========================================================================
   1. STICKY HEADER & SCROLL SPY
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Scroll spy
    let current = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   2. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle-btn');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  if (!toggleBtn || !overlay) return;

  function openMenu() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ==========================================================================
   3. INTERACTIVE BIO-WELL BIOPHOTONICS EXPLORER
   ========================================================================== */
function initBioWellExplorer() {
  const chakraNodes = document.querySelectorAll('.chakra-node');
  const titleEl = document.getElementById('inspectorChakraName');
  const sanskritEl = document.getElementById('inspectorSanskrit');
  const freqEl = document.getElementById('inspectorFreq');
  const joulesEl = document.getElementById('inspectorJoules');
  const balanceEl = document.getElementById('inspectorBalance');
  const meridianEl = document.getElementById('inspectorMeridian');
  const descEl = document.getElementById('inspectorDesc');
  const stressFill = document.getElementById('stressBarFill');
  const stressVal = document.getElementById('stressNumericVal');
  const stateBtns = document.querySelectorAll('.state-btn');
  const auraGlow = document.querySelector('.aura-glow');

  const chakraDatabase = {
    7: {
      name: 'Crown Chakra',
      sanskrit: 'Sahasrara • Thousandfold Lotus',
      freq: '963 Hz',
      joules: '4.85 Joules',
      balance: '96% Coherence',
      meridian: 'Pineal Gland & Central Nervous Axis',
      desc: 'The gateway to transcendental consciousness and unified bio-energetic resonance. Regulates circadian rhythms, neurological tranquility, and mental clarity.',
      color: '#A374DB'
    },
    6: {
      name: 'Third Eye Chakra',
      sanskrit: 'Ajna • Center of Perception',
      freq: '852 Hz',
      joules: '4.72 Joules',
      balance: '94% Coherence',
      meridian: 'Pituitary Gland & Visual Cortex',
      desc: 'Governs intuitive insight, cognitive flow, and mental stillness. Electro-photonic emission reflects low mental chatter and profound meditative stillness.',
      color: '#5C76E4'
    },
    5: {
      name: 'Throat Chakra',
      sanskrit: 'Vishuddha • Center of Purity',
      freq: '741 Hz',
      joules: '4.60 Joules',
      balance: '91% Coherence',
      meridian: 'Thyroid, Parathyroid & Vocal Cord System',
      desc: 'Controls authentic truth and sovereign self-expression. High coherence here dissipates somatic throat tightness and tension held in the neck.',
      color: '#4DBCE9'
    },
    4: {
      name: 'Heart Chakra',
      sanskrit: 'Anahata • Unstruck Resonance',
      freq: '639 Hz',
      joules: '5.10 Joules',
      balance: '98% Coherence',
      meridian: 'Cardiopulmonary System & Thymus Gland',
      desc: 'The bio-magnetic epicenter of the human torus field. Heart Rate Variability (HRV) entrains into harmonic synergy, signaling safety to the autonomic nervous system.',
      color: '#52C288'
    },
    3: {
      name: 'Solar Plexus Chakra',
      sanskrit: 'Manipura • City of Jewels',
      freq: '528 Hz',
      joules: '4.95 Joules',
      balance: '95% Coherence',
      meridian: 'Metabolic Axis, Pancreas & Stomach',
      desc: 'Governs vital life force (Prana/Qi), digestion, and inner autonomy. 528 Hz resonance alleviates the stored somatic clenching of chronic anxiety.',
      color: '#F1C40F'
    },
    2: {
      name: 'Sacral Chakra',
      sanskrit: 'Svadhisthana • The Soul Dwelling',
      freq: '417 Hz',
      joules: '4.68 Joules',
      balance: '92% Coherence',
      meridian: 'Reproductive System, Kidneys & Pelvic Floor',
      desc: 'The cradle of emotional fluidity, sensual vitality, and creative expression. Releases repressed tension and encourages effortless cellular surrender.',
      color: '#E67E22'
    },
    1: {
      name: 'Root Chakra',
      sanskrit: 'Muladhara • Foundation of Stability',
      freq: '396 Hz',
      joules: '5.20 Joules',
      balance: '97% Coherence',
      meridian: 'Adrenal System, Spine & Skeletal Foundation',
      desc: 'Anchors the human electromagnetic vessel to terrestrial stability. Shuts down fight-or-flight cortisol loops and instills grounded somatic peace.',
      color: '#E74C3C'
    }
  };

  function selectChakra(id) {
    const data = chakraDatabase[id];
    if (!data) return;

    chakraNodes.forEach(node => node.classList.remove('active'));
    const target = document.querySelector(`.chakra-${id}`);
    if (target) target.classList.add('active');

    titleEl.textContent = data.name;
    sanskritEl.textContent = data.sanskrit;
    freqEl.textContent = data.freq;
    joulesEl.textContent = data.joules;
    balanceEl.textContent = data.balance;
    meridianEl.textContent = data.meridian;
    descEl.textContent = data.desc;
  }

  chakraNodes.forEach(node => {
    node.addEventListener('click', () => {
      const id = node.getAttribute('data-chakra');
      selectChakra(id);
    });
  });

  // State Toggle: Pre-Sound Bath vs Post-Sound Bath
  stateBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      stateBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const state = btn.getAttribute('data-state');
      if (state === 'post') {
        // Balanced coherent state
        if (stressFill) stressFill.style.width = '21%';
        if (stressVal) stressVal.textContent = '2.1 (Deep Parasympathetic Coherence)';
        if (auraGlow) {
          auraGlow.style.background = 'radial-gradient(ellipse at center, rgba(56, 168, 110, 0.28) 0%, rgba(166, 128, 55, 0.22) 50%, transparent 80%)';
          auraGlow.style.filter = 'blur(18px)';
          auraGlow.style.transform = 'translate(-50%, -50%) scale(1.15)';
        }
        showToast('Bio-Well State: Coherent Post-Sound Bath Resonance');
      } else {
        // Stressed baseline state
        if (stressFill) stressFill.style.width = '68%';
        if (stressVal) stressVal.textContent = '6.8 (Sympathetic Hyper-Arousal)';
        if (auraGlow) {
          auraGlow.style.background = 'radial-gradient(ellipse at center, rgba(214, 59, 42, 0.22) 0%, rgba(93, 77, 119, 0.15) 50%, transparent 75%)';
          auraGlow.style.filter = 'blur(28px)';
          auraGlow.style.transform = 'translate(-50%, -50%) scale(0.95)';
        }
        showToast('Bio-Well State: Pre-Session Baseline (High Stress)');
      }
    });
  });

  // Default to Heart Chakra
  selectChakra(4);
}

/* ==========================================================================
   5. CURATED SANCTUARY MENU TABS
   ========================================================================== */
function initMenuTabs() {
  const tabs = document.querySelectorAll('.menu-tab-btn');
  const cards = document.querySelectorAll('.menu-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat.includes(category)) {
          card.style.display = 'flex';
          card.style.animation = 'slide-in 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   6. FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(other => {
        other.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   7. RESERVATION SYSTEM & MODAL
   ========================================================================== */
function initReservationSystem() {
  const modal = document.getElementById('reservationModal');
  const modalClose = document.querySelector('.modal-close-btn');
  const openButtons = document.querySelectorAll('[data-open-reserve]');
  const modalForm = document.getElementById('modalReservationForm');
  const inlineForm = document.getElementById('inlineReservationForm');
  const journeySelectModal = document.getElementById('modalSelectedJourney');
  const journeySelectInline = document.getElementById('inlineSelectedJourney');

  function openModal(preselectedJourney = '') {
    if (!modal) return;
    if (preselectedJourney && journeySelectModal) {
      journeySelectModal.value = preselectedJourney;
    }
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const journey = btn.getAttribute('data-journey') || '';
      openModal(journey);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Handle Form Submissions
  function handleFormSubmit(form, isModal = false) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="client_name"]').value;
      const phone = form.querySelector('[name="client_phone"]').value;
      const journey = form.querySelector('[name="journey"]').value;

      const successBox = form.parentElement.querySelector('.form-success-banner');
      if (successBox) {
        form.style.display = 'none';
        successBox.style.display = 'block';
      }

      showToast(`Thank you, ${name}. Your reservation inquiry for '${journey}' is confirmed.`);

      if (isModal) {
        setTimeout(() => {
          closeModal();
          form.reset();
          if (successBox) successBox.style.display = 'none';
          form.style.display = 'block';
        }, 3500);
      }
    });
  }

  if (modalForm) handleFormSubmit(modalForm, true);
  if (inlineForm) handleFormSubmit(inlineForm, false);
}

/* ==========================================================================
   8. SMOOTH SCROLLING FOR ANCHORS
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   9. TOAST NOTIFICATION UTILITY
   ========================================================================== */
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.35s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4200);
}

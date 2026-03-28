// ============================================
// SAMTRONICS SOLUTIONS - MAIN JAVASCRIPT
// Includes: Products, Cart, Gallery, M-Pesa STK Push, Dark Mode
// ============================================

// ========== COMPLETE PRODUCT DATA WITH ALL 11 IMAGES ==========
const products = [
  { id: 'mpesa-board', img: 'images/mpesa_10-edited.jpg', alt: 'M-PESA LED Board for mobile money shops - bright green LED signage', shortDesc: 'High-visibility M-PESA display for mobile money agents.', longDesc: 'Bright, durable LED board perfect for M-PESA outlets.', price: 3000, name: 'M-PESA LED Board' },
  { id: 'mpesa-shop', img: 'images/20260320_185819-edited.jpg', alt: 'M-PESA Shop Sign with professional LED display', shortDesc: 'Professional shop sign with M-PESA branding.', longDesc: 'Affordable and eye-catching M-PESA signage.', price: 3000, name: 'M-PESA Shop Sign' },
  { id: 'blinking-sign', img: 'images/blinking-sign-edited.jpg', alt: 'Custom Blinking LED Sign with animated effects', shortDesc: 'Attention-grabbing animated LED signs.', longDesc: 'Customizable blinking signs for any business.', price: 4500, name: 'Custom Blinking Signs' },
  { id: 'led-display', img: 'images/led-display-edited.jpg', alt: 'Outdoor LED Display for business signage', shortDesc: 'Weatherproof outdoor digital signage.', longDesc: 'Large format LED displays for events.', price: 4500, name: 'Outdoor LED Displays' },
  { id: 'phone-repair', img: 'images/custom_phone_repair_15000-edited.jpg', alt: 'Phone Repair Custom LED Sign for mobile repair shops', shortDesc: 'Premium custom branding for phone repair.', longDesc: 'Tailored LED signs for phone repair businesses.', price: 15000, name: 'Phone Repair LED Sign' },
  { id: 'dental-led', img: 'images/custom_dental_services_10000-edited.jpg', alt: 'Dental Services LED Sign for clinics', shortDesc: 'Elegant design for professional clinics.', longDesc: 'Custom LED for dental/medical practices.', price: 10000, name: 'Dental LED Sign' },
  { id: 'led-billboard', img: 'images/3d_65000-edited.jpg', alt: '3D LED Billboard for maximum advertising impact', shortDesc: 'Maximum visibility advertising.', longDesc: 'High-impact LED billboards for prime locations.', price: 65000, name: 'LED Billboard' },
  { id: 'neon-led', img: 'images/cosmetics_double_sided_8000-edited.jpg', alt: 'Double Sided Cosmetics Neon LED Sign', shortDesc: 'Stylish neon-style LED signage.', longDesc: 'Vibrant neon-effect signs for modern businesses.', price: 8000, name: 'Neon LED Sign' },
  { id: 'scrolling-led', img: 'images/cyber_1800-edited.jpg', alt: 'Cyber Cafe Scrolling LED Display', shortDesc: 'Programmable scrolling text display.', longDesc: 'Dynamic message board for promotions.', price: 1800, name: 'Scrolling LED Display' },
  { id: 'kinyozi-sign', img: 'images/kinyozi_custom_5000-edited.jpg', alt: 'Kinyozi Barbershop LED Sign', shortDesc: 'Perfect for barbershops and salons.', longDesc: 'Affordable LED sign for grooming businesses.', price: 5000, name: 'Barbershop LED Sign' },
  { id: 'rgb-panel', img: 'images/nails_10000-edited.jpg', alt: 'Nail Salon RGB LED Panel', shortDesc: 'Multi-color lighting effects.', longDesc: 'Customizable RGB panels for vibrant displays.', price: 10000, name: 'RGB LED Panel' }
];

// ========== COMPLETE GALLERY IMAGES - ALL 20 IMAGES ==========
const galleryImages = [
  'airtel_money_1500-edited.jpg', 'bakery_4500-edited.jpg', 'bold_laptops_6500-edited.jpg',
  'bold_phone_repair_double_sided_15000-edited.jpg', 'cafe-3500-edited.jpg', 'chemist_mpesa_5000-edited.jpg',
  'computers_4500-edited.jpg', 'custom_kinyozi_5000-edited.jpg', 'cyber_4500-edited.jpg',
  'equity_mpesa_kcb_4500-edited.jpg', 'hotel_rooms_5000-edited.jpg', 'kinyozi_spa_double_sided_8000-edited.jpg',
  'mpesa_coop_equity_kcb_12000-edited.jpg', 'mpesa_cyber_5000-edited.jpg', 'mpesa_kcb_accessories_7500-edited.jpg',
  'mpesa_phone_accessories_5000-edited.jpg', 'phone_accessories_6500-edited.jpg', 'phone_repair_4500-edited.jpg',
  'photo_studio_4500-edited.jpg', 'turkey_wear_4000-edited.jpg'
];

// Alt text for gallery images
const galleryAltMap = {
  'airtel_money_1500-edited.jpg': 'Airtel Money LED Signage for mobile money agents',
  'bakery_4500-edited.jpg': 'Bakery LED Sign for food businesses',
  'bold_laptops_6500-edited.jpg': 'Bold Laptops LED Sign for electronics stores',
  'bold_phone_repair_double_sided_15000-edited.jpg': 'Double Sided Phone Repair LED Sign',
  'cafe-3500-edited.jpg': 'Cafe LED Signage for restaurants',
  'chemist_mpesa_5000-edited.jpg': 'Chemist with M-PESA LED Board',
  'computers_4500-edited.jpg': 'Computers LED Sign for electronics',
  'custom_kinyozi_5000-edited.jpg': 'Custom Kinyozi LED Sign for barbershops',
  'cyber_4500-edited.jpg': 'Premium Cyber Cafe LED Sign',
  'equity_mpesa_kcb_4500-edited.jpg': 'Equity M-PESA KCB Combo LED Board',
  'hotel_rooms_5000-edited.jpg': 'Hotel Rooms LED Sign for accommodations',
  'kinyozi_spa_double_sided_8000-edited.jpg': 'Kinyozi and Spa Double Sided LED Sign',
  'mpesa_coop_equity_kcb_12000-edited.jpg': 'M-PESA Coop Equity KCB LED Board',
  'mpesa_cyber_5000-edited.jpg': 'M-PESA and Cyber Cafe LED Sign',
  'mpesa_kcb_accessories_7500-edited.jpg': 'M-PESA KCB Accessories LED Board',
  'mpesa_phone_accessories_5000-edited.jpg': 'M-PESA Phone Accessories LED Sign',
  'phone_accessories_6500-edited.jpg': 'Phone Accessories LED Sign',
  'phone_repair_4500-edited.jpg': 'Phone Repair LED Sign',
  'photo_studio_4500-edited.jpg': 'Photo Studio LED Sign',
  'turkey_wear_4000-edited.jpg': 'Turkey Wear LED Sign for clothing stores'
};

// ========== CART FUNCTIONALITY ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = document.getElementById('cart-count');
  if (cartCount) cartCount.textContent = count;
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId, price, name) {
  const existing = cart.find(item => item.product === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ product: productId, price, quantity: 1, name });
  }
  saveCart();
  alert(`${name} added to cart!`);
}

// ========== RENDER PRODUCTS ==========
function renderProducts(filtered = products) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  
  grid.innerHTML = filtered.map(p => `
    <div class="product" itemscope itemtype="https://schema.org/Product">
      <img src="${p.img}" alt="${p.alt}" loading="lazy" itemprop="image">
      <p class="product-short-desc">${p.shortDesc}</p>
      <h4 itemprop="name">${p.name}</h4>
      <p itemprop="description">${p.longDesc}</p>
      <p class="price" itemprop="price" content="${p.price}">KSh ${p.price.toLocaleString()}</p>
      <button class="add-to-cart" data-product="${p.id}" data-price="${p.price}" data-name="${p.name}">Add to Cart</button>
    </div>
  `).join('');
  
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.onclick = () => addToCart(btn.dataset.product, parseInt(btn.dataset.price), btn.dataset.name);
  });
}

// ========== RENDER GALLERY ==========
function renderGallery() {
  const galleryGrid = document.getElementById('gallery-grid');
  if (!galleryGrid) return;
  
  galleryGrid.innerHTML = galleryImages.map(img => `
    <img src="images/${img}" alt="${galleryAltMap[img] || 'LED Signage installation'}" class="gallery-item" loading="lazy">
  `).join('');
}

// ========== PRICE CALCULATOR ==========
function initPriceCalculator() {
  const select = document.getElementById('calc-product');
  if (!select) return;
  
  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = `${p.name} (KSh ${p.price.toLocaleString()})`;
    select.appendChild(opt);
  });
  
  const update = () => {
    const prod = products.find(p => p.id === select.value);
    const qty = parseInt(document.getElementById('calc-quantity')?.value) || 1;
    const priceSpan = document.getElementById('calc-price');
    if (prod && priceSpan) {
      priceSpan.textContent = (prod.price * qty).toLocaleString();
    } else if (priceSpan) {
      priceSpan.textContent = '0';
    }
  };
  
  const calcBtn = document.getElementById('calc-button');
  const qtyInput = document.getElementById('calc-quantity');
  
  if (calcBtn) calcBtn.onclick = update;
  if (select) select.onchange = update;
  if (qtyInput) qtyInput.oninput = update;
  update();
}

// ========== HERO SLIDER ==========
function setupHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('hero-dots');
  let current = 0, timer;
  
  if (slides.length === 0) return;
  
  function goTo(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    if (dotsContainer) {
      Array.from(dotsContainer.children).forEach((d, i) => d.classList.toggle('active', i === index));
    }
    current = index;
  }
  
  function nextSlide() { goTo((current + 1) % slides.length); }
  
  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
      dot.onclick = () => { goTo(i); clearInterval(timer); timer = setInterval(nextSlide, 5000); };
      dotsContainer.appendChild(dot);
    });
  }
  
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goTo((current - 1 + slides.length) % slides.length);
      clearInterval(timer);
      timer = setInterval(nextSlide, 5000);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goTo((current + 1) % slides.length);
      clearInterval(timer);
      timer = setInterval(nextSlide, 5000);
    });
  }
  
  timer = setInterval(nextSlide, 5000);
}

// ========== LIGHTBOX ==========
function initLightbox() {
  const lightbox = document.getElementById('image-lightbox');
  const imgEl = document.getElementById('lightbox-img');
  let scale = 1;
  
  if (!lightbox || !imgEl) return;
  
  document.body.addEventListener('click', (e) => {
    const img = e.target.closest('.gallery-item, .product img');
    if (img && img.src) {
      imgEl.src = img.src;
      scale = 1;
      imgEl.style.transform = 'scale(1)';
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  });
  
  const closeBtn = document.querySelector('.lightbox-close');
  if (closeBtn) {
    closeBtn.onclick = () => {
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    };
  }
  
  const zoomIn = document.getElementById('zoom-in');
  const zoomOut = document.getElementById('zoom-out');
  const zoomReset = document.getElementById('zoom-reset');
  
  if (zoomIn) zoomIn.onclick = () => { scale = Math.min(scale + 0.2, 3); imgEl.style.transform = `scale(${scale})`; };
  if (zoomOut) zoomOut.onclick = () => { scale = Math.max(scale - 0.2, 0.4); imgEl.style.transform = `scale(${scale})`; };
  if (zoomReset) zoomReset.onclick = () => { scale = 1; imgEl.style.transform = 'scale(1)'; };
}

// ========== DARK MODE ==========
function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.body.classList.toggle('dark', saved === 'dark' || (!saved && prefersDark));
  
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.onclick = () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    };
  }
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.onclick = () => nav.classList.toggle('nav-open');
    document.querySelectorAll('#main-nav a').forEach(link => {
      link.onclick = () => nav.classList.remove('nav-open');
    });
  }
}

// ========== SEARCH ==========
function initSearch() {
  const input = document.getElementById('product-search');
  const noResults = document.getElementById('no-results');
  
  if (input) {
    input.oninput = () => {
      const term = input.value.toLowerCase();
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.shortDesc.toLowerCase().includes(term) || 
        p.price.toString().includes(term)
      );
      renderProducts(filtered);
      if (noResults) noResults.style.display = filtered.length ? 'none' : 'block';
    };
  }
}

// ========== FORMAT PHONE NUMBER FOR M-PESA ==========
function formatMpesaPhone(phone) {
  let cleaned = phone.toString().replace(/\D/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '254' + cleaned.substring(1);
  } else if (cleaned.startsWith('+')) {
    cleaned = cleaned.substring(1);
  } else if (!cleaned.startsWith('254') && cleaned.length === 9) {
    cleaned = '254' + cleaned;
  }
  return cleaned;
}

// ========== M-PESA STK PUSH INTEGRATION ==========
function initMpesaPayment() {
  const checkoutBtn = document.getElementById('checkout-btn');
  const paymentSection = document.getElementById('payment-section');
  const stkPushBtn = document.getElementById('stk-push-btn');
  const mpesaPhone = document.getElementById('mpesa-phone');
  const stkStatus = document.getElementById('stk-status');
  const copyTillBtn = document.getElementById('copy-till-btn');
  const verifyBtn = document.getElementById('verify-payment');
  const transCode = document.getElementById('trans-code');
  const payAmountSpan = document.getElementById('pay-amount');
  
  let currentTotal = 0;
  let pollInterval = null;
  
  // Helper to update status display
  function setStatus(element, message, type) {
    if (!element) return;
    element.textContent = message;
    element.className = `payment-status ${type}`;
  }
  
  // Helper to clear poll interval
  function clearPoll() {
    if (pollInterval) {
      clearInterval(pollInterval);
      pollInterval = null;
    }
  }
  
  // Helper to poll payment status
  function pollPaymentStatus(checkoutRequestId, statusElement, originalButton) {
    let attempts = 0;
    const maxAttempts = 12; // 60 seconds total (5 sec intervals)
    
    clearPoll();
    pollInterval = setInterval(async () => {
      attempts++;
      
      try {
        const response = await fetch('/api/mpesa/status', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ checkoutRequestID: checkoutRequestId })
        });
        
        const data = await response.json();
        
        // ResultCode 0 means success
        if (data.ResultCode === 0) {
          clearPoll();
          setStatus(statusElement, '✅ Payment successful! Thank you for your purchase.', 'success');
          
          // Clear cart
          cart = [];
          saveCart();
          
          // Close modal after delay
          setTimeout(() => {
            const modal = document.getElementById('cart-modal');
            if (modal) modal.style.display = 'none';
            alert('Order placed successfully! We will contact you shortly.');
          }, 2000);
          
          if (originalButton) {
            originalButton.disabled = false;
            originalButton.textContent = 'Pay with M-Pesa';
          }
        }
        // 1037 means pending, other codes mean failure
        else if (data.ResultCode && data.ResultCode !== 1037) {
          clearPoll();
          setStatus(statusElement, `❌ Payment failed: ${data.ResultDesc || 'Please try again'}`, 'error');
          if (originalButton) {
            originalButton.disabled = false;
            originalButton.textContent = 'Pay with M-Pesa';
          }
        }
        // Timeout after max attempts
        else if (attempts >= maxAttempts) {
          clearPoll();
          setStatus(statusElement, '⏰ Payment timeout. Please check your M-Pesa messages.', 'pending');
          if (originalButton) {
            originalButton.disabled = false;
            originalButton.textContent = 'Pay with M-Pesa';
          }
        }
      } catch (error) {
        console.error('Status check error:', error);
      }
    }, 5000);
  }
  
  // Show payment section on checkout
  if (checkoutBtn) {
    checkoutBtn.onclick = () => {
      if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
      }
      
      currentTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      if (payAmountSpan) payAmountSpan.textContent = currentTotal.toLocaleString();
      
      if (paymentSection) paymentSection.style.display = 'block';
      paymentSection?.scrollIntoView({ behavior: 'smooth' });
      
      // Refresh cart display
      showCartContents();
    };
  }
  
  // Function to show cart contents
  function showCartContents() {
    const container = document.getElementById('cart-items');
    const totalSpan = document.getElementById('cart-total');
    let total = 0;
    
    if (container) {
      container.innerHTML = '';
      cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        container.innerHTML += `
          <div class="cart-item">
            <span>${item.name || item.product} x ${item.quantity}</span>
            <span>KSh ${itemTotal.toLocaleString()}</span>
            <button class="remove-cart-item" data-product="${item.product}">Remove</button>
          </div>
        `;
      });
      if (totalSpan) totalSpan.textContent = total.toLocaleString();
      if (payAmountSpan) payAmountSpan.textContent = total.toLocaleString();
      
      // Add remove button functionality
      document.querySelectorAll('.remove-cart-item').forEach(btn => {
        btn.onclick = () => {
          cart = cart.filter(i => i.product !== btn.dataset.product);
          saveCart();
          showCartContents();
        };
      });
    }
  }
  
  // STK Push handler
  if (stkPushBtn) {
    stkPushBtn.onclick = async () => {
      const phone = mpesaPhone?.value.trim();
      
      if (!phone) {
        alert('Please enter your M-Pesa phone number');
        return;
      }
      
      const formattedPhone = formatMpesaPhone(phone);
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      if (total === 0) {
        alert('Your cart is empty');
        return;
      }
      
      setStatus(stkStatus, '⏳ Processing payment request...', 'pending');
      stkPushBtn.disabled = true;
      stkPushBtn.textContent = 'Processing...';
      
      try {
        const response = await fetch('/api/mpesa/stkpush', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            phone: formattedPhone,
            amount: total,
            accountReference: `SAM-${Date.now()}`,
            transactionDesc: 'LED Signage Purchase'
          })
        });
        
        const data = await response.json();
        
        if (data.success) {
          setStatus(stkStatus, `✅ Payment request sent to ${phone}. Check your phone and enter PIN to complete.`, 'success');
          // Start polling for payment status
          pollPaymentStatus(data.checkoutRequestID, stkStatus, stkPushBtn);
        } else {
          setStatus(stkStatus, `❌ ${data.message || 'Payment request failed. Please try again.'}`, 'error');
          stkPushBtn.disabled = false;
          stkPushBtn.textContent = 'Pay with M-Pesa';
        }
      } catch (error) {
        console.error('STK Push error:', error);
        setStatus(stkStatus, '❌ Network error. Please check your connection and try again.', 'error');
        stkPushBtn.disabled = false;
        stkPushBtn.textContent = 'Pay with M-Pesa';
      }
    };
  }
  
  // Copy Till Number
  if (copyTillBtn) {
    copyTillBtn.onclick = () => {
      navigator.clipboard.writeText('5673977');
      const originalText = copyTillBtn.textContent;
      copyTillBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyTillBtn.textContent = originalText;
      }, 2000);
    };
  }
  
  // Verify manual payment
  if (verifyBtn) {
    verifyBtn.onclick = () => {
      const code = transCode?.value.trim();
      if (!code) {
        alert('Please enter your M-Pesa transaction code');
        return;
      }
      
      alert(`Payment recorded! Transaction code: ${code}\nWe will verify and contact you shortly.`);
      
      // Clear cart
      cart = [];
      saveCart();
      
      // Close modal
      const modal = document.getElementById('cart-modal');
      if (modal) modal.style.display = 'none';
      
      if (transCode) transCode.value = '';
    };
  }
  
  // Initialize cart modal open
  const cartLink = document.getElementById('cart-link');
  const modal = document.getElementById('cart-modal');
  const closeBtn = document.querySelector('.close');
  
  if (cartLink) {
    cartLink.onclick = (e) => {
      e.preventDefault();
      showCartContents();
      if (modal) modal.style.display = 'flex';
    };
  }
  
  if (closeBtn) {
    closeBtn.onclick = () => {
      if (modal) modal.style.display = 'none';
      clearPoll();
    };
  }
  
  if (modal) {
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
        clearPoll();
      }
    };
  }
}

// ========== INITIALIZE ALL ==========
function init() {
  renderProducts();
  renderGallery();
  updateCartCount();
  initPriceCalculator();
  setupHeroSlider();
  initLightbox();
  initTheme();
  initMobileMenu();
  initSearch();
  initMpesaPayment();
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

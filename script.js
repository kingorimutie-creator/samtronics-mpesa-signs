// ============================================
// SEO ENHANCEMENT SCRIPT
// Adds analytics, performance tracking, and SEO optimizations
// ============================================

(function() {
  'use strict';
  
  // ========== GOOGLE ANALYTICS (Replace with your GA4 ID) ==========
  // Uncomment and add your GA4 Measurement ID when ready
  /*
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
  
  // Load Google Analytics
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
  gtag('config', GA_MEASUREMENT_ID, { 'anonymize_ip': true });
  */
  
  // ========== STRUCTURED DATA VALIDATION ==========
  function validateStructuredData() {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    console.log(`✅ Found ${scripts.length} structured data scripts`);
    
    scripts.forEach((script, index) => {
      try {
        JSON.parse(script.textContent);
        console.log(`✅ Script ${index + 1} is valid JSON-LD`);
      } catch(e) {
        console.error(`❌ Script ${index + 1} has invalid JSON-LD:`, e);
      }
    });
  }
  
  // ========== PERFORMANCE MARKING ==========
  function markPerformance() {
    if ('performance' in window && 'mark' in performance) {
      performance.mark('seo-ready');
    }
  }
  
  // ========== ADD CANONICAL IF MISSING ==========
  function ensureCanonical() {
    if (!document.querySelector('link[rel="canonical"]')) {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = window.location.href.split('#')[0].split('?')[0];
      document.head.appendChild(canonical);
      console.log('✅ Added missing canonical tag');
    }
  }
  
  // ========== ADD META ROBOTS IF MISSING ==========
  function ensureMetaRobots() {
    if (!document.querySelector('meta[name="robots"]')) {
      const robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'index, follow';
      document.head.appendChild(robots);
      console.log('✅ Added missing robots meta tag');
    }
  }
  
  // ========== ADD LANGUAGE ALTERNATES ==========
  function addLanguageAlternates() {
    // English (default)
    const enLink = document.createElement('link');
    enLink.rel = 'alternate';
    enLink.hreflang = 'en';
    enLink.href = window.location.href.split('#')[0];
    document.head.appendChild(enLink);
    
    // Swahili (if you have a Swahili version)
    // const swLink = document.createElement('link');
    // swLink.rel = 'alternate';
    // swLink.hreflang = 'sw';
    // swLink.href = window.location.href.split('#')[0].replace('.com/', '.com/sw/');
    // document.head.appendChild(swLink);
  }
  
  // ========== TRACK OUTBOUND LINKS ==========
  function trackOutboundLinks() {
    document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])').forEach(link => {
      link.addEventListener('click', function(e) {
        console.log(`🔗 Outbound link clicked: ${this.href}`);
        // Track with GA if available
        if (typeof gtag !== 'undefined') {
          gtag('event', 'click', {
            'event_category': 'outbound',
            'event_label': this.href,
            'transport_type': 'beacon'
          });
        }
      });
    });
  }
  
  // ========== ADD SCHEMA FOR CURRENT PAGE ==========
  function addPageSpecificSchema() {
    const path = window.location.pathname;
    const isProductPage = path.includes('/product/');
    const isGalleryPage = path.includes('/gallery/');
    
    if (isProductPage && !document.querySelector('script[data-product-schema]')) {
      const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": document.querySelector('.product h4')?.innerText || "LED Signage",
        "description": document.querySelector('.product p')?.innerText || "Premium LED signage",
        "offers": {
          "@type": "Offer",
          "price": document.querySelector('.price')?.innerText.replace('KSh ', '') || "0",
          "priceCurrency": "KES",
          "availability": "https://schema.org/InStock"
        }
      };
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-product-schema', 'true');
      script.textContent = JSON.stringify(productSchema);
      document.head.appendChild(script);
      console.log('✅ Added product-specific schema');
    }
  }
  
  // ========== LAZY LOAD OPTIMIZATION ==========
  function optimizeLazyLoading() {
    // Add loading="lazy" to all images that don't have it
    document.querySelectorAll('img:not([loading])').forEach(img => {
      img.loading = 'lazy';
    });
    
    // Add decoding="async" for better performance
    document.querySelectorAll('img').forEach(img => {
      if (!img.decoding) img.decoding = 'async';
    });
  }
  
  // ========== ADD WEB VITALS MONITORING ==========
  function monitorWebVitals() {
    if ('webVitals' in window) return;
    
    // Core Web Vitals metrics (simplified)
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log(`📊 LCP: ${lastEntry.renderTime || lastEntry.loadTime}ms`);
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        
        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            console.log(`📊 FID: ${entry.processingStart - entry.startTime}ms`);
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });
        
        // Cumulative Layout Shift
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          list.getEntries().forEach(entry => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          console.log(`📊 CLS: ${clsValue}`);
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
        
      } catch(e) {
        console.log('Web Vitals monitoring not fully supported');
      }
    }
  }
  
  // ========== SEO REPORTING ==========
  function generateSEOReport() {
    const report = {
      title: document.title,
      metaDescription: document.querySelector('meta[name="description"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      robots: document.querySelector('meta[name="robots"]')?.content,
      viewport: document.querySelector('meta[name="viewport"]')?.content,
      h1Count: document.querySelectorAll('h1').length,
      h2Count: document.querySelectorAll('h2').length,
      imageCount: document.querySelectorAll('img').length,
      imagesWithAlt: document.querySelectorAll('img[alt]:not([alt=""]):not([alt=" "])').length,
      structuredDataCount: document.querySelectorAll('script[type="application/ld+json"]').length,
      internalLinks: document.querySelectorAll(`a[href^="/"], a[href*="${window.location.hostname}"]`).length,
      externalLinks: document.querySelectorAll(`a[href^="http"]:not([href*="${window.location.hostname}"])`).length
    };
    
    console.log('📈 SEO Report:', report);
    
    // Report warnings
    if (report.h1Count === 0) console.warn('⚠️ No H1 tag found');
    if (report.h1Count > 1) console.warn('⚠️ Multiple H1 tags found (should be 1)');
    if (!report.metaDescription) console.warn('⚠️ No meta description found');
    if (report.imagesWithAlt < report.imageCount) {
      console.warn(`⚠️ ${report.imageCount - report.imagesWithAlt} images missing alt text`);
    }
    
    return report;
  }
  
  // ========== INITIALIZE SEO ENHANCEMENTS ==========
  function initSEO() {
    ensureCanonical();
    ensureMetaRobots();
    addLanguageAlternates();
    validateStructuredData();
    optimizeLazyLoading();
    trackOutboundLinks();
    monitorWebVitals();
    markPerformance();
    
    // Wait for dynamic content to load
    setTimeout(() => {
      addPageSpecificSchema();
      const report = generateSEOReport();
      
      // Optional: Send report to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'seo_report', report);
      }
    }, 1000);
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSEO);
  } else {
    initSEO();
  }
  
})();

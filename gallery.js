/* ================================================================
   gallery.js — Lightbox open / close behaviour
   ================================================================ */

(function () {
    'use strict';

    const lightbox = document.getElementById('lightbox');
    const backdrop = document.getElementById('lightboxBackdrop');
    const closeBtn = document.getElementById('lightboxClose');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');

    if (!lightbox) return; // not on gallery page

    // ── Open ────────────────────────────────────────────────────
    function openLightbox(card) {
        const lang = document.documentElement.getAttribute('lang') || 'en';
        const src = card.dataset.src;
        const title = card.dataset[`title${lang === 'en' ? 'En' : 'It'}`] || card.dataset.title;
        const desc = card.dataset[`desc${lang === 'en' ? 'En' : 'It'}`] || card.dataset.desc;

        lightboxImg.src = src;
        lightboxImg.alt = title;
        lightboxTitle.textContent = title;
        lightboxDesc.textContent = desc;

        lightbox.hidden = false;

        // RAF trick: let hidden=false paint, then animate
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                lightbox.classList.add('is-open');
                backdrop.classList.add('is-open');
            });
        });

        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    // ── Close ────────────────────────────────────────────────────
    function closeLightbox() {
        lightbox.classList.remove('is-open');
        backdrop.classList.remove('is-open');

        // wait for CSS transition, then hide
        lightbox.addEventListener('transitionend', function handler() {
            lightbox.hidden = true;
            lightboxImg.src = '';
            lightbox.removeEventListener('transitionend', handler);
        });

        document.body.style.overflow = '';
    }

    // ── Event listeners ───────────────────────────────────────────
    // Card clicks
    document.querySelectorAll('.gallery-card').forEach(card => {
        card.addEventListener('click', () => openLightbox(card));
    });

    // Close button
    closeBtn.addEventListener('click', closeLightbox);

    // Backdrop click
    backdrop.addEventListener('click', closeLightbox);

    // Escape key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
            closeLightbox();
        }
    });

})();

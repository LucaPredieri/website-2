/* ================================================================
   main.js — Theme toggle & dynamic content
   ================================================================ */

(function () {
  'use strict';

  // ── Dynamic year in footer ──────────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Language management ─────────────────────────────────────
  const LANG_KEY = 'language';
  const EN = 'en';
  const IT = 'it';

  function getStoredLang() {
    try { return localStorage.getItem(LANG_KEY); } catch { return null; }
  }

  function setStoredLang(lang) {
    try { localStorage.setItem(LANG_KEY, lang); } catch {}
  }

  function getEffectiveLang() {
    return getStoredLang() || EN;
  }

  const ICONS = {
    theme: {
      light: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
      dark: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
    },
    flags: {
      [EN]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"><circle cx="16" cy="16" r="16" fill="#012169"/><path d="m1.3 5.4 29.4 19.3M1.3 24.7 30.7 5.4" stroke="#fff" stroke-width="3"/><path d="m1.3 5.4 29.4 19.3M1.3 24.7 30.7 5.4" stroke="#c8102e" stroke-width="2"/><path d="M16 0v32M0 16h32" stroke="#fff" stroke-width="5"/><path d="M16 0v32M0 16h32" stroke="#c8102e" stroke-width="3"/><circle cx="16" cy="16" r="16" fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="1"/></svg>`,
      [IT]: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"><clipPath id="circleClip"><circle cx="16" cy="16" r="16"/></clipPath><g clip-path="url(#circleClip)"><path d="M0 0h10.6v32H0z" fill="#009246"/><path d="M10.6 0h10.8v32H10.6z" fill="#fff"/><path d="M21.4 0H32v32H21.4z" fill="#ce2b37"/></g><circle cx="16" cy="16" r="16" fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="1"/></svg>`
    }
  };

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    const btns = document.querySelectorAll('.lang-toggle');
    btns.forEach(btn => {
      const icon = btn.querySelector('.lang-icon');
      if (icon) {
        // Show the flag of the language you CAN switch to
        icon.innerHTML = lang === EN ? ICONS.flags[IT] : ICONS.flags[EN];
      }
      btn.setAttribute('aria-label', lang === EN ? 'Passa all\'Italiano' : 'Switch to English');
      btn.title = lang === EN ? 'Passa all\'Italiano' : 'Switch to English';
    });
  }

  // Apply on load
  applyLang(getEffectiveLang());

  // Listen for toggle clicks (using delegation because toggles might be in headers/footers)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-toggle');
    if (btn) {
      const current = document.documentElement.getAttribute('lang');
      const next = current === IT ? EN : IT;
      setStoredLang(next);
      applyLang(next);
    }
  });

  // ── Theme management ────────────────────────────────────────
  const STORAGE_KEY = 'theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  function getStoredTheme() {
    try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
  }

  function setStoredTheme(theme) {
    try { localStorage.setItem(STORAGE_KEY, theme); } catch {}
  }

  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
  }

  function getEffectiveTheme() {
    return getStoredTheme() || getSystemPreference();
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById('themeToggle');
    if (btn) {
      const icon = btn.querySelector('.theme-icon');
      if (icon) {
        icon.innerHTML = theme === DARK ? ICONS.theme.light : ICONS.theme.dark;
      }
      btn.setAttribute('aria-label', theme === DARK ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  // Apply on load (prevents flash)
  applyTheme(getEffectiveTheme());

  // Listen for toggle click
  const toggleBtn = document.getElementById('themeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === DARK ? LIGHT : DARK;
      setStoredTheme(next);
      applyTheme(next);
    });
  }

  // Listen for OS theme changes (if no user preference stored)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredTheme()) {
      applyTheme(e.matches ? DARK : LIGHT);
    }
  });

})();

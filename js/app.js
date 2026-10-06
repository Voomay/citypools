// PoolPulse Cape Town - Application Logic
import { POOLS_DATA, CITY_WEATHER, OFFICIAL_SCHEDULE_NOTICE, CLOSED_POOLS_SCHEDULE } from './pools-data.js';
import { loadWeather, describeWeather, windDirection, uvLabel, weatherIcon, swimAdvice } from './weather.js';

const WEATHER_REFRESH_MS = 10 * 60 * 1000;

// Application State
const state = {
  currentScreen: 'home',
  activeFilter: 'all',
  searchQuery: '',
  selectedPoolId: 'sea-point',
  favourites: JSON.parse(localStorage.getItem('poolpulse_favourites') || '["sea-point", "muizenberg"]'),
  activeMapPinId: null,
  mapInstance: null,
  routeMapInstance: null,
  mapMarkers: {},
  routePolyline: null,
  mapLayerType: 'standard',
  userLocation: { lat: -33.9249, lng: 18.4241, label: "Cape Town CBD" },
  timeSimulator: 'open', // status comes straight from the official dataset
  weather: null,         // live Open-Meteo data { city, pools, fetchedAt }
  weatherError: null,
  mapFilter: 'all'       // 'all' | 'open' | 'closed' | 'maintenance'
};

// DOM Elements
const elements = {
  // Screens
  screens: {
    home: document.getElementById('homeScreen'),
    map: document.getElementById('mapScreen'),
    favourites: document.getElementById('favouritesScreen'),
    alerts: document.getElementById('alertsScreen'),
    details: document.getElementById('detailsScreen'),
    directions: document.getElementById('directionsScreen')
  },
  // Splash Modal
  splashModal: document.getElementById('splashModal'),
  splashStartBtn: document.getElementById('splashStartBtn'),
  splashWeatherPill: document.getElementById('splashWeatherPill'),
  // Navigation
  bottomNav: document.getElementById('bottomNav'),
  navBtns: document.querySelectorAll('.nav-item-btn'),
  favouritesBadge: document.getElementById('favouritesBadge'),
  alertsBadge: document.getElementById('alertsBadge'),
  // Search & Filters
  searchInput: document.getElementById('searchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  filterChips: document.querySelectorAll('.filter-chip'),
  poolsListContainer: document.getElementById('poolsListContainer'),
  poolsCountBadge: document.getElementById('poolsCountBadge'),
  homeWeatherBadge: document.getElementById('homeWeatherBadge'),
  maintenanceBanner: document.getElementById('maintenanceBanner'),
  // Details Screen Elements
  detailsHeroImg: document.getElementById('detailsHeroImg'),
  detailsPoolTitle: document.getElementById('detailsPoolTitle'),
  detailsDistanceBadge: document.getElementById('detailsDistanceBadge'),
  detailsSuburbAddress: document.getElementById('detailsSuburbAddress'),
  detailsStatGrid: document.getElementById('detailsStatGrid'),
  detailsDecisionCard: document.getElementById('detailsDecisionCard'),
  detailsHoursList: document.getElementById('detailsHoursList'),
  detailsWeatherGrid: document.getElementById('detailsWeatherGrid'),
  detailsMaintenanceBox: document.getElementById('detailsMaintenanceBox'),
  detailsAmenitiesCloud: document.getElementById('detailsAmenitiesCloud'),
  detailsPricing: document.getElementById('detailsPricing'),
  detailsPhone: document.getElementById('detailsPhone'),
  detailsBackBtn: document.getElementById('detailsBackBtn'),
  detailsFavBtn: document.getElementById('detailsFavBtn'),
  detailsShareBtn: document.getElementById('detailsShareBtn'),
  detailsGetDirectionsBtn: document.getElementById('detailsGetDirectionsBtn'),
  detailsCallPoolBtn: document.getElementById('detailsCallPoolBtn'),
  detailsViewOnMapBtn: document.getElementById('detailsViewOnMapBtn'),
  detailsLastUpdated: document.getElementById('detailsLastUpdated'),
  // Map Screen Elements
  mapBottomCard: document.getElementById('mapBottomCard'),
  mapCardThumb: document.getElementById('mapCardThumb'),
  mapCardName: document.getElementById('mapCardName'),
  mapCardStatus: document.getElementById('mapCardStatus'),
  mapCardCrowd: document.getElementById('mapCardCrowd'),
  mapCardDistance: document.getElementById('mapCardDistance'),
  mapCardCloseBtn: document.getElementById('mapCardCloseBtn'),
  mapCardDirectionsBtn: document.getElementById('mapCardDirectionsBtn'),
  mapCardDetailsBtn: document.getElementById('mapCardDetailsBtn'),
  mapToggleBtns: document.querySelectorAll('.map-toggle-btn'),
  // Directions Screen Elements
  directionsBackBtn: document.getElementById('directionsBackBtn'),
  routePoolThumb: document.getElementById('routePoolThumb'),
  routePoolName: document.getElementById('routePoolName'),
  routePoolAddress: document.getElementById('routePoolAddress'),
  routeEtaText: document.getElementById('routeEtaText'),
  routeCallPoolBtn: document.getElementById('routeCallPoolBtn'),
  startNavBtn: document.getElementById('startNavBtn'),
  // Favourites Tab
  favouritesListContainer: document.getElementById('favouritesListContainer'),
  emptyFavouritesState: document.getElementById('emptyFavouritesState'),
  explorePoolsBtn: document.getElementById('explorePoolsBtn'),
  // Alerts Tab
  closedPoolsList: document.getElementById('closedPoolsList'),
  unplannedPoolsList: document.getElementById('unplannedPoolsList'),
  // Live Weather
  weatherHero: document.getElementById('weatherHero'),
  whTemp: document.getElementById('whTemp'),
  whCond: document.getElementById('whCond'),
  whFeels: document.getElementById('whFeels'),
  whIcon: document.getElementById('whIcon'),
  whStats: document.getElementById('whStats'),
  whHourly: document.getElementById('whHourly'),
  whVerdict: document.getElementById('whVerdict'),
  whFooter: document.getElementById('whFooter'),
  homeWeatherIcon: document.getElementById('homeWeatherIcon'),
  homeWeatherTemp: document.getElementById('homeWeatherTemp'),
  splashWeatherIcon: document.getElementById('splashWeatherIcon'),
  splashWeatherText: document.getElementById('splashWeatherText'),
  // Map controls
  mapFilterChips: document.querySelectorAll('.map-filter-chip'),
  mapZoomInBtn: document.getElementById('mapZoomInBtn'),
  mapZoomOutBtn: document.getElementById('mapZoomOutBtn'),
  mapRecenterBtn: document.getElementById('mapRecenterBtn'),
  mapViewContainer: document.querySelector('.map-view-container')
};

// SVG Icon Generator Helpers
function getSvgIcon(name, size = 16, strokeWidth = 2) {
  const icons = {
    'map-pin': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    'sun': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
    'users': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    'clock': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    'wrench': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    'phone': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    'navigation': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`,
    'heart': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    'heart-fill': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="#e11d48" stroke="#e11d48" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    'share': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    'chevron-right': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    'chevron-left': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    'alert-triangle': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    'check-circle': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    'x-circle': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    'car': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
    'droplets': `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>`
  };
  return icons[name] || '';
}

// Format status helpers
function getStatusIndicatorBadge(pool) {
  // If timeSimulator is 'closed' and pool was open, show closed after hours
  const isCurrentlyOpen = state.timeSimulator === 'closed' ? false : pool.isOpen;
  
  if (!isCurrentlyOpen) {
    if (pool.isUnderMaintenance) {
      return `<span class="status-pill red"><span class="status-dot"></span>Closed (Maintenance)</span>`;
    }
    return `<span class="status-pill red"><span class="status-dot"></span>Closed</span>`;
  }
  
  return `<span class="status-pill green"><span class="status-dot"></span>Open</span>`;
}

function getCrowdBadge(pool) {
  if (!pool.isOpen || state.timeSimulator === 'closed') {
    return `<span class="crowd-pill">${getSvgIcon('wrench', 12)} ${pool.isUnderMaintenance ? 'Major works' : 'Closed'}</span>`;
  }
  
  let iconColor = 'var(--status-open-green)';
  if (pool.crowdLevel === 'Moderate') iconColor = 'var(--primary-blue)';
  if (pool.crowdLevel === 'Busy') iconColor = 'var(--status-busy-orange)';
  if (pool.crowdLevel === 'Full') iconColor = 'var(--status-closed-red)';
  
  return `<span class="crowd-pill">
    ${getSvgIcon('users', 13)}
    <span style="color: ${iconColor}; font-weight: 700;">${pool.crowdLevel}</span>
  </span>`;
}

function getDecisionVerdict(pool) {
  const isCurrentlyOpen = state.timeSimulator === 'closed' ? false : pool.isOpen;
  if (!isCurrentlyOpen) {
    return {
      verdict: 'NO',
      tagClass: 'no',
      text: pool.isUnderMaintenance ? '⛔ Don’t Travel: Major Works' : '⛔ Closed After Hours'
    };
  }
  
  if (pool.crowdCapacity > 85) {
    return {
      verdict: 'MAYBE',
      tagClass: 'maybe',
      text: '⚠️ High Crowd: Expect Wait'
    };
  }
  
  return {
    verdict: 'YES',
    tagClass: 'yes',
    text: '✅ Worth Visiting: Great Conditions'
  };
}

// Render Swimming Pools List
function renderPoolsList() {
  const container = elements.poolsListContainer;
  if (!container) return;

  // Filter pools
  const filtered = POOLS_DATA.filter(pool => {
    // Search query match
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const matchName = pool.name.toLowerCase().includes(q);
      const matchSuburb = pool.suburb.toLowerCase().includes(q);
      const matchType = pool.type.toLowerCase().includes(q);
      const matchAddress = pool.address.toLowerCase().includes(q);
      if (!matchName && !matchSuburb && !matchType && !matchAddress) return false;
    }

    // Filter chip match
    if (state.activeFilter === 'open') {
      const isCurrentlyOpen = state.timeSimulator === 'closed' ? false : pool.isOpen;
      return isCurrentlyOpen;
    }
    if (state.activeFilter === 'not-busy') {
      return pool.isOpen && (pool.crowdLevel === 'Not busy' || pool.crowdCapacity < 45);
    }
    if (state.activeFilter === 'indoor') {
      return pool.isIndoor;
    }
    if (state.activeFilter === 'outdoor') {
      return !pool.isIndoor;
    }
    if (state.activeFilter === 'maintenance') {
      return pool.isUnderMaintenance;
    }
    if (state.activeFilter === 'saved') {
      return state.favourites.includes(pool.id);
    }

    return true; // 'all'
  });

  // Update counter
  if (elements.poolsCountBadge) {
    elements.poolsCountBadge.textContent = `${filtered.length} pools`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon-wrap">${getSvgIcon('users', 32)}</div>
        <h3 class="empty-title">No swimming pools found</h3>
        <p class="empty-sub">Try changing your search terms or filter criteria to see more facilities.</p>
        <button class="desktop-btn" id="resetFiltersFromEmpty">Reset All Filters</button>
      </div>
    `;
    const resetBtn = document.getElementById('resetFiltersFromEmpty');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        state.activeFilter = 'all';
        state.searchQuery = '';
        if (elements.searchInput) elements.searchInput.value = '';
        elements.filterChips.forEach(c => c.classList.toggle('active', c.dataset.filter === 'all'));
        renderPoolsList();
      });
    }
    return;
  }

  // Generate Cards HTML
  container.innerHTML = filtered.map(pool => {
    const isSaved = state.favourites.includes(pool.id);
    const isCurrentlyOpen = state.timeSimulator === 'closed' ? false : pool.isOpen;
    const closingText = isCurrentlyOpen ? `Closes at ${pool.closingTime}` : 'Closed Today';
    const decision = getDecisionVerdict(pool);

    return `
      <article class="pool-card" data-pool-id="${pool.id}">
        <div class="pool-card-media">
          <img src="${pool.photo}" alt="${pool.name}" loading="lazy" />
          <span class="pool-type-pill">${pool.isIndoor ? '🏠 Indoor' : '☀️ Outdoor'}</span>
          <button class="pool-card-favorite-btn ${isSaved ? 'saved' : ''}" data-fav-id="${pool.id}" title="Save pool">
            ${isSaved ? getSvgIcon('heart-fill', 18) : getSvgIcon('heart', 18)}
          </button>
          <div class="pool-card-distance-tag">
            ${getSvgIcon('map-pin', 12)}
            <span>${pool.distanceKm.toFixed(1)} km</span>
          </div>
        </div>

        <div class="pool-card-body">
          <div class="pool-card-header">
            <h3 class="pool-card-title">${pool.name}</h3>
            <span class="pool-card-chevron">${getSvgIcon('chevron-right', 18)}</span>
          </div>
          <div class="pool-card-suburb">${pool.suburb}</div>

          <div class="pool-card-indicators">
            ${getStatusIndicatorBadge(pool)}
            ${getCrowdBadge(pool)}
            <div class="closing-pill">
              ${getSvgIcon('clock', 12)}
              <span>${closingText}</span>
            </div>
          </div>

          <div class="pool-card-price-row">
            <span class="pool-card-price-chip">🎟️ ${pool.rateAdult ? `Adult ${pool.rateAdult} • Child ${pool.rateChild}` : pool.pricing}</span>
          </div>

          <div class="pool-card-verdict">
            <div class="verdict-tag ${decision.tagClass}">
              <span>${decision.text}</span>
            </div>
            <span class="pool-card-action-text">Details & Directions →</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach card event listeners
  container.querySelectorAll('.pool-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // If heart button was clicked, don't open details
      if (e.target.closest('.pool-card-favorite-btn')) {
        const favBtn = e.target.closest('.pool-card-favorite-btn');
        const poolId = favBtn.dataset.favId;
        toggleFavourite(poolId);
        return;
      }
      const poolId = card.dataset.poolId;
      showPoolDetails(poolId);
    });
  });
}

// Toggle Favourite
function toggleFavourite(poolId) {
  if (state.favourites.includes(poolId)) {
    state.favourites = state.favourites.filter(id => id !== poolId);
  } else {
    state.favourites.push(poolId);
  }
  localStorage.setItem('poolpulse_favourites', JSON.stringify(state.favourites));
  updateBadges();
  renderPoolsList();
  renderFavouritesTab();
  
  // If details view is open for this pool, update button
  if (state.selectedPoolId === poolId && elements.detailsFavBtn) {
    const isSaved = state.favourites.includes(poolId);
    elements.detailsFavBtn.innerHTML = isSaved ? getSvgIcon('heart-fill', 20) : getSvgIcon('heart', 20);
    elements.detailsFavBtn.style.color = isSaved ? '#e11d48' : 'var(--text-primary)';
  }
}

// Update Nav Badges
function updateBadges() {
  if (elements.favouritesBadge) {
    elements.favouritesBadge.textContent = state.favourites.length;
    elements.favouritesBadge.style.display = state.favourites.length > 0 ? 'inline-block' : 'none';
  }
  if (elements.alertsBadge) {
    elements.alertsBadge.textContent = '5';
  }
}

// Show Pool Details Screen
function showPoolDetails(poolId) {
  const pool = POOLS_DATA.find(p => p.id === poolId);
  if (!pool) return;
  state.selectedPoolId = poolId;

  // Populate hero & header
  elements.detailsHeroImg.src = pool.photo;
  elements.detailsHeroImg.alt = pool.name;
  elements.detailsPoolTitle.textContent = pool.name;
  elements.detailsDistanceBadge.innerHTML = `${getSvgIcon('map-pin', 12)} ${pool.distanceKm.toFixed(1)} km away`;
  elements.detailsSuburbAddress.textContent = `${pool.address}`;

  // Favorite button state
  const isSaved = state.favourites.includes(pool.id);
  elements.detailsFavBtn.innerHTML = isSaved ? getSvgIcon('heart-fill', 20) : getSvgIcon('heart', 20);
  elements.detailsFavBtn.style.color = isSaved ? '#e11d48' : 'var(--text-primary)';

  // Status & Crowd grid boxes
  const isCurrentlyOpen = state.timeSimulator === 'closed' ? false : pool.isOpen;
  const statusBoxClass = isCurrentlyOpen ? 'open-box' : 'closed-box';
  const statusText = isCurrentlyOpen ? `Open • Closes at ${pool.closingTime}` : (pool.isUnderMaintenance ? 'Closed • Major Works' : 'Closed Today');

  let crowdMeterColor = 'low';
  if (pool.crowdCapacity > 40) crowdMeterColor = 'moderate';
  if (pool.crowdCapacity > 75) crowdMeterColor = 'busy';
  if (pool.crowdCapacity > 90) crowdMeterColor = 'full';

  elements.detailsStatGrid.innerHTML = `
    <div class="stat-box ${statusBoxClass}">
      <div class="stat-box-label">
        <span class="status-dot"></span>
        <span>${isCurrentlyOpen ? 'Open Now' : 'Closed'}</span>
      </div>
      <div class="stat-box-sub">${statusText}</div>
    </div>

    <div class="stat-box">
      <div class="stat-box-label" style="color: var(--primary-blue);">
        ${getSvgIcon('users', 14)}
        <span>${isCurrentlyOpen ? pool.crowdLevel : 'No access'}</span>
      </div>
      <div class="stat-box-sub">${isCurrentlyOpen ? `${pool.crowdCapacityLabel} (${pool.crowdCapacity}%)` : 'Facility closed'}</div>
      ${isCurrentlyOpen ? `
        <div class="crowd-meter-container">
          <div class="crowd-meter-track">
            <div class="crowd-meter-fill ${crowdMeterColor}" style="width: ${pool.crowdCapacity}%;"></div>
          </div>
        </div>
      ` : ''}
    </div>
  `;

  // "Should You Go?" Decision Card
  const decision = pool.worthTravelling;
  const decisionVerdict = isCurrentlyOpen ? decision.verdict : 'NO';
  const decisionClass = isCurrentlyOpen ? decision.badgeClass : 'verdict-no';
  const decisionTitle = isCurrentlyOpen ? decision.title : 'DO NOT TRAVEL - POOL CLOSED';
  const decisionReason = isCurrentlyOpen ? decision.reason : 'This pool is currently closed per the official Recreation and Parks Department schedule.';

  elements.detailsDecisionCard.className = `decision-card ${decisionClass}`;
  elements.detailsDecisionCard.innerHTML = `
    <div class="decision-header">
      <span class="decision-badge">VERDICT: ${decisionVerdict}</span>
      <h4 class="decision-title">${decisionTitle}</h4>
    </div>
    <p class="decision-reason">${decisionReason}</p>
  `;

  // Hours Card
  elements.detailsHoursList.innerHTML = pool.operatingHoursDetails.map(item => `
    <div class="hours-item">
      <span class="hours-label">${item.label}</span>
      <span class="hours-value">${item.value}</span>
    </div>
  `).join('') + `
    <div class="hours-notice">
      ${getSvgIcon('alert-triangle', 12)} Note: Ticket sales close promptly at 16:30 daily.
    </div>
  `;

  // Weather at Pool (live)
  renderDetailsWeather(pool);

  // Maintenance Info
  const isClean = !pool.isUnderMaintenance;
  elements.detailsMaintenanceBox.innerHTML = `
    <span class="maintenance-status-badge ${isClean ? 'clean' : 'warning'}">
      ${getSvgIcon(isClean ? 'check-circle' : 'wrench', 12)} ${pool.maintenanceStatus}
    </span>
    <p class="maintenance-info-box">${pool.maintenanceDetails}</p>
  `;

  // Amenities
  elements.detailsAmenitiesCloud.innerHTML = pool.amenities.map(a => `
    <span class="amenity-tag">${getSvgIcon('check-circle', 11)} ${a}</span>
  `).join('');

  // Pricing & Tariffs Breakdown
  if (pool.isOpen) {
    elements.detailsPricing.innerHTML = `
      <div class="tariffs-grid">
        <div class="tariff-card">
          <span class="tariff-user-type">Adult (16+ yrs)</span>
          <span class="tariff-price">${pool.rateAdult || 'R9.00'}</span>
          <span class="tariff-subtext">Per admission</span>
        </div>
        <div class="tariff-card">
          <span class="tariff-user-type">Child (3–15 yrs)</span>
          <span class="tariff-price">${pool.rateChild || 'R3.00'}</span>
          <span class="tariff-subtext">Per admission</span>
        </div>
        <div class="tariff-card free">
          <span class="tariff-user-type">Infants (<2 yrs)</span>
          <span class="tariff-price">FREE</span>
          <span class="tariff-subtext">Toddlers & babies</span>
        </div>
        <div class="tariff-card free">
          <span class="tariff-user-type">Pensioners (60+)</span>
          <span class="tariff-price">FREE</span>
          <span class="tariff-subtext">With valid SA ID</span>
        </div>
      </div>
      <div class="tariff-payment-notice ${pool.paymentType && pool.paymentType.includes('Cashless') ? 'cashless' : ''}">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
        <span><strong>Payment:</strong> ${pool.paymentType || 'Cash & Card Accepted'}</span>
      </div>
      <p class="tariff-note">${pool.tariffNotice || 'Official City of Cape Town Recreation and Parks Department tariff.'}</p>
    `;
  } else {
    elements.detailsPricing.innerHTML = `
      <div class="tariff-closed-banner">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
        <div>
          <div style="font-weight: 700; color: var(--status-closed-text);">Facility Currently Closed</div>
          <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${pool.tariffNotice || 'Closed for civil works. Standard tariffs apply upon reopening.'}</div>
        </div>
      </div>
    `;
  }

  // Phone
  elements.detailsPhone.textContent = pool.contactNumber;

  // Timestamp
  elements.detailsLastUpdated.textContent = `Official Recreation & Parks Data • Last updated: ${pool.lastUpdated}`;

  // Switch Screen
  switchScreen('details');
}

// Switch Active Screen
function switchScreen(screenName) {
  state.currentScreen = screenName;

  // Hide all screens
  Object.keys(elements.screens).forEach(key => {
    if (elements.screens[key]) {
      elements.screens[key].classList.remove('active');
    }
  });

  // Show target screen
  if (elements.screens[screenName]) {
    elements.screens[screenName].classList.add('active');
    elements.screens[screenName].scrollTop = 0;
  }

  // Update bottom nav active state
  elements.navBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.screen === screenName);
  });

  // Screen specific triggers
  if (screenName === 'map') {
    initLeafletMap();
  } else if (screenName === 'favourites') {
    renderFavouritesTab();
  } else if (screenName === 'alerts') {
    renderAlertsTab();
  }
}

// ---------------------------------------------------------------------------
// Map: tiles, status-aware pins, filters
// ---------------------------------------------------------------------------
const MAP_TILES = {
  standard: {
    // Free OpenStreetMap tiles (original map)
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    opts: { maxZoom: 19, subdomains: 'abc', attribution: '&copy; OpenStreetMap contributors' }
  },
  satellite: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    opts: { maxZoom: 18, attribution: 'Imagery &copy; Esri' }
  }
};

const STATUS_META = {
  open: { label: 'Open now', z: 300 },
  closed: { label: 'Closed', z: 0 },
  maintenance: { label: 'Major works', z: 100 }
};

const PIN_GLYPHS = {
  // Pool waves = swimmable
  open: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2 7c.6.5 1.2 1 2.5 1C7 8 7 6 9.5 6c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 17c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>`,
  // Padlock = closed
  closed: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`,
  // Traffic cone = works
  maintenance: `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M9.3 6.2 10.5 2h3l1.2 4.2"/><path d="M7.5 12.2 9.3 6.2h5.4l1.8 6"/><path d="M5.7 18.2 7.5 12.2h9l1.8 6"/><path d="M3 22h18"/></svg>`
};

const PIN_BADGES = {
  open: `<svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  closed: `<svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  maintenance: `<span>!</span>`
};

function getPoolStatus(pool) {
  if (pool.isUnderMaintenance) return 'maintenance';
  const isCurrentlyOpen = state.timeSimulator === 'closed' ? false : pool.isOpen;
  return isCurrentlyOpen ? 'open' : 'closed';
}

function createPoolPinIcon(pool, active = false) {
  const status = getPoolStatus(pool);
  return L.divIcon({
    className: 'pp-pin-wrap',
    html: `
      <div class="pp-pin ${status} ${active ? 'active' : ''}" data-pin-pool-id="${pool.id}">
        <div class="pp-pin-head">${PIN_GLYPHS[status]}<span class="pp-pin-badge">${PIN_BADGES[status]}</span></div>
        <div class="pp-pin-tip"></div>
      </div>`,
    iconSize: [40, 50],
    iconAnchor: [20, 48],
    tooltipAnchor: [0, -46]
  });
}

function createUserIcon() {
  return L.divIcon({
    className: 'pp-you-wrap',
    html: `<div class="pp-you"><span class="pp-you-pulse"></span><span class="pp-you-dot"></span></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
}

function fitPools(map, pools = POOLS_DATA, animate = true) {
  if (!pools.length) return;
  const bounds = L.latLngBounds(pools.map(p => [p.lat, p.lng]));
  map.fitBounds(bounds, { paddingTopLeft: [24, 120], paddingBottomRight: [64, 110], animate });
}

function updateMapCounts() {
  const counts = { all: POOLS_DATA.length, open: 0, closed: 0, maintenance: 0 };
  POOLS_DATA.forEach(p => counts[getPoolStatus(p)]++);
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('mapCountAll', counts.all);
  set('mapCountOpen', counts.open);
  set('mapCountClosed', counts.closed);
  set('mapCountWorks', counts.maintenance);
}

function applyMapFilter(filter) {
  state.mapFilter = filter;
  elements.mapFilterChips.forEach(c => c.classList.toggle('active', c.dataset.mapFilter === filter));
  if (!state.mapInstance) return;
  const visible = [];
  POOLS_DATA.forEach(pool => {
    const marker = state.mapMarkers[pool.id];
    if (!marker) return;
    const show = filter === 'all' || getPoolStatus(pool) === filter;
    if (show) {
      visible.push(pool);
      if (!state.mapInstance.hasLayer(marker)) marker.addTo(state.mapInstance);
    } else if (state.mapInstance.hasLayer(marker)) {
      state.mapInstance.removeLayer(marker);
    }
  });
  if (state.activeMapPinId && !visible.find(p => p.id === state.activeMapPinId)) hideMapBottomCard();
  if (filter !== 'all' && visible.length) fitPools(state.mapInstance, visible);
}

function setActivePin(poolId) {
  const prev = state.activeMapPinId;
  if (prev && state.mapMarkers[prev]) {
    const prevPool = POOLS_DATA.find(p => p.id === prev);
    state.mapMarkers[prev].setIcon(createPoolPinIcon(prevPool, false));
    state.mapMarkers[prev].setZIndexOffset(STATUS_META[getPoolStatus(prevPool)].z);
  }
  if (poolId && state.mapMarkers[poolId]) {
    const pool = POOLS_DATA.find(p => p.id === poolId);
    state.mapMarkers[poolId].setIcon(createPoolPinIcon(pool, true));
    state.mapMarkers[poolId].setZIndexOffset(2000);
  }
  state.activeMapPinId = poolId;
}

// Leaflet Map Initialization
function initLeafletMap() {
  if (state.mapInstance) {
    setTimeout(() => {
      state.mapInstance.invalidateSize();
    }, 100);
    return;
  }

  const mapContainer = document.getElementById('leafletMap');
  if (!mapContainer || typeof L === 'undefined') return;

  const map = L.map('leafletMap', {
    zoomControl: false,
    attributionControl: true
  }).setView([-33.97, 18.55], 11);
  map.attributionControl.setPrefix(false);
  map.attributionControl.setPosition('bottomright');

  const tiles = MAP_TILES.standard;
  state.mapTileLayer = L.tileLayer(tiles.url, tiles.opts).addTo(map);
  state.mapInstance = map;

  // User location (Cape Town CBD)
  L.marker([state.userLocation.lat, state.userLocation.lng], { icon: createUserIcon(), zIndexOffset: 500 })
    .addTo(map)
    .bindTooltip('You are here · Cape Town CBD', { direction: 'top', offset: [0, -12], className: 'pp-tooltip' });

  // Pool markers - colour + glyph show availability at a glance
  POOLS_DATA.forEach(pool => {
    const status = getPoolStatus(pool);
    const marker = L.marker([pool.lat, pool.lng], {
      icon: createPoolPinIcon(pool),
      zIndexOffset: STATUS_META[status].z,
      riseOnHover: true,
      keyboard: true,
      title: `${pool.name} – ${STATUS_META[status].label}`
    }).addTo(map);

    marker.bindTooltip(
      `<strong>${pool.name}</strong><span class="tt-status ${status}">${STATUS_META[status].label}</span>`,
      { direction: 'top', className: 'pp-tooltip' }
    );

    marker.on('click', () => {
      showMapBottomCard(pool);
      map.panTo([pool.lat, pool.lng], { animate: true, duration: 0.5 });
    });

    state.mapMarkers[pool.id] = marker;
  });

  // Compact pins when zoomed out so clusters stay readable
  const updateZoomClass = () => {
    mapContainer.classList.toggle('pins-compact', map.getZoom() < 11);
    mapContainer.classList.toggle('pins-mid', map.getZoom() === 11);
  };
  map.on('zoomend', updateZoomClass);

  // Map click closes card
  map.on('click', (e) => {
    if (!e.originalEvent.target.closest('.pp-pin')) {
      hideMapBottomCard();
    }
  });

  updateMapCounts();

  setTimeout(() => {
    map.invalidateSize();
    // Frame the metro area (skips far-flung outliers like Atlantis on first load)
    const metro = POOLS_DATA.filter(p => p.lat < -33.75);
    if (!state.activeMapPinId) fitPools(map, metro.length ? metro : POOLS_DATA, false);
    updateZoomClass();
    if (state.mapFilter !== 'all') applyMapFilter(state.mapFilter);
  }, 200);
}

// Show Map Bottom Card
function showMapBottomCard(pool) {
  setActivePin(pool.id);
  elements.mapCardThumb.src = pool.photo;
  elements.mapCardThumb.alt = pool.name;
  elements.mapCardName.textContent = pool.name;

  const status = getPoolStatus(pool);
  const pillClass = status === 'open' ? 'green' : status === 'maintenance' ? 'orange' : 'red';
  elements.mapCardStatus.innerHTML = `<span class="status-pill ${pillClass}"><span class="status-dot"></span>${STATUS_META[status].label}</span>`;

  elements.mapCardCrowd.innerHTML = status === 'open'
    ? `<span class="crowd-pill">${getSvgIcon('users', 12)} ${pool.crowdLevel}</span>`
    : `<span class="crowd-pill">${getSvgIcon('clock', 12)} ${status === 'maintenance' ? 'Upgrades underway' : 'Not open today'}</span>`;

  const live = state.weather?.pools?.[pool.id];
  const wxText = live
    ? `<span class="map-card-wx">${weatherIcon(describeWeather(live.weather_code, live.is_day).iconKey, 14)} ${Math.round(live.temperature_2m)}°C</span>`
    : '';
  elements.mapCardDistance.innerHTML = `<span>${getSvgIcon('map-pin', 12)} ${pool.distanceKm.toFixed(1)} km</span>${wxText}`;

  elements.mapBottomCard.classList.add('visible');
  elements.mapViewContainer?.classList.add('card-open');
}

function hideMapBottomCard() {
  setActivePin(null);
  elements.mapBottomCard.classList.remove('visible');
  elements.mapViewContainer?.classList.remove('card-open');
}

// Switch Map Layers (Standard Map vs Satellite)
function setMapStyle(style) {
  if (!state.mapInstance) return;
  state.mapLayerType = style;

  elements.mapToggleBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.style === style);
  });

  if (state.mapTileLayer) {
    state.mapInstance.removeLayer(state.mapTileLayer);
  }

  const tiles = MAP_TILES[style] || MAP_TILES.standard;
  state.mapTileLayer = L.tileLayer(tiles.url, tiles.opts).addTo(state.mapInstance);
}

// Directions Screen (Screen 4 from Reference Mockup)
function showDirectionsScreen(poolId) {
  const pool = POOLS_DATA.find(p => p.id === poolId);
  if (!pool) return;
  state.selectedPoolId = poolId;

  // Set pool summary info
  elements.routePoolThumb.src = pool.photo;
  elements.routePoolName.textContent = pool.name;
  elements.routePoolAddress.textContent = `${pool.address}`;
  elements.routeEtaText.textContent = `${pool.driveTimeMin} min (${pool.distanceKm.toFixed(1)} km) via ${pool.viaRoad}`;

  switchScreen('directions');

  // Initialize Route Map
  initRouteMap(pool);
}

function initRouteMap(pool) {
  const container = document.getElementById('routeMapElement');
  if (!container || typeof L === 'undefined') return;

  if (state.routeMapInstance) {
    state.routeMapInstance.remove();
    state.routeMapInstance = null;
  }

  const routeMap = L.map('routeMapElement', {
    zoomControl: false,
    attributionControl: false
  });

  const routeTiles = MAP_TILES.standard;
  L.tileLayer(routeTiles.url, routeTiles.opts).addTo(routeMap);

  // Origin Marker
  const originMarker = L.marker([state.userLocation.lat, state.userLocation.lng], {
    icon: createUserIcon()
  }).addTo(routeMap).bindTooltip("Your Location", { permanent: true, direction: "bottom", className: 'pp-tooltip' });

  // Destination Marker
  const destMarker = L.marker([pool.lat, pool.lng], {
    icon: createPoolPinIcon(pool, true)
  }).addTo(routeMap).bindTooltip(pool.name, { permanent: true, direction: "top", className: 'pp-tooltip' });

  // Generate realistic route curve between origin and destination
  const waypoints = [
    [state.userLocation.lat, state.userLocation.lng],
    [state.userLocation.lat + (pool.lat - state.userLocation.lat) * 0.35 + 0.005, state.userLocation.lng + (pool.lng - state.userLocation.lng) * 0.35 - 0.004],
    [state.userLocation.lat + (pool.lat - state.userLocation.lat) * 0.7 - 0.003, state.userLocation.lng + (pool.lng - state.userLocation.lng) * 0.7 + 0.002],
    [pool.lat, pool.lng]
  ];

  const polyline = L.polyline(waypoints, {
    color: '#0066cc',
    weight: 6,
    opacity: 0.85,
    lineCap: 'round',
    lineJoin: 'round',
    dashArray: null
  }).addTo(routeMap);

  routeMap.fitBounds(polyline.getBounds(), { padding: [50, 50] });
  state.routeMapInstance = routeMap;

  setTimeout(() => {
    routeMap.invalidateSize();
  }, 200);
}

// Render Favourites Tab
function renderFavouritesTab() {
  const container = elements.favouritesListContainer;
  const emptyState = elements.emptyFavouritesState;
  if (!container || !emptyState) return;

  const savedPools = POOLS_DATA.filter(p => state.favourites.includes(p.id));

  if (savedPools.length === 0) {
    container.innerHTML = '';
    emptyState.style.display = 'flex';
    return;
  }

  emptyState.style.display = 'none';
  container.innerHTML = savedPools.map(pool => {
    const isCurrentlyOpen = state.timeSimulator === 'closed' ? false : pool.isOpen;
    const decision = getDecisionVerdict(pool);
    return `
      <article class="pool-card" data-pool-id="${pool.id}">
        <div class="pool-card-media">
          <img src="${pool.photo}" alt="${pool.name}" />
          <span class="pool-type-pill">${pool.isIndoor ? '🏠 Indoor' : '☀️ Outdoor'}</span>
          <button class="pool-card-favorite-btn saved" data-fav-id="${pool.id}" title="Remove from saved">
            ${getSvgIcon('heart-fill', 18)}
          </button>
          <div class="pool-card-distance-tag">
            ${getSvgIcon('map-pin', 12)}
            <span>${pool.distanceKm.toFixed(1)} km</span>
          </div>
        </div>

        <div class="pool-card-body">
          <div class="pool-card-header">
            <h3 class="pool-card-title">${pool.name}</h3>
            <span class="pool-card-chevron">${getSvgIcon('chevron-right', 18)}</span>
          </div>
          <div class="pool-card-suburb">${pool.suburb}</div>

          <div class="pool-card-indicators">
            ${getStatusIndicatorBadge(pool)}
            ${getCrowdBadge(pool)}
            <div class="closing-pill">
              ${getSvgIcon('clock', 12)}
              <span>${isCurrentlyOpen ? `Closes ${pool.closingTime}` : 'Closed'}</span>
            </div>
          </div>

          <div class="pool-card-price-row">
            <span class="pool-card-price-chip">🎟️ ${pool.rateAdult ? `Adult ${pool.rateAdult} • Child ${pool.rateChild}` : pool.pricing}</span>
          </div>

          <div class="pool-card-verdict">
            <div class="verdict-tag ${decision.tagClass}">
              <span>${decision.text}</span>
            </div>
            <span class="pool-card-action-text">View Pool →</span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  container.querySelectorAll('.pool-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.pool-card-favorite-btn')) {
        const poolId = e.target.closest('.pool-card-favorite-btn').dataset.favId;
        toggleFavourite(poolId);
        return;
      }
      showPoolDetails(card.dataset.poolId);
    });
  });
}

// Render Alerts Tab
function renderAlertsTab() {
  if (!elements.closedPoolsList || !elements.unplannedPoolsList) return;

  const majorWorks = CLOSED_POOLS_SCHEDULE[0].pools;
  const unplannedWorks = CLOSED_POOLS_SCHEDULE[1].pools;

  elements.closedPoolsList.innerHTML = majorWorks.map(pool => `
    <div class="closed-pool-card">
      <div>
        <h4 class="closed-pool-name">${pool.name} Swimming Pool</h4>
        <p class="closed-pool-note">${pool.note}</p>
      </div>
      <div class="closed-pool-actions">
        <span class="status-pill red"><span class="status-dot"></span>Closed</span>
        <a href="tel:${pool.phone}" class="quick-call-btn" title="Call ${pool.phone}" style="width: 32px; height: 32px;">
          ${getSvgIcon('phone', 14)}
        </a>
      </div>
    </div>
  `).join('');

  elements.unplannedPoolsList.innerHTML = unplannedWorks.map(pool => `
    <div class="closed-pool-card">
      <div>
        <h4 class="closed-pool-name">${pool.name} Swimming Pool</h4>
        <p class="closed-pool-note">${pool.note}</p>
      </div>
      <div class="closed-pool-actions">
        <span class="status-pill orange"><span class="status-dot"></span>Opening Later</span>
        <a href="tel:${pool.phone}" class="quick-call-btn" title="Call ${pool.phone}" style="width: 32px; height: 32px;">
          ${getSvgIcon('phone', 14)}
        </a>
      </div>
    </div>
  `).join('');
}

// Call Pool Functionality
function handleCallPool(poolId) {
  const pool = POOLS_DATA.find(p => p.id === poolId);
  if (!pool) return;
  
  const cleanNumber = pool.contactNumber.replace(/\s+/g, '');
  const confirmed = confirm(`Call ${pool.name} directly at ${pool.contactNumber}?\n\n(Recreation and Parks facility management)`);
  if (confirmed) {
    window.location.href = `tel:${cleanNumber}`;
  }
}

// Share Functionality
function handleSharePool(poolId) {
  const pool = POOLS_DATA.find(p => p.id === poolId);
  if (!pool) return;
  
  const shareText = `Check status for ${pool.name} on PoolPulse Cape Town:\nCurrently ${pool.isOpen ? 'OPEN' : 'CLOSED'} • Crowd: ${pool.crowdLevel} • Hours: ${pool.operatingHoursToday}`;
  
  if (navigator.share) {
    navigator.share({
      title: `${pool.name} - PoolPulse Cape Town`,
      text: shareText,
      url: window.location.href
    }).catch(() => {});
  } else {
    navigator.clipboard.writeText(shareText);
    alert(`Link and pool status copied to clipboard!\n\n${shareText}`);
  }
}

// ---------------------------------------------------------------------------
// Live weather (Open-Meteo)
// ---------------------------------------------------------------------------
function formatClock(date) {
  return date.toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Africa/Johannesburg' });
}

async function refreshWeather(force = false) {
  elements.weatherHero?.classList.add('is-loading');
  elements.homeWeatherBadge?.classList.add('is-refreshing');
  try {
    state.weather = await loadWeather(POOLS_DATA, { force });
    state.weatherError = null;
  } catch (err) {
    console.warn('Live weather unavailable:', err);
    state.weatherError = err;
  } finally {
    elements.weatherHero?.classList.remove('is-loading');
    elements.homeWeatherBadge?.classList.remove('is-refreshing');
  }
  renderWeather();
  if (state.currentScreen === 'details') {
    const pool = POOLS_DATA.find(p => p.id === state.selectedPoolId);
    if (pool) renderDetailsWeather(pool);
  }
}

function renderWeather() {
  const w = state.weather;
  const hero = elements.weatherHero;

  if (!w || !w.city?.current) {
    if (hero) {
      hero.className = 'weather-hero wx-cloudy is-error';
      elements.whTemp.textContent = '--°';
      elements.whCond.textContent = 'Live weather unavailable';
      elements.whFeels.textContent = 'Check your connection and try again.';
      elements.whIcon.innerHTML = weatherIcon('cloudy', 56);
      elements.whStats.innerHTML = '';
      elements.whHourly.innerHTML = '';
      elements.whVerdict.innerHTML = '';
      elements.whFooter.innerHTML = `<button class="wh-refresh" data-wx-refresh type="button">Retry</button>`;
    }
    if (elements.homeWeatherTemp) elements.homeWeatherTemp.textContent = '--°';
    if (elements.splashWeatherText) elements.splashWeatherText.textContent = 'Weather unavailable';
    return;
  }

  const c = w.city.current;
  const d = w.city.daily;
  const h = w.city.hourly;
  const wx = describeWeather(c.weather_code, c.is_day);
  const temp = Math.round(c.temperature_2m);

  // Header badge + splash
  if (elements.homeWeatherIcon) elements.homeWeatherIcon.innerHTML = weatherIcon(wx.iconKey, 16);
  if (elements.homeWeatherTemp) elements.homeWeatherTemp.textContent = `${temp}°C`;
  if (elements.homeWeatherBadge) elements.homeWeatherBadge.title = `${wx.label} · tap to refresh`;
  if (elements.splashWeatherIcon) elements.splashWeatherIcon.innerHTML = weatherIcon(wx.iconKey, 20);
  if (elements.splashWeatherText) elements.splashWeatherText.textContent = `${temp}°C ${wx.label}`;

  if (!hero) return;
  hero.className = `weather-hero wx-${wx.kind} ${c.is_day ? 'is-day' : 'is-night'}`;
  elements.whTemp.textContent = `${temp}°`;
  elements.whCond.textContent = wx.label;
  elements.whFeels.textContent = `Feels like ${Math.round(c.apparent_temperature)}° · H ${Math.round(d.temperature_2m_max[0])}° L ${Math.round(d.temperature_2m_min[0])}°`;
  elements.whIcon.innerHTML = weatherIcon(wx.iconKey, 60);

  const sunset = d.sunset?.[0] ? d.sunset[0].slice(11, 16) : '--:--';
  const stat = (label, value, icon) => `
    <div class="wh-stat">
      <span class="wh-stat-icon">${icon}</span>
      <span class="wh-stat-val">${value}</span>
      <span class="wh-stat-label">${label}</span>
    </div>`;
  const ico = (path) => `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
  elements.whStats.innerHTML =
    stat('Wind', `${Math.round(c.wind_speed_10m)} km/h ${windDirection(c.wind_direction_10m)}`, ico('<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>')) +
    stat('UV index', `${Math.round(c.uv_index)} · ${uvLabel(c.uv_index)}`, ico('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>')) +
    stat('Humidity', `${c.relative_humidity_2m}%`, ico('<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>')) +
    stat('Sunset', sunset, ico('<path d="M12 10V2M4.93 10.93l1.41 1.41M2 18h2M20 18h2M19.07 10.93l-1.41 1.41M22 22H2M16 6l-4 4-4-4M16 18a4 4 0 0 0-8 0"/>'));

  // Next hours
  if (h?.time) {
    let idx = h.time.findIndex(t => t.slice(0, 13) === c.time.slice(0, 13));
    if (idx < 0) idx = 0;
    const slots = h.time.slice(idx, idx + 7).map((t, i) => {
      const j = idx + i;
      const hwx = describeWeather(h.weather_code[j], h.is_day ? h.is_day[j] : 1);
      const rain = h.precipitation_probability ? h.precipitation_probability[j] : 0;
      return `
        <div class="wh-hour ${i === 0 ? 'now' : ''}">
          <span class="wh-hour-time">${i === 0 ? 'Now' : t.slice(11, 16)}</span>
          <span class="wh-hour-icon">${weatherIcon(hwx.iconKey, 20)}</span>
          <span class="wh-hour-temp">${Math.round(h.temperature_2m[j])}°</span>
          ${rain >= 20 ? `<span class="wh-hour-rain">${rain}%</span>` : ''}
        </div>`;
    });
    elements.whHourly.innerHTML = slots.join('');
  }

  // Swim advice
  const advice = swimAdvice(c);
  const btnLabel = advice.filter === 'indoor' ? 'Show indoor pools' : 'Show outdoor pools';
  elements.whVerdict.innerHTML = `
    <div class="wh-advice tone-${advice.tone}">
      <div class="wh-advice-text">
        <strong>${advice.title}</strong>
        <span>${advice.text}</span>
      </div>
      ${advice.filter ? `<button class="wh-advice-btn" data-wx-filter="${advice.filter}" type="button">${btnLabel}</button>` : ''}
    </div>`;

  elements.whFooter.innerHTML = `
    <span>Updated ${formatClock(new Date(w.fetchedAt))} · Live data by Open-Meteo</span>
    <button class="wh-refresh" data-wx-refresh type="button" title="Refresh weather" aria-label="Refresh weather">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>
    </button>`;
}

function renderDetailsWeather(pool) {
  const grid = elements.detailsWeatherGrid;
  if (!grid) return;
  const live = state.weather?.pools?.[pool.id] || state.weather?.city?.current;
  const waterTemp = pool.weatherAtPool?.waterTemp || '–';

  if (!live) {
    grid.innerHTML = `
      <div class="weather-metric-item wm-hero">
        <div class="wm-hero-text">
          <div class="weather-metric-val">${state.weatherError ? 'Live weather unavailable' : 'Loading live weather…'}</div>
          <div class="weather-metric-title">Pool water (est.): ${waterTemp}</div>
        </div>
      </div>`;
    return;
  }

  const wx = describeWeather(live.weather_code, live.is_day);
  grid.innerHTML = `
    <div class="weather-metric-item wm-hero wx-${wx.kind}">
      <span class="wm-hero-icon">${weatherIcon(wx.iconKey, 36)}</span>
      <div class="wm-hero-text">
        <div class="wm-hero-temp">${Math.round(live.temperature_2m)}°C</div>
        <div class="weather-metric-title">${wx.label} · feels like ${Math.round(live.apparent_temperature)}°</div>
      </div>
      <span class="wm-live"><span class="live-dot"></span>Live</span>
    </div>
    <div class="weather-metric-item">
      <div class="weather-metric-title">Wind</div>
      <div class="weather-metric-val">${Math.round(live.wind_speed_10m)} km/h ${windDirection(live.wind_direction_10m)}</div>
    </div>
    <div class="weather-metric-item">
      <div class="weather-metric-title">UV index</div>
      <div class="weather-metric-val">${Math.round(live.uv_index)} · ${uvLabel(live.uv_index)}</div>
    </div>
    <div class="weather-metric-item">
      <div class="weather-metric-title">Humidity</div>
      <div class="weather-metric-val">${live.relative_humidity_2m}%</div>
    </div>
    <div class="weather-metric-item">
      <div class="weather-metric-title">Pool water (est.)</div>
      <div class="weather-metric-val">${waterTemp}</div>
    </div>`;
}

// Event Listeners Setup
function setupEventListeners() {
  // Splash Start
  if (elements.splashStartBtn) {
    elements.splashStartBtn.addEventListener('click', () => {
      elements.splashModal.classList.add('hidden');
    });
  }

  if (elements.splashWeatherPill) {
    elements.splashWeatherPill.addEventListener('click', () => {
      elements.splashModal.classList.add('hidden');
    });
  }

  // Bottom Navigation
  elements.navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const screen = btn.dataset.screen;
      switchScreen(screen);
    });
  });

  // Search input
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (elements.clearSearchBtn) {
        elements.clearSearchBtn.classList.toggle('visible', state.searchQuery.length > 0);
      }
      renderPoolsList();
    });
  }

  if (elements.clearSearchBtn) {
    elements.clearSearchBtn.addEventListener('click', () => {
      state.searchQuery = '';
      elements.searchInput.value = '';
      elements.clearSearchBtn.classList.remove('visible');
      renderPoolsList();
      elements.searchInput.focus();
    });
  }

  // Filter Chips
  elements.filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      elements.filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeFilter = chip.dataset.filter;
      renderPoolsList();
    });
  });

  // Maintenance Banner on Home
  if (elements.maintenanceBanner) {
    elements.maintenanceBanner.addEventListener('click', () => {
      switchScreen('alerts');
    });
  }

  // Explore Pools button from empty favorites
  if (elements.explorePoolsBtn) {
    elements.explorePoolsBtn.addEventListener('click', () => {
      switchScreen('home');
    });
  }

  // Details Back Button
  if (elements.detailsBackBtn) {
    elements.detailsBackBtn.addEventListener('click', () => {
      switchScreen('home');
    });
  }

  // Details Favorite Button
  if (elements.detailsFavBtn) {
    elements.detailsFavBtn.addEventListener('click', () => {
      toggleFavourite(state.selectedPoolId);
    });
  }

  // Details Share Button
  if (elements.detailsShareBtn) {
    elements.detailsShareBtn.addEventListener('click', () => {
      handleSharePool(state.selectedPoolId);
    });
  }

  // Details Get Directions Button
  if (elements.detailsGetDirectionsBtn) {
    elements.detailsGetDirectionsBtn.addEventListener('click', () => {
      showDirectionsScreen(state.selectedPoolId);
    });
  }

  // Details Call Pool Button
  if (elements.detailsCallPoolBtn) {
    elements.detailsCallPoolBtn.addEventListener('click', () => {
      handleCallPool(state.selectedPoolId);
    });
  }

  // Details View on Map Button
  if (elements.detailsViewOnMapBtn) {
    elements.detailsViewOnMapBtn.addEventListener('click', () => {
      switchScreen('map');
      const pool = POOLS_DATA.find(p => p.id === state.selectedPoolId);
      if (pool && state.mapInstance) {
        state.mapInstance.setView([pool.lat, pool.lng], 13);
        showMapBottomCard(pool);
      }
    });
  }

  // Map Screen Controls
  if (elements.mapCardCloseBtn) {
    elements.mapCardCloseBtn.addEventListener('click', hideMapBottomCard);
  }

  if (elements.mapCardDirectionsBtn) {
    elements.mapCardDirectionsBtn.addEventListener('click', () => {
      if (state.activeMapPinId) {
        showDirectionsScreen(state.activeMapPinId);
      }
    });
  }

  if (elements.mapCardDetailsBtn) {
    elements.mapCardDetailsBtn.addEventListener('click', () => {
      if (state.activeMapPinId) {
        showPoolDetails(state.activeMapPinId);
      }
    });
  }

  // Map Style Toggle
  elements.mapToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setMapStyle(btn.dataset.style);
    });
  });

  // Directions Back Button
  if (elements.directionsBackBtn) {
    elements.directionsBackBtn.addEventListener('click', () => {
      showPoolDetails(state.selectedPoolId);
    });
  }

  // Directions Call Pool Button
  if (elements.routeCallPoolBtn) {
    elements.routeCallPoolBtn.addEventListener('click', () => {
      handleCallPool(state.selectedPoolId);
    });
  }

  // Start Navigation Button
  if (elements.startNavBtn) {
    elements.startNavBtn.addEventListener('click', () => {
      const pool = POOLS_DATA.find(p => p.id === state.selectedPoolId);
      if (!pool) return;
      
      const navConfirm = confirm(
        `Starting GPS Navigation to ${pool.name}!\n\n` +
        `Distance: ${pool.distanceKm.toFixed(1)} km\n` +
        `Estimated drive: ${pool.driveTimeMin} min via ${pool.viaRoad}\n\n` +
        `Open destination in Google Maps / Navigation app?`
      );
      if (navConfirm) {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${pool.lat},${pool.lng}`, '_blank');
      }
    });
  }

  // Map filters & controls
  elements.mapFilterChips.forEach(chip => {
    chip.addEventListener('click', () => applyMapFilter(chip.dataset.mapFilter));
  });
  elements.mapZoomInBtn?.addEventListener('click', () => state.mapInstance?.zoomIn());
  elements.mapZoomOutBtn?.addEventListener('click', () => state.mapInstance?.zoomOut());
  elements.mapRecenterBtn?.addEventListener('click', () => {
    if (!state.mapInstance) return;
    const visible = POOLS_DATA.filter(p => state.mapFilter === 'all' || getPoolStatus(p) === state.mapFilter);
    fitPools(state.mapInstance, visible.length ? visible : POOLS_DATA);
  });

  // Live weather interactions
  elements.homeWeatherBadge?.addEventListener('click', () => refreshWeather(true));
  elements.weatherHero?.addEventListener('click', (e) => {
    if (e.target.closest('[data-wx-refresh]')) {
      refreshWeather(true);
      return;
    }
    const filterBtn = e.target.closest('[data-wx-filter]');
    if (filterBtn) {
      const filter = filterBtn.dataset.wxFilter;
      state.activeFilter = filter;
      elements.filterChips.forEach(c => c.classList.toggle('active', c.dataset.filter === filter));
      renderPoolsList();
      document.querySelector('.home-section-header')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// App Initialization
function initApp() {
  updateBadges();
  setupEventListeners();
  renderPoolsList();
  refreshWeather();
  setInterval(() => refreshWeather(true), WEATHER_REFRESH_MS);
}

document.addEventListener('DOMContentLoaded', initApp);

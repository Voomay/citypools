// PoolPulse Cape Town - Live Weather Service
// Real-time weather from Open-Meteo (https://open-meteo.com) - free, no API key required.

const API_URL = 'https://api.open-meteo.com/v1/forecast';
const CACHE_KEY = 'poolpulse_weather_v1';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

export const CAPE_TOWN = { lat: -33.9249, lng: 18.4241 };

// WMO weather code -> label + icon key
const WMO = {
  0: ['Clear sky', 'clear'],
  1: ['Mostly sunny', 'clear'],
  2: ['Partly cloudy', 'partly'],
  3: ['Overcast', 'cloudy'],
  45: ['Fog', 'fog'], 48: ['Freezing fog', 'fog'],
  51: ['Light drizzle', 'rain'], 53: ['Drizzle', 'rain'], 55: ['Heavy drizzle', 'rain'],
  56: ['Freezing drizzle', 'rain'], 57: ['Freezing drizzle', 'rain'],
  61: ['Light rain', 'rain'], 63: ['Rain', 'rain'], 65: ['Heavy rain', 'rain'],
  66: ['Freezing rain', 'rain'], 67: ['Freezing rain', 'rain'],
  71: ['Light snow', 'snow'], 73: ['Snow', 'snow'], 75: ['Heavy snow', 'snow'], 77: ['Snow grains', 'snow'],
  80: ['Light showers', 'rain'], 81: ['Showers', 'rain'], 82: ['Heavy showers', 'rain'],
  85: ['Snow showers', 'snow'], 86: ['Snow showers', 'snow'],
  95: ['Thunderstorm', 'storm'], 96: ['Thunderstorm & hail', 'storm'], 99: ['Thunderstorm & hail', 'storm']
};

export function describeWeather(code, isDay = 1) {
  const [label, kind] = WMO[code] || ['Unknown', 'cloudy'];
  const iconKey = kind === 'clear' && !isDay ? 'moon' : (kind === 'partly' && !isDay ? 'moon-cloud' : kind);
  return { label, kind, iconKey, isRain: kind === 'rain' || kind === 'storm' };
}

export function windDirection(deg) {
  const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return dirs[Math.round(deg / 45) % 8];
}

export function uvLabel(uv) {
  if (uv < 3) return 'Low';
  if (uv < 6) return 'Moderate';
  if (uv < 8) return 'High';
  if (uv < 11) return 'Very high';
  return 'Extreme';
}

export function weatherIcon(key, size = 24) {
  const a = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
  const sun = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>';
  const cloud = '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>';
  const icons = {
    clear: `<svg ${a} class="wx-ico wx-sun">${sun}</svg>`,
    moon: `<svg ${a} class="wx-ico"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
    partly: `<svg ${a} class="wx-ico"><path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M19.07 4.93l-1.41 1.41M15.95 12.65a4 4 0 0 0-5.93-4.61"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/></svg>`,
    'moon-cloud': `<svg ${a} class="wx-ico"><path d="M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"/><path d="M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197"/></svg>`,
    cloudy: `<svg ${a} class="wx-ico">${cloud}</svg>`,
    fog: `<svg ${a} class="wx-ico"><path d="M4 14.9A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.24"/><path d="M16 17H7M17 21H9"/></svg>`,
    rain: `<svg ${a} class="wx-ico"><path d="M4 14.9A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.24"/><path d="M16 14v6M8 14v6M12 16v6"/></svg>`,
    snow: `<svg ${a} class="wx-ico"><path d="M4 14.9A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.24"/><path d="M8 15h.01M8 19h.01M12 17h.01M12 21h.01M16 15h.01M16 19h.01"/></svg>`,
    storm: `<svg ${a} class="wx-ico"><path d="M6 16.33A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.97"/><path d="m13 12-3 5h4l-3 5"/></svg>`
  };
  return icons[key] || icons.cloudy;
}

// Simple, honest "is it a good swim day?" guidance based on live conditions
export function swimAdvice(current) {
  const t = current.temperature_2m;
  const wind = current.wind_speed_10m;
  const uv = current.uv_index;
  const wx = describeWeather(current.weather_code, current.is_day);
  let tone = 'good', title, text, filter = null;

  if (wx.kind === 'storm') {
    tone = 'bad'; title = 'Thunderstorms around'; text = 'Outdoor pools close during lightning. Try an indoor pool.'; filter = 'indoor';
  } else if (wx.isRain) {
    tone = 'meh'; title = 'Rain about'; text = 'Indoor pools are your best bet today.'; filter = 'indoor';
  } else if (t < 18) {
    tone = 'meh'; title = 'Chilly for outdoor swimming'; text = `It feels like ${Math.round(current.apparent_temperature)}°C. Indoor pools will be more comfortable.`; filter = 'indoor';
  } else if (wind >= 30) {
    tone = 'meh'; title = 'Windy out there'; text = `Wind at ${Math.round(wind)} km/h will feel cold out of the water.`; filter = 'indoor';
  } else if (t < 24) {
    tone = 'good'; title = 'Decent swim weather'; text = 'Mild conditions. Bring a warm towel for after your swim.'; filter = 'outdoor';
  } else {
    tone = 'great'; title = 'Great day for a swim'; text = 'Warm and swimmable. Outdoor pools may be busier.'; filter = 'outdoor';
  }
  if (uv >= 8 && current.is_day) text += ` UV is ${uvLabel(uv).toLowerCase()} — wear sunscreen.`;
  return { tone, title, text, filter };
}

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    return Date.now() - data.fetchedAt < CACHE_TTL_MS ? data : null;
  } catch { return null; }
}

/**
 * Loads live weather for Cape Town (with hourly + daily) and current conditions for each pool.
 * Returns { city, pools: { [poolId]: current }, fetchedAt }
 */
export async function loadWeather(pools, { force = false } = {}) {
  if (!force) {
    const cached = readCache();
    if (cached) return cached;
  }

  const currentVars = 'temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,uv_index,is_day,relative_humidity_2m';
  const common = `&timezone=Africa%2FJohannesburg&wind_speed_unit=kmh`;

  const cityUrl = `${API_URL}?latitude=${CAPE_TOWN.lat}&longitude=${CAPE_TOWN.lng}` +
    `&current=${currentVars}&hourly=temperature_2m,weather_code,is_day,precipitation_probability` +
    `&daily=temperature_2m_max,temperature_2m_min,uv_index_max,sunset,sunrise&forecast_days=2${common}`;

  const lats = pools.map(p => p.lat).join(',');
  const lngs = pools.map(p => p.lng).join(',');
  const poolsUrl = `${API_URL}?latitude=${lats}&longitude=${lngs}&current=${currentVars}${common}`;

  const [cityRes, poolsRes] = await Promise.all([fetch(cityUrl), fetch(poolsUrl)]);
  if (!cityRes.ok) throw new Error(`Weather request failed (${cityRes.status})`);
  const city = await cityRes.json();

  const poolMap = {};
  if (poolsRes.ok) {
    let poolData = await poolsRes.json();
    if (!Array.isArray(poolData)) poolData = [poolData];
    pools.forEach((p, i) => { if (poolData[i]) poolMap[p.id] = poolData[i].current; });
  }

  const result = { city, pools: poolMap, fetchedAt: Date.now() };
  try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(result)); } catch { /* quota */ }
  return result;
}

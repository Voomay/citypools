# City of Cape Town Pools

A mobile-first web app for finding City of Cape Town municipal swimming pools, with open/closed status, crowd levels, maintenance notices, admission tariffs, directions and **live Cape Town weather**.

## Features

- **Live weather** from [Open-Meteo](https://open-meteo.com) (free, no API key): current conditions, hourly forecast, UV, wind, sunset and a "good swim day?" tip. Each pool's details show weather at its own location. Refreshes every 10 minutes.
- **Interactive map** (Leaflet + OpenStreetMap, optional Esri satellite) with status pins:
  - 🟢 Open · 🔴 Closed · 🟠 Major works
  - Filter chips with counts, legend, zoom / show-all controls
- Search, filters (open now, not busy, indoor/outdoor, maintenance, saved), favourites, maintenance & schedule tab, directions.

## Run locally

Requires [Node.js](https://nodejs.org). No dependencies to install.

```bash
node server.js
```

Then open http://localhost:3002 (set `PORT` to change it).

## Structure

```
index.html          App markup
css/styles.css      Base design system
css/modern.css      Modern UI layer (weather hero, map pins, layout)
js/app.js           App logic
js/weather.js       Live weather service (Open-Meteo)
js/pools-data.js    Pools dataset & schedule
assets/             Images, logo, Leaflet vendor files
server.js           Zero-dependency static server
```

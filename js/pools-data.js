// PoolPulse Cape Town - Official Swimming Pools Dataset
// Sourced from City of Cape Town Recreation and Parks Department 2026/27 Schedule
// Last updated: 05 October 2026

export const CITY_WEATHER = {
  temp: 24,
  condition: "Sunny",
  description: "Clear summer skies with a light ocean breeze",
  uvIndex: "8 (Very High)",
  wind: "16 km/h S",
  waterTempAvg: "21°C",
  lastUpdated: "05 October 2026, 17:00 SAST"
};

export const OFFICIAL_SCHEDULE_NOTICE = {
  title: "City of Cape Town Swimming Pools Schedule (2026/27)",
  department: "Recreation and Parks Department",
  lastUpdated: "05 October 2026",
  overview: "Community swimming pools reopen in phases during the summer season to balance public access with ongoing critical infrastructure maintenance.",
  schoolHolidays: {
    period: "23 September - 5 October 2026",
    hours: "Monday to Sunday: 10:00 - 17:00",
    ticketNotice: "Ticket sales close promptly at 16:30 daily."
  },
  thereafterOffPeak: {
    period: "6 October - 1 December 2026",
    weekdays: "Wednesday to Friday: 13:00 - 17:00",
    weekends: "Saturdays & Sundays: 10:00 - 17:00",
    mondayTuesday: "Closed for routine water filtration & chemical balancing"
  },
  summerPeak: {
    period: "From 1 December 2026 - March 2027",
    hours: "Monday to Sunday: 10:00 - 18:00 daily"
  },
  disclaimer: "Re-opening dates and operational hours may be adjusted due to operational and safety requirements.",
  enquiriesEmail: "RP.enquiries@capetown.gov.za"
};

export const POOLS_DATA = [
  {
    "id": "sea-point",
    "name": "Sea Point Swimming Pool",
    "suburb": "Sea Point",
    "address": "Beach Road, Sea Point, Cape Town, 8005",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Treated Saltwater",
    "lat": -33.9218,
    "lng": 18.3846,
    "distanceKm": 6,
    "driveTimeMin": 15,
    "viaRoad": "Beach Rd / M6",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 28,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 439 9272",
    "contactNumberAlt": "021 814 1051",
    "email": "SeaPointPool.Queries@capetown.gov.za",
    "photo": "assets/images/seapoint.jpg",
    "photoAlt": "Real Google photo of Sea Point Swimming Pool on the Atlantic Seaboard",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Facility in full operational service. Main 50m pool and diving tower open.",
    "pricing": "Adults R39.00 • Children R22.00 • Pensioners Free",
    "rateAdult": "R39.00",
    "rateChild": "R22.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Strictly Cashless (Card Only)",
    "tariffNotice": "City of Cape Town specialized premier pool tariff. Cashless facility - card payment only. Children aged 3–15, infants under 2 free, pensioners (60+) free with ID.",
    "weatherAtPool": {
      "temp": 24,
      "condition": "Sunny",
      "waterTemp": "20°C",
      "wind": "14 km/h S (Gentle breeze)",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Great time to visit!",
      "reason": "Low crowd capacity (28%), sunny 24°C weather, and calm ocean conditions. Open until 17:00 (ticket sales stop at 16:30)."
    },
    "amenities": [
      "50m Olympic Saltwater Pool",
      "Springboard & 10m Diving Tower",
      "Two Children Splash Pools",
      "Spectator Pavilion",
      "Certified Lifeguards on Duty",
      "Changing Rooms & Hot Showers",
      "Promenade Kiosks Nearby",
      "Wheelchair Accessible Ramp"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "September School Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      },
      {
        "label": "Thereafter (until 1 Dec)",
        "value": "Wed - Fri: 13:00 - 17:00 | Sat - Sun: 10:00 - 17:00"
      },
      {
        "label": "Ticket Sales Cut-off",
        "value": "Closes at 16:30 daily"
      }
    ],
    "lastUpdated": "Today, 14:30 SAST"
  },
  {
    "id": "muizenberg",
    "name": "Muizenberg Swimming Pool",
    "suburb": "Muizenberg",
    "address": "Beach Road, Muizenberg, Cape Town, 7945",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -34.1086,
    "lng": 18.4716,
    "distanceKm": 24,
    "driveTimeMin": 30,
    "viaRoad": "M3 & Main Rd",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 35,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 427 5096",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/muizenberg.jpg",
    "photoAlt": "Real Google photo of Muizenberg Swimming Pool with water slides",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Both main pool and water slides fully operational for the summer season.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard City of Cape Town community swimming pool tariff. Children (3–15) R3.00, Adults (16+) R9.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 23,
      "condition": "Sunny & Breezy",
      "waterTemp": "21°C",
      "wind": "18 km/h SE",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Great family destination!",
      "reason": "Water slides open, not busy right now (35% capacity), clear False Bay weather."
    },
    "amenities": [
      "Large Outdoor Pavilion Pool",
      "Dual Water Slides",
      "Toddlers Splash Pool",
      "Sunbathing Lawns & Paved Deck",
      "Lifeguards on Duty",
      "Beach Hut Changing Facilities",
      "Right next to Muizenberg Beach"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "September School Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      },
      {
        "label": "Thereafter (until 1 Dec)",
        "value": "Wed - Fri: 13:00 - 17:00 | Sat - Sun: 10:00 - 17:00"
      },
      {
        "label": "Ticket Sales Cut-off",
        "value": "Closes at 16:30 daily"
      }
    ],
    "lastUpdated": "Today, 14:20 SAST"
  },
  {
    "id": "parow-north",
    "name": "Parow North Swimming Pool",
    "suburb": "Parow North",
    "address": "De Grendel Drive, Jan Burger Sport Complex, Parow North, 7500",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.8967,
    "lng": 18.5983,
    "distanceKm": 21,
    "driveTimeMin": 22,
    "viaRoad": "N1 & McIntyre St",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 32,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 814 1166",
    "contactNumberAlt": "021 444 0265",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/parow_north.jpg",
    "photoAlt": "Real Google photo of Parow North Swimming Pool at Jan Burger Sport Complex",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Main 30m pool, kiddies pool, and splash pool fully operational. Certified lifeguards on duty.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard City of Cape Town community tariff. Adults (16+) R9.00, Children (3–15) R3.00, Infants & Pensioners (60+) Free.",
    "weatherAtPool": {
      "temp": 25,
      "condition": "Warm & Sunny",
      "waterTemp": "22°C",
      "wind": "11 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Excellent northern suburbs choice!",
      "reason": "Open and ready for swimmers, low crowd level (32%), spacious picnic lawns."
    },
    "amenities": [
      "30m Outdoor Main Pool",
      "Dedicated Kiddies Splash Pool",
      "Spacious Shaded Picnic Lawns",
      "Kiosk & Refreshments",
      "Lifeguards on Duty",
      "Change Rooms & Showers"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "September School Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      },
      {
        "label": "Thereafter (until 1 Dec)",
        "value": "Wed - Fri: 13:00 - 17:00 | Sat - Sun: 10:00 - 17:00"
      },
      {
        "label": "Ticket Sales Cut-off",
        "value": "Closes at 16:30 daily"
      }
    ],
    "lastUpdated": "Today, 14:18 SAST"
  },
  {
    "id": "parow-valley",
    "name": "Parow Valley Swimming Pool",
    "suburb": "Parow Valley",
    "address": "118 Duncan Street, Parow Valley, Cape Town, 7500",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9114,
    "lng": 18.5912,
    "distanceKm": 20,
    "driveTimeMin": 20,
    "viaRoad": "Voortrekker Rd & Duncan St",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 26,
    "crowdCapacityLabel": "Quiet & peaceful",
    "contactNumber": "021 444 0277",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/parow_valley.jpg",
    "photoAlt": "Real Google photo of Parow Valley Swimming Pool and diving board",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "25m community pool and children's paddling basin open and filtered daily.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard City of Cape Town community tariff. Adults (16+) R9.00, Children (3–15) R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 25,
      "condition": "Sunny",
      "waterTemp": "22°C",
      "wind": "12 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Quiet community pool",
      "reason": "Very low capacity (26%), friendly family atmosphere, diving board open."
    },
    "amenities": [
      "25m Community Pool",
      "Diving Board & Deep Section",
      "Kiddies Wading Pool",
      "Children Playground Area",
      "Grassy Picnic Area",
      "Change Rooms & Ablutions"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "September School Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      },
      {
        "label": "Thereafter (until 1 Dec)",
        "value": "Wed - Fri: 13:00 - 17:00 | Sat - Sun: 10:00 - 17:00"
      },
      {
        "label": "Ticket Sales Cut-off",
        "value": "Closes at 16:30 daily"
      }
    ],
    "lastUpdated": "Today, 14:15 SAST"
  },
  {
    "id": "bellville-central",
    "name": "Bellville Central Swimming Pool",
    "suburb": "Bellville",
    "address": "Voortrekker Road, Bellville Central, Cape Town, 7530",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9012,
    "lng": 18.6321,
    "distanceKm": 26,
    "driveTimeMin": 28,
    "viaRoad": "N1 & Voortrekker Rd",
    "isOpen": false,
    "statusLabel": "Closed",
    "statusColor": "red",
    "closingTime": "Closed Today",
    "ticketCutoffTime": "N/A",
    "crowdLevel": "Closed",
    "crowdCapacity": 0,
    "crowdCapacityLabel": "Facility closed",
    "contactNumber": "021 444 4488",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/bellville_central.jpg",
    "photoAlt": "Real Google photo of Bellville Central Swimming Pool entrance and grounds",
    "isUnderMaintenance": true,
    "maintenanceStatus": "Under Major Works",
    "maintenanceDetails": "Facility closed for extensive mechanical repairs and pipework renewal per Recreation & Parks Department schedule.",
    "pricing": "Closed for construction",
    "rateAdult": "Closed",
    "rateChild": "Closed",
    "rateInfant": "Closed",
    "ratePensioner": "Closed",
    "paymentType": "Facility Closed",
    "tariffNotice": "Pool currently closed for municipal infrastructure renewals. Normal community tariff will apply upon reopening (R9 adult / R3 child).",
    "weatherAtPool": {
      "temp": 26,
      "condition": "Sunny & Warm",
      "waterTemp": "N/A",
      "wind": "12 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "NO",
      "badgeClass": "verdict-no",
      "title": "DO NOT TRAVEL - POOL CLOSED",
      "reason": "Currently closed for major works. Recommended alternative: Parow North Pool (open) or Blue Downs Indoor Pool."
    },
    "amenities": [
      "Main Outdoor Pool (Closed)",
      "Wading Pool (Closed)",
      "Changing Rooms"
    ],
    "operatingHoursToday": "Closed (Major Works)",
    "operatingHoursDetails": [
      {
        "label": "Status",
        "value": "Closed for major works (2026/27 Schedule)"
      },
      {
        "label": "Anticipated Re-opening",
        "value": "Subject to operational requirements"
      },
      {
        "label": "Recommended Alternative",
        "value": "Parow North Swimming Pool is OPEN"
      }
    ],
    "lastUpdated": "Today, 13:50 SAST"
  },
  {
    "id": "bellville-south",
    "name": "Bellville South Swimming Pool",
    "suburb": "Bellville South",
    "address": "Kasselsvlei Road, Bellville South, Cape Town, 7530",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9283,
    "lng": 18.6542,
    "distanceKm": 27,
    "driveTimeMin": 29,
    "viaRoad": "Robert Sobukwe Rd & Kasselsvlei",
    "isOpen": false,
    "statusLabel": "Closed",
    "statusColor": "red",
    "closingTime": "Closed Today",
    "ticketCutoffTime": "N/A",
    "crowdLevel": "Closed",
    "crowdCapacity": 0,
    "crowdCapacityLabel": "Opening Later",
    "contactNumber": "021 400 9995",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/bellville_south.jpg",
    "photoAlt": "Real Google photo of Bellville South Swimming Pool",
    "isUnderMaintenance": true,
    "maintenanceStatus": "Unplanned Mechanical Works",
    "maintenanceDetails": "Temporarily closed due to chemical dosing pump and filtration maintenance. Will open later in summer season.",
    "pricing": "Adults R9.00 • Children R3.00 (When open)",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard community pool tariff once reopened. Adults R9.00, Children R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 26,
      "condition": "Sunny",
      "waterTemp": "N/A",
      "wind": "13 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "NO",
      "badgeClass": "verdict-no",
      "title": "POOL TEMPORARILY CLOSED",
      "reason": "Affected by unplanned work. Alternative: Blue Downs Indoor Pool (open) or Parow North."
    },
    "amenities": [
      "Outdoor Pool",
      "Paddling Pool",
      "Lawns & Changing Rooms"
    ],
    "operatingHoursToday": "Closed (Will open later)",
    "operatingHoursDetails": [
      {
        "label": "Status",
        "value": "Affected by unplanned work - will open later"
      },
      {
        "label": "Alternative Nearby",
        "value": "Blue Downs Indoor Pool is OPEN"
      }
    ],
    "lastUpdated": "Today, 13:45 SAST"
  },
  {
    "id": "retreat-indoor",
    "name": "Retreat Indoor Pool",
    "suburb": "Retreat",
    "address": "Concert Boulevard, Retreat, Cape Town, 7945",
    "type": "Indoor",
    "isIndoor": true,
    "waterType": "Heated Freshwater",
    "lat": -34.0563,
    "lng": 18.4764,
    "distanceKm": 19,
    "driveTimeMin": 22,
    "viaRoad": "M3 & Concert Blvd",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 22,
    "crowdCapacityLabel": "Very quiet",
    "contactNumber": "021 701 1513",
    "contactNumberAlt": "021 814 1200",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/retreat_indoor.jpg",
    "photoAlt": "Real Google photo of Retreat Indoor Heated Swimming Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Facility operating smoothly. Water temperature maintained at 28°C.",
    "pricing": "Adults R39.00 • Children R22.00 • Pensioners Free",
    "rateAdult": "R39.00",
    "rateChild": "R22.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Indoor heated swimming pool tariff. Children (3–15) R22.00, Adults (16+) R39.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 24,
      "condition": "Indoor Heated",
      "waterTemp": "28°C (Heated)",
      "wind": "Calm",
      "uv": 0
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Ideal calm swim",
      "reason": "Extremely quiet right now (22% capacity), heated indoor water, great for toddlers or lane swimming."
    },
    "amenities": [
      "25m Heated Indoor Pool",
      "Kiddies Learn-to-Swim Pool",
      "Heated Showers",
      "Accessible Facilities",
      "Lifeguards on Duty"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "September School Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      },
      {
        "label": "Thereafter (until 1 Dec)",
        "value": "Wed - Fri: 13:00 - 17:00 | Sat - Sun: 10:00 - 17:00"
      },
      {
        "label": "Ticket Sales Cut-off",
        "value": "Closes at 16:30 daily"
      }
    ],
    "lastUpdated": "Today, 14:12 SAST"
  },
  {
    "id": "strand-indoor",
    "name": "Strand Indoor Swimming Pool",
    "suburb": "Strand / Helderberg",
    "address": "Piet Retief Street, Strand, Cape Town, 7140",
    "type": "Indoor",
    "isIndoor": true,
    "waterType": "Heated Freshwater",
    "lat": -34.1165,
    "lng": 18.8291,
    "distanceKm": 48,
    "driveTimeMin": 42,
    "viaRoad": "N2 & Broadway Blvd",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Moderate",
    "crowdCapacity": 45,
    "crowdCapacityLabel": "Moderate capacity",
    "contactNumber": "021 444 2660",
    "contactNumberAlt": "021 400 6340",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/strand_indoor.jpg",
    "photoAlt": "Real Google photo of Strand Indoor Swimming Pool complex",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "50m Olympic covered heated pool and leisure basin open and water temperature regulated.",
    "pricing": "Adults R39.00 • Children R22.00 • Pensioners Free",
    "rateAdult": "R39.00",
    "rateChild": "R22.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Indoor heated aquatic center tariff. Adults (16+) R39.00, Children (3–15) R22.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 24,
      "condition": "Indoor Heated",
      "waterTemp": "27°C (Heated)",
      "wind": "Indoors",
      "uv": 0
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Great Helderberg facility",
      "reason": "50m heated indoor pool, suitable for serious lap swimmers and families alike."
    },
    "amenities": [
      "50m Heated Indoor Pool",
      "Kiddies Splash Section",
      "Spectator Seating",
      "Hot Showers & Changing Rooms",
      "Lifeguards on Duty"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "September School Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      },
      {
        "label": "Thereafter (until 1 Dec)",
        "value": "Wed - Fri: 13:00 - 17:00 | Sat - Sun: 10:00 - 17:00"
      },
      {
        "label": "Ticket Sales Cut-off",
        "value": "Closes at 16:30 daily"
      }
    ],
    "lastUpdated": "Today, 14:10 SAST"
  },
  {
    "id": "strandfontein",
    "name": "Strandfontein Pavilion Tidal Pool",
    "suburb": "Strandfontein",
    "address": "Strandfontein Beach Pavilion, Baden Powell Drive, Strandfontein, 7785",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Tidal Seawater Pool",
    "lat": -34.0864,
    "lng": 18.5583,
    "distanceKm": 25,
    "driveTimeMin": 28,
    "viaRoad": "M5 / Baden Powell Dr",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 30,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 444 5763",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/strandfontein.jpg",
    "photoAlt": "Real Google photo of Strandfontein Beach Pavilion Tidal Pool overlooking False Bay",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Large coastal tidal pool filled with fresh sea water on each high tide. Pavilion amenities operational.",
    "pricing": "Free Public Coastal Access",
    "rateAdult": "Free",
    "rateChild": "Free",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Free Public Facility",
    "tariffNotice": "Public coastal tidal pool and beach pavilion. Free admission for all visitors. Lifeguards stationed on duty during operating hours.",
    "weatherAtPool": {
      "temp": 23,
      "condition": "Sunny & Ocean Breeze",
      "waterTemp": "19°C (Tidal)",
      "wind": "16 km/h SE",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Vast coastal tidal pool",
      "reason": "One of the largest tidal pools in the southern hemisphere. Low crowd (30%), refreshing seawater."
    },
    "amenities": [
      "Massive Ocean Tidal Pool",
      "Beach Pavilion & Kiosks",
      "Grassed Picnic Spots",
      "Lifeguards on Duty",
      "Ablution Facilities"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "September School Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      },
      {
        "label": "Thereafter (until 1 Dec)",
        "value": "Wed - Fri: 13:00 - 17:00 | Sat - Sun: 10:00 - 17:00"
      }
    ],
    "lastUpdated": "Today, 14:05 SAST"
  },
  {
    "id": "blue-downs",
    "name": "Blue Downs Indoor Pool",
    "suburb": "Blue Downs",
    "address": "Hindle Road, Blue Downs, Cape Town, 7100",
    "type": "Indoor",
    "isIndoor": true,
    "waterType": "Heated Freshwater",
    "lat": -33.9872,
    "lng": 18.6811,
    "distanceKm": 18,
    "driveTimeMin": 24,
    "viaRoad": "N2 & Hindle Rd",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Moderate",
    "crowdCapacity": 52,
    "crowdCapacityLabel": "Moderate capacity",
    "contactNumber": "021 444 0313",
    "contactNumberAlt": "021 444 9661",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/bluedowns.jpg",
    "photoAlt": "Real Google photo of Blue Downs Modern Indoor Aquatic Center and Olympic Heated Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Indoor water heating system active at 28°C. Dedicated lanes open for lap swimming.",
    "pricing": "Adults R14.00 • Children R8.00 • Pensioners Free",
    "rateAdult": "R14.00",
    "rateChild": "R8.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Indoor facility admission tariff. Adults (16+) R14.00, Children (3–15) R8.00, Infants (<3) & Pensioners (60+) Free.",
    "weatherAtPool": {
      "temp": 25,
      "condition": "Indoor Climate Controlled",
      "waterTemp": "28°C (Heated)",
      "wind": "Calm Indoors",
      "uv": 1
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Worth the trip",
      "reason": "Comfortable indoor heated water (28°C). Moderate attendance with open lanes."
    },
    "amenities": [
      "50m Heated Indoor Olympic Pool",
      "Shallow Heated Leisure Pool",
      "Covered Grandstands",
      "Dedicated Lap Lanes",
      "Certified Lifeguards on Duty",
      "Family Changing Rooms",
      "Secure On-Site Parking"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "September School Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      },
      {
        "label": "Thereafter (until 1 Dec)",
        "value": "Wed - Fri: 13:00 - 17:00 | Sat - Sun: 10:00 - 17:00"
      },
      {
        "label": "Ticket Sales Cut-off",
        "value": "Closes at 16:30 daily"
      }
    ],
    "lastUpdated": "Today, 14:15 SAST"
  },
  {
    "id": "newlands",
    "name": "Newlands Swimming Pool",
    "suburb": "Newlands",
    "address": "Main Road, Newlands, Cape Town, 7700",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9744,
    "lng": 18.4632,
    "distanceKm": 11,
    "driveTimeMin": 18,
    "viaRoad": "M3 / Union Ave",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Moderate",
    "crowdCapacity": 48,
    "crowdCapacityLabel": "Comfortable crowd",
    "contactNumber": "021 444 2829",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/newlands.jpg",
    "photoAlt": "Real Google photo of Newlands Outdoor Olympic Pool with Table Mountain backdrop",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Facility underwent complete filtration renewal and is in pristine condition.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard City of Cape Town community tariff. Adults (16+) R9.00, Children (3–15) R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 24,
      "condition": "Sunny & Sheltered",
      "waterTemp": "21°C",
      "wind": "10 km/h S (Protected by trees)",
      "uv": 7
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Highly recommended today!",
      "reason": "Sheltered from strong wind, crystal clear water, comfortable crowd level (48%)."
    },
    "amenities": [
      "50m Olympic Standard Pool",
      "10m Diving Tower & Deep Basin",
      "Grandstand Seating",
      "Lush Shaded Lawns",
      "Certified Lifeguards on Duty",
      "Renovated Change Rooms",
      "Table Mountain Views"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "September School Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      },
      {
        "label": "Thereafter (until 1 Dec)",
        "value": "Wed - Fri: 13:00 - 17:00 | Sat - Sun: 10:00 - 17:00"
      },
      {
        "label": "Ticket Sales Cut-off",
        "value": "Closes at 16:30 daily"
      }
    ],
    "lastUpdated": "Today, 14:10 SAST"
  },
  {
    "id": "long-street",
    "name": "Long Street Indoor Pool",
    "suburb": "Cape Town CBD",
    "address": "Top of Long Street, Cape Town CBD, 8001",
    "type": "Indoor",
    "isIndoor": true,
    "waterType": "Heated Freshwater",
    "lat": -33.9272,
    "lng": 18.4168,
    "distanceKm": 1.5,
    "driveTimeMin": 5,
    "viaRoad": "Buitengracht / Long St",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 30,
    "crowdCapacityLabel": "Quiet & peaceful",
    "contactNumber": "021 422 0184",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/longstreet.jpg",
    "photoAlt": "Real Google photo of Long Street Baths Victorian Heritage Indoor Heated Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Victorian baths and Turkish steam baths in full service.",
    "pricing": "Adults R39.00 • Children R22.00 • Turkish Baths R85.00",
    "rateAdult": "R39.00",
    "rateChild": "R22.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Heritage heated pool tariff. Adults R39.00, Children R22.00, Pensioners Free. Turkish steam bath available at R85.00.",
    "weatherAtPool": {
      "temp": 24,
      "condition": "Indoor Heated",
      "waterTemp": "27°C (Heated)",
      "wind": "Indoors",
      "uv": 0
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Perfect CBD swim spot",
      "reason": "Right in town, heated pool, low capacity right now (30%), great heritage atmosphere."
    },
    "amenities": [
      "25m Heated Indoor Pool",
      "Historical Victorian Architecture",
      "Traditional Turkish Steam Baths (R85)",
      "Dedicated Lap Lanes",
      "Hot Showers & Lockers",
      "Lifeguards on Duty"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "September School Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      },
      {
        "label": "Thereafter (until 1 Dec)",
        "value": "Wed - Fri: 13:00 - 17:00 | Sat - Sun: 10:00 - 17:00"
      },
      {
        "label": "Ticket Sales Cut-off",
        "value": "Closes at 16:30 daily"
      }
    ],
    "lastUpdated": "Today, 14:05 SAST"
  },
  {
    "id": "goodwood",
    "name": "Goodwood Swimming Pool",
    "suburb": "Goodwood",
    "address": "Milton Road, Goodwood, Cape Town, 7460",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9015,
    "lng": 18.5539,
    "distanceKm": 14,
    "driveTimeMin": 18,
    "viaRoad": "N1 & Milton Rd",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 35,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 400 5261",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/goodwood.jpg",
    "photoAlt": "Real Google photo of Goodwood Swimming Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Open for holiday swimming. Electrical and pump systems serviced.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard City of Cape Town community tariff. Adults R9.00, Children R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 25,
      "condition": "Sunny",
      "waterTemp": "21°C",
      "wind": "13 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Popular community pool",
      "reason": "Open and well maintained. Low crowd (35%), comfortable lawn space."
    },
    "amenities": [
      "Large Main Pool",
      "Kiddies Wading Pool",
      "Spacious Lawns",
      "Lifeguards on Duty",
      "Change Rooms"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "September School Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      },
      {
        "label": "Thereafter (until 1 Dec)",
        "value": "Wed - Fri: 13:00 - 17:00 | Sat - Sun: 10:00 - 17:00"
      }
    ],
    "lastUpdated": "Today, 14:00 SAST"
  },
  {
    "id": "westridge",
    "name": "Westridge Swimming Pool",
    "suburb": "Mitchells Plain",
    "address": "Merrydale Ave & Wespoort Rd, Westridge, Mitchells Plain, 7785",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -34.0416,
    "lng": 18.6083,
    "distanceKm": 17,
    "driveTimeMin": 22,
    "viaRoad": "N2 & Merrydale Ave",
    "isOpen": false,
    "statusLabel": "Closed",
    "statusColor": "red",
    "closingTime": "Closed Today",
    "ticketCutoffTime": "N/A",
    "crowdLevel": "Closed",
    "crowdCapacity": 0,
    "crowdCapacityLabel": "Facility closed",
    "contactNumber": "021 444 6274",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/westridge.jpg",
    "photoAlt": "Real Google photo of Westridge Municipal Pool undergoing major repairs",
    "isUnderMaintenance": true,
    "maintenanceStatus": "Under Major Works",
    "maintenanceDetails": "Facility closed for major infrastructure renewal, filtration overhaul, and pool basin concrete resurfacing. Scheduled to reopen in later summer phase.",
    "pricing": "Closed for construction",
    "rateAdult": "Closed",
    "rateChild": "Closed",
    "rateInfant": "Closed",
    "ratePensioner": "Closed",
    "paymentType": "Facility Closed",
    "tariffNotice": "Closed for major civil works. Normal community tariff (R9 adult / R3 child) applies upon completion.",
    "weatherAtPool": {
      "temp": 26,
      "condition": "Sunny",
      "waterTemp": "N/A",
      "wind": "16 km/h SE",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "NO",
      "badgeClass": "verdict-no",
      "title": "DO NOT TRAVEL - POOL CLOSED",
      "reason": "This pool is closed under the City of Cape Town 2026/27 schedule for major structural repairs. Nearby alternative: Eastridge Pool (open)."
    },
    "amenities": [
      "Outdoor 50m Pool (Under renovation)",
      "Kiddies Pool (Under renovation)",
      "Changing Rooms (Under upgrade)"
    ],
    "operatingHoursToday": "Closed (Major Works)",
    "operatingHoursDetails": [
      {
        "label": "Status",
        "value": "Closed for major works (2026/27 Schedule)"
      },
      {
        "label": "Recommended Alternative",
        "value": "Eastridge Pool (021 400 2137) is OPEN"
      }
    ],
    "lastUpdated": "Today, 14:00 SAST"
  },
  {
    "id": "mnandi",
    "name": "Mnandi Coastal Pool",
    "suburb": "Mitchells Plain / Strandfontein",
    "address": "Baden Powell Drive, Mitchells Plain, 7785",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Tidal Seawater Pool",
    "lat": -34.0768,
    "lng": 18.6369,
    "distanceKm": 28,
    "driveTimeMin": 32,
    "viaRoad": "Baden Powell Dr",
    "isOpen": false,
    "statusLabel": "Closed",
    "statusColor": "red",
    "closingTime": "Closed Today",
    "ticketCutoffTime": "N/A",
    "crowdLevel": "Closed",
    "crowdCapacity": 0,
    "crowdCapacityLabel": "Facility closed",
    "contactNumber": "021 444 5763",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/mnandi.jpg",
    "photoAlt": "Real Google photo of Mnandi Coastal Pool",
    "isUnderMaintenance": true,
    "maintenanceStatus": "Under Major Works",
    "maintenanceDetails": "Undergoing extensive coastal infrastructure rehabilitation and seawall reinforcement.",
    "pricing": "Closed for works",
    "rateAdult": "Closed",
    "rateChild": "Closed",
    "rateInfant": "Closed",
    "ratePensioner": "Closed",
    "paymentType": "Facility Closed",
    "tariffNotice": "Closed for coastal seawall repairs. Alternative: Strandfontein Pavilion Pool or Muizenberg.",
    "weatherAtPool": {
      "temp": 24,
      "condition": "Sunny & Windy",
      "waterTemp": "N/A",
      "wind": "22 km/h SE",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "NO",
      "badgeClass": "verdict-no",
      "title": "DO NOT TRAVEL - CLOSED",
      "reason": "Undergoing major coastal works. Alternative: Strandfontein Pavilion or Muizenberg Pavilion Pool."
    },
    "amenities": [
      "Coastal Tidal Pool (Closed)"
    ],
    "operatingHoursToday": "Closed (Major Works)",
    "operatingHoursDetails": [
      {
        "label": "Status",
        "value": "Closed for major works (2026/27 Schedule)"
      }
    ],
    "lastUpdated": "Today, 13:30 SAST"
  },
  {
    "id": "athlone",
    "name": "Athlone Swimming Pool",
    "suburb": "Athlone",
    "address": "Springbok Street, Athlone, Cape Town, 7764",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.961,
    "lng": 18.5117,
    "distanceKm": 12,
    "driveTimeMin": 16,
    "viaRoad": "M5 & Klipfontein Rd",
    "isOpen": false,
    "statusLabel": "Closed",
    "statusColor": "red",
    "closingTime": "Closed Today",
    "ticketCutoffTime": "N/A",
    "crowdLevel": "Closed",
    "crowdCapacity": 0,
    "crowdCapacityLabel": "Facility closed",
    "contactNumber": "021 444 0410",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/athlone.jpg",
    "photoAlt": "Real Google photo of Athlone Swimming Pool closed for major works",
    "isUnderMaintenance": true,
    "maintenanceStatus": "Under Major Works",
    "maintenanceDetails": "Closed for major filtration and civil pipework renovations.",
    "pricing": "Closed for repairs",
    "rateAdult": "Closed",
    "rateChild": "Closed",
    "rateInfant": "Closed",
    "ratePensioner": "Closed",
    "paymentType": "Facility Closed",
    "tariffNotice": "Closed for civil renovations. Recommended alternative: Newlands or Elsies River.",
    "weatherAtPool": {
      "temp": 25,
      "condition": "Sunny",
      "waterTemp": "N/A",
      "wind": "14 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "NO",
      "badgeClass": "verdict-no",
      "title": "DO NOT TRAVEL - CLOSED",
      "reason": "Closed for seasonal rehabilitation works. Recommended alternative: Newlands Pool."
    },
    "amenities": [
      "Outdoor Pool (Closed)"
    ],
    "operatingHoursToday": "Closed (Major Works)",
    "operatingHoursDetails": [
      {
        "label": "Status",
        "value": "Closed for major works (2026/27 Schedule)"
      }
    ],
    "lastUpdated": "Today, 13:40 SAST"
  },
  {
    "id": "vulindlela",
    "name": "Vulindlela Swimming Pool",
    "suburb": "Gugulethu",
    "address": "NY 147, Gugulethu, Cape Town, 7750",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9782,
    "lng": 18.5714,
    "distanceKm": 15,
    "driveTimeMin": 20,
    "viaRoad": "N2 & Klipfontein Rd",
    "isOpen": false,
    "statusLabel": "Closed",
    "statusColor": "red",
    "closingTime": "Closed Today",
    "ticketCutoffTime": "N/A",
    "crowdLevel": "Closed",
    "crowdCapacity": 0,
    "crowdCapacityLabel": "Proposed Redevelopment",
    "contactNumber": "021 444 5356",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/vulindlela.jpg",
    "photoAlt": "Real Google photo of Vulindlela Swimming Pool Gugulethu",
    "isUnderMaintenance": true,
    "maintenanceStatus": "Proposed Future Redevelopment",
    "maintenanceDetails": "Facility closed pending complete redevelopment and modern recreation center overhaul.",
    "pricing": "Closed",
    "rateAdult": "Closed",
    "rateChild": "Closed",
    "rateInfant": "Closed",
    "ratePensioner": "Closed",
    "paymentType": "Facility Closed",
    "tariffNotice": "Proposed future redevelopment of pool. Facility not open to the public.",
    "weatherAtPool": {
      "temp": 25,
      "condition": "Sunny",
      "waterTemp": "N/A",
      "wind": "15 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "NO",
      "badgeClass": "verdict-no",
      "title": "DO NOT TRAVEL - CLOSED",
      "reason": "Proposed for future municipal redevelopment. Not open to public."
    },
    "amenities": [
      "Facility currently closed"
    ],
    "operatingHoursToday": "Closed (Redevelopment)",
    "operatingHoursDetails": [
      {
        "label": "Status",
        "value": "Closed (Proposed future redevelopment of pool)"
      }
    ],
    "lastUpdated": "Today, 13:00 SAST"
  },
  {
    "id": "trafalgar",
    "name": "Trafalgar Swimming Pool",
    "suburb": "Woodstock",
    "address": "Searle Street, Woodstock, Cape Town, 7925",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9315,
    "lng": 18.4442,
    "distanceKm": 3.5,
    "driveTimeMin": 8,
    "viaRoad": "Nelson Mandela Blvd / Searle St",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 25,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 461 5060",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/trafalgar.jpg",
    "photoAlt": "Real Google photo of Trafalgar Swimming Pool Woodstock",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Open and ready for swimmers with Table Mountain views.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard City of Cape Town community tariff. Adults R9.00, Children R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 24,
      "condition": "Sunny",
      "waterTemp": "21°C",
      "wind": "14 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Great local option!",
      "reason": "Only 3.5 km away, not busy, beautiful views of Devil's Peak."
    },
    "amenities": [
      "Large Outdoor Pool",
      "Kiddies Wading Area",
      "Grassy Picnic Lawns",
      "Lifeguards on Duty"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "September School Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      },
      {
        "label": "Thereafter (until 1 Dec)",
        "value": "Wed - Fri: 13:00 - 17:00 | Sat - Sun: 10:00 - 17:00"
      }
    ],
    "lastUpdated": "Today, 14:02 SAST"
  },
  {
    "id": "wynberg",
    "name": "Wynberg Swimming Pool",
    "suburb": "Wynberg",
    "address": "Rosmead Avenue, Wynberg, Cape Town, 7800",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -34.0042,
    "lng": 18.4751,
    "distanceKm": 13,
    "driveTimeMin": 18,
    "viaRoad": "M3 & Rosmead Ave",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 28,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 400 5396",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/wynberg.jpg",
    "photoAlt": "Real Google photo of Wynberg Swimming Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Open and fully staffed with certified lifeguards.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard community tariff. Adults R9.00, Children R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 24,
      "condition": "Sunny",
      "waterTemp": "21°C",
      "wind": "12 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Peaceful southern suburbs pool",
      "reason": "Quiet atmosphere, ample shade under trees, clear water."
    },
    "amenities": [
      "Outdoor Pool",
      "Splash Area",
      "Shaded Lawns",
      "Lifeguards"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "September School Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      },
      {
        "label": "Thereafter (until 1 Dec)",
        "value": "Wed - Fri: 13:00 - 17:00 | Sat - Sun: 10:00 - 17:00"
      }
    ],
    "lastUpdated": "Today, 14:00 SAST"
  },
  {
    "id": "elsies-river",
    "name": "Elsies River Swimming Pool",
    "suburb": "Elsies River",
    "address": "13th Avenue, Elsies River, Cape Town, 7490",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9312,
    "lng": 18.5714,
    "distanceKm": 16,
    "driveTimeMin": 19,
    "viaRoad": "Voortrekker Rd & 13th Ave",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 30,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 400 4144",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/elsies_river.jpg",
    "photoAlt": "Real Google photo of Elsies River Swimming Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Open and welcoming local families for summer holidays.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard community tariff. Adults R9.00, Children R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 25,
      "condition": "Sunny",
      "waterTemp": "22°C",
      "wind": "12 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Open today",
      "reason": "Clean water, low capacity, lifeguards on deck."
    },
    "amenities": [
      "Main Pool",
      "Kiddies Pool",
      "Lifeguards",
      "Ablutions"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      }
    ],
    "lastUpdated": "Today, 14:00 SAST"
  },
  {
    "id": "kensington",
    "name": "Kensington Swimming Pool",
    "suburb": "Kensington",
    "address": "5th Avenue, Kensington, Cape Town, 7405",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9167,
    "lng": 18.5167,
    "distanceKm": 8.5,
    "driveTimeMin": 12,
    "viaRoad": "Voortrekker Rd",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 25,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 444 6855",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/kensington.jpg",
    "photoAlt": "Real Google photo of Kensington Swimming Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Water treated and balanced. Lifeguards on deck.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard community tariff. Adults R9.00, Children R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 24,
      "condition": "Sunny",
      "waterTemp": "21°C",
      "wind": "13 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Quiet neighbourhood pool",
      "reason": "Close to central areas, not crowded."
    },
    "amenities": [
      "Outdoor Pool",
      "Picnic Lawns",
      "Lifeguards",
      "Change Rooms"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      }
    ],
    "lastUpdated": "Today, 14:00 SAST"
  },
  {
    "id": "bonteheuwel",
    "name": "Bonteheuwel Swimming Pool",
    "suburb": "Bonteheuwel",
    "address": "Jakkalsvlei Avenue, Bonteheuwel, Cape Town, 7764",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9525,
    "lng": 18.5521,
    "distanceKm": 14.5,
    "driveTimeMin": 18,
    "viaRoad": "N2 & Jakkalsvlei Ave",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 34,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 444 0516",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/bonteheuwel.jpg",
    "photoAlt": "Real Google photo of Bonteheuwel Swimming Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Open and welcoming residents.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard community tariff. Adults R9.00, Children R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 25,
      "condition": "Sunny",
      "waterTemp": "21°C",
      "wind": "14 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Open today",
      "reason": "Lifeguards on duty, clean water."
    },
    "amenities": [
      "Outdoor Pool",
      "Kiddies Section",
      "Lifeguards"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      }
    ],
    "lastUpdated": "Today, 14:00 SAST"
  },
  {
    "id": "hanover-park",
    "name": "Hanover Park Swimming Pool",
    "suburb": "Hanover Park",
    "address": "Surdown Walk, Hanover Park, Cape Town, 7780",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9875,
    "lng": 18.5284,
    "distanceKm": 15,
    "driveTimeMin": 19,
    "viaRoad": "M5 & Hanover Park Ave",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 28,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 814 1033",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/hanover_park.jpg",
    "photoAlt": "Real Google photo of Hanover Park Swimming Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Open and operating smoothly.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard community tariff. Adults R9.00, Children R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 25,
      "condition": "Sunny",
      "waterTemp": "21°C",
      "wind": "13 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Open today",
      "reason": "Low crowd, certified lifeguards on duty."
    },
    "amenities": [
      "Outdoor Pool",
      "Change Rooms",
      "Lifeguards"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      }
    ],
    "lastUpdated": "Today, 14:00 SAST"
  },
  {
    "id": "delft",
    "name": "Delft Swimming Pool",
    "suburb": "Delft",
    "address": "Voorbrug Avenue, Delft, Cape Town, 7100",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9789,
    "lng": 18.6415,
    "distanceKm": 23,
    "driveTimeMin": 26,
    "viaRoad": "N2 & Delft Main Rd",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 35,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 444 2229",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/delft.jpg",
    "photoAlt": "Real Google photo of Delft Swimming Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Open for holiday swimming. Daily filtration active.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard community tariff. Adults R9.00, Children R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 26,
      "condition": "Sunny",
      "waterTemp": "22°C",
      "wind": "14 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Open today",
      "reason": "Good water conditions, lifeguards present."
    },
    "amenities": [
      "Main Pool",
      "Splash Area",
      "Lifeguards"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      }
    ],
    "lastUpdated": "Today, 14:00 SAST"
  },
  {
    "id": "khayelitsha",
    "name": "Khayelitsha Swimming Pool",
    "suburb": "Khayelitsha",
    "address": "Walter Sisulu Road, Khayelitsha, Cape Town, 7784",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -34.0371,
    "lng": 18.6698,
    "distanceKm": 27,
    "driveTimeMin": 30,
    "viaRoad": "N2 & Walter Sisulu Rd",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 38,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 444 5815",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/khayelitsha.jpg",
    "photoAlt": "Real Google photo of Khayelitsha Swimming Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Open and ready for summer swimmers.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard community tariff. Adults R9.00, Children R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 26,
      "condition": "Sunny",
      "waterTemp": "22°C",
      "wind": "15 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Open today",
      "reason": "Safe, supervised swimming for the family."
    },
    "amenities": [
      "Large Pool",
      "Kiddies Pool",
      "Lifeguards",
      "Ablutions"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      }
    ],
    "lastUpdated": "Today, 14:00 SAST"
  },
  {
    "id": "manenberg",
    "name": "Manenberg Swimming Pool",
    "suburb": "Manenberg",
    "address": "Manenberg Avenue, Manenberg, Cape Town, 7764",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9858,
    "lng": 18.5614,
    "distanceKm": 16,
    "driveTimeMin": 20,
    "viaRoad": "N2 & Duinefontein Rd",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 28,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 444 1637",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/manenberg.jpg",
    "photoAlt": "Real Google photo of Manenberg Swimming Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Open for holiday schedule.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard community tariff. Adults R9.00, Children R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 25,
      "condition": "Sunny",
      "waterTemp": "21°C",
      "wind": "14 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Open today",
      "reason": "Comfortable crowd, on-duty lifeguards."
    },
    "amenities": [
      "Outdoor Pool",
      "Lifeguards",
      "Changing Facilities"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      }
    ],
    "lastUpdated": "Today, 14:00 SAST"
  },
  {
    "id": "observatory",
    "name": "Observatory Swimming Pool",
    "suburb": "Observatory",
    "address": "Willow Road, Observatory, Cape Town, 7925",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9372,
    "lng": 18.4715,
    "distanceKm": 5.5,
    "driveTimeMin": 10,
    "viaRoad": "Main Rd & Willow Rd",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 25,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 444 5799",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/observatory.jpg",
    "photoAlt": "Real Google photo of Observatory Swimming Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Open and ready for summer swimmers.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard community tariff. Adults R9.00, Children R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 24,
      "condition": "Sunny",
      "waterTemp": "21°C",
      "wind": "12 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Close to CBD & Southern Suburbs",
      "reason": "Charming local pool, quiet (25% capacity)."
    },
    "amenities": [
      "Main Pool",
      "Toddlers Pool",
      "Lush Lawns",
      "Lifeguards"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      }
    ],
    "lastUpdated": "Today, 14:00 SAST"
  },
  {
    "id": "ruyterwacht",
    "name": "Ruyterwacht Swimming Pool",
    "suburb": "Ruyterwacht",
    "address": "Jan van Riebeeck Street, Ruyterwacht, Cape Town, 7460",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.9189,
    "lng": 18.5583,
    "distanceKm": 15,
    "driveTimeMin": 18,
    "viaRoad": "Viking Way & Jan van Riebeeck",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 22,
    "crowdCapacityLabel": "Quiet",
    "contactNumber": "021 400 6340",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/ruyterwacht.jpg",
    "photoAlt": "Real Google photo of Ruyterwacht Swimming Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Open and operating normally.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard community tariff. Adults R9.00, Children R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 25,
      "condition": "Sunny",
      "waterTemp": "21°C",
      "wind": "13 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Very quiet pool",
      "reason": "Only 22% capacity, ideal for family leisure."
    },
    "amenities": [
      "Outdoor Pool",
      "Picnic Area",
      "Lifeguards"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      }
    ],
    "lastUpdated": "Today, 14:00 SAST"
  },
  {
    "id": "atlantis",
    "name": "Atlantis Swimming Pool",
    "suburb": "Atlantis",
    "address": "Wesfleur Circle, Atlantis, Cape Town, 7349",
    "type": "Outdoor",
    "isIndoor": false,
    "waterType": "Freshwater",
    "lat": -33.5678,
    "lng": 18.4891,
    "distanceKm": 45,
    "driveTimeMin": 40,
    "viaRoad": "R27 / West Coast Rd",
    "isOpen": true,
    "statusLabel": "Open",
    "statusColor": "green",
    "closingTime": "17:00",
    "ticketCutoffTime": "16:30",
    "crowdLevel": "Not busy",
    "crowdCapacity": 30,
    "crowdCapacityLabel": "Low capacity",
    "contactNumber": "021 444 5419",
    "email": "RP.enquiries@capetown.gov.za",
    "photo": "assets/images/goodwood.jpg",
    "photoAlt": "Atlantis Municipal Swimming Pool",
    "isUnderMaintenance": false,
    "maintenanceStatus": "No planned maintenance",
    "maintenanceDetails": "Open for holiday swim sessions.",
    "pricing": "Adults R9.00 • Children R3.00 • Pensioners Free",
    "rateAdult": "R9.00",
    "rateChild": "R3.00",
    "rateInfant": "Free",
    "ratePensioner": "Free",
    "paymentType": "Cash & Card Accepted",
    "tariffNotice": "Standard community tariff. Adults R9.00, Children R3.00, Infants & Pensioners Free.",
    "weatherAtPool": {
      "temp": 26,
      "condition": "Sunny & Warm",
      "waterTemp": "22°C",
      "wind": "14 km/h S",
      "uv": 8
    },
    "worthTravelling": {
      "verdict": "YES",
      "badgeClass": "verdict-yes",
      "title": "Open today",
      "reason": "Lifeguards on duty, clean pool."
    },
    "amenities": [
      "Main Pool",
      "Wading Pool",
      "Lifeguards"
    ],
    "operatingHoursToday": "10:00 - 17:00",
    "operatingHoursDetails": [
      {
        "label": "Holidays",
        "value": "Mon - Sun: 10:00 - 17:00"
      }
    ],
    "lastUpdated": "Today, 14:00 SAST"
  }
];

export const CLOSED_POOLS_SCHEDULE = [
  {
    category: "Pools Undergoing Major Works (Closed)",
    icon: "alert-triangle",
    badgeColor: "red",
    pools: [
      { name: "Athlone", phone: "021 444 0410", status: "Closed", note: "Filtration & civil pipework renewal" },
      { name: "Bellville Central", phone: "021 444 4488", status: "Closed", note: "Mechanical repairs & basin upgrade" },
      { name: "Mnandi Coastal Pool", phone: "021 444 5763", status: "Closed", note: "Coastal seawall & pump maintenance" },
      { name: "Vulindlela", phone: "021 444 5356", status: "Closed", note: "Proposed future redevelopment of pool" },
      { name: "Westridge", phone: "021 444 6274", status: "Closed", note: "Full basin resurfacing & safety overhaul" }
    ]
  },
  {
    category: "Pools Affected by Unplanned Work (Will Open Later)",
    icon: "clock",
    badgeColor: "orange",
    pools: [
      { name: "Bellville South", phone: "021 400 9995", status: "Opening Later", note: "Unplanned chemical pump repair" },
      { name: "Bonteheuwel", phone: "021 444 0516", status: "Opening Later", note: "Unplanned mechanical repairs" },
      { name: "Goodwood", phone: "021 400 5261", status: "Opening Later", note: "Electrical switchgear servicing" }
    ]
  }
];

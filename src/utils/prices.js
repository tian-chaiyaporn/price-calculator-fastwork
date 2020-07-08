export const FEATURE_NAMES = {
  SET_UP_WEBSITE: "SET_UP_WEBSITE",
  SET_UP_MOBILE: "SET_UP_MOBILE",
  AUTHENTICATION: "AUTHENTICATION",
  LISTING: "LISTING",
  CHAT_3RD_PARTY: "CHAT_3RD_PARTY",
  CHAT_CUSTOM: "CHAT_CUSTOM",
  VIDEO: "VIDEO",
  SOCIAL: "SOCIAL",
  LOCATION_TRACKING: "LOCATION_TRACKING",
  ONLINE_PAYMENT: "ONLINE_PAYMENT",
  SUPPORT_SYSTEM: "SUPPORT_SYSTEM",
  PDPA: "PDPA",
  CALCULATIONS_AND_FORM: "CALCULATIONS_AND_FORM",
};

const SET_UP_WEBSITE_HOURS = { min: 8, max: 40 };
const SET_UP_MOBILE_HOURS = { min: 26, max: 80 };
const AUTHENTICATION_HOURS = { min: 100, max: 180 };
const LISTING_HOURS = { min: 100, max: 350 };
const CHAT_3RD_PARTY_HOURS = { min: 80, max: 200 };
const CHAT_CUSTOM_HOURS = { min: 300, max: 600 };
const VIDEO_HOURS = { min: 40, max: 300 };
const SOCIAL_HOURS = { min: 40, max: 350 };
const LOCATION_TRACKING_HOURS = { min: 120, max: 300 };
const ONLINE_PAYMENT_HOURS = { min: 40, max: 280 };
const SUPPORT_SYSTEM_HOURS = { min: 16, max: 200 };
const CALCULATIONS_AND_FORM_HOURS = { min: 8, max: 24 };
const PDPA_HOURS = { min: 40, max: 200 };

export const FUNCTIONAL_FEATURES = [
  {
    name: FEATURE_NAMES.SET_UP_WEBSITE,
    logic: (currentHours = { min: 0, max: 0 }) => ({
      min: currentHours.min + SET_UP_WEBSITE_HOURS.min,
      max: currentHours.max + SET_UP_WEBSITE_HOURS.max,
    }),
  },
  {
    name: FEATURE_NAMES.SET_UP_MOBILE,
    logic: (currentHours = { min: 0, max: 0 }) => ({
      min: currentHours.min + SET_UP_MOBILE_HOURS.min,
      max: currentHours.max + SET_UP_MOBILE_HOURS.max,
    }),
  },
  {
    name: FEATURE_NAMES.AUTHENTICATION,
    logic: (currentHours = { min: 0, max: 0 }) => ({
      min: currentHours.min + AUTHENTICATION_HOURS.min,
      max: currentHours.max + AUTHENTICATION_HOURS.max,
    }),
  },
  {
    name: FEATURE_NAMES.LISTING,
    logic: (currentHours = { min: 0, max: 0 }) => ({
      min: currentHours.min + LISTING_HOURS.min,
      max: currentHours.max + LISTING_HOURS.max,
    }),
  },
  {
    name: FEATURE_NAMES.CHAT_3RD_PARTY,
    logic: (currentHours = { min: 0, max: 0 }) => ({
      min: currentHours.min + CHAT_3RD_PARTY_HOURS.min,
      max: currentHours.max + CHAT_3RD_PARTY_HOURS.max,
    }),
  },
  {
    name: FEATURE_NAMES.CHAT_CUSTOM,
    logic: (currentHours = { min: 0, max: 0 }) => ({
      min: currentHours.min + CHAT_CUSTOM_HOURS.min,
      max: currentHours.max + CHAT_CUSTOM_HOURS.max,
    }),
  },
  {
    name: FEATURE_NAMES.VIDEO,
    logic: (currentHours = { min: 0, max: 0 }) => ({
      min: currentHours.min + VIDEO_HOURS.min,
      max: currentHours.max + VIDEO_HOURS.max,
    }),
  },
  {
    name: FEATURE_NAMES.SOCIAL,
    logic: (currentHours = { min: 0, max: 0 }) => ({
      min: currentHours.min + SOCIAL_HOURS.min,
      max: currentHours.max + SOCIAL_HOURS.max,
    }),
  },
  {
    name: FEATURE_NAMES.LOCATION_TRACKING,
    logic: (currentHours = { min: 0, max: 0 }) => ({
      min: currentHours.min + LOCATION_TRACKING_HOURS.min,
      max: currentHours.max + LOCATION_TRACKING_HOURS.max,
    }),
  },
  {
    name: FEATURE_NAMES.ONLINE_PAYMENT,
    logic: (currentHours = { min: 0, max: 0 }) => ({
      min: currentHours.min + ONLINE_PAYMENT_HOURS.min,
      max: currentHours.max + ONLINE_PAYMENT_HOURS.max,
    }),
  },
  {
    name: FEATURE_NAMES.SUPPORT_SYSTEM,
    logic: (currentHours = { min: 0, max: 0 }) => ({
      min: currentHours.min + SUPPORT_SYSTEM_HOURS.min,
      max: currentHours.max + SUPPORT_SYSTEM_HOURS.max,
    }),
  },
  {
    name: FEATURE_NAMES.PDPA,
    logic: (currentHours = { min: 0, max: 0 }) => ({
      min: currentHours.min + CALCULATIONS_AND_FORM_HOURS.min,
      max: currentHours.max + CALCULATIONS_AND_FORM_HOURS.max,
    }),
  },
  {
    name: FEATURE_NAMES.CALCULATIONS_AND_FORM,
    logic: (currentHours = { min: 0, max: 0 }) => ({
      min: currentHours.min + PDPA_HOURS.min,
      max: currentHours.max + PDPA_HOURS.max,
    }),
  },
];

export const NON_FUNCTIONAL_FEATURE_NAMES = {
  DESIGN: "DESIGN",
  IMAGE_OPTIMIZATION: "IMAGE_OPTIMIZATION",
  SEO: "SEO",
};

const DESIGN = 0.1;
const IMAGE_OPTIMIZATION = 0.1;
const SEO = 0.2;

export const NONFUNCTIONAL_FEATURES = [
  {
    name: NON_FUNCTIONAL_FEATURE_NAMES.DESIGN,
    logic: (
      featureHours = { min: 100, max: 100 },
      currentHours = { min: 0, max: 0 }
    ) => ({
      min: Math.round(featureHours.min * DESIGN) + currentHours.min,
      max: Math.round(featureHours.max * DESIGN) + currentHours.max,
    }),
  },
  {
    name: NON_FUNCTIONAL_FEATURE_NAMES.IMAGE_OPTIMIZATION,
    logic: (
      featureHours = { min: 100, max: 100 },
      currentHours = { min: 0, max: 0 }
    ) => ({
      min: Math.round(featureHours.min * IMAGE_OPTIMIZATION) + currentHours.min,
      max: Math.round(featureHours.max * IMAGE_OPTIMIZATION) + currentHours.max,
    }),
  },
  {
    name: NON_FUNCTIONAL_FEATURE_NAMES.SEO,
    logic: (
      featureHours = { min: 100, max: 100 },
      currentHours = { min: 0, max: 0 }
    ) => ({
      min: Math.round(featureHours.min * SEO) + currentHours.min,
      max: Math.round(featureHours.max * SEO) + currentHours.max,
    }),
  },
];

export const HOSTING_NAME = {
  HOSTING: "HOSTING",
  OPT_1: "OPT_1",
  OPT_2: "OPT_2",
  OPT_3: "OPT_3",
  OPT_4: "OPT_4",
  OPT_5: "OPT_5",
  OPT_6: "OPT_6",
};

const HOSTING = {
  [HOSTING_NAME.OPT_1]: { maxUser: 5000, min: 8, max: 32 },
  [HOSTING_NAME.OPT_2]: { maxUser: 10000, min: 16, max: 40 },
  [HOSTING_NAME.OPT_3]: { maxUser: 100000, min: 40, max: 160 },
  [HOSTING_NAME.OPT_4]: { maxUser: 1000000, min: 40, max: 400 },
  [HOSTING_NAME.OPT_5]: { maxUser: 10000000, min: 100, max: 800 },
  [HOSTING_NAME.OPT_6]: { maxUser: 100000000, min: 1000, max: 2000 },
};

export const _HOSTING = {
  name: NON_FUNCTIONAL_FEATURE_NAMES.HOSTING,
  logic: (usersPerMonthString = "0") => {
    const usersPerMonth = Number(usersPerMonthString);
    if (usersPerMonth === 0) {
      return {
        min: 0,
        max: 0,
      };
    } else if (usersPerMonth === HOSTING.OPT_1.maxUser) {
      return {
        min: HOSTING.OPT_1.min,
        max: HOSTING.OPT_1.max,
      };
    } else if (usersPerMonth === HOSTING.OPT_2.maxUser) {
      return {
        min: HOSTING.OPT_2.min,
        max: HOSTING.OPT_2.max,
      };
    } else if (usersPerMonth === HOSTING.OPT_3.maxUser) {
      return {
        min: HOSTING.OPT_3.min,
        max: HOSTING.OPT_3.max,
      };
    } else if (usersPerMonth === HOSTING.OPT_4.maxUser) {
      return {
        min: HOSTING.OPT_4.min,
        max: HOSTING.OPT_4.max,
      };
    } else if (usersPerMonth === HOSTING.OPT_5.maxUser) {
      return {
        min: HOSTING.OPT_5.min,
        max: HOSTING.OPT_5.max,
      };
    } else {
      return {
        min: HOSTING.OPT_6.min,
        max: HOSTING.OPT_6.max,
      };
    }
  },
};

export const COMMON_PRODUCT_NAME = {
  INFORMATION: "INFORMATION",
  ECOMMERCE: "ECOMMERCE",
  SERVICE_LISTING: "PRODUCT_LISTING",
  REALTIME_DELIVERY: "REALTIME_DELIVERY",
  OTHERS: "OTHERS",
  WORDPRESS: "WORDPRESS",
  CUSTOM_DESIGN: "CUSTOM_DESIGN",
  CUSTOM_WEBSITE: "CUSTOM_WEBSITE",
  MOBILE_APPLICATION: "MOBILE_APPLICATION",
  MOBILE_APPLICATION_AND_WEBSITE: "MOBILE_APPLICATION_AND_WEBSITE",
};

const INFORMATION = {
  WORDPRESS: {
    NO_DESIGN: { min: 50, max: 160 },
    WITH_DESIGN: { min: 55, max: 176 },
  },
  CUSTOM_WEBSITE: {
    NO_DESIGN: { min: 40, max: 200 },
    WITH_DESIGN: { min: 44, max: 220 },
  },
  MOBILE_APPLICATION: {
    NO_DESIGN: { min: 80, max: 580 },
    WITH_DESIGN: { min: 88, max: 630 },
  },
};
const ECOMMERCE = {
  WORDPRESS: {
    NO_DESIGN: { min: 160, max: 400 },
    WITH_DESIGN: { min: 176, max: 440 },
  },
  CUSTOM_WEBSITE: {
    NO_DESIGN: { min: 650, max: 3300 },
    WITH_DESIGN: { min: 710, max: 3630 },
  },
  MOBILE_APPLICATION: {
    NO_DESIGN: { min: 1000, max: 4000 },
    WITH_DESIGN: { min: 1100, max: 4400 },
  },
};
const SERVICE_LISTING = {
  WORDPRESS: {
    NO_DESIGN: { min: 160, max: 250 },
    WITH_DESIGN: { min: 176, max: 275 },
  },
  CUSTOM_WEBSITE: {
    NO_DESIGN: { min: 250, max: 1600 },
    WITH_DESIGN: { min: 275, max: 1760 },
  },
  MOBILE_APPLICATION: {
    NO_DESIGN: { min: 500, max: 2500 },
    WITH_DESIGN: { min: 550, max: 2750 },
  },
};
const REALTIME_DELIVERY = {
  MOBILE_APPLICATION_AND_WEBSITE: {
    NO_DESIGN: { min: 1500, max: 5000 },
    WITH_DESIGN: { min: 1650, max: 5500 },
  },
};

export const COMMON_PRODUCT_FEATURES = {
  [COMMON_PRODUCT_NAME.INFORMATION]: {
    name: COMMON_PRODUCT_NAME.INFORMATION,
    logic: (technology = "", includesDesign = false) => {
      switch (technology) {
        case COMMON_PRODUCT_NAME.WORDPRESS:
          return includesDesign
            ? INFORMATION.WORDPRESS.WITH_DESIGN
            : INFORMATION.WORDPRESS.NO_DESIGN;
        case COMMON_PRODUCT_NAME.CUSTOM_WEBSITE:
          return includesDesign
            ? INFORMATION.CUSTOM_WEBSITE.WITH_DESIGN
            : INFORMATION.CUSTOM_WEBSITE.NO_DESIGN;
        case COMMON_PRODUCT_NAME.MOBILE_APPLICATION:
          return includesDesign
            ? INFORMATION.MOBILE_APPLICATION.WITH_DESIGN
            : INFORMATION.MOBILE_APPLICATION.NO_DESIGN;
        case COMMON_PRODUCT_NAME.CUSTOM_DESIGN:
          return includesDesign
            ? INFORMATION.CUSTOM_DESIGN.WITH_DESIGN
            : INFORMATION.CUSTOM_DESIGN.NO_DESIGN;
        default:
          return { min: 0, max: 0 };
      }
    },
  },
  [COMMON_PRODUCT_NAME.ECOMMERCE]: {
    name: COMMON_PRODUCT_NAME.ECOMMERCE,
    logic: (technology = "", includesDesign = false) => {
      switch (technology) {
        case COMMON_PRODUCT_NAME.WORDPRESS:
          return includesDesign
            ? ECOMMERCE.WORDPRESS.WITH_DESIGN
            : ECOMMERCE.WORDPRESS.NO_DESIGN;
        case COMMON_PRODUCT_NAME.CUSTOM_WEBSITE:
          return includesDesign
            ? ECOMMERCE.CUSTOM_WEBSITE.WITH_DESIGN
            : ECOMMERCE.CUSTOM_WEBSITE.NO_DESIGN;
        case COMMON_PRODUCT_NAME.MOBILE_APPLICATION:
          return includesDesign
            ? ECOMMERCE.MOBILE_APPLICATION.WITH_DESIGN
            : ECOMMERCE.MOBILE_APPLICATION.NO_DESIGN;
        case COMMON_PRODUCT_NAME.CUSTOM_DESIGN:
          return includesDesign
            ? ECOMMERCE.CUSTOM_DESIGN.WITH_DESIGN
            : ECOMMERCE.CUSTOM_DESIGN.NO_DESIGN;
        default:
          return { min: 0, max: 0 };
      }
    },
  },
  [COMMON_PRODUCT_NAME.SERVICE_LISTING]: {
    name: COMMON_PRODUCT_NAME.SERVICE_LISTING,
    logic: (technology = "", includesDesign = false) => {
      switch (technology) {
        case COMMON_PRODUCT_NAME.WORDPRESS:
          return includesDesign
            ? SERVICE_LISTING.WORDPRESS.WITH_DESIGN
            : SERVICE_LISTING.WORDPRESS.NO_DESIGN;
        case COMMON_PRODUCT_NAME.CUSTOM_WEBSITE:
          return includesDesign
            ? SERVICE_LISTING.CUSTOM_WEBSITE.WITH_DESIGN
            : SERVICE_LISTING.CUSTOM_WEBSITE.NO_DESIGN;
        case COMMON_PRODUCT_NAME.MOBILE_APPLICATION:
          return includesDesign
            ? SERVICE_LISTING.MOBILE_APPLICATION.WITH_DESIGN
            : SERVICE_LISTING.MOBILE_APPLICATION.NO_DESIGN;
        case COMMON_PRODUCT_NAME.CUSTOM_DESIGN:
          return includesDesign
            ? SERVICE_LISTING.CUSTOM_DESIGN.WITH_DESIGN
            : SERVICE_LISTING.CUSTOM_DESIGN.NO_DESIGN;
        default:
          return { min: 0, max: 0 };
      }
    },
  },
  [COMMON_PRODUCT_NAME.REALTIME_DELIVERY]: {
    name: COMMON_PRODUCT_NAME.REALTIME_DELIVERY,
    logic: (
      technology = COMMON_PRODUCT_NAME.MOBILE_APPLICATION_AND_WEBSITE,
      includesDesign = false
    ) => {
      return includesDesign
        ? REALTIME_DELIVERY.MOBILE_APPLICATION_AND_WEBSITE.WITH_DESIGN
        : REALTIME_DELIVERY.MOBILE_APPLICATION_AND_WEBSITE.NO_DESIGN;
    },
  },
};

export const QUALITY_NAME = {
  FREELANCE: "FREELANCE",
  SOLUTION: "SOLUTION",
  ENTERPRISE: "ENTERPRISE",
  LEADING_TECH: "LEADING_TECH",
};

export const QUALTY_RATE = {
  [QUALITY_NAME.FREELANCE]: 300,
  [QUALITY_NAME.SOLUTION]: 600,
  [QUALITY_NAME.ENTERPRISE]: 1500,
  [QUALITY_NAME.LEADING_TECH]: 10000,
}

import { SITE_EMAIL } from "@/data/branding";

export type ContactOffice = {
  country: string;
  flag: string;
  flagAlt: string;
  address: string;
  email: string;
  phone?: string;
  phoneHref?: string;
  whatsapp?: boolean;
};

export const contactPageOffices: ContactOffice[] = [
  {
    country: "Pakistan",
    flag: "/images/icons/pakistanFlag.svg",
    flagAlt: "Pakistan Flag",
    address:
      "Innovista Rawal, Defense Avenue, A, Sector A DHA Phase 1, Islamabad, 45730, Pakistan",
    email: SITE_EMAIL,
    phone: "+92 316 1543205",
    phoneHref: "https://wa.me/923161543205",
    whatsapp: true,
  },
  {
    country: "Bahrain",
    flag: "/images/icons/bahrainFlag.svg",
    flagAlt: "Bahrain Flag",
    address:
      "Flat No. 11, Building 1694, Road 968, Block 909, East Riffa, Southern Governorate, Bahrain",
    email: SITE_EMAIL,
    phone: "+973 3557 9427",
    phoneHref: "tel:+97335579427",
    whatsapp: false,
  },
  {
    country: "United Kingdom",
    flag: "/images/icons/ukFlag.svg",
    flagAlt: "United Kingdom flag",
    address: "150 S Stratford Rd, Winston-Salem, NC 27104, United States",
    email: SITE_EMAIL,
    phone: "+44 7598 88887",
    phoneHref: "https://wa.me/44759888887",
    whatsapp: true,
  },
];

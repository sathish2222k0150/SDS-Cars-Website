import { ServiceType } from "../types";
import bodyShopImg from '../assets/body.gif';
import paintingImg from '../assets/paint.jpg';
import detailingImg from '../assets/detailing.jpg';
import mechanic from '../assets/mechanic.jpg';
import electronic from '../assets/electronic.jpg';
import obd from '../assets/obd.jpg';
import module from '../assets/module.jpg';
import Eb from '../assets/EB.jpg';
import carwash from '../assets/car wash.jpg';
import clean from '../assets/clean.jpg';

export const services: ServiceType[] = [
  {
    id: "body-shop",
    title: "Body Shop",
    description: "Complete body work and panel repair services for all types of vehicles.",
    icon: "car",
    image: bodyShopImg,
    details: "Our body shop specializes in panel beating, dent removal, chassis alignment, and structural repairs. Using state-of-the-art equipment, we restore your vehicle to factory specifications with precision and care."
  },
  {
    id: "painting",
    title: "Painting",
    description: "Professional automotive painting and color matching services.",
    icon: "paintbrush",
    image: paintingImg,
    details: "Our painting service includes computerized color matching, multi-stage painting process, clear coat application, and quality finishing. We use premium paints that provide long-lasting protection and showroom shine."
  },
  {
    id: "detailing",
    title: "Detailing",
    description: "Premium auto detailing to restore your vehicle's appearance.",
    icon: "sparkles",
    image: detailingImg,
    details: "Our comprehensive detailing service covers exterior polish, interior deep clean, engine bay detailing, headlight restoration, and paint protection. We use professional-grade products for exceptional results."
  },
  {
    id: "mechanic-service",
    title: "Mechanic Service",
    description: "Complete diagnostics and repair for all mechanical issues.",
    icon: "wrench",
    image: mechanic ,
    details: "Our certified mechanics provide engine repairs, transmission service, brake system maintenance, suspension work, and cooling system repairs. We use genuine parts and follow manufacturer specifications."
  },
  {
    id: "electronic-service",
    title: "Electronic Service",
    description: "Advanced diagnostics and repair for vehicle electronic systems.",
    icon: "cpu",
    image: electronic,
    details: "Our electronic service covers electrical system diagnosis, wiring repairs, battery and alternator testing, lighting system repairs, and power window/lock maintenance to keep your vehicle's electronics functioning properly."
  },
  {
    id: "obd-service",
    title: "OBD Service",
    description: "On-board diagnostics system checks and troubleshooting.",
    icon: "plug",
    image: obd,
    details: "Using advanced diagnostic equipment, we provide comprehensive OBD system checks, error code interpretation, sensor testing and replacement, emission control system diagnosis, and ECU programming."
  },
  {
    id: "all-module-program",
    title: "All Module Program",
    description: "Complete programming and update of all vehicle modules.",
    icon: "code",
    image: module,
    details: "Our module programming service includes ECU updates, module coding and calibration, immobilizer programming, key programming, and complete vehicle system updates for optimal performance."
  },
  {
    id: "ecm-bcm-repair",
    title: "ECM & BCM Repair",
    description: "Engine and Body Control Module repair and programming.",
    icon: "cpu",
    image: Eb,
    details: "We specialize in ECM/BCM diagnostic testing, circuit board repairs, component replacement, firmware updates, and complete module replacements to restore your vehicle's electronic control systems."
  },
  {
    id: "water-washing",
    title: "Water Washing",
    description: "High-pressure cleaning to remove dirt and grime.",
    icon: "droplets",
    image:carwash,
    details: "Our pressure washing service includes undercarriage cleaning, engine bay wash, wheel and tire cleaning, exterior wash, and eco-friendly detergent application for a thorough clean."
  },
  {
    id: "interior-cleaning",
    title: "Interior Cleaning",
    description: "Deep cleaning of vehicle interiors for a fresh look.",
    icon: "sprayCan",
    image: clean,
    details: "Our interior cleaning service features upholstery shampooing, leather treatment, carpet extraction, dashboard and trim cleaning, and air vent sanitization for a fresh and clean interior space."
  }
];
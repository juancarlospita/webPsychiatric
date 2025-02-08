// CARROUSEL 
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";


const SpaceCity1 = "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3";
const SpaceCity5 = "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-4.0.3";
const SpaceCity6 = "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3";
const SpaceCity7 = "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3";
const SpaceCity8 = "https://images.unsplash.com/photo-1632833239869-a37594d45921?ixlib=rb-4.0.3";
const SpaceCity9 = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3";

export const ServiceData = [
  {
    icon: RxCrop,
    title: "Development",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity9,
  },
  {
    icon: RxPencil2,
    title: "Branding",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity1,
  },
  {
    icon: RxDesktop,
    title: "Design",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity6,
  },
  {
    icon: RxReader,
    title: "Seo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity7,
  },
  {
    icon: RxAccessibility,
    title: "Management",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity5,
  },
  {
    icon: RxRocket,
    title: "Production",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: SpaceCity8,
  },
];

//  NAVBAR
import {
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export const navListMenuItems = [
  {
    title: "Neurologia",
    icon: UserGroupIcon,
    url: "/neurologia"
  },
  {
    title: "Psiquiatria",
    icon: UserGroupIcon,
    url: "psiquiatria"
  },
  {
    title: "Neuro Psicologia",
    icon: UserGroupIcon,
    url: "neuroPsicologia"
  },
  {
    title: "Psicologia",
    icon: UserGroupIcon,
    url: "psicologia"
  }
];


export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
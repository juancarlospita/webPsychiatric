import React from "react";
import { Phone, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { UserGroupIcon } from "@heroicons/react/24/solid";

import {
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const TopHeader = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="bg-blue-400 text-white py-2">
      <div className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{t('navbar.phone')}</span>
          </div>
          <a href="/contact" className="hidden sm:flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Calendar className="w-4 h-4" />
            <span>{t('navbar.request_appointment')}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            className={`hover:text-blue-200 transition-colors ${i18n.language === 'ca' ? 'font-bold' : ''}`}
            onClick={() => changeLanguage('ca')}
          >
            CAT
          </button>
          <span>|</span>
          <button 
            className={`hover:text-blue-200 transition-colors ${i18n.language === 'es' ? 'font-bold' : ''}`}
            onClick={() => changeLanguage('es')}
          >
            ESP
          </button>
        </div>
      </div>
    </div>
  );
};

function NavListMenu({ setOpenNav }) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const menuItems = [
    {
      title: "neurology",
      icon: UserGroupIcon,
      url: "/neurologia"
    },
    {
      title: "psychiatry",
      icon: UserGroupIcon,
      url: "/psiquiatria"
    },
    {
      title: "neuropsychology",
      icon: UserGroupIcon,
      url: "/neuroPsicologia"
    },
    {
      title: "psychology",
      icon: UserGroupIcon,
      url: "/psicologia"
    }
  ];

  const renderItems = menuItems.map(
    ({ icon, title, url }, key) => (
      <Link to={url} key={key} onClick={() => setOpenNav && setOpenNav(false)}>
        <MenuItem className="flex items-center gap-3 rounded-lg relative group hover:bg-transparent">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6 text-gray-900",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {t(`navbar.specialties.${title}`)}
            </Typography>
          </div>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 transition-transform group-hover:scale-x-100"></span>
        </MenuItem>
      </Link>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="text-lg">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 relative group hover:bg-transparent"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {t('navbar.specialties.title')}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block text-gray-900 ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden text-gray-900 ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({ setOpenNav }) {
  const { t } = useTranslation();

  const handleClick = () => {
    if (setOpenNav) setOpenNav(false);
  };

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-lg">
      <Link
        as="a"
        to="/centre"
        variant="medium"
        color="blue-gray"
        className="text-lg"
        onClick={handleClick}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900 relative group hover:bg-transparent">
          {t('navbar.center')}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 transition-transform group-hover:scale-x-100"></span>
        </ListItem>
      </Link>
      <NavListMenu setOpenNav={setOpenNav} />
      <Link
        to="/equip"
        variant="small"
        color="blue-gray"
        className="font-medium"
        onClick={handleClick}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900 relative group hover:bg-transparent">
          {t('navbar.team')}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 transition-transform group-hover:scale-x-100"></span>
        </ListItem>
      </Link>
      <Link
        to="/test-ad8"
        variant="small"
        color="blue-gray"
        className="font-medium"
        onClick={handleClick}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900 relative group hover:bg-transparent">
          {t('navbar.ad8')}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 transition-transform group-hover:scale-x-100"></span>
        </ListItem>
      </Link>
      <Link
        to="/contact"
        variant="small"
        color="blue-gray"
        className="font-medium"
        onClick={handleClick}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-gray-900 relative group hover:bg-transparent">
          {t('navbar.contact')}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 transition-transform group-hover:scale-x-100"></span>
        </ListItem>
      </Link>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 ${scrolled ? 'bg-white/95 backdrop-blur-md' : ''}`}>
      <TopHeader />
      <div className="bg-white shadow-md">
        <div className="mx-auto max-w-screen-2xl px-4 py-6">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Link to={"/"} onClick={() => setOpenNav(false)}>
              <img className="h-auto w-72" src="/assets/logo.png" alt="Logo" />
            </Link>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 text-gray-900 w-6" />
              ) : (
                <Bars3Icon className="h-6 text-gray-900 w-6" />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList setOpenNav={setOpenNav} />
          </Collapse>
        </div>
      </div>
    </div>
  );
}
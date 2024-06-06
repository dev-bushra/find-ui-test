"use client";
import "@/app/[locale]/scss/components/header.scss";
import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LocalSwitcher from "./local-switcher";
import { usePathname } from "next/navigation";
import Image from "next/image";
import DropdownTitle from "@/app/[locale]/components/DropdownTitle";
import { Col, NavDropdown, Row } from "react-bootstrap";

// Assets
import Logo from "../../../../../public/logo.png";
import LocationIcon from "../../../../../public/icons/pin-sign-white.svg";
import { IoIosArrowDown } from "react-icons/io";
import ProfileIcon from "../../../../../public/icons/user-profile.svg";
import NotificationIcon from "../../../../../public/icons/bell-notification.svg";
import CartIcon from "../../../../../public/icons/shopping-cart.svg";
import FavoriteIcon from "../../../../../public/icons/heart-favorite.svg";
import HomeMobileIcon from "../../../../../public/icons/home-mob-icon.svg";
import AllCategoriesMobileIcon from "../../../../../public/icons/all-categories-mob-icon.svg";
import BestSellerMobileIcon from "../../../../../public/icons/best-seller-mob-icon.svg";
import MostRatedMobileIcon from "../../../../../public/icons/most-rated-mob-icon.svg";
import OffersMobileIcon from "../../../../../public/icons/offers-mob-icon.svg";
import AllCategoriesIcon from "../../../../../public/icons/all-categories.svg";
import ThumpsUpIcon from "../../../../../public/icons/thumps-up.svg";
import StarFavIcon from "../../../../../public/icons/star-favorite.svg";
import SaleDiscountIcon from "../../../../../public/icons/sale-discount.svg";
import VictorArtLogo from "../../../../../public/victore-art-find-adv.png";
import close from "../../../../../public/icons/close.svg";
import LangIcon from "../../../../../public/icons/language-icon.svg";
import { IoCloseOutline } from "react-icons/io5";
import mobicon from "../../../../../public/icons/mobicon.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import Homeaudioandupgradedevices from "../../../../../public/header/Categories/Electronics/Homeaudioandupgradedevices.svg";
import Laptopsandaccessories from "../../../../../public/header/Categories/Electronics/Laptopsandaccessories.svg";
import Televisionsandsatellitedevices from "../../../../../public/header/Categories/Electronics/Televisionsandsatellitedevices.svg";
import Camerasandaccessories from "../../../../../public/header/Categories/Electronics/Camerasandaccessories.svg";
import Computeraccessories from "../../../../../public/header/Categories/Electronics/Computeraccessories.svg";
import Datastorage from "../../../../../public/header/Categories/Electronics/Datastorage.svg";
import Internetdevicesandrouters from "../../../../../public/header/Categories/Electronics/Internetdevicesandrouters.svg";
import Printersandaccessories from "../../../../../public/header/Categories/Electronics/Printersandaccessories.svg";
import videogames from "../../../../../public/header/Categories/Electronics/videogames.svg";
import { SlUser } from "react-icons/sl";
import LogoutIcon from '../../../../../public/header/profile-dropdown-menu/logout-icon.svg'
import MyAccountIcon from '../../../../../public/header/profile-dropdown-menu/my-account-icon.svg'
import MyLocationIcon from '../../../../../public/header/profile-dropdown-menu/my-location-icon.svg'
import MyOrdersIcon from '../../../../../public/header/profile-dropdown-menu/my-orders-icon.svg'
import MyPaymentIcon from '../../../../../public/header/profile-dropdown-menu/my-payment-icon.svg'
import MyPremiumSubscriptionIcon from '../../../../../public/header/profile-dropdown-menu/my-premium-subscription-icon.svg'
import MyReturnsIcon from '../../../../../public/header/profile-dropdown-menu/my-returns-icon.svg'
import MyWalletIcon from '../../../../../public/header/profile-dropdown-menu/my-wallet-icon.svg'
import MyWishListIcon from '../../../../../public/header/profile-dropdown-menu/my-wishlist-icon.svg'
import ProfileImage from "../../../../../public/profile/profile_image.jpg";
import NoNotificationsIcon from "../../../../../public/header/profile-dropdown-menu/no-notifications.svg";
import { HiDotsHorizontal } from "react-icons/hi";

// TODO: Translate Inner Categories sub menu and RTL and LTR depend on the /ar /en pathname
const navigation = [
  { name: "All categories", href: "/", current: false },
  { name: "Best seller", href: "/", current: false },
  { name: "Most rated", href: "/", current: false },
  { name: "Offers", href: "/", current: false },
];
const moblinks = [
  { id: "home", name: "Home Page", href: "/", current: false },
  { id: "allCategories", name: "All categories", href: "/", current: false },
  { id: "bestSeller", name: "Best seller", href: "/", current: false },
  { id: "mostRated", name: "Most rated", href: "/", current: false },
  { id: "offers", name: "Offers", href: "/", current: false },
  { id: "premium", name: "Premium", href: "/", current: false },
];
const services = [
  { name: "services", href: "/services/", current: false },
  { name: "services", href: "/services/", current: false },
  { name: "services", href: "/services/", current: false },
  { name: "services", href: "/services/", current: false },
  { name: "services", href: "/services/", current: false },
];
var x = null;

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const t = useTranslations("Header");
  const pathname = usePathname();

  // Current Selected Language form the URL
  console.log(pathname.slice(0, 3));
  const handleLink = (href: any) => {
    console.log(href);
  };

  const renderIcon = (icon: any) => {
    switch (icon) {
      case "Home Page":
        return (
          <Image
            src={HomeMobileIcon}
            width={16}
            height={16}
            alt="category-icon"
          />
        );
      case "All categories":
        return (
          <Image
            src={AllCategoriesMobileIcon}
            width={16}
            height={16}
            alt="category-icon"
          />
        );
      case "Best seller":
        return (
          <Image
            src={BestSellerMobileIcon}
            width={16}
            height={16}
            alt="category-icon"
          />
        );
      case "Most rated":
        return (
          <Image
            src={MostRatedMobileIcon}
            width={16}
            height={16}
            alt="category-icon"
          />
        );
      case "Offers":
        return (
          <Image
            src={OffersMobileIcon}
            width={16}
            height={16}
            alt="category-icon"
          />
        );
      default:
        return null;
    }
  };
  const renderTitle = (id: any) => {
    switch (id) {
      case "home":
        return <>{t("home")}</>;
      case "allCategories":
        return <>{t("allCategories")}</>;
      case "bestSeller":
        return <>{t("bestSeller")}</>;
      case "mostRated":
        return <>{t("mostRated")}</>;
      case "offers":
        return <>{t("offers")}</>;
      case "premium":
        return <>{t("premium")}</>;
      default:
        return null;
    }
  };

  const allCategories = t("allCategories");

  const allCategoriesMenuList = [
    {
      title: "Electronics",
      subTitles: [
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Data storage",
          href: "/electronics/home_audio_devicess",
          img: Datastorage,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Computer accessories",
          href: "/electronics/home_audio_devicess",
          img: Computeraccessories,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
      ],
    },
    {
      title: "Mobiles",
      subTitles: [
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Data storage",
          href: "/electronics/home_audio_devicess",
          img: Datastorage,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Computer accessories",
          href: "/electronics/home_audio_devicess",
          img: Computeraccessories,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
      ],
    },
    {
      title: "grocery shop",
      subTitles: [
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Data storage",
          href: "/electronics/home_audio_devicess",
          img: Datastorage,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Computer accessories",
          href: "/electronics/home_audio_devicess",
          img: Computeraccessories,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
      ],
    },
    {
      title: "Personal care",
      subTitles: [
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Data storage",
          href: "/electronics/home_audio_devicess",
          img: Datastorage,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Computer accessories",
          href: "/electronics/home_audio_devicess",
          img: Computeraccessories,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
      ],
    },
    {
      title: "Fashion",
      subTitles: [
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Data storage",
          href: "/electronics/home_audio_devicess",
          img: Datastorage,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Computer accessories",
          href: "/electronics/home_audio_devicess",
          img: Computeraccessories,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
      ],
    },
    {
      title: "Home and kitchen",
      subTitles: [
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Data storage",
          href: "/electronics/home_audio_devicess",
          img: Datastorage,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Computer accessories",
          href: "/electronics/home_audio_devicess",
          img: Computeraccessories,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
      ],
    },
    {
      title: "Sports and fitness",
      subTitles: [
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Data storage",
          href: "/electronics/home_audio_devicess",
          img: Datastorage,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Computer accessories",
          href: "/electronics/home_audio_devicess",
          img: Computeraccessories,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
      ],
    },
    {
      title: "Baby products",
      subTitles: [
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Data storage",
          href: "/electronics/home_audio_devicess",
          img: Datastorage,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Computer accessories",
          href: "/electronics/home_audio_devicess",
          img: Computeraccessories,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
      ],
    },
    {
      title: "Car supplies",
      subTitles: [
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Data storage",
          href: "/electronics/home_audio_devicess",
          img: Datastorage,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Computer accessories",
          href: "/electronics/home_audio_devicess",
          img: Computeraccessories,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
      ],
    },
    {
      title: "Books",
      subTitles: [
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Data storage",
          href: "/electronics/home_audio_devicess",
          img: Datastorage,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
        {
          title: "Televisions and satellite devices",
          href: "/electronics/home_audio_devicess",
          img: Televisionsandsatellitedevices,
        },
        {
          title: "Computer accessories",
          href: "/electronics/home_audio_devicess",
          img: Computeraccessories,
        },
        {
          title: "Laptops and accessories",
          href: "/electronics/home_audio_devicess",
          img: Laptopsandaccessories,
        },
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "Internet devices and routers",
          href: "/electronics/home_audio_devicess",
          img: Internetdevicesandrouters,
        },
        {
          title: "Printers and accessories",
          href: "/electronics/home_audio_devicess",
          img: Printersandaccessories,
        },
        {
          title: "Cameras and accessories",
          href: "/electronics/home_audio_devicess",
          img: Camerasandaccessories,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
      ],
    },
    {
      title: "Music",
      subTitles: [
        {
          title: "Home audio and upgrade devices",
          href: "/electronics/home_audio_devicess",
          img: Homeaudioandupgradedevices,
        },
        {
          title: "video games",
          href: "/electronics/home_audio_devicess",
          img: videogames,
        },
      ],
    },
  ];

  var currentSelectedDropDownSubMenuInnerRightSide = 0;
  let currentSelectedDropDownSubMenuInnerRightSideName = "Electronics";
  const allCategoriesMenuListCol = () => {
    return allCategoriesMenuList[
      currentSelectedDropDownSubMenuInnerRightSide
    ].subTitles.map((item, index) => (
      <Col sm="3" md="3" lg="3" className="m-0 p-0 " key={index}>
        <div className="flex flex-col items-center justify-center gap-1 mx-auto text-center w-fit">
          <Image src={item.img} width={70} height={70} alt="icon" />
          <span className="text-[14px] font-medium mx-auto">{item.title}</span>
        </div>
      </Col>
    ));
  };
  const allCategoriesMenuListColTitle = () => {
    return (
      // <span className="text-[16px] font-medium">{allCategoriesMenuList[currentSelectedDropDownSubMenuInnerRightSide].title}</span>
      <span className="text-[16px] font-medium">
        {currentSelectedDropDownSubMenuInnerRightSideName}
      </span>
    );
  };
  const handleSelectedDropDownSubMenuInnerRightSide = (id: any, name: any) => {
    console.log(id, name);
    currentSelectedDropDownSubMenuInnerRightSide = id;
    currentSelectedDropDownSubMenuInnerRightSideName = name;
    // allCategoriesMenuListCol()
    allCategoriesMenuListColTitle();
  };

  useEffect(() => {
    allCategoriesMenuListColTitle();
    allCategoriesMenuListCol();
  });

  return (
    <Disclosure as="nav" className="z-40 fixed top-0 min-w-full max-w-full">
      {({ open }) => (
        <>
          <header className="min-w-full max-w-full">
            <div className="relative">
              {/* Mobile Header */}
              <div className="bg-[#121A32] p-2 inset-y-0 flex items-center w-full lg:hidden">
                <Disclosure.Button className="mobile-header-wrapper relative mob-btn z-50 flex items-center justify-between min-w-full rounded-md p-2 text-gray-400  hover:text-white focus:outline-none ">
                  <div className="flex items-center gap-7">
                    {open ? (
                      <IoCloseOutline
                        size={24}
                        color="#fff"
                        aria-hidden="true"
                        className="z-50"
                      />
                    ) : (
                      <Image
                        src={mobicon}
                        width={24}
                        height={24}
                        alt="mob-icon"
                        className="block"
                        aria-hidden="true"
                      />
                    )}
                    <div className="logo">
                      <Image
                        src={Logo}
                        width={68}
                        height={27}
                        alt="find-main-logo"
                        onClick={() => handleLink("/")}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={CartIcon}
                      width={24}
                      height={24}
                      alt="user-profile-icon"
                    />
                    <Image
                      src={FavoriteIcon}
                      width={24}
                      height={24}
                      alt="user-profile-icon"
                    />
                  </div>
                </Disclosure.Button>
              </div>

              {/* Desktop Header + Menu */}
              <nav className="hidden lg:block header-wrapper p-0 m-0">
                <div className="wrapper main-nav p-[1rem] m-0">
                  <div className="left-side flex gap-6">
                    <Link
                      href={`${pathname.slice(0, 3)}/`}
                      className=" no-underline"
                    >
                      <div className="logo">
                        <Image
                          src={Logo}
                          width={114}
                          height={46}
                          alt="find-main-logo"
                          onClick={() => handleLink("/")}
                        />
                      </div>
                    </Link>
                    <div className="flex flex-col">
                      <div className="flex gap-2">
                        <Image
                          src={LocationIcon}
                          width={24}
                          height={24}
                          alt="location-icon"
                        />
                        <span className="text-xs text-white">
                          {t("deliveryTo")}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-secondary">
                          {t("location")}
                        </span>
                        <IoIosArrowDown size={16} />
                      </div>
                    </div>
                  </div>
                  <div className="right-side flex items-center">
                    {/* <Link
                      href={`${pathname.slice(0, 3)}/`}
                      className="text-white no-underline"
                    >
                      {t("home")}
                    </Link>
                    <hr className="divider" />
                    <Link
                      href={`${pathname.slice(0, 3)}/thankyou`}
                      className="text-white no-underline"
                    >
                      {t("thankyou")}
                    </Link>
                    <hr className="divider" /> */}
                    <div className="profile-dropdown-wrapper">
                      <NavDropdown title={
                            <Image
                            src={ProfileIcon}
                            width={24}
                            height={24}
                            alt="user-profile-icon"
                            className="profile-dropdown-icon p-0"
                          />
                          } id="basic-nav-dropdown">
                        <NavDropdown.Item href={`${pathname.slice(0, 3)}/my_account`} className="p-0 pt-3">
                          <div className="flex items-center gap-2 w-full border-b-[.5px] border-b-[#CBCBCB] pb-2 px-3">
                          <Image src={MyAccountIcon} width={24} height={24} alt="icon" />
                            <span className="text-[14px] font-medium">{t('MyAccount')}</span>
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#my_orders" className="p-0 pt-2">
                          <div className="flex items-center gap-2 w-full border-b-[.5px] border-b-[#CBCBCB] pb-2 px-3">
                          <Image src={MyOrdersIcon} width={24} height={24} alt="icon" />
                            <span className="text-[14px] font-medium">{t('MyOrders')}</span>
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1" className="p-0 pt-2">
                          <div className="flex items-center gap-2 w-full border-b-[.5px] border-b-[#CBCBCB] pb-2 px-3">
                            <Image src={MyLocationIcon} width={24} height={24} alt="icon" />
                            <span className="text-[14px] font-medium">{t('MyAddresses')}</span>
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1" className="p-0 pt-2">
                          <div className="flex items-center gap-2 w-full border-b-[.5px] border-b-[#CBCBCB] pb-2 px-3">
                            <Image src={MyPaymentIcon} width={24} height={24} alt="icon" />
                            <span className="text-[14px] font-medium">{t('MyPayments')}</span>
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1" className="p-0 pt-2">
                          <div className="flex items-center gap-2 w-full border-b-[.5px] border-b-[#CBCBCB] pb-2 px-3">
                            <Image src={MyWalletIcon} width={24} height={24} alt="icon" />
                            <span className="text-[14px] font-medium">{t('MyWallet')}</span>
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1" className="p-0 pt-2">
                          <div className="flex items-center gap-2 w-full border-b-[.5px] border-b-[#CBCBCB] pb-2 px-3">
                            <Image src={MyReturnsIcon} width={24} height={24} alt="icon" />
                            <span className="text-[14px] font-medium">{t('MyReturns')}</span>
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1" className="p-0 pt-2">
                          <div className="flex items-center gap-2 w-full border-b-[.5px] border-b-[#CBCBCB] pb-2 px-3">
                            <Image src={MyWishListIcon} width={24} height={24} alt="icon" />
                            <span className="text-[14px] font-medium">{t('MyFavoriteSeller')}</span>
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1" className="p-0 pt-2 min-w-full">
                          <div className="flex items-center gap-2 w-full border-b-[.5px] border-b-[#CBCBCB] pb-2 px-3">
                            <Image src={MyPremiumSubscriptionIcon} width={22} height={22} alt="icon" />
                            <span className="text-[14px] font-medium">{t('MyPremiumSubscription')}</span>
                          </div>
                        </NavDropdown.Item>
                        <div className="flex items-center justify-center text-center gap-1 py-2 px-3 border-[#2C6FF4] border-[.5px] rounded-[8px] my-3 mx-3 cursor-pointer">
                        <Image src={LogoutIcon} width={24} height={24} alt="icon" />
                            <span className="text-[12px] font-medium text-[#2C6FF4]">{t('LogOut')}</span>
                        </div>
                      </NavDropdown>
                    </div>
                    <hr className="divider" />
                    <div className="notification-dropdown-wrapper">
                      <NavDropdown title={
                            <Image
                            src={NotificationIcon}
                            width={24}
                            height={24}
                            alt="user-profile-icon"
                          />
                          } id="basic-nav-dropdown">
                        <NavDropdown.Item href={`${pathname.slice(0, 3)}/seller_profile`} className="p-0 pt-2 min-w-full">
                          <div className="flex items-center justify-between px-3 gap-2 w-full border-b-[.5px] border-b-[#CBCBCB] pb-2  min-w-full">
                            <div className="flex items-center justify-center text-center gap-1">
                              <span className="font-semibold text-[20px]">{t('Notifications')}</span>
                              <div className="flex items-center justify-center bg-[#F19371] p-2 rounded-full h-[2rem] w-[2rem] mx-auto text-center font-semibold">2</div>
                            </div>
                            <span className="text-light text-[14px] text-black">{t('ReadAll')}</span>
                          </div>
                        </NavDropdown.Item>
                        {/* <NavDropdown.Item href={`${pathname.slice(0, 3)}/seller_profile`} className="yes-notification-wrapper p-0 pt-3">
                          <div className="flex items-center justify-between gap-2 w-full border-b-[.5px] border-b-[#CBCBCB] pb-2 px-3">
                          <div className="flex items-center justify-center gap-2">
                            <Image src={ProfileImage} width={40} height={40} alt="icon" className=" rounded-full min-w-fit" />
                            <span className="text-[14px] font-normal">{t('NotificationExampleOne')} </span>
                          </div>
                            <div className="flex flex-col items-center justify-between gap-2">
                              <HiDotsHorizontal size={20} />
                              <span className=" text-third text-[12px] font-light">10h</span>
                            </div>
                          </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item href={`${pathname.slice(0, 3)}/seller_profile`} className="p-0 pt-3">
                          <div className="flex items-center justify-between gap-2 w-full border-b-[.5px] border-b-[#CBCBCB] pb-2 px-3">
                          <div className="flex items-center justify-center gap-2">
                            <Image src={ProfileImage} width={40} height={40} alt="icon" className=" rounded-full min-w-fit" />
                            <span className="text-[14px] font-normal">{t('NotificationExampleTwo')}</span>
                          </div>
                            <div className="flex flex-col items-center justify-between gap-2">
                              <HiDotsHorizontal size={20} />
                              <span className=" text-third text-[12px] font-light">10h</span>
                            </div>
                          </div>
                        </NavDropdown.Item>
                        <div className="mt-3 mb-4 px-3 w-full text-end flex items-end justify-end underline">{t('ViewAll')}</div> */}
                        <div className="no-notification-wrapper min-h-[55vh] w-full flex flex-col items-center justify-center gap-2 mx-auto p-5">
                          <Image src={NoNotificationsIcon} width={110} height={80} alt="NoNotificationsIcon" />
                          <span className="font-bold text-[20px]">{t('NoNotifications')}</span>
                          <span className="font-normal text-[16px]">{t('WeWillTellYouWhenThereIsAnUpdate')}</span>
                        </div>
                      </NavDropdown>
                    </div>
                    <hr className="divider" />
                    <Link href={`${pathname.slice(0, 3)}/cart`} className="text-white no-underline">
                      <Image
                        src={CartIcon}
                        width={24}
                        height={24}
                        alt="user-profile-icon"
                      />
                    </Link>
                    <hr className="divider" />
                    <Link href={`${pathname.slice(0, 3)}/favorite`}>
                      <Image
                        src={FavoriteIcon}
                        width={24}
                        height={24}
                        alt="user-profile-icon"
                      />
                    </Link>
                    <hr className="divider" />
                    <LocalSwitcher />
                  </div>
                </div>
                <div className="relative wrapper sub-nav m-0 py-[.5rem] ">
                  <div className="right-side flex items-center gap-5">
                    <div className="allCategories-desktop-dropdown-menu flex items-center gap-2 w-fit">
                      {/* Services dropdown */}
                      {/* {services && services.map((item, index) => ( ))} */}
                      <NavDropdown
                        className=""
                        title={
                          <DropdownTitle
                            iconSrc={AllCategoriesIcon}
                            text={allCategories}
                          />
                        }
                        id="basic-nav-dropdown"
                      >
                        <div className="bg-white py-2 px-2 w-[40%] min-h-full rounded-[10px] flex flex-col items-start justify-start">
                          {allCategoriesMenuList &&
                            allCategoriesMenuList.map((item, index) => (
                              <span
                                key={index}
                                className="right-side-nav-dynamic-toggler cursor-pointer text-[16px] font-medium py-2 px-6 min-w-full rounded-[8px] hover:bg-[#2C6FF4] hover:text-white"
                                onClick={() =>
                                  handleSelectedDropDownSubMenuInnerRightSide(
                                    index,
                                    item.title
                                  )
                                }
                              >
                                {item.title}
                              </span>
                            ))}
                        </div>
                        <div className="right-side-nav-dynamic m-0 p-0 bg-white px-3 py-3 w-full min-h-full rounded-[10px] flex flex-wrap items-start justify-start overflow-auto">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-[16px] font-medium">
                              {allCategoriesMenuListColTitle()}
                            </span>
                            <IoIosArrowForward size={14} />
                          </div>
                          <Row className="m-0 p-0 gap-y-5">
                            {allCategoriesMenuListCol()}
                          </Row>
                        </div>
                      </NavDropdown>
                    </div>
                    <hr className="divider" />
                    <div className="flex items-center gap-2">
                      <Image
                        src={ThumpsUpIcon}
                        width={24}
                        height={24}
                        alt="icon"
                      />
                      <span>{t("bestSeller")}</span>
                    </div>
                    <hr className="divider" />
                    <div className="flex items-center gap-2">
                      <Image
                        src={StarFavIcon}
                        width={24}
                        height={24}
                        alt="icon"
                      />
                      <span>{t("mostRated")}</span>
                    </div>
                    <hr className="divider" />
                    <div className="flex items-center gap-2">
                      <Image
                        src={SaleDiscountIcon}
                        width={24}
                        height={24}
                        alt="icon"
                      />
                      <span className="flex">
                        {t("offers")}
                        <div className="flex items-center">
                          <b className="ml-4 mr-1">{t("premium")}</b>
                          <IoIosArrowDown size={12} />
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="left-side flex">
                    <b
                      className={`${
                        pathname.slice(0, 3) === "/ar"
                          ? "ml-[6rem]"
                          : "mr-[6rem]"
                      }`}
                    >
                      {t("sellOn")}
                    </b>
                    <Image
                      className={`absolute bottom-0 ${
                        pathname.slice(0, 3) === "/ar"
                          ? "left-[3rem]"
                          : "right-[3rem]"
                      }`}
                      src={VictorArtLogo}
                      width={122}
                      height={122}
                      alt="victor-art-logo"
                    />
                  </div>
                </div>
              </nav>
            </div>
          </header>

          {/* Mobile Side Menu */}
          <Disclosure.Panel className="lg:hidden ">
            <div className="bg-[#121A32] h-screen flex items-end z-40 flex-col justify-around text-white absolute left-0 w-[80%] top-0 space-y-1 px-4 py-2">
              <div className="mob-inner w-full">
                <div className="deliver-top-submenu flex flex-col  mt-[2rem] gap-y-2">
                  <div className="flex gap-2">
                    <Image
                      src={LocationIcon}
                      width={24}
                      height={24}
                      alt="location-icon"
                    />
                    <span className="text-xs text-white">
                      {t("deliveryTo")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 ml-3">
                    <span className="text-[12px] font-light text-white">
                      {t("location")}
                    </span>
                    <IoIosArrowDown size={14} />
                  </div>
                </div>

                <div className="sign-btn mt-[2rem]">
                  <Link
                    href="#"
                    className="flex items-center justify-center gap-3 border-solid rounded-xl text-xs  border  px-4 py-2 text-white border-[#c1c1c1] hover:bg-[#ffffff23] "
                  >
                    <FiUser size={24} color="#fff" />
                    <span>{t("loginAndRegisterNow")}</span>
                  </Link>
                </div>

                <div className="inner-menu mt-[2rem] pr-[0rem]">
                  {moblinks.map((item) => (
                    <div key={item.name} className="relative group ">
                      {item.name === "Services" && (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-black"
                                : "text-black",
                              "rounded-md px-3 py-2 text-base border-b-[1px] w-full text-left border-[#80808063] leading-[2.3]  font-medium hover-btn text-black text-[1.2rem]"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Disclosure.Button>
                        </>
                      )}
                      {item.name !== "Services" && (
                        <Disclosure.Button
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-primary bg-white"
                              : "text-white",
                            "border-b-[1px] border-[#80808063] px-3 py-2 text-base font-medium flex items-center gap-2 hover:bg-[#ffffff23] hover:rounded-[10px]"
                          )}
                          aria-current={item.current ? "page" : undefined}
                          style={{ fontSize: "16px", lineHeight: "2.0" }}
                        >
                          {renderIcon(item.name)}
                          {renderTitle(item.id)}
                          {/* {item.name} */}
                        </Disclosure.Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="language-changer-toggler flex items-center justify-center mx-auto gap-x-2">
                <LocalSwitcher />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

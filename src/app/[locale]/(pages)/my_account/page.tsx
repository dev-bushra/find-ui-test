"use client";
import "@/app/[locale]/scss/globals.scss";
import "@/app/[locale]/scss/pages/myAccount.scss";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useState } from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Tabs } from "react-bootstrap";

// Assets
import ProfileIcon from "../../../../../public/my_account/user-profile-black.svg";
import CreditIcon from "../../../../../public/my_account/Credit card, Check, Done.svg";
import InvoiceIcon from "../../../../../public/my_account/Invoice, Accounting, Check mark.svg";
import BookmarksIcon from "../../../../../public/my_account/bookmark-favorite-add.svg";
import PremiumIcon from "../../../../../public/my_account/material-symbols-light_workspace-premium-rounded.svg";
import PinIcon from "../../../../../public/my_account/pin-sign.svg";
import ReturnsIcon from "../../../../../public/my_account/rotate-refresh-loading.2.svg";
import WalletIcon from "../../../../../public/my_account/wallet-2.svg";
import Iphone11 from "../../../../../public/products/iphone-11-product.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { FcProcess } from "react-icons/fc";
import { CiCircleCheck } from "react-icons/ci";
import MAsterCardIcon from "../../../../../public/my_account/master-card.png";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import ProfileImage from "../../../../../public/seller_profile/profile_image.jpg";

// Components

export default function MyAccount() {
  const t = useTranslations("IndexPage");
  const pathname = usePathname();
  console.log("pathname", pathname);

  // State to keep track of the current tab
  const [currentTab, setCurrentTab] = useState("YourAccount");

  // Function to handle tab clicks
  const handleToggleTab = (tab: any) => {
    setCurrentTab(tab);
    console.log("clicked tab:", tab);
  };
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const transactions = [
    {
      date: "30/12/2024",
      number: 234531,
      type: "Order Payment",
      amount: -200,
      currency: "AED",
      description: "#4144432",
    },
    {
      date: "30/12/2024",
      number: 234531,
      type: "Refund",
      amount: 200,
      currency: "AED",
      description: "#4144432",
    },
    {
      date: "30/12/2024",
      number: 234531,
      type: "Cashback",
      amount: 200,
      currency: "AED",
      description: "#4144432",
    },
    {
      date: "30/12/2024",
      number: 234531,
      type: "Order Payment",
      amount: -200,
      currency: "AED",
      description: "#4144432",
    },
    {
      date: "30/12/2024",
      number: 234531,
      type: "Card Payment",
      amount: 200,
      currency: "AED",
      description: "#4144432",
    },
    {
      date: "30/12/2024",
      number: 234531,
      type: "Order Payment",
      amount: -200,
      currency: "AED",
      description: "#4144432",
    },
  ];

  const counter = [{}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <Container className="bg-[#e6e6e9] min-w-full max-w-full min-h-screen">
      <Row className="m-0 justify-between w-full pb-10">
        {/* Tab */}
        <Col
          sm={2}
          className="hidden md:block m-0 p-0 min-h-screen bg-white px-2 py-5"
        >
          <h1 className="text-[23px] font-semibold mb-3 px-2">Hello Bushra</h1>
          <div className="flex flex-col gap-y-3">
            <div
              className={`tab-link gap-1 ${
                currentTab === "YourAccount" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("YourAccount")}
            >
              <Image
                src={ProfileIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">Your Account</span>
            </div>
            <div
              className={`tab-link gap-1 ${
                currentTab === "MyOrders" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("MyOrders")}
            >
              <Image
                src={InvoiceIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">Orders</span>
            </div>
            <div
              className={`tab-link gap-1 ${
                currentTab === "MyAddress" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("MyAddress")}
            >
              <Image
                src={PinIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">My Addresses</span>
            </div>
            <div
              className={`tab-link gap-1 ${
                currentTab === "PaymentMethod" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("PaymentMethod")}
            >
              <Image
                src={CreditIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">Payment method </span>
            </div>
            <div
              className={`tab-link gap-1 ${
                currentTab === "Wallet" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("Wallet")}
            >
              <Image
                src={WalletIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">Wallet</span>
            </div>

            <div
              className={`tab-link gap-1 ${
                currentTab === "ReturnsAndExchanges" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("ReturnsAndExchanges")}
            >
              <Image
                src={ReturnsIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">Returns and exchanges</span>
            </div>

            <div
              className={`tab-link gap-1 ${
                currentTab === "PreferredSellers" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("PreferredSellers")}
            >
              <Image
                src={BookmarksIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">Preferred Sellers</span>
            </div>
            <div
              className={`tab-link gap-1 ${
                currentTab === "Premium" ? "tab-link-active" : ""
              }`}
              onClick={() => handleToggleTab("Premium")}
            >
              <Image
                src={PremiumIcon}
                width={20}
                height={20}
                alt="user-profile-icon"
                className="profile-dropdown-icon p-0"
              />
              <span className="text-[16px] w-full">Premium</span>
            </div>
          </div>
        </Col>

        {/* Content */}
        {currentTab && (
          <Col sm={10} className="m-0 p-2 md:p-0 w-full">
            <div className="w-full md:pl-8 pt-4">
              {currentTab === "YourAccount" && (
                <div className="flex flex-col gap-3">
                  <div className="title-wrapper flex items-center justify-between mb-3">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      Account Details
                    </span>
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2 mx-auto items-center justify-center">
                      <FcProcess size={60} />
                    </div>
                    <span className="text-[18px] font-medium mx-auto">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
              {currentTab === "MyOrders" && (
                <div className="flex flex-col gap-3">
                  <div className="title-wrapper flex items-center justify-between mb-3">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      My Orders
                    </span>
                    <div className="flex items-end justify-end gap-1">
                      <span className="text-[12px] md:text-[14px] font-normal">
                        Last 3 months
                      </span>
                      <IoMdArrowDropdown size={20} />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2 mx-auto items-center justify-center">
                      <CiCircleCheck size={60} />
                    </div>
                    <span className="text-[18px] font-medium mx-auto">
                      Work on this page
                    </span>
                  </div>
                </div>
              )}
              {currentTab === "MyAddress" && (
                <div className="flex flex-col gap-5">
                  <div className="title-wrapper flex flex-col gap-2">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      Address
                    </span>
                  </div>

                  <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2 mx-auto items-center justify-center">
                      <FcProcess size={60} />
                    </div>
                    <span className="text-[18px] font-medium mx-auto">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
              {currentTab === "PaymentMethod" && (
                <div className="flex flex-col gap-5">
                  <div className="text-[20px] md:title-wrapper flex flex-col gap-2">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      Payment processes
                    </span>
                  </div>

                  <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2 mx-auto items-center justify-center">
                      <FcProcess size={60} />
                    </div>
                    <span className="text-[18px] font-medium mx-auto">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
              {currentTab === "Wallet" && (
                <div className="flex flex-col gap-5">
                  <div className="title-wrapper flex flex-col gap-4">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      Wallet balance
                    </span>
                    <div className="w-full flex flex-col gap-4">
                      <div className="flex flex-col gap-2 mx-auto items-center justify-center">
                        <FcProcess size={60} />
                      </div>
                      <span className="text-[18px] font-medium mx-auto">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {currentTab === "ReturnsAndExchanges" && (
                <div className="flex flex-col gap-5">
                  <div className="title-wrapper flex flex-col gap-2">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      Returns And Exchanges
                    </span>
                  </div>

                  <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2 mx-auto items-center justify-center">
                      <FcProcess size={60} />
                    </div>
                    <span className="text-[18px] font-medium mx-auto">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
              {currentTab === "PreferredSellers" && (
                <div className="flex flex-col gap-5">
                  <div className="title-wrapper flex items-center justify-between">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      Preferred Sellers
                    </span>
                  </div>

                  <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2 mx-auto items-center justify-center">
                      <FcProcess size={60} />
                    </div>
                    <span className="text-[18px] font-medium mx-auto">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
              {currentTab === "Premium" && (
                <div className="flex flex-col gap-5">
                  <div className="title-wrapper flex flex-col gap-2">
                    <span className="text-[20px] md:text-[30px] font-semibold">
                      Premium
                    </span>
                  </div>

                  <div className="w-full flex flex-col gap-4">
                    <div className="flex flex-col gap-2 mx-auto items-center justify-center">
                      <FcProcess size={60} />
                    </div>
                    <span className="text-[18px] font-medium mx-auto">
                      Coming Soon
                    </span>
                  </div>
                </div>
              )}
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}

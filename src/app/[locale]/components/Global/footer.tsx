import "@/app/[locale]/scss/components/footer.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "react-bootstrap";

// Assets
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { LiaFacebookSquare } from "react-icons/lia";
import { IoCallOutline } from "react-icons/io5";
import Facebook from "../../../../../public/footer/Facebook.svg";
import FacebookWhite from "../../../../../public/footer/Facebook-white.svg";
import Instagram from "../../../../../public/footer/Instagram.svg";
import InstagramWhite from "../../../../../public/footer/Instagram-white.svg";
import Twitter from "../../../../../public/footer/Twitter.svg";
import TwitterWhite from "../../../../../public/footer/Twitter-white.svg";
import FooterBackground from "../../../../../public/footer/footer-bg.png";
import AppStore from "../../../../../public/footer/app-store-add.png";
import GooglePlay from "../../../../../public/footer/google-play-add.png";
import OfferCouponsIcon from "../../../../../public/footer/offers-coupons-icon.svg";
import SupportIcon from "../../../../../public/footer/support-icons.svg";
import SupportIconWhite from "../../../../../public/footer/support-icons-white.svg";
import TrackOrderIcon from "../../../../../public/footer/track-orders-icon.svg";
import WarningProductIcon from "../../../../../public/footer/warning-product-icon.svg";
import WeAcceptPaymentSectionIcons from "../../../../../public/footer/we-accept-payment-section-full-icons.png";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="">
      {/* MD LG XL Desktop */}
      <div className=" hidden md:block footer-wrapper w-full items-center justify-center mt-[-3rem]">
        <div className="top-footer min-w-full pt-[5rem] pb-[5rem] flex flex-wrap gap-2 lg:gap-y-5 items-center justify-between wrapper">
          <span className="text-[24px] font-normal text-white">
            {t("RegisterWithUsToReceiveAllNewUpdates")}
          </span>

          <div className="form-group">
            <input
              type="email"
              className="form-control py-2 min-w-[420px] text-[#8C8C8C]"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-[16px] font-semibold text-white">
              {t("FollowUsOn")}
            </span>
            <div className="flex items-center justify-center gap-2">
              <Image
                src={FacebookWhite}
                width={24}
                height={24}
                alt="social-icon"
              />
              <Image
                src={TwitterWhite}
                width={24}
                height={24}
                alt="social-icon"
              />
              <Image
                src={InstagramWhite}
                width={24}
                height={24}
                alt="social-icon"
              />
            </div>
          </div>
        </div>

        <div className="footer-links-wrapper wrapper py-5 bg-[#F0F0F0]">
          <div className="links-wrapper flex flex-wrap items-start justify-between gap-y-10">
            <div className="link-container">
              <h3 className="font-semibold text-[24px] mb-4">
                {t("CustomersService")}
              </h3>
              <ul className="flex flex-col items-start justify-start gap-3 p-0">
                <li className="text-[14px] font-medium">
                  {t("ReturnAndRefundPolicy")}
                </li>
                <li className="text-[14px] font-medium">
                  {t("IntellectualPropertyPolicy")}
                </li>
                <li className="text-[14px] font-medium">
                  {t("ShippingInformation")}
                </li>
                <li className="text-[14px] font-medium">
                  {t("ReportSuspiciousActivity")}
                </li>
              </ul>
            </div>
            <div className="link-container">
              <h3 className="font-semibold text-[24px] mb-4">{t("Help")}</h3>
              <ul className="flex flex-col items-start justify-start gap-3 p-0">
                <li className="text-[14px] font-medium">
                  {t("SupportCenterAndFAQs")}
                </li>
                <li className="text-[14px] font-medium">
                  {t("PurchaseProtectionAtFind")}
                </li>
                <li className="text-[14px] font-medium">{t("SellWithFind")}</li>
              </ul>
            </div>
            <div className="link-container">
              <h3 className="font-semibold text-[24px] mb-4">
                {t("ShopEasierWithFind")}
              </h3>
              <ul className="flex flex-col items-start justify-start gap-3 p-0">
                <li className="text-[14px] font-medium flex items-center gap-2">
                  <Image
                    src={TrackOrderIcon}
                    width={24}
                    height={24}
                    alt="support-icon"
                  />
                  {t("TrackOrdersAtAnyTime")}
                </li>
                <li className="text-[14px] font-medium flex items-center gap-2">
                  <Image
                    src={WarningProductIcon}
                    width={24}
                    height={24}
                    alt="support-icon"
                  />
                  {t("WarningProductAvailabilityIsLimited")}
                </li>
                <li className="text-[14px] font-medium flex items-center gap-2">
                  <Image
                    src={OfferCouponsIcon}
                    width={24}
                    height={24}
                    alt="support-icon"
                  />
                  {t("OffersAndCouponsAlerts")}
                </li>
              </ul>
            </div>
            <div className="link-container">
              <h3 className="font-semibold text-[24px] mb-4 flex items-center gap-2">
                <Image
                  src={SupportIcon}
                  width={24}
                  height={24}
                  alt="support-icon"
                />
                {t("Support")}
              </h3>
              <ul className="flex flex-col items-start justify-start gap-3 p-0">
                <li className="text-[14px] font-medium flex items-center gap-2">
                  <IoCallOutline size={24} />
                  16999
                </li>
                <li className="text-[14px] font-medium flex items-center gap-2">
                  <TfiEmail size={20} />
                  Support@find.com
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="we-accept-payment wrapper flex flex-col items-center gap-2 mx-auto w-full bg-[#121A32] py-4">
          {/* <span className='text-[16px] font-semibold text-white text-start min-w-full'>We accept</span> */}
          <Image
            src={WeAcceptPaymentSectionIcons}
            width={565}
            height={40}
            alt="we-accept"
            className="text-center"
          />
        </div>
        <div className="bottom-footer flex flex-wrap items-center justify-center gap-5 py-4">
          <span className="text-[14px] text-[#121A32]">
            {t("AdvertisingOptions")}
          </span>
          <span className="text-[14px] text-[#121A32]">
            {t("YourPrivacyChoices")}
          </span>
          <span className="text-[14px] text-[#121A32]">
            {t("privacyPolicy")}
          </span>
          <span className="text-[14px] text-[#121A32]">{t("termsOfUse")}</span>
          <span className="text-[14px] text-[#121A32] font-semibold">
            © 2024 Find.in.te{" "}
          </span>
        </div>
      </div>

      {/* XS SM Mobile */}
      <div className="block md:hidden footer-wrapper w-full items-center justify-center mt-10">
        <div className="top-footer py-5 text-center">
          <div className="link-container text-white flex-col items-center justify-center text-center">
            <h3 className="font-semibold text-[24px] flex items-center justify-center text-center mt-3">
              <Image
                src={SupportIconWhite}
                width={24}
                height={24}
                alt="support-icon"
                className="mx-2"
              />
              {t("Support")}
            </h3>
            <ul className="flex flex-col items-center justify-center gap-3 p-0">
              <li className="text-[14px] font-medium flex items-center gap-2">
                <IoCallOutline size={24} />
                16999
              </li>
              <li className="text-[14px] font-medium flex items-center gap-2">
                <TfiEmail size={20} />
                Support@find.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-links-wrapper wrapper py-5 bg-[#F0F0F0]">
          <div className="flex-col items-center justify-center text-center w-full ">
            <span className="text-[16px] font-semibold text-black">
              {t("FollowUsOn")}
            </span>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Image src={Facebook} width={24} height={24} alt="social-icon" />
              <Image src={Twitter} width={24} height={24} alt="social-icon" />
              <Image src={Instagram} width={24} height={24} alt="social-icon" />
            </div>
          </div>

          <div className="flex items-center justify-center py-5 gap-2">
            <Image src={GooglePlay} width={150} height={50} alt="google-play" />
            <Image src={AppStore} width={150} height={50} alt="app-store" />
          </div>

          <div className="links-wrapper flex flex-wrap items-center justify-center gap-y-10">
            <div className="link-container">
              <h3 className="font-semibold text-[24px] mb-4">
                {t("CustomersService")}
              </h3>
              <ul className="flex flex-col items-center justify-center gap-3 p-0">
                <li className="text-[14px] font-medium">
                  {t("ReturnAndRefundPolicy")}
                </li>
                <li className="text-[14px] font-medium">
                  {t("IntellectualPropertyPolicy")}
                </li>
                <li className="text-[14px] font-medium">
                  {t("ShippingInformation")}
                </li>
                <li className="text-[14px] font-medium">
                  {t("ReportSuspiciousActivity")}
                </li>
              </ul>
            </div>
            <div className="link-container">
              <h3 className="font-semibold text-[24px] text-center mb-4">
                {t("Help")}
              </h3>
              <ul className="flex flex-col items-center justify-center gap-3 p-0">
                <li className="text-[14px] font-medium">
                  {t("SupportCenterAndFAQs")}
                </li>
                <li className="text-[14px] font-medium">
                  {t("PurchaseProtectionAtFind")}
                </li>
                <li className="text-[14px] font-medium">
                  Sell with Find{t("")}
                </li>
              </ul>
            </div>
            <div className="link-container">
              <h3 className="font-semibold text-[24px] mb-4">
                {t("ShopEasierWithFind")}
              </h3>
              <ul className="flex flex-col items-center justify-center gap-3 p-0">
                <li className="text-[14px] font-medium flex items-center gap-2">
                  <Image
                    src={TrackOrderIcon}
                    width={24}
                    height={24}
                    alt="support-icon"
                  />
                  {t("TrackOrdersAtAnyTime")}
                </li>
                <li className="text-[14px] font-medium flex items-center gap-2">
                  <Image
                    src={WarningProductIcon}
                    width={24}
                    height={24}
                    alt="support-icon"
                  />
                  {t("WarningProductAvailabilityIsLimited")}
                </li>
                <li className="text-[14px] font-medium flex items-center gap-2">
                  <Image
                    src={OfferCouponsIcon}
                    width={24}
                    height={24}
                    alt="support-icon"
                  />
                  {t("OffersAndCouponsAlerts")}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="we-accept-payment flex flex-col items-center justify-center gap-3 mx-auto min-w-full max-w-full text-center bg-[#121A32] py-4">
          <span className="text-[16px] font-semibold text-white text-center min-w-full">
            {t("WeAccept")}
          </span>
          <Image
            src={WeAcceptPaymentSectionIcons}
            height={60}
            alt="we-accept"
            className="text-center min-w-full max-w-full wrapper"
          />
        </div>

        <div className="bottom-footer wrapper flex flex-wrap items-center justify-center gap-3 py-4">
          <span className="text-[14px] text-[#121A32]">
            {t("AdvertisingOptions")}
          </span>
          <span className="text-[14px] text-[#121A32]">
            {t("YourPrivacyChoices")}
          </span>
          <span className="text-[14px] text-[#121A32]">
            {t("privacyPolicy")}
          </span>
          <span className="text-[14px] text-[#121A32]">{t("termsOfUse")}</span>
          <span className="text-[14px] text-[#121A32] font-semibold">
            {" "}
            © 2024 Find.in.te{" "}
          </span>
        </div>
      </div>
    </footer>
  );
}

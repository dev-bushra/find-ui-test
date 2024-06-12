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
import { Col, Container, Row, Tabs, Button, Modal, Form } from "react-bootstrap";

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

import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import Airpods from "../../../../../public/products/airpod-product.png"

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
 
   // State variables for controlling the visibility of various components on the page.
 
   // showOrderTracking: A boolean state variable to control the visibility of the Order Tracking component.
   const [showOrderTracking, setShowOrderTracking] = useState(false);
 
   // showOrderEdit: A boolean state variable to control the visibility of the Order Edit component.
   const [showOrderEdit, setShowOrderEdit] = useState(false);
 
   // showOrderReturn: A boolean state variable to control the visibility of the Order Return component.
   const [showOrderReturn, setShowReturnModal] = useState(false);
 
 
   // This function is typically used to open the return modal when the return button is clicked.
   const handleReturnClick = () => {
     setShowReturnModal(true);
   };
 
   // This function is typically used to close the return modal when the close button on the modal is clicked.
   const handleCloseReturnModal = () => {
     setShowReturnModal(false);
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

  const ordersData = [
    {
      sellerName: 'Karim Muhammad',
      items: [
        { name: 'Air pods Apple', price: '300 AED', image: Airpods },
        { name: 'Router WE', price: '300 AED', image: 'router.png' },
        { name: 'Printer HP', price: '300 AED', image: 'printer.png' },
      ],
      status: 'In Process',
      orderNumber: 'NGG41111',
      orderTime: '10:50 PM',
    },
    {
      sellerName: 'Karim Muhammad',
      items: [
        { name: 'Air pods Apple', price: '300 AED', image: Airpods },
        { name: 'Router WE', price: '300 AED', image: 'router.png' },
        { name: 'Printer HP', price: '300 AED', image: 'printer.png' },
      ],
      status: 'Complete',
      orderNumber: 'NGG41111',
      orderTime: '10:50 PM',
    },
  ];
  // Order card
const OrderCard = ({ sellerName, items, status, orderNumber, orderTime }: { sellerName: string, items: Array<{ name: string, price: string, image: string }>, status: string, orderNumber: string, orderTime: string }) => (
  <div className="border p-4 rounded-md shadow-sm flex flex-col gap-4 md:flex-row md:items-center justify-between">
    <div className="flex flex-col gap-3 mr-4">
      <div className="flex justify-between items-center">
        <span className="font-semibold">Seller Name: {sellerName}</span>
      </div>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <img src={item.image} alt={item.name} className="w-12 h-12" />
          <div className="flex flex-col">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  
    <div className="flex flex-col gap-2 justify">
      {status === 'In Process' ? (
        <>
          <button  onClick={() => { handleToggleTab('OrderTracking'); setShowOrderTracking(true); }} className="primary-btn rounded-md">Order Tracking</button>
          <button onClick={() => { handleToggleTab('OrderEdit'); setShowOrderEdit(true); }} className="primary-btn-outline text-blue rounded-md">Edit Order</button>
        </>
      ) : (
        <>
          <button className="primary-btn rounded-md">Review</button>
          <button className="primary-btn-outline text-blue rounded-md" onClick={handleReturnClick}>Return Order</button>
          <Modal show={showOrderReturn} onHide={handleCloseReturnModal}>
            <Modal.Header closeButton>
              <Modal.Title>Return Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="returnReason">
                  <Form.Label>Reason for return</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter the reason for return" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <div className="d-flex justify-center">
                <Button variant="secondary" onClick={handleCloseReturnModal} className="me-2">
                  Cancel
                </Button>
                <Button variant="primary">
                  Submit
                </Button>
              </div>
            </Modal.Footer>
          </Modal>
        </>
      )}
      <span className="text-sm">Order number: {orderNumber}</span>
      <span className="text-sm">On the day {orderTime}</span>
    </div>
  </div>
  );

  const Bn = () => {
    const handleBackToOrders = () => {
      handleToggleTab("MyOrders");
      setShowOrderTracking(true);
    };
    return(
      <Row className="mb-3">
          <Col className=" flex flex-col gap-4 md:flex-row justify-content-between align-items-center">
            <div onClick={handleBackToOrders}  className="flex cursor-pointer">
              <FaArrowLeft className="mr-2" />
              <h5>Back to Orders</h5>
            </div>
            <h5 className="order-number">Order number: ADDFGI414174</h5>
          </Col>
        </Row>
    )
  }

  type TrackDetailsProps = {
    heading: string;
    editMode?: boolean;
  };
  
  const TrackDetails: React.FC<TrackDetailsProps> = ({ heading, editMode }) => {
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
  
    const handleFeedbackClick = () => {
      setShowFeedbackModal(true);
    };
  
    const handleCloseFeedbackModal = () => {
      setShowFeedbackModal(false);
    };
  
    const handleCancelProductsClick = () => {
      setShowCancelModal(true);
    };
  
    const handleCloseCancelModal = () => {
      setShowCancelModal(false);
    };
  
    const handleSubmitFeedback = (event: React.FormEvent) => {
      event.preventDefault();
      // feedback submission logic
      setShowFeedbackModal(false);
    };
  
    const handleConfirmCancellation = () => {
      // cancellation logic
      setShowCancelModal(false);
    };
  
    return (
      <>
        <Row className="mb-4">
          <Col className="d-flex justify-content-between align-items-center">
            <div>
              <h2>{heading}</h2>
              <p>View and update your product delivery information</p>
            </div>
            <Button className="btn btn-primary" onClick={handleFeedbackClick}>Feedback</Button>
          </Col>
        </Row>
        <Row className="mt-4 ">
          <Col>
            <div className="order-details bg-light p-3 rounded">
              <Row>
                <Col>
                  <div className="tracking-steps flex flex-col gap-4 md:flex-row md:items-center justify-content-between">
                    <div className="step text-center  lg:flex lg:flex-col lg:items-center">
                      <span>Received order</span>
                      <FaCheckCircle className="icon text-success" />
                      <span>On April 5</span>
                    </div>
                    <div className="step text-center lg:flex lg:flex-col lg:items-center">
                      <span>In process</span>
                      <FaCheckCircle className="icon text-success" />
                      <span>On Friday, April 5th</span>
                    </div>
                    <div className="step text-center lg:flex lg:flex-col lg:items-center">
                      <span>Confirmed</span>
                      <FaCheckCircle className="icon text-success" />
                      <span>On Friday, April 5th</span>
                    </div>
                    <div className="step text-center lg:flex lg:flex-col lg:items-center">
                      <span>It was received</span>
                      <FaCheckCircle className="icon justify-center text-success" />
                      <span>On Friday, April 7th</span>
                    </div>
                    <div className="step text-center lg:flex lg:flex-col lg:items-center">
                      <span>Delivery</span>
                      <FaCheckCircle className="icon justify-center text-success" />
                      <span>Expected Sunday 20th</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="details">
                <Col md={3}>
                  <div className="info-group">
                    <span className="info-label">The date of application</span>
                    <span className="info-value">Order date: 2/2/2024</span>
                    <span className="info-value">Receipt date: 2/20/2024</span>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="info-group">
                    <span className="info-label">The address</span>
                    <span className="info-value">28 El-Modairi St Abu Dhabi, UAE</span>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="info-group">
                    <span className="info-label">Payment method</span>
                    <span className="info-value">Visa **56</span>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="info-group">
                    <span className="info-label">Total money</span>
                    <span className="info-value">5000 AED</span>
                  </div>
                </Col>
              </Row>
              <Row>
              <div className="product-details mt-4">
                <h3>Product details</h3>
                <p>Once confirmed, the products cannot be canceled from the order</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">Seller Name: Karim Muhammad</span>
                  {editMode && (
                    <div className="d-flex align-items-center">
                      <span className="me-2 fw-bold">Reason for cancellation:</span>
                      <Form.Select aria-label="Reason for cancellation" className="me-2">
                        <option value="CHANGED MY MIND">CHANGED MY MIND</option>
                        <option value="FOUND A BETTER PRICE">FOUND A BETTER PRICE</option>
                        <option value="ORDERED BY MISTAKE">ORDERED BY MISTAKE</option>
                      </Form.Select>
                    </div>
                  )}
                </div>
                <div className="product-list mt-3">
                  {['Air pods Apple', 'Air pods Apple', 'Air pods Apple'].map((product, index) => (
                    <div key={index} className="product-item d-flex align-items-center mb-2">
                      {editMode && <Form.Check type="checkbox" className="me-2" />}
                      {/* <img src={Airpods} alt={product} className="me-2" /> */}
                      <Image
                        src={Airpods}
                        width={20}
                        height={20}
                        alt="user-profile-icon"
                        className="profile-dropdown-icon p-0"
                      />
                      <div className="product-info">
                        <span className="d-block fw-bold">{product}</span>
                        <span className="product-note font-weight-bold d-block">This product cannot be exchanged or returned</span>
                        <span className="product-price font-weight-bold d-block">300 AED</span>
                      </div>
                    </div>
                  ))}
                </div>
                {editMode && (
                  <div className="mt-3 d-flex justify-center">
                    <Button variant="primary" onClick={handleCancelProductsClick}>
                      Cancel the selected product
                    </Button>
                  </div>
                )}
              </div>
                </Row>
            </div>
          </Col>
        </Row>
        <Modal show={showFeedbackModal} onHide={handleCloseFeedbackModal}>
          <Modal.Header closeButton>
            <Modal.Title className="w-100 text-center">Give feedback</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmitFeedback} className="mb-3">
              <Form.Group controlId="feedbackRating" className="mb-3">
                <div className="star-rating">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className="star"
                      onMouseEnter={() => setHover(index + 1)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setRating(index + 1)}
                      style={{ color: (hover || rating) > index ? 'gold' : 'gray' }}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </Form.Group>
              <Form.Group controlId="feedbackComments" className="mb-3">
                <Form.Label>Do you have any thoughts you'd like to share</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Additional Comments..." />
              </Form.Group>
              <div className="d-flex justify-content-center mb-3">
                <Button variant="primary" type="submit" className="me-2">
                  Submit review
                </Button>
                <Button variant="secondary" onClick={handleCloseFeedbackModal}>
                  Not now
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
  
        <Modal show={showCancelModal} onHide={handleCloseCancelModal}>
  <Modal.Header closeButton>
    <Modal.Title className="w-100 text-center text-danger">Cancel Products</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Are you sure you want to cancel the selected products?</p>
    <div className="d-flex justify-content-center mb-3">
      <Button className="primary-btn me-2" onClick={handleCloseCancelModal}>
        Confirm
      </Button>
      <Button className="primary-btn-outline text-blue" onClick={handleConfirmCancellation}>
        Cancel
      </Button>
    </div>
  </Modal.Body>
</Modal>
      </>
    );
  };
  
  // Order Tracking 
  const OrderTracking = () => {
    return (
      <Container>
        <Bn />
        <TrackDetails heading="Order Tracking" />
      </Container>
  
    );
  };
  
  // Order Edit 
  const OrderEdit = () => {
  
    return(
      <>
      <Bn />
      <TrackDetails heading="Order Edit" editMode />
      </>
    )
  };

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
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold">In Process</h3>
                        {ordersData.filter(order => order.status === 'In Process').map((order, idx) => (
                          <OrderCard key={idx} {...order} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                      <h3 className="font-semibold">Complete</h3>
                      {ordersData.filter(order => order.status === 'Complete').map((order, idx) => (
                        <OrderCard key={idx} {...order} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {currentTab === "OrderTracking" && <OrderTracking />}
              {currentTab === "OrderEdit" && <OrderEdit />}
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

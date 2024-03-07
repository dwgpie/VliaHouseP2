import {
  Home,
  Zap,
  CreditCard,
  User,
  BedDouble,
  MessagesSquare,
  Bell,
  FilePen,
  LogOut,
  Bolt,
  HelpCircle,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const listMenu = [
  {
    name: "Home Page",
    path: "/userhomepage",
    icon: <Home size={24} />,
  },
  {
    name: "Payment",
    path: "/userpayment",
    icon: <CreditCard size={24} />,
  },
  {
    name: "Chat",
    path: "/userchat",
    icon: <MessagesSquare size={24} />,
  },
  {
    name: "Notification",
    path: "/usernotification",
    icon: <Bell size={24} />,
  },
];

const accountList = [
  {
    name: "Profile",
    path: "/userprofile",
    icon: <FilePen size={24} />,
  },

  {
    name: "Logout",
    path: "/logout",
    icon: <LogOut size={24} />,
  },
];

const PaymentUser = () => {
  const history = useNavigate();

  return (
    <div className="w-full h-full grid grid-cols-6  ">
      {/* Sidebar */}
      <div className=" h-full py-9 px-6 bg-gradient-to-b from-[#3C4448] to-[#202021]">
        <div className="mb-14 flex items-center gap-3">
          <Home size={40} />
          <div>
            <h1 className="text-white text-xl font-bold">VILAHOUSE</h1>
            <p className="text-[#D0E6EA] text-sm">Ten phong tro</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2 items-start mb-5">
          {listMenu.map((item) => (
            <div
              className="px-[10px] py-2 text-[#F6F6BD] w-full rounded-md hover:bg-[#F6F6BD] hover:text-[#3C4448] text-xs"
              key={item.name}
              onClick={() => {
                history(`${item.path}`);
              }}
            >
              <div className="flex items-center gap-3 font-bold cursor-pointer">
                {item.icon}
                <p className="text-sm">{item.name}</p>
              </div>
            </div>
          ))}
        </nav>

        <h4 className="uppercase text-white text-xs font-bold mb-4">Account</h4>
        <nav className="flex flex-col gap-2 items-start mb-8">
          {accountList.map((item) => (
            <div
              className="px-[10px] py-2 text-[#F6F6BD] w-full rounded-md hover:bg-[#F6F6BD] hover:text-[#3C4448] text-xs"
              key={item.name}
              onClick={() => {
                history(`${item.path}`);
              }}
            >
              <div className="flex items-center gap-3 font-bold cursor-pointer">
                {item.icon}
                <p className="text-sm">{item.name}</p>
              </div>
            </div>
          ))}
        </nav>

        <div className="bg-[#F6F6BD] w-full rounded-[20px] p-6">
          <div className="w-9 h-9 flex items-center justify-center bg-[#3C4448] rounded-md text-[#F6F6BD] mb-5">
            <HelpCircle color="#F6F6BD" size={24} />
          </div>
          <p className="text-[#3C4448] text-xs font-medium">Need help?</p>
          <p className="text-[#3C4448] text-sm mb-3">Contact us</p>
          <button className="w-full bg-[#3C4448] text-[#F6F6BD]">
            Contact
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className=" col-start-2 col-end-7 py-9 px-6 h-full relative ">
        <div className="flex items-center justify-between ">
          <div className="">
            <h1 className="text-[#3C4448] font-bold text-[26px] ml-[60px] absolute top-[45px] ">
              Payment
            </h1>
            <div>
              <img
                className="w-[50px] h-[50px] object-cover rounded-md mr-[16px] ml-[40px] "
                src="./EllipseYellow.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-[8px] absolute w-6 h-6 text-[#606C72] "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  className="w-[260px] h-[40px] pl-[40px] text-[#606C72] rounded-[5px] border-2 "
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="flex items-center justify-between ml-[50px]">
              <div className="cursor-pointer mr-[21px]">
                <h1 className="text-[17px] font-bold text-[#3C4448]">
                  Hello, duong2003
                </h1>
                <h1 className="text-[12px] text-[#3C4448] ml-[108px] ">Host</h1>
              </div>
              <div>
                <img
                  className="w-[50px] h-[50px] object-cover rounded-md cursor-pointer"
                  src="./avt.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[#606C72] font-bold text-[20px] mt-[40px]">
          Payment
        </h1>
        <div className="grid grid-cols-4">
          <div className="bg-[#F5F5F5] h-[840px] col-start-1 col-end-4 py-[20px] px-[40px] rounded-[5px] mt-[20px] ">
            <div className="flex items-center">
              <h1 className="font-bold text-[20px] text-[#3C4448]">
                Billing information for room{" "}
              </h1>
              <div className="h-[40px] w-[80px] rounded-[5px] bg-[#00FF94] text-[#000] font-bold flex items-center justify-center ml-[20px]">
                101
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="flex mt-[20px] col-start-1 col-end-3">
                <img
                  className="w-[200px] h-[200px] object-cover rounded-md"
                  src="./Rectangle54.png"
                  alt=""
                />
                <div className="ml-[20px] font-semibold">
                  <h1 className="text-[30px] font-bold">Nguyen Van Anh</h1>
                  <h1 className="text-[25px]">Number: 12719247981273</h1>
                  <h1 className="text-[25px] ">Bank: Techcombank</h1>
                  <div className="mt-[20px]">
                    <input
                      className="w-[200px] h-[45px] rounded-[5px] pl-[8px] border-2"
                      type="text"
                      placeholder="Upload bill image"
                    />
                    <button className="h-[42px] w-[80px] rounded-[5px] bg-[#000] text-[#fff] font-bold  ml-[20px]">
                      Choose
                    </button>
                  </div>
                </div>
              </div>
              <div className=" mt-[20px] col-start-3 col-end-4">
                <div className="h-[120px] w-[280px] rounded-[5px] bg-[#fff]  ">
                  <h1 className="text-[20px] font-bold flex justify-center pt-[10px]">
                    Status
                  </h1>
                  <div className="h-[50px] w-auto rounded-[5px] bg-[#FFD584] mx-[20px] mt-[10px] text-[19px] font-semibold flex justify-center items-center">
                    Awaiting confirmation
                  </div>
                </div>
                <button className="h-[42px] w-[150px] rounded-[5px] bg-[#000] text-[#fff] font-bold mt-[22px]">
                  Confirm payment
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <button className="h-[50px] w-[200px] rounded-[5px] bg-[#EF4444] text-[#fff]  text-[18px] font-bold mt-[24px]">
                Confirm payment
              </button>
              <h1 className="text-[25px] font-semibold ml-[20px] mt-[20px]">
                2,250,000 VND
              </h1>
            </div>
          </div>

          <div className="col-start-4 col-end-5 h-[840px] bg-[#F5F5F5] p-[10px] ml-[40px] mt-[20px] pl-[20px]">
            <div>
              <h1 className="text-[20px] font-bold text-[#3C4448]">
                Room Payment
              </h1>
              <h1 className="text-[15px]  ">
                Lorem ipsum dolor sit amet, cons
              </h1>
            </div>
            <div className="flex items-center mt-[20px]">
              <div>
                <img
                  className="w-[50px] h-[50px]  object-cover rounded-md"
                  src="./house.png"
                  alt=""
                />
              </div>
              <div className="ml-[20px]">
                <h1 className="text-[17px] font-bold ">Room </h1>
                <h1 className="text-[15px] ">2,000,000 VND</h1>
              </div>
            </div>
            <div className="flex items-center mt-[20px]">
              <div>
                <img
                  className="w-[50px] h-[50px]  object-cover rounded-md"
                  src="./electric.png"
                  alt=""
                />
              </div>
              <div className="ml-[20px]">
                <h1 className="text-[17px] font-bold ">Electricity</h1>
                <h1 className="text-[15px] ">150,000 VND</h1>
              </div>
            </div>
            <div className="flex items-center mt-[20px]">
              <div>
                <img
                  className="w-[50px] h-[50px]  object-cover rounded-md"
                  src="./wifi.png"
                  alt=""
                />
              </div>
              <div className="ml-[20px]">
                <h1 className="text-[17px] font-bold ">Wifi</h1>
                <h1 className="text-[15px] ">50,000 VND</h1>
              </div>
            </div>
            <div className="flex items-center mt-[20px]">
              <div>
                <img
                  className="w-[50px] h-[50px]  object-cover rounded-md"
                  src="./watermini.png"
                  alt=""
                />
              </div>
              <div className="ml-[20px]">
                <h1 className="text-[17px] font-bold ">Water</h1>
                <h1 className="text-[15px] ">50,000 VND</h1>
              </div>
            </div>
            <div className="flex items-center mt-[20px]">
              <div>
                <img
                  className="w-[50px] h-[50px]  object-cover rounded-md"
                  src="./house.png"
                  alt=""
                />
              </div>
              <div className="ml-[20px]">
                <h1 className="text-[17px] font-bold ">Amount to be paid</h1>
                <h1 className="text-[15px] ">2,250,000 VND</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentUser;

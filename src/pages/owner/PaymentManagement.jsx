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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const listMenu = [
  {
    name: "Home Page",
    path: "/",
    icon: <Home size={24} />,
  },
  {
    name: "Utilities",
    path: "/utilities",
    icon: <Zap size={24} />,
  },
  {
    name: "Payment",
    path: "/payment",
    icon: <CreditCard size={24} />,
  },
  {
    name: "User Management",
    path: "/user-management",
    icon: <User size={24} />,
  },
  {
    name: "Room Management",
    path: "/room-management",
    icon: <BedDouble size={24} />,
  },
  {
    name: "Chat",
    path: "/chat",
    icon: <MessagesSquare size={24} />,
  },
  {
    name: "Notification",
    path: "/notification",
    icon: <Bell size={24} />,
  },
];

const accountList = [
  {
    name: "Profile",
    path: "/profile",
    icon: <FilePen size={24} />,
  },
  {
    name: "Setting",
    path: "/setting",
    icon: <Bolt size={24} />,
  },
  {
    name: "Logout",
    path: "/logout",
    icon: <LogOut size={24} />,
  },
];

const PaymentManagement = () => {
  const history = useNavigate();
  const [showDiaLog, setShowDiaLog] = useState(false);

  return (
    <div className={`w-full h-full grid grid-cols-6`}>
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
      <div className=" col-start-2 col-end-6 py-9 px-6 h-full relative ">
        <div className="flex items-center justify-between ">
          <div className="">
            <h1 className="text-[#3C4448] font-bold text-[26px] ml-[60px] absolute top-[45px] ">
              Payment Management
            </h1>
            <div>
              <img
                className="w-[50px] h-[50px] object-cover rounded-md mr-[16px] ml-[40px] "
                src="./EllipseYellow.png"
                alt=""
              />
            </div>
          </div>
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
        </div>
        <div className="mt-[40px] mb-[10px] ">
          <button className="h-[40px] w-[122px] rounded-[5px] bg-[#fff] text-[#606C72] ">
            Wallet
          </button>
          <button className="ml-[10px] h-[40px] w-[122px] rounded-[5px] bg-[#0F172A] text-[#fff] ">
            Create Wallet
          </button>
        </div>
        <div className="bg-[#F5F5F5] h-[224px] grid grid-cols-3 py-[20px] px-[50px] rounded-[5px] ">
          <div>
            <div className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-[50px] w-[50px] mr-[20px] "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                />
              </svg>
              <div className="">
                <h1 className="text-[26px] font-bold">Main Balance</h1>
                <h1 className="text-[26px] font-bold">12,999,999 VND</h1>
              </div>
            </div>
            <div className="mt-[20px]">
              <h1 className="text-[22px]">Number: 12719247981273</h1>
              <h1 className="text-[22px] ">Bank: Techcombank</h1>
            </div>
          </div>
          <div>
            <div className="ml-[90px]">
              <h1 className="text-[25px] font-bold">Nguyen Van Anh</h1>
            </div>
            <button
              className="h-[40px] w-[122px] rounded-[5px] bg-[#0F172A] text-[#fff] mt-[80px] ml-[160px]"
              onClick={() => {
                setShowDiaLog(!showDiaLog);
              }}
            >
              Edit Wallet
            </button>
          </div>
          <img
            className="w-[180px] h-[180px] object-cover rounded-md ml-[100px]"
            src="./Rectangle54.png"
            alt=""
          />
        </div>
        <div className="bg-[#F5F5F5] h-[556px] py-[20px] px-[50px] mt-[20px] rounded-[5px]">
          <div className="flex items-center justify-between mb-[20px]">
            <div>
              <h1 className="text-[#3C4448] font-bold text-[20px]">
                Payment History
              </h1>
            </div>
            <div className="text-[20px] ">
              <select
                data-te-select-init
                className="py-[4px] px-[8px] text-[#3C4448] rounded-[5px] font-bold text-[18px] cursor-pointer"
              >
                <option value="1">Select</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-7 bg-[#fff] py-[10px] my-[20px] rounded-[5px]">
            <div className="col-start-1 col-end-3 flex items-center justify-center pl-[20px]">
              <div>
                <img
                  className="w-[50px] h-[50px] object-cover rounded-md mr-[16px]"
                  src="./Ellipse.png"
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-[20px] font-bold ">Tran Quoc Tuan</h1>
                <h1 className="text-[16px]">Room 101</h1>
              </div>
            </div>
            <div className="col-start-3 col-end-5 flex items-center justify-center ml-[40px]">
              Jun 23, 2023, 12:23 AM
            </div>
            <div className="col-start-5 col-end-6 flex items-center justify-center ml-[40px]">
              + 2,200,000{" "}
            </div>
            <div className="col-start-6 col-end-8 flex items-center justify-center ml-[40px]">
              <button className="ml-[10px] h-[40px] w-[122px] rounded-[5px] bg-[#0F172A] text-[#fff]">
                Check
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 bg-[#fff] py-[10px] my-[20px] rounded-[5px]">
            <div className="col-start-1 col-end-3 flex items-center justify-center pl-[20px]">
              <div>
                <img
                  className="w-[50px] h-[50px] object-cover rounded-md mr-[16px]"
                  src="./Ellipse.png"
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-[20px] font-bold ">Tran Quoc Tuan</h1>
                <h1 className="text-[16px]">Room 101</h1>
              </div>
            </div>
            <div className="col-start-3 col-end-5 flex items-center justify-center ml-[40px]">
              Jun 23, 2023, 12:23 AM
            </div>
            <div className="col-start-5 col-end-6 flex items-center justify-center ml-[40px]">
              + 2,200,000{" "}
            </div>
            <div className="col-start-6 col-end-8 flex items-center justify-center ml-[40px]">
              <button className="ml-[10px] h-[40px] w-[122px] rounded-[5px] bg-[#0F172A] text-[#fff]">
                Check
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 bg-[#fff] py-[10px] my-[20px] rounded-[5px]">
            <div className="col-start-1 col-end-3 flex items-center justify-center pl-[20px]">
              <div>
                <img
                  className="w-[50px] h-[50px] object-cover rounded-md mr-[16px]"
                  src="./Ellipse.png"
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-[20px] font-bold ">Tran Quoc Tuan</h1>
                <h1 className="text-[16px]">Room 101</h1>
              </div>
            </div>
            <div className="col-start-3 col-end-5 flex items-center justify-center ml-[40px]">
              Jun 23, 2023, 12:23 AM
            </div>
            <div className="col-start-5 col-end-6 flex items-center justify-center ml-[40px]">
              + 2,200,000{" "}
            </div>
            <div className="col-start-6 col-end-8 flex items-center justify-center ml-[40px]">
              <button className="ml-[10px] h-[40px] w-[122px] rounded-[5px] bg-[#0F172A] text-[#fff]">
                Check
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 bg-[#fff] py-[10px] my-[20px] rounded-[5px]">
            <div className="col-start-1 col-end-3 flex items-center justify-center pl-[20px]">
              <div>
                <img
                  className="w-[50px] h-[50px] object-cover rounded-md mr-[16px]"
                  src="./Ellipse.png"
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-[20px] font-bold ">Tran Quoc Tuan</h1>
                <h1 className="text-[16px]">Room 101</h1>
              </div>
            </div>
            <div className="col-start-3 col-end-5 flex items-center justify-center ml-[40px]">
              Jun 23, 2023, 12:23 AM
            </div>
            <div className="col-start-5 col-end-6 flex items-center justify-center ml-[40px]">
              + 2,200,000{" "}
            </div>
            <div className="col-start-6 col-end-8 flex items-center justify-center ml-[40px]">
              <button className="ml-[10px] h-[40px] w-[122px] rounded-[5px] bg-[#0F172A] text-[#fff]">
                Check
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 bg-[#fff] py-[10px] my-[20px] rounded-[5px]">
            <div className="col-start-1 col-end-3 flex items-center justify-center pl-[20px]">
              <div>
                <img
                  className="w-[50px] h-[50px] object-cover rounded-md mr-[16px]"
                  src="./Ellipse.png"
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-[20px] font-bold ">Tran Quoc Tuan</h1>
                <h1 className="text-[16px]">Room 101</h1>
              </div>
            </div>
            <div className="col-start-3 col-end-5 flex items-center justify-center ml-[40px]">
              Jun 23, 2023, 12:23 AM
            </div>
            <div className="col-start-5 col-end-6 flex items-center justify-center ml-[40px]">
              + 2,200,000{" "}
            </div>
            <div className="col-start-6 col-end-8 flex items-center justify-center ml-[40px]">
              <button className="ml-[10px] h-[40px] w-[122px] rounded-[5px] bg-[#0F172A] text-[#fff]">
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-6 col-end-7 py-9 px-6 h-full ">
        <div className="flex items-center ">
          <div className="cursor-pointer mr-[21px]">
            <h1 className="text-[17px] font-bold text-[#3C4448] ">
              Hello, Admin213
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
        <div className="bg-[#F5F5F5] h-[810px] mt-[80px] rounded-[5px] p-[10px]">
          <div>
            <h1 className="text-[17px] font-bold text-[#3C4448]">
              Invoice Sent
            </h1>
            <h1 className="text-[12px]  ">Lorem ipsum dolor sit amet, cons</h1>
          </div>
          <div className="flex items-center mt-[20px]">
            <div>
              <img
                className="w-[50px] h-[50px]  object-cover rounded-md"
                src="./EllipseGreen.png"
                alt=""
              />
            </div>
            <div className="ml-[20px]">
              <h1 className="text-[17px] font-bold ">Huynh Khoa </h1>
              <h1 className="text-[12px] ">+ 1,200,000 VND</h1>
            </div>
          </div>
          <div className="flex items-center mt-[20px]">
            <div>
              <img
                className="w-[50px] h-[50px]  object-cover rounded-md"
                src="./EllipseGreen.png"
                alt=""
              />
            </div>
            <div className="ml-[20px]">
              <h1 className="text-[17px] font-bold ">Huynh Khoa </h1>
              <h1 className="text-[12px] ">+ 1,200,000 VND</h1>
            </div>
          </div>
          <div className="flex items-center mt-[20px]">
            <div>
              <img
                className="w-[50px] h-[50px]  object-cover rounded-md"
                src="./EllipseGreen.png"
                alt=""
              />
            </div>
            <div className="ml-[20px]">
              <h1 className="text-[17px] font-bold ">Huynh Khoa </h1>
              <h1 className="text-[12px] ">+ 1,200,000 VND</h1>
            </div>
          </div>
          <div className="flex items-center mt-[20px]">
            <div>
              <img
                className="w-[50px] h-[50px]  object-cover rounded-md"
                src="./EllipseGreen.png"
                alt=""
              />
            </div>
            <div className="ml-[20px]">
              <h1 className="text-[17px] font-bold ">Huynh Khoa </h1>
              <h1 className="text-[12px] ">+ 1,200,000 VND</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Wallet*/}
      {showDiaLog && (
        <div className="h-[300px] w-[700px] bg-[#F5F5F5] rounded-[5px] px-[40px] m-[30px]">
          <div className="flex justify-center mb-[20px]">
            <div className="h-[45px] w-[340px] bg-[#3C4448] flex justify-center items-center text-[#F6F6BD] rounded-b-[50px]">
              Edit Wallet
            </div>
          </div>
          <div className="flex items-center mb-[20px] ">
            <div>
              <h1 className="font-bold mb-[5px] ">Name</h1>
              <input
                className="w-[287px] h-[36px] rounded-[5px] pl-[8px] border-2"
                type="text"
                placeholder="Pietro Schirano"
              />
            </div>
            <div className=" ml-[40px] mt-[27px] ">
              <select
                data-te-select-init
                className="py-[4px] px-[8px] text-[#3C4448] rounded-[5px] font-bold text-[15px] cursor-pointer border-2"
              >
                <option value="1">BANK</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
              </select>
            </div>
            <div className="mt-[27px] ml-[20px]">
              <input
                className="w-[180px] h-[36px] rounded-[5px] pl-[8px] border-2"
                type="text"
                placeholder="TECHCOMBANK"
              />
            </div>
          </div>
          <div className="flex items-center mb-[20px]">
            <div>
              <h1 className="font-bold mb-[5px] ">Number</h1>
              <input
                className="w-[287px] h-[36px] rounded-[5px] pl-[8px] border-2"
                type="text"
                placeholder="053245345"
              />
            </div>
            <div className="ml-[40px]">
              <h1 className="font-bold mb-[5px] ">QR Code</h1>
              <input
                className="w-[287px] h-[36px] rounded-[5px] pl-[8px] border-2 "
                type="text"
                placeholder="Choose Image"
              />
            </div>
          </div>
          <div className=" flex justify-end mr-[5px] mt-[24px]">
            <button className="mr-[20px] h-[35px] w-[100px] rounded-[5px] bg-[#EF4444] text-[#fff]">
              Cancel
            </button>
            <button className=" h-[35px] w-[100px] rounded-[5px] bg-[#0F172A] text-[#fff]">
              Create
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentManagement;

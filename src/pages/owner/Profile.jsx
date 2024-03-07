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

const Profile = () => {
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
      <div className=" col-start-2 col-end-6 py-9 px-6 h-full relative ">
        <div className="flex items-center justify-between ">
          <div className="">
            <h1 className="text-[#3C4448] font-bold text-[26px] ml-[60px] absolute top-[45px] ">
              Profile
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

        <div className="mt-[40px] mb-[10px]">
          <h1 className="text-[#606C72] text-[20px] font-bold">My Profile</h1>
        </div>
        <div className="bg-[#F5F5F5] h-[650px] px-[50px] py-[30px] rounded-[5px] ">
          <div className="flex items-start">
            <div>
              <div>
                <img
                  className="w-[150px] h-[150px] object-cover rounded-md"
                  src="./avtlarge.png"
                  alt=""
                />
              </div>
              <button className="ml-[10px] h-[40px] w-[122px] rounded-[5px] bg-[#0F172A] text-[#fff] mt-[15px]">
                Change Avatar
              </button>
            </div>
            <div className="ml-[60px] ">
              <div className="flex items-center mb-[20px]">
                <div>
                  <h1 className="font-bold mb-[5px] ">Name</h1>
                  <input
                    className="w-[287px] h-[36px] rounded-[5px] pl-[8px] border-2"
                    type="text"
                    placeholder="Pietro Schirano"
                  />
                </div>
                <div className="ml-[70px]">
                  <h1 className="font-bold mb-[5px] ">Phone Number</h1>
                  <input
                    className="w-[287px] h-[36px] rounded-[5px] pl-[8px] border-2 "
                    type="text"
                    placeholder="0354484842"
                  />
                </div>
              </div>
              <div className="flex items-center mb-[20px]">
                <div>
                  <h1 className="font-bold mb-[5px] ">Identification card</h1>
                  <input
                    className="w-[287px] h-[36px] rounded-[5px] pl-[8px] border-2"
                    type="text"
                    placeholder="53453452352"
                  />
                </div>
                <div className="ml-[70px]">
                  <h1 className="font-bold mb-[5px] ">Phone Number</h1>
                  <input
                    className="w-[287px] h-[36px] rounded-[5px] pl-[8px] border-2"
                    type="text"
                    placeholder="0354484842"
                  />
                </div>
              </div>
              <div className="mb-[20px]">
                <h1 className="font-bold mb-[5px] ">Home Address</h1>
                <input
                  className="w-full h-[36px] rounded-[5px] pl-[8px] border-2"
                  type="text"
                  placeholder="12 An Manh Street, Hoa An, Cam Le, Da Nang"
                />
              </div>

              <div className="mb-[20px] flex items-end">
                <div>
                  <h1 className="font-bold mb-[5px] ">Wallet</h1>
                  <input
                    className="w-[287px] h-[36px] rounded-[5px] pl-[8px] border-2"
                    type="text"
                    placeholder="53453452352"
                  />
                </div>
                <div className=" ml-[25px] ">
                  <select
                    data-te-select-init
                    className="py-[4px] px-[8px] text-[#3C4448] rounded-[5px] font-bold text-[18px] cursor-pointer border-2"
                  >
                    <option value="1">BANK</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                  </select>
                </div>
              </div>
              <div className="mb-[20px]">
                <h1 className="font-bold mb-[5px] ">Password</h1>
                <input
                  className="w-[287px] h-[36px] rounded-[5px] pl-[8px] border-2"
                  type="text"
                  placeholder="dsda23232"
                />
                <button className="ml-[25px] h-[35px] w-[122px] rounded-[5px] bg-[#0F172A] text-[#fff]">
                  Reset Password
                </button>
              </div>
              <div className="mt-[120px] ml-[250px]">
                <button className="ml-[10px] h-[40px] w-[122px] rounded-[5px] bg-[#0F172A] text-[#fff]">
                  Change Profile
                </button>
                <button className="ml-[10px] h-[40px] w-[122px] rounded-[5px] bg-[#E2E8F0] text-[#000] font-bold">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-6 col-end-7 py-9 px-6 h-full ">
        <div className="flex items-center ">
          <div className="cursor-pointer mr-[21px]">
            <h1 className="text-[17px] font-bold text-[#3C4448]">
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
      </div>
    </div>
  );
};

export default Profile;

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

const HomePage = () => {
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
              Home Pages
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
        <div className="mt-[40px] mb-[10px]">
          <h1 className="text-[#606C72] text-[20px] font-bold">Overview</h1>
        </div>
        <div className=" w-full py-[10px] rounded-[5px] flex justify-around ">
          <div className="bg-[#F6F6BD] h-[120px] w-[260px] rounded-[10px] pl-[26px] flex mr-[50px] ">
            <div className="mr-[24px]">
              <div className="flex items-center mt-[2px]">
                <h1 className="text-[45px] font-bold">32</h1>
                <img
                  className="w-[24px] h-[24px] object-cover rounded-md ml-[6px] mt-[26px]"
                  src="./bx-trending-up.svg.png"
                  alt=""
                />
                <span className="text-[20px] font-semibold ml-[3px] mt-[17px]">
                  5%
                </span>
              </div>
              <div>
                <h1 className="text-[20px] font-bold">Total Users</h1>
              </div>
            </div>
            <div className="flex items-center relative">
              <img
                className="w-[40px] h-[40px] object-cover rounded-md absolute left-[21px]"
                src="./bx-user.svg.png"
                alt=""
              />
              <img
                className="w-[70px] h-[70px] object-cover rounded-md ml-[6px] mt-[26px] mb-[20px]"
                src="./Ellipseblack.png"
                alt=""
              />
            </div>
          </div>
          <div className="bg-[#D0FFE6] h-[120px] w-[260px] rounded-[10px] pl-[26px] flex  mr-[50px]">
            <div className="mr-[24px]">
              <div className="flex items-center mt-[2px]">
                <h1 className="text-[45px] font-bold">32</h1>
                <img
                  className="w-[24px] h-[24px] object-cover rounded-md ml-[6px] mt-[26px]"
                  src="./bx-trending-up.svg.png"
                  alt=""
                />
                <span className="text-[20px] font-semibold ml-[3px] mt-[17px]">
                  5%
                </span>
              </div>
              <div>
                <h1 className="text-[20px] font-bold">Electricity</h1>
              </div>
            </div>
            <div className="flex items-center relative">
              <img
                className="w-[50px] h-[50px] object-cover rounded-md absolute left-[17px] top-[38px]"
                src="./samset.png"
                alt=""
              />
              <img
                className="w-[70px] h-[70px] object-cover rounded-md ml-[6px] mt-[26px] mb-[20px]"
                src="./Ellipseblack.png"
                alt=""
              />
            </div>
          </div>
          <div className="bg-[#E4CFF9] h-[120px] w-[260px] rounded-[10px] pl-[26px] flex  mr-[50px]">
            <div className="mr-[24px]">
              <div className="flex items-center mt-[2px]">
                <h1 className="text-[45px] font-bold">32</h1>
                <img
                  className="w-[24px] h-[24px] object-cover rounded-md ml-[6px] mt-[26px]"
                  src="./bx-trending-up.svg.png"
                  alt=""
                />
                <span className="text-[20px] font-semibold ml-[3px] mt-[17px]">
                  5%
                </span>
              </div>
              <div>
                <h1 className="text-[20px] font-bold">Total Users</h1>
              </div>
            </div>
            <div className="flex items-center relative">
              <img
                className="w-[40px] h-[40px] object-cover rounded-md absolute left-[21px]"
                src="./water.png"
                alt=""
              />
              <img
                className="w-[70px] h-[70px] object-cover rounded-md ml-[6px] mt-[26px] mb-[20px]"
                src="./Ellipseblack.png"
                alt=""
              />
            </div>
          </div>
          <div className="bg-[#D0E6EA] h-[120px] w-[260px] rounded-[10px] pl-[26px] flex  ">
            <div className="mr-[24px]">
              <div className="flex items-center mt-[2px]">
                <h1 className="text-[45px] font-bold">32</h1>
                <img
                  className="w-[24px] h-[24px] object-cover rounded-md ml-[6px] mt-[26px]"
                  src="./bx-trending-up.svg.png"
                  alt=""
                />
                <span className="text-[20px] font-semibold ml-[3px] mt-[17px]">
                  5%
                </span>
              </div>
              <div>
                <h1 className="text-[20px] font-bold">Total Users</h1>
              </div>
            </div>
            <div className="flex items-center relative">
              <img
                className="w-[40px] h-[40px] object-cover rounded-md absolute left-[21px]"
                src="./home.png"
                alt=""
              />
              <img
                className="w-[70px] h-[70px] object-cover rounded-md ml-[6px] mt-[26px] mb-[20px]"
                src="./Ellipseblack.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mt-[2px] mb-[10px]">
          <h1 className="text-[#606C72] text-[20px] font-bold">Infomation</h1>
        </div>
        <div className="grid grid-cols-4">
          <div className="h-[680px] col-start-1 col-end-4 bg-[#F5F5F5] py-[20px] pl-[25px] pr-[30px] rounded-[5px]">
            <div className="flex items-center">
              <div className="grid grid-cols-3">
                <div className="col-start-1 col-end-3">
                  <img
                    className="w-[auto] h-[400px] object-cover rounded-[5px]  "
                    src="./map.png"
                    alt=""
                  />
                </div>
                <div className="col-start-3 col-end-4">
                  <div className="w-[auto] h-[400px] bg-white rounded-[5px] ml-[50px]">
                    <div className="h-[50px] bg-[#F6F6BD] rounded-[5px] flex items-center justify-center text-[20px] font-bold">
                      Owner
                    </div>
                    <div className="flex justify-center mt-[20px] ">
                      <img
                        className="w-[130px] h-[130px] object-cover rounded-[5px]  "
                        src="./owner.png"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center font-bold mt-[10px]">
                      <h1>Nguyen Van Tung</h1>
                    </div>
                    <div className="flex justify-center font-semibold mt-[5px]">
                      0359233234
                    </div>
                    <div className="flex justify-center font-semibold mt-[5px]">
                      vantung.02@gmail.com
                    </div>
                    <div className="flex justify-center mt-[50px]">
                      <button
                        className="h-[40px] w-[200px] rounded-[5px] bg-[#000] text-white font-bold"
                        onClick={() => {
                          history("/profile");
                        }}
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[2px] mb-[10px]">
              <h1 className="text-[15px] font-semibold">
                Location: 67 Mai Chí Thọ, Phường An Phú, Quận 2, Tp. Hồ Chí Minh
              </h1>
            </div>
            <div className="h-[200px] bg-[#D9D9D9] rounded-[5px] relative">
              <div className="grid grid-cols-4">
                <div className="col-start-1 col-end-3">
                  <div className="flex ">
                    <img
                      className="w-[150px] h-[100px] object-cover rounded-[5px] absolute top-[20px] left-[20px]"
                      src="./tro1.png"
                      alt=""
                    />
                    <img
                      className="w-[150px] h-[100px] object-cover rounded-[5px] absolute top-[80px] left-[100px] "
                      src="./tro2.png"
                      alt=""
                    />
                    <img
                      className="w-[150px] h-[100px] object-cover rounded-[5px] absolute top-[20px] left-[270px] "
                      src="./tro3.png"
                      alt=""
                    />
                    <img
                      className="w-[150px] h-[100px] object-cover rounded-[5px] absolute top-[80px] left-[340px]"
                      src="./tro4.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-start-3 col-end-5">
                  <div className="flex justify-end ">
                    <div className="h-[200px] w-[400px] bg-[#D9D9D9] rounded-[5px] bg-gradient-to-r from-[#fcfc79] to-[#FFFFB8] rounded-l-[40px] flex items-center pl-[20px]">
                      <div className="h-[200px] w-[300px] py-[40px] px-[30px]">
                        <h1 className="text-[30px] font-bold ">VILAHOUSE</h1>
                        <span>
                          Convenient place to live for everyone, every home
                        </span>
                      </div>
                    </div>
                    <img
                      className="w-[100px] h-[100px] object-cover top-[40px] right-[40px] absolute"
                      src="./bxs-home-smile.svg.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[680px] col-start-4 col-end-5 bg-[#F5F5F5] rounded-[5px] ml-[40px]">
            <div className="flex items-center justify-between">
              <h1 className="text-[20px] font-bold pl-[20px] pt-[20px] ">
                Notification
              </h1>
              <div className="w-[50px] h-[50px] bg-[#F6F6BD] rounded-[5px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-[30px] h-[30px]"
                >
                  <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-[20px] h-[70px] w-auto bg-[#fff] rounded-[5px] p-[8px] mx-[15px] ">
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[20px] object-cover rounded-md mt-[4px] mr-[8px]"
                  src="./bxs-bookmark-star.svg.png"
                  alt=""
                />
                <p className="font-semibold">12:20 AM</p>
              </div>
              <span className="text-[14px]">
                Room 101 has sent you a message
              </span>
            </div>
            <div className="mt-[20px] h-[70px] w-auto bg-[#fff] rounded-[5px] p-[8px] mx-[15px] ">
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[20px] object-cover rounded-md mt-[4px] mr-[8px]"
                  src="./bxs-bookmark-star.svg.png"
                  alt=""
                />
                <p className="font-semibold">12:20 AM</p>
              </div>
              <span className="text-[14px]">
                Room 101 has sent you a message
              </span>
            </div>
            <div className="mt-[20px] h-[70px] w-auto bg-[#fff] rounded-[5px] p-[8px] mx-[15px] ">
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[20px] object-cover rounded-md mt-[4px] mr-[8px]"
                  src="./bxs-bookmark-star.svg.png"
                  alt=""
                />
                <p className="font-semibold">12:20 AM</p>
              </div>
              <span className="text-[14px]">
                Room 101 has sent you a message
              </span>
            </div>
            <div className="mt-[20px] h-[70px] w-auto bg-[#fff] rounded-[5px] p-[8px] mx-[15px] ">
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[20px] object-cover rounded-md mt-[4px] mr-[8px]"
                  src="./bxs-bookmark-star.svg.png"
                  alt=""
                />
                <p className="font-semibold">12:20 AM</p>
              </div>
              <span className="text-[14px]">
                Room 101 has sent you a message
              </span>
            </div>
            <div className="mt-[20px] h-[70px] w-auto bg-[#fff] rounded-[5px] p-[8px] mx-[15px] ">
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[20px] object-cover rounded-md mt-[4px] mr-[8px]"
                  src="./bxs-bookmark-star.svg.png"
                  alt=""
                />
                <p className="font-semibold">12:20 AM</p>
              </div>
              <span className="text-[14px]">
                Room 101 has sent you a message
              </span>
            </div>
            <div className="mt-[20px] h-[70px] w-auto bg-[#fff] rounded-[5px] p-[8px] mx-[15px] ">
              <div className="flex items-center">
                <img
                  className="w-[20px] h-[20px] object-cover rounded-md mt-[4px] mr-[8px]"
                  src="./bxs-bookmark-star.svg.png"
                  alt=""
                />
                <p className="font-semibold">12:20 AM</p>
              </div>
              <span className="text-[14px]">
                Room 101 has sent you a message
              </span>
            </div>
          </div>
        </div>
        <div className="h-[150px] bg-[#F5F5F5] rounded-[5px] p-[10px] pl-[20px] mt-[20px] ">
          <div className="flex items-center">
            <div className="h-[130px] w-[180px] bg-[#D0E6EA] rounded-[5px] pl-[9px] mr-[10px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-auto h-[30px] mt-[12px] ml-[62px]"
              >
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <div className="h-[130px] w-[180px] bg-[#D0E6EA] rounded-[5px] pl-[9px] mr-[10px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-auto h-[30px] mt-[12px] ml-[62px]"
              >
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <div className="h-[130px] w-[180px] bg-[#D0E6EA] rounded-[5px] pl-[9px] mr-[10px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-auto h-[30px] mt-[12px] ml-[62px]"
              >
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <div className="h-[130px] w-[180px] bg-[#D0E6EA] rounded-[5px] pl-[9px] mr-[10px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-auto h-[30px] mt-[12px] ml-[62px]"
              >
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <div className="h-[130px] w-[180px] bg-[#D0E6EA] rounded-[5px] pl-[9px] mr-[10px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-auto h-[30px] mt-[12px] ml-[62px]"
              >
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
            <div className="h-[130px] w-[180px] bg-[#D0E6EA] rounded-[5px] pl-[9px] mr-[10px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-auto h-[30px] mt-[12px] ml-[62px]"
              >
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
              <span>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

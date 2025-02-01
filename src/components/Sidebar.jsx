import React, { useState } from "react";
import Logo from "/images/Logo_wrap.svg";
import SidebarLinks from "./sidebar/SidebarLinks";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function Sidebar() {
  const [isCollapseUserMgt, setIsCollapseUserMgt] = useState(false);
  const [isCollapseShip, setIsCollapseShip] = useState(false);
  const [isCollapseInvoice, setIsCollapseInvoice] = useState(false);
  const [isCollapseSettings, setIsCollapseSettings] = useState(false);
  return (
    <aside>
      <div className="mt-4 mb-6 ml-2">
        <img src={Logo} alt="Afroshipper_Logo" />
      </div>
      <nav className="flex flex-col gap-3 justify-between">
        <div className="flex flex-col gap-3">
          <div>
            <ul className="flex flex-col space-y-4">
              <SidebarLinks
                icon="/images/icon/Icon.svg"
                label={"Home"}
                hoverIcon={"/images/icon/Dotblue.svg"}
              />
              <li>
                <button
                  onClick={() => setIsCollapseUserMgt(!isCollapseUserMgt)}
                  className="flex items-center justify-between w-full text-white text-left "
                >
                  <SidebarLinks
                    icon="/images/icon/IconUser.svg"
                    label={"User Management"}
                    hoverIcon={"/images/icon/Dotblue.svg"}
                  />

                  <span>
                    {isCollapseUserMgt ? (
                      <MdKeyboardArrowDown size={20} color="#EAAA08" />
                    ) : (
                      <MdKeyboardArrowUp size={20} color="#EAAA08" />
                    )}
                  </span>
                </button>

                {/* Collapsible Links */}
                {isCollapseUserMgt && (
                  <ul className="ml-6 mt-2 flex flex-col space-y-2">
                    <SidebarLinks
                      icon="/images/icon/Dot.svg"
                      label="Users"
                      hoverIcon={"/images/icon/Dotblue.svg"}
                    />
                    <SidebarLinks
                      icon="/images/icon/Dot.svg"
                      label="Employees"
                      hoverIcon={"/images/icon/Dotblue.svg"}
                    />
                    <SidebarLinks
                      icon="/images/icon/Dot.svg"
                      label="Drivers"
                      hoverIcon={"/images/icon/Dotblue.svg"}
                    />
                    <SidebarLinks
                      icon="/images/icon/Dot.svg"
                      label="Influencers"
                      hoverIcon={"/images/icon/Dotblue.svg"}
                    />
                  </ul>
                )}
              </li>
              <SidebarLinks
                icon="/images/icon/IconOrg.svg"
                label={"Organizations"}
                hoverIcon={"/images/icon/Dotblue.svg"}
              />
              <SidebarLinks
                icon="/images/icon/IconCar.svg"
                label={"Vehicles"}
                hoverIcon={"/images/icon/Dotblue.svg"}
              />
              <li>
                <button
                  onClick={() => setIsCollapseShip(!isCollapseShip)}
                  className="flex items-center justify-between w-full text-white text-left "
                >
                  <SidebarLinks
                    icon="/images/icon/IconShip.svg"
                    label={"Shipments"}
                    hoverIcon={"/images/icon/Dotblue.svg"}
                  />

                  <span>
                    {isCollapseShip ? (
                      <MdKeyboardArrowDown size={20} color="#EAAA08" />
                    ) : (
                      <MdKeyboardArrowUp size={20} color="#EAAA08" />
                    )}
                  </span>
                </button>

                {/* Collapsible Links */}
                {isCollapseShip && (
                  <ul className="ml-6 mt-2 flex flex-col space-y-2">
                    <SidebarLinks
                      icon="/images/icon/Dot.svg"
                      label="Users"
                      hoverIcon={"/images/icon/Dotblue.svg"}
                    />
                    <SidebarLinks
                      icon="/images/icon/Dot.svg"
                      label="Employees"
                      hoverIcon={"/images/icon/Dotblue.svg"}
                    />
                  </ul>
                )}
              </li>
              <SidebarLinks
                icon="/images/icon/IconWallet.svg"
                label={"Wallet"}
                hoverIcon={"/images/icon/Dotblue.svg"}
              />
              <SidebarLinks
                icon="/images/icon/IconTransaction.svg"
                label={"Transactions"}
                hoverIcon={"/images/icon/Dotblue.svg"}
              />
              <SidebarLinks
                icon="/images/icon/IconShippingQuotes.svg"
                label={"Shipping Quotes"}
                hoverIcon={"/images/icon/Dotblue.svg"}
              />
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#FFFFFF80] p-3">INTERNAL TOOLS</p>

            <ul className="flex flex-col space-y-4">
              <SidebarLinks
                icon="/images/icon/IconTickets.svg"
                label="Support Tickets"
              />
              <li>
                <button
                  onClick={() => setIsCollapseInvoice(!isCollapseInvoice)}
                  className="flex items-center justify-between w-full text-white text-left "
                >
                  <SidebarLinks
                    icon="/images/icon/IconInvoice.svg"
                    label={"Invoice"}
                    hoverIcon={"/images/icon/Dotblue.svg"}
                  />

                  <span>
                    {isCollapseInvoice ? (
                      <MdKeyboardArrowDown size={20} color="#EAAA08" />
                    ) : (
                      <MdKeyboardArrowUp size={20} color="#EAAA08" />
                    )}
                  </span>
                </button>

                {/* Collapsible Links */}
                {isCollapseInvoice && (
                  <ul className="ml-6 mt-2 flex flex-col space-y-2">
                    <SidebarLinks
                      icon="/images/icon/Dot.svg"
                      label="Users"
                      hoverIcon={"/images/icon/Dotblue.svg"}
                    />
                    <SidebarLinks
                      icon="/images/icon/Dot.svg"
                      label="Employees"
                      hoverIcon={"/images/icon/Dotblue.svg"}
                    />
                  </ul>
                )}
              </li>
              <SidebarLinks
                icon="/images/icon/IconMarket.svg"
                label="Marketplace"
              />
              <SidebarLinks icon="/images/icon/IconLog.svg" label="Log" />
              <li>
                <button
                  onClick={() => setIsCollapseSettings(!isCollapseSettings)}
                  className="flex items-center justify-between w-full text-white text-left "
                >
                  <SidebarLinks
                    icon="/images/icon/IconSetting.svg"
                    label={"Settings"}
                    hoverIcon={"/images/icon/Dotblue.svg"}
                  />

                  <span>
                    {isCollapseSettings ? (
                      <MdKeyboardArrowDown size={20} color="#EAAA08" />
                    ) : (
                      <MdKeyboardArrowUp size={20} color="#EAAA08" />
                    )}
                  </span>
                </button>

                {/* Collapsible Links */}
                {isCollapseSettings && (
                  <ul className="ml-6 mt-2 flex flex-col space-y-2">
                    <SidebarLinks
                      icon="/images/icon/Dot.svg"
                      label="Users"
                      hoverIcon={"/images/icon/Dotblue.svg"}
                    />
                    <SidebarLinks
                      icon="/images/icon/Dot.svg"
                      label="Employees"
                      hoverIcon={"/images/icon/Dotblue.svg"}
                    />
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="my-3">
          <hr className="bg-red-600" />
          <div className="flex items-center space-x-7 p-3">
            <div className="flex gap-2 items-center">
              <div>
                <img src="/images/Avatar.svg" alt="userAvatar" />
              </div>
              <div className="flex flex-col text-white">
                <span>Olivia Rhye</span>
                <span>olivia@untitledui.com</span>
              </div>
            </div>
            <div>
              <img src="/images/icon/IconLogOut.svg" alt="LogOut-icon" />
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

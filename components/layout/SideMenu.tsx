import React, { FC, useRef } from "react";
import Logo from "../shared/Logo";
import { X } from "lucide-react";
import { HeaderData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "../shared/SocialMedia";
import { useOutsideClick } from "@/hooks";

interface SidebarProps {
  isOpen: boolean;
  onCLose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onCLose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onCLose);
  const socialMediaRef = useRef(null);

  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_ligh_green flex flex-col gap-6"
      >
        <div className="flex items-center justify-between gap-5">
          <Logo className="text-white " spanDesign="group-hover:text-white" />
          <button
            className="hover:text-shop_light_green hoverEffect"
            onClick={onCLose}
          >
            <X />
          </button>
        </div>
        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {HeaderData.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className={`hover:text-shop_light_green hoverEffect ${
                pathname === item?.href && "text-white"
              }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <div ref={socialMediaRef}>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;

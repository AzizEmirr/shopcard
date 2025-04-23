import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

interface Props {
  className?: string;
  iconClassName?: string;
  TooltipClassName?: string;
}

const SocialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "",
    icon: <Slack className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, TooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {SocialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                target="blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              align="center"
              className={cn(
                "bg-white text-black px-3 py-1.5 text-sm font-semibold rounded-lg shadow-lg transition-all duration-200 ease-in-out opacity-90",
                TooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;

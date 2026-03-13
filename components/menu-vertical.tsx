"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Link from "next/link";
import { cn } from "@/lib/utils";

type MenuItem = {
  label: string;
  href: string;
};

interface MenuVerticalProps {
  menuItems: MenuItem[];
  color?: string;
  skew?: number;
  className?: string;
  onItemClick?: (href: string) => void;
}

const MotionLink = motion.create(Link);

export const MenuVertical = ({
  menuItems = [],
  color = "var(--text-warm)",
  skew = 0,
  className,
  onItemClick,
}: MenuVerticalProps) => {
  return (
    <div className={cn("flex w-fit flex-col gap-4", className)}>
      {menuItems.map((item, index) => (
        <motion.div
          key={`${item.href}-${index}`}
          className="group/nav flex cursor-pointer items-center gap-2 text-[var(--text-warm)]"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            variants={{
              initial: { x: "-100%", color: "inherit", opacity: 0 },
              hover: { x: 0, color, opacity: 1 },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="z-0"
          >
            <ArrowRight strokeWidth={3} className="size-8" />
          </motion.div>

          <MotionLink
            href={item.href}
            onClick={(event) => {
              if (!onItemClick) {
                return;
              }

              event.preventDefault();
              onItemClick(item.href);
            }}
            variants={{
              initial: { x: -40, color: "inherit" },
              hover: { x: 0, color, skewX: skew },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="no-underline font-semibold text-[clamp(1.4rem,4vw,1.8rem)]"
          >
            {item.label}
          </MotionLink>
        </motion.div>
      ))}
    </div>
  );
};

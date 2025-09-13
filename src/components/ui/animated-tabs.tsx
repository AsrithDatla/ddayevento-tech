"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

const AnimatedTabs = ({
  tabs = [],
  defaultTab,
  className,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-full max-w-lg flex flex-col gap-y-1", className)}>
      <div className="flex gap-2 flex-wrap bg-brand-primary/10 backdrop-blur-sm p-1 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-3 py-1.5 text-sm font-medium rounded-lg text-gray-700 outline-none transition-colors"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-brand-primary shadow-lg backdrop-blur-sm !rounded-lg"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className={cn("relative z-10", activeTab === tab.id ? "text-white" : "text-gray-700")}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
      <div className="p-4 bg-white/90 shadow-lg backdrop-blur-sm rounded-xl border border-gray-200 min-h-60 h-full">
        {tabs.map((tab) =>
          activeTab === tab.id && (
            <motion.div
              key={tab.id}
              initial={{
                opacity: 0,
                scale: 0.95,
                x: -10,
                filter: "blur(10px)",
              }}
              animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, x: -10, filter: "blur(10px)" }}
              transition={{
                duration: 0.5,
                ease: "circInOut",
                type: "spring",
              }}
            >
              {tab.content}
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };
"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "relative flex w-fit gap-12 text-2xl after:absolute after:-bottom-2 after:w-full after:border-b after:border-zinc-600 after:content-['']",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      `relative
      inline-flex
      items-center
      justify-center
      whitespace-nowrap
      font-bold
      text-zinc-500
      hover:text-zinc-900

      focus-visible:outline-none
      disabled:pointer-events-none
      disabled:opacity-50

      data-[state=active]:bg-background
      data-[state=active]:text-foreground

      data-[state=active]:after:absolute
      data-[state=active]:after:-bottom-2
      data-[state=active]:after:w-full
      data-[state=active]:after:border-b-2
      data-[state=active]:after:border-zinc-900
      data-[state=active]:after:content-['']
      `,
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-2 focus-visible:outline-none", className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };

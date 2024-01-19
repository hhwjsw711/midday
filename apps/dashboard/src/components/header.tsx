import { CommandMenuButton } from "@/components/command-menu/button";
import { NotificationCenter } from "@/components/notification-center";
import { ReconnectBank } from "@/components/reconnect-bank";
import { UserMenu } from "@/components/user-menu";
import { BrowserNavigation } from "@/desktop/components/browser-navigation";
import { Skeleton } from "@midday/ui/skeleton";
import { Suspense } from "react";
import { DesktopTrafficLight } from "./desktop-traffic-light";
import { TrackerControl } from "./tracker-contol";

export function Header() {
  return (
    <header className="border-b-[1px] flex justify-between py-4 items-center">
      <DesktopTrafficLight />
      <BrowserNavigation />
      <CommandMenuButton />

      <div className="flex space-x-2 no-drag">
        <TrackerControl />
        <Suspense>
          <ReconnectBank />
        </Suspense>
        <NotificationCenter />
        <Suspense fallback={<Skeleton className="h-8 w-8 rounded-full" />}>
          <UserMenu />
        </Suspense>
      </div>
    </header>
  );
}

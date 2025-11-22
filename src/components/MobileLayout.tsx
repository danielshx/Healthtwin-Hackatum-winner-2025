import { ReactNode } from "react";
import { MobileNav } from "./MobileNav";
import { MobileHeader } from "./MobileHeader";

type MobileLayoutProps = {
  children: ReactNode;
  title: string;
  showBack?: boolean;
  showNav?: boolean;
  headerAction?: ReactNode;
};

export function MobileLayout({ children, title, showBack, showNav = true, headerAction }: MobileLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <MobileHeader title={title} showBack={showBack} action={headerAction} />
      <main className="flex-1 overflow-y-auto pb-20">{children}</main>
      {showNav && <MobileNav />}
    </div>
  );
}

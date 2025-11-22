import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MoreVertical } from "lucide-react";

type MobileHeaderProps = {
  title: string;
  showBack?: boolean;
  action?: ReactNode;
};

export function MobileHeader({ title, showBack = false, action }: MobileHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-border safe-area-top">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2 flex-1">
          {showBack && (
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="shrink-0">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          )}
          <h1 className="text-lg font-bold truncate">{title}</h1>
        </div>
        {action || (
          <Button variant="ghost" size="icon" className="shrink-0">
            <MoreVertical className="w-5 h-5" />
          </Button>
        )}
      </div>
    </header>
  );
}

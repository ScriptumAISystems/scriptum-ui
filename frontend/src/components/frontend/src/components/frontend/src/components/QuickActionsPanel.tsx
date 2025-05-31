import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  PlayIcon,
  TargetIcon,
  RefreshCwIcon,
  CheckCircleIcon,
} from "lucide-react";
import React from "react";

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const actions: QuickAction[] = [
  { id: "start-day", label: "Tag starten", icon: <PlayIcon size={18} /> },
  {
    id: "check-agents",
    label: "Agentenstatus prüfen",
    icon: <CheckCircleIcon size={18} />,
  },
  { id: "set-goal", label: "Ziel setzen", icon: <TargetIcon size={18} /> },
  {
    id: "refresh-plan",
    label: "Planung aktualisieren",
    icon: <RefreshCwIcon size={18} />,
  },
];

export const QuickActionsPanel: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        <TooltipProvider>
          {actions.map((action) => (
            <Tooltip key={action.id}>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="flex flex-col items-center gap-1 py-6"
                  onClick={action.onClick}
                >
                  {action.icon}
                  <span className="text-xs leading-tight text-center">
                    {action.label}
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{action.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </CardContent>
    </Card>
  );
};

export default QuickActionsPanel;

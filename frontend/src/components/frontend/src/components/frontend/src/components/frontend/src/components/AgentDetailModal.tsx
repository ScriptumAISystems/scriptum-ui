import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Agent } from "./LuxDashboard";
import React from "react";

interface AgentDetailProps {
  agent: Agent;
  children: React.ReactNode;
}

export const AgentDetailModal: React.FC<AgentDetailProps> = ({ agent, children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <span className="text-3xl">{agent.icon}</span> {agent.name}
          </DialogTitle>
          <DialogDescription>{agent.description}</DialogDescription>
        </DialogHeader>

        <section className="space-y-4">
          <div>
            <h4 className="text-sm font-medium">Letzte Aktionen</h4>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground">
              <li>Analyse der Projekt-Roadmap</li>
              <li>Update des Wochenziels</li>
              <li>Brainstorming-Session abgeschlossen</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium">Ziele & Fortschritt</h4>
            <div className="mt-2 space-y-2">
              <div>
                <span className="text-xs">Sprint-Planung</span>
                <Progress value={70} className="h-2" />
              </div>
              <div>
                <span className="text-xs">Dokumentation</span>
                <Progress value={40} className="h-2" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium">Mini-Dialog</h4>
            <div className="mt-2 rounded-md border p-3 text-sm text-muted-foreground">
              <p><strong>Du:</strong> Wie läuft das Projekt?</p>
              <p><strong>{agent.name}:</strong> Alles im Plan! 💪</p>
            </div>
          </div>
        </section>

        <div className="flex justify-end">
          <Button variant="secondary">Schließen</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgentDetailModal;

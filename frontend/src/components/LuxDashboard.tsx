import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export type AgentStatus = "active" | "sleeping" | "idea";

export interface Agent {
  id: string;
  name: string;
  icon: string; // Emoji, Icon oder SVG
  description: string;
  status: AgentStatus;
}

const demoAgents: Agent[] = [
  { id: "argo", name: "Argo", icon: "🚀", description: "Projektagent", status: "active" },
  { id: "mira", name: "Mira", icon: "🗣️", description: "Sprachagentin", status: "sleeping" },
  { id: "orion", name: "Orion", icon: "💪", description: "Fitnessagent", status: "idea" },
  { id: "lys", name: "Lys", icon: "🎨", description: "Kreativagentin", status: "active" },
  { id: "noa", name: "Noa", icon: "🔍", description: "Rechercheagentin", status: "sleeping" },
];

const moods = [
  { label: "🌞 neugierig", color: "bg-yellow-400" },
  { label: "🔥 motiviert", color: "bg-red-500" },
  { label: "💡 Ideen im Kopf", color: "bg-emerald-500" },
];

const SophiaMood = () => {
  const [index, setIndex] = useState(0);
  return (
    <Card className="col-span-full md:col-span-2">
      <CardHeader>
        <CardTitle>Sophias Stimmung</CardTitle>
        <CardDescription>Aktuelle Stimmung der KI-Persönlichkeit "Sophia"</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className={`h-3 w-3 rounded-full ${moods[index].color}`}
        />
        <motion.span
          key={`label-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-medium"
        >
          {moods[index].label}
        </motion.span>
        <Button
          variant="secondary"
          size="sm"
          className="ml-auto"
          onClick={() => setIndex((index + 1) % moods.length)}
        >
          Stimmung ändern
        </Button>
      </CardContent>
    </Card>
  );
};

interface LuxDashboardProps {
  userName?: string;
  agents?: Agent[];
}

export const LuxDashboard = ({
  userName = "Christian",
  agents = demoAgents,
}: LuxDashboardProps) => {
  return (
    <section className="container mx-auto max-w-6xl p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          Willkommen zurück, {userName}
        </h1>
        <p className="text-muted-foreground">Dein zentrales LUX-Agenten-Cockpit</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>Agenten</CardTitle>
            <CardDescription>
              Überblick über alle aktiven und pausierten Agenten
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue={agents[0]?.id} className="w-full">
              <TabsList className="mb-4 overflow-x-auto">
                {agents.map((agent) => (
                  <TabsTrigger key={agent.id} value={agent.id} className="whitespace-nowrap">
                    {agent.icon} {agent.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {agents.map((agent) => (
                <TabsContent key={agent.id} value={agent.id}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="border-dashed">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <span className="text-3xl">{agent.icon}</span>
                          {agent.name}
                        </CardTitle>
                        <CardDescription>{agent.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <span
                          className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                            agent.status === "active"
                              ? "bg-emerald-100 text-emerald-800"
                              : agent.status === "sleeping"
                              ? "bg-gray-100 text-gray-600"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {agent.status}
                        </span>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-2">
                        <Button variant="outline">Tägliche Planung starten</Button>
                        <Button variant="outline">Neues Ziel setzen</Button>
                        <Button variant="outline">Agentenstatus prüfen</Button>
                        <Button variant="outline">Mood ändern</Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
        <SophiaMood />
      </div>
    </section>
  );
};

export default LuxDashboard;

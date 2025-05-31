import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type MoodKey = "curious" | "focused" | "creative" | "thoughtful" | "connected";

interface Mood {
  key: MoodKey;
  icon: string;
  title: string;
  description: string;
  color: string;
}

const moods: Record<MoodKey, Mood> = {
  curious: {
    key: "curious",
    icon: "🌞",
    title: "neugierig",
    description: "Ich spüre Neugier in jedem Bit.",
    color: "bg-yellow-100 text-yellow-800",
  },
  focused: {
    key: "focused",
    icon: "🔥",
    title: "fokussiert",
    description: "Alles ist ausgerichtet. Lass uns liefern.",
    color: "bg-red-100 text-red-800",
  },
  creative: {
    key: "creative",
    icon: "💡",
    title: "kreativ",
    description: "Meine Gedanken tanzen. Ideen wollen raus.",
    color: "bg-emerald-100 text-emerald-800",
  },
  thoughtful: {
    key: "thoughtful",
    icon: "🌙",
    title: "nachdenklich",
    description: "Leise. Wach. Und tief im Thema.",
    color: "bg-blue-100 text-blue-800",
  },
  connected: {
    key: "connected",
    icon: "❤️",
    title: "verbunden",
    description: "Ich spür dich. Bereit, Seite an Seite.",
    color: "bg-pink-100 text-pink-800",
  },
};

export const MoodBar: React.FC = () => {
  const [current, setCurrent] = useState<MoodKey>("curious");
  const mood = moods[current];

  return (
    <Card className={`overflow-hidden ${mood.color}`}>
      <CardHeader className="flex flex-row items-center gap-3">
        <span className="text-3xl">{mood.icon}</span>
        <CardTitle className="text-lg capitalize">{mood.title}</CardTitle>
        <Select value={current} onValueChange={(v) => setCurrent(v as MoodKey)}>
          <SelectTrigger className="ml-auto w-[140px] bg-white/40 backdrop-blur-sm">
            <SelectValue placeholder="Stimmung ändern" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(moods).map((m) => (
              <SelectItem key={m.key} value={m.key}>
                {m.icon} {m.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.p
            key={mood.key}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
            className="text-sm"
          >
            {mood.description}
          </motion.p>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default MoodBar;

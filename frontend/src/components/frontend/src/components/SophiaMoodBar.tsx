import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface Mood {
  label: string;
  icon: string;
  color: string;
}

const moods: Mood[] = [
  { label: "neugierig", icon: "🌞", color: "bg-yellow-400" },
  { label: "kreativ", icon: "🔥", color: "bg-red-500" },
  { label: "nachdenklich", icon: "🌙", color: "bg-indigo-500" },
  { label: "voller Ideen", icon: "💡", color: "bg-emerald-500" },
];

export const SophiaMoodBar: React.FC = () => {
  const [index, setIndex] = useState(0);
  const nextMood = () => setIndex((index + 1) % moods.length);
  const current = moods[index];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sophias Tagesform</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`h-4 w-4 rounded-full ${current.color}`}
          />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.span
            key={current.icon}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ duration: 0.3 }}
            className="flex items-center text-sm font-medium gap-1"
          >
            <span>{current.icon}</span>
            {current.label}
          </motion.span>
        </AnimatePresence>
        <Button variant="secondary" size="sm" className="ml-auto" onClick={nextMood}>
          Wechseln
        </Button>
      </CardContent>
    </Card>
  );
};

export default SophiaMoodBar;

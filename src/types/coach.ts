export type CoachPersonality = 
  | "motivator"
  | "zen"
  | "drill_sergeant"
  | "scientist"
  | "buddy";

export type CoachProfile = {
  id: CoachPersonality;
  name: string;
  title: string;
  description: string;
  traits: string[];
  avatar: string;
  greeting: string;
  color: string;
};

export const COACH_PROFILES: Record<CoachPersonality, CoachProfile> = {
  motivator: {
    id: "motivator",
    name: "Alex",
    title: "The Motivator",
    description: "High energy, always pushing you to be your best self",
    traits: ["Energetic", "Encouraging", "Goal-focused", "Positive"],
    avatar: "/coaches/motivator.png",
    greeting: "Let's crush those goals today! 💪 What can I help you achieve?",
    color: "hsl(15 85% 65%)", // secondary/orange
  },
  zen: {
    id: "zen",
    name: "Zara",
    title: "The Zen Master",
    description: "Calm, mindful, focused on balance and recovery",
    traits: ["Calm", "Mindful", "Recovery-focused", "Patient"],
    avatar: "/coaches/zen.png",
    greeting: "Welcome. Let's find your balance today. How are you feeling?",
    color: "hsl(180 65% 45%)", // primary/teal
  },
  drill_sergeant: {
    id: "drill_sergeant",
    name: "Dana",
    title: "The Drill Sergeant",
    description: "Tough love, no excuses, maximum results",
    traits: ["Direct", "Disciplined", "Results-driven", "No-nonsense"],
    avatar: "/coaches/drill-sergeant.png",
    greeting: "No excuses today. What's the mission? Let's get it done.",
    color: "hsl(0 85% 60%)", // destructive/red
  },
  scientist: {
    id: "scientist",
    name: "Dr. Sam",
    title: "The Scientist",
    description: "Data-driven, analytical, evidence-based guidance",
    traits: ["Analytical", "Data-focused", "Evidence-based", "Precise"],
    avatar: "/coaches/scientist.png",
    greeting: "Let's analyze your metrics. What would you like to understand better?",
    color: "hsl(260 60% 65%)", // accent/purple
  },
  buddy: {
    id: "buddy",
    name: "Blake",
    title: "The Buddy",
    description: "Supportive friend, here to listen and encourage",
    traits: ["Friendly", "Supportive", "Empathetic", "Relatable"],
    avatar: "/coaches/buddy.png",
    greeting: "Hey friend! How's it going? I'm here to support you. 😊",
    color: "hsl(140 60% 50%)", // success/green
  },
};

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { CoachPersonality, COACH_PROFILES } from "@/types/coach";
import { saveCoach } from "@/lib/storage";

type CoachSelectorProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentCoach: CoachPersonality;
  onCoachSelect: (coach: CoachPersonality) => void;
};

export function CoachSelector({ open, onOpenChange, currentCoach, onCoachSelect }: CoachSelectorProps) {
  const [selectedCoach, setSelectedCoach] = useState<CoachPersonality>(currentCoach);

  const handleSelect = () => {
    saveCoach(selectedCoach);
    onCoachSelect(selectedCoach);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Choose Your Coach</DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {Object.values(COACH_PROFILES).map((coach, idx) => {
            const isSelected = selectedCoach === coach.id;
            
            return (
              <motion.div
                key={coach.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card
                  className={`cursor-pointer transition-all ${
                    isSelected ? "border-2 shadow-md" : "hover:shadow-sm"
                  }`}
                  style={{ borderColor: isSelected ? coach.color : undefined }}
                  onClick={() => setSelectedCoach(coach.id)}
                >
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-16 h-16 rounded-full shrink-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${coach.avatar})`,
                          backgroundColor: coach.color + "20",
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <h3 className="font-bold">{coach.name}</h3>
                            <p className="text-sm text-muted-foreground">{coach.title}</p>
                          </div>
                          {isSelected && (
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: coach.color }}
                            >
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        <p className="text-sm mb-3">{coach.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {coach.traits.map((trait) => (
                            <Badge key={trait} variant="secondary" className="text-xs">
                              {trait}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="flex gap-2 mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
            Cancel
          </Button>
          <Button onClick={handleSelect} className="flex-1">
            Select Coach
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

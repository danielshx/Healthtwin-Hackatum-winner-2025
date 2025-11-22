import { MobileLayout } from "@/components/MobileLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Flame, Heart, Award, Share2, Settings } from "lucide-react";
import { motion } from "framer-motion";

export default function Social() {
  const achievements = [
    { id: "1", title: "7-Day Streak", icon: Flame, color: "text-secondary", earned: true },
    { id: "2", title: "Sleep Champion", icon: Award, color: "text-accent", earned: true },
    { id: "3", title: "Recovery Master", icon: Heart, color: "text-success", earned: false },
    { id: "4", title: "Consistency King", icon: Trophy, color: "text-primary", earned: false },
  ];

  const weeklyStatus = {
    readinessAvg: 78,
    sleepQuality: 85,
    trainingDays: 4,
    recoveryDays: 3,
  };

  return (
    <MobileLayout
      title="Profile"
      headerAction={
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
      }
    >
      <div className="px-4 py-4 space-y-4">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-wellness mx-auto flex items-center justify-center">
            <span className="text-4xl font-bold text-white">A</span>
          </div>
          <div>
            <h2 className="text-xl font-bold">Alex</h2>
            <p className="text-sm text-muted-foreground">Member since Dec 2024</p>
          </div>
        </motion.div>

        {/* Weekly Share Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="shadow-card bg-gradient-wellness text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-semibold">This Week</span>
                <Share2 className="w-5 h-5" />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm opacity-90">Avg Readiness</p>
                  <p className="text-3xl font-bold">{weeklyStatus.readinessAvg}</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">Sleep Quality</p>
                  <p className="text-3xl font-bold">{weeklyStatus.sleepQuality}%</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">Training Days</p>
                  <p className="text-3xl font-bold">{weeklyStatus.trainingDays}</p>
                </div>
                <div>
                  <p className="text-sm opacity-90">Recovery Days</p>
                  <p className="text-3xl font-bold">{weeklyStatus.recoveryDays}</p>
                </div>
              </div>
              <Button variant="secondary" className="w-full">
                Share Progress
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Streaks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-5 h-5 text-secondary" />
                <h3 className="font-bold">Current Streaks</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-sm">Training Consistency</p>
                    <p className="text-xs text-muted-foreground">3 workouts per week</p>
                  </div>
                  <Badge className="bg-secondary text-secondary-foreground">7 days</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-sm">Recovery Streak</p>
                    <p className="text-xs text-muted-foreground">Following rest days</p>
                  </div>
                  <Badge className="bg-success text-success-foreground">12 days</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-sm">Sleep Target</p>
                    <p className="text-xs text-muted-foreground">7.5+ hours per night</p>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">5 days</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-primary" />
                <h3 className="font-bold">Achievements</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-2xl text-center ${
                        achievement.earned ? "bg-primary/10" : "bg-muted/50 opacity-50"
                      }`}
                    >
                      <Icon className={`w-10 h-10 mx-auto mb-2 ${achievement.earned ? achievement.color : "text-muted-foreground"}`} />
                      <p className="text-xs font-medium">{achievement.title}</p>
                      {achievement.earned && (
                        <Badge variant="outline" className="mt-2 text-xs">
                          Earned
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Buddy Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Card className="shadow-card bg-muted/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm mb-1">From your Buddy</p>
                  <p className="text-sm text-muted-foreground">
                    "Great job this week! Your consistency is inspiring. Keep prioritizing recovery and you'll hit your goals. 💪"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MobileLayout>
  );
}

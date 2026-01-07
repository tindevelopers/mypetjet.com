"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, Zap, TrendingUp, Users, Award, CheckCircle, 
  Shield, Heart, Globe, Map, Lightbulb, BarChart, Brain,
  Smartphone, Database, Cloud, Code, Package, Truck, Megaphone,
  Star, Mic, Trophy
} from "lucide-react";

const iconMap = {
  Target,
  Zap,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  Shield,
  Heart,
  Globe,
  Map,
  Lightbulb,
  BarChart,
  Brain,
  Smartphone,
  Database,
  Cloud,
  Code,
  Package,
  Truck,
  Megaphone,
  Star,
  Mic,
  Trophy,
};

type IconName = keyof typeof iconMap;

interface FeatureCardProps {
  icon: IconName;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-gray-200">
        <CardHeader>
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pet-purple-100 text-pet-purple-500">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

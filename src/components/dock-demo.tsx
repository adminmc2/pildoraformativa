"use client";

import { Home, BookOpen, Settings, User, Trophy, Star } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";

export default function DockDemo() {
  return (
    <div className="relative">
      <Dock iconMagnification={70} iconSize={50}>
        <DockIcon>
          <Home className="size-6" />
        </DockIcon>
        <DockIcon>
          <BookOpen className="size-6" />
        </DockIcon>
        <DockIcon>
          <Trophy className="size-6" />
        </DockIcon>
        <DockIcon>
          <Star className="size-6" />
        </DockIcon>
        <DockIcon>
          <User className="size-6" />
        </DockIcon>
        <DockIcon>
          <Settings className="size-6" />
        </DockIcon>
      </Dock>
      <div className="text-center mt-12">
        <p className="text-2xl font-black text-black">
          ¡Pasa el ratón sobre los iconos para ver el efecto de magnificación!
        </p>
      </div>
    </div>
  );
}

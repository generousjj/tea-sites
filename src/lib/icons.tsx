import {
  Cog,
  BookOpen,
  Building2,
  Drama,
  Palette,
  AudioLines,
  Briefcase,
  ShieldCheck,
  Hammer,
  Presentation,
  Compass,
  Users,
  type LucideIcon,
  HelpCircle,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  cog: Cog,
  "book-open": BookOpen,
  "building-2": Building2,
  drama: Drama,
  palette: Palette,
  "audio-lines": AudioLines,
  briefcase: Briefcase,
  "shield-check": ShieldCheck,
  hammer: Hammer,
  presentation: Presentation,
  compass: Compass,
  users: Users,
};

/** Resolve an icon name from the data files to a Lucide component. */
export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? HelpCircle;
}

/**
 * Render a data-driven icon by name. Uses a stable lookup (not a component
 * created during render), which keeps the React compiler lint rules happy.
 * All icons here are decorative and paired with visible text.
 */
export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = ICONS[name] ?? HelpCircle;
  return <Cmp className={className} aria-hidden />;
}

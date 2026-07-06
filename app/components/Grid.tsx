import { cn } from "../lib/utils";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)]"
        )}
      />

      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)]" />
    </div>
  );
}
import { Animate } from "@/components/Animate";
import { ScrollAnimationComponent } from "@/components/Scroll";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <ScrollAnimationComponent />
      <div className="h-[100vh]">
        <Animate />
      </div>
    </div>
  );
}

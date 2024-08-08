import { Progress } from "@/app/components/ui/progress";

interface SyllabusCardProps {
  text: string;
  value: number;
  color: string;
}

const SyllabusCard: React.FC<SyllabusCardProps> = ({ text, value, color }) => {
  return (
    <div className="flex flex-col py-6">
      <p className="text-sm font-semibold">{text}</p>
      <div className="flex justify-between items-center">
        <Progress
          value={value}
          className="w-[80%]"
          progressBarClassName={color}
          style={{ "--progress-foreground": color } as React.CSSProperties}
        />
        <p className="">
          {value}
          {"%"}
        </p>
      </div>
    </div>
  );
};

export default SyllabusCard;

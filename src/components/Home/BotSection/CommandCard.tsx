type CommandCardTypes = {
  title: string;
  tagCommand: string;
  bodyText: string;
};

export function CommandCard({ title, tagCommand, bodyText }: CommandCardTypes) {
  return (
    <div className="flex flex-col gap-2 px-4 py-2 rounded-xl w-[400px] bg-[#1D2535]">
      <div id="Header" className="flex flex-row justify-between">
        <span className="text-xl font-bold text-buteco-pilsen font-FigTree">
          {title}
        </span>
        <span className="bg-[#4C81C0] px-2 rounded-e-md rounded-bl-md">
          {tagCommand}
        </span>
      </div>
      <p className="text-justify text-buteco-cream">{bodyText}</p>
    </div>
  );
}

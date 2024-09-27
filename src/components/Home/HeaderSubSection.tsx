type HdrSecType = {
  title: string;
  subTitle: string;
  hColor: string | null;
  bColor: string | null;
};

export function HeaderSubSection({ title, subTitle, hColor, bColor }: HdrSecType) {
  return (
    <>
      <span className={`text-[2rem] mb-6 font-FigTree font-black ${hColor}`}>
        {title}
      </span>
      <span className={`${bColor} text-2xl text-center mb-12 w-[750px] font-bold`}>
        {subTitle}
      </span>
    </>
  );
}

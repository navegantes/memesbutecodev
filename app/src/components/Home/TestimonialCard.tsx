import { TiLocation } from "react-icons/ti";
import { UserType } from "../../services/getContentData";
import { MdOutlineFormatQuote } from "react-icons/md";

interface UserPropsType {
  user: UserType;
}

// const rot = [5, -5, 6, -6, 8, -8, 10, -10, 12, -12];
// const rot = ["8deg", "-8deg", "10deg", "-10deg"];

export function TestimonialCard({ user }: UserPropsType) {
  return (
    <div
      className={`flex flex-col relative justify-around bg-buteco-dark transition-all max-w-sm px-4 border-4 min-h-52 rounded-lg min-w-[600px] border-teal-900 hover:z-20
      hover:scale-[1.2] hover:rotate-[4deg]`}
    >
      <div className="relative flex flex-row items-center gap-4">
        <MdOutlineFormatQuote className="absolute top-0 opacity-75 -right-2 rotate-12 size-20 text-slate-800" />
        <img
          className="p-1 w-20 h-20 mt-4 rounded-full border-[2px] border-buteco-orange"
          src={user.avatar_url}
          alt="Avatar do Usuário"
        />
        <div className="flex flex-col w-full">
          <span className="text-lg font-bold">
            {user.name ? user.name : user.login}
          </span>
          <span className="text-[12px] z-10 text-slate-500">
            {user.bio ? user.bio : "Mais um desocupado no Buteco dos Devs"}
          </span>
          <div className="flex flex-row items-center">
            <TiLocation className="text-slate-500" />
            <span className="ml-2 text-sm text-justify text-slate-400">
              {user.location ? user.location : "Xique-Xique Bahia"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-2 mt-2 overflow-auto text-justify">
        <p className="flex h-20 text-sm text-justify items- text-buteco-cream">
          {user.testimony}
        </p>
      </div>
    </div>
  );
}

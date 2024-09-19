import { TiLocation } from "react-icons/ti";
import { UserType } from "../services/getContentData";
import { MdOutlineFormatQuote } from "react-icons/md";

interface UserPropsType {
  user: UserType;
}

// const rot = [5, -5, 6, -6, 8, -8, 10, -10, 12, -12];
// const rot = ["8deg", "-8deg", "10deg", "-10deg"];

export function TestimonialCard({ user }: UserPropsType) {
  return (
    <div
      className={`flex flex-col bg-buteco-dark transition-all max-w-lg p-4 border-2 h-52 rounded-lg min-w-[600px] border-slate-600 hover:z-20 hover:scale-[1.2]
        hover:rotate-[4deg]`}
    >
      <div className="relative flex flex-row gap-4">
        <MdOutlineFormatQuote className="absolute opacity-75 -top-4 -right-2 rotate-12 size-20 text-slate-800" />
        <img
          className="p-1 size-16 rounded-full border-[2px] border-buteco-orange"
          src={user.avatar_url}
          alt="Avatar do Usuário"
        />
        <div className="flex flex-col w-full">
          <span className="text-lg font-bold">
            {user.name ? user.name : user.login}
          </span>
          <span className="text-[12px] z-10 text-slate-500">
            {user.bio ? user.bio : "Membro do Buteco dos Devs"}
          </span>
          <div className="flex flex-row items-center">
            <TiLocation className="text-slate-500" />
            <span className="ml-2 text-sm text-justify text-slate-400">
              {user.location ? user.location : "Xique-Xique Bahia"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center h-full text-justify">
        <p className="text-justify ">
          Enim dolore tempor aliquip aliqua do voluptate. Enim dolore tempor aliquip
          aliqua do voluptate. Enim dolore tempor aliquip aliqua do voluptate.
        </p>
      </div>
    </div>
  );
}

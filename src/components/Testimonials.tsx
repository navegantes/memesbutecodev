import { useEffect, useState } from "react";
import { UserType, UsersDataType, getData } from "../services/getContentData";
import { Loading } from "./loading";
import { TestimonialCard } from "./TestimonialCard";
// import { data } from "framer-motion/client";

// import { data } from "framer-motion/client";

export function Testimonials() {
  const [usersData, setUsersData] = useState<UsersDataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await getData("/api/github-users");
        const data = await response.json();

        setUsersData(data);
        console.log("Data len: ", usersData?.length);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const step = Math.floor(usersData?.length / 3);
  // console.log(usersData.slice(0, step).length);
  // console.log(usersData.slice(step, step * 2).length);
  // console.log(usersData.slice(step * 2, step * 3).length);

  return (
    <section className="flex flex-col items-center justify-center w-full p-4 overflow-hidden bg-buteco-moccha">
      <p
        className="flex items-center font-FigTree text-4xl font-extrabold
        mb-12 text-transparent bg-clip-text bg-gradient-to-br from-[#0379bd] to-[#6ef1ef]"
      >
        printf("%s", DEPOIMENTOS);
      </p>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col pt-12 pb-12 w-full gap-4 h-fit flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          {!usersData || isError ? (
            <p>Não foi possível carregar</p>
          ) : (
            [...Array(3).keys()].map((i) => {
              return (
                <div
                  key={i}
                  className={`${
                    i % 2 ? "animate-reverse-scroll" : "animate-infinite-scroll"
                  }
                  z-10 flex flex-row items-center gap-6 h-50 md:justify-start`}
                >
                  {usersData
                    .slice(i * step, (i + 1) * step)
                    .map((user: UserType) => {
                      return <TestimonialCard key={user.id} user={user} />;
                    })}
                </div>
              );
            })
          )}
        </div>
      )}
    </section>
  );
}

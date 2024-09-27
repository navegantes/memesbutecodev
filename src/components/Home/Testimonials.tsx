import { useEffect, useState } from "react";
import { UserType, UsersDataType, getData } from "../../services/getContentData";
import { Loading } from "../loading";
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

        setUsersData(data.sort(() => 0.5 - Math.random()));
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const step = 9; // Math.floor(usersData?.length / 3);

  return (
    <section className="flex flex-col items-center justify-center w-full p-4 overflow-hidden bg-[#02070f]">
      <p
        className="flex items-center font-FigTree text-3xl md:text-5xl font-extrabold
        mb-8 mt-10 text-transparent bg-clip-text bg-gradient-to-br from-[#0379bd] to-[#6ef1ef]"
      >
        {'printf("%s", DEPOIMENTOS);'}
      </p>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col pt-12 pb-12 w-full gap-4 h-2/4 flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          {!usersData || isError ? (
            <p>Não foi possível carregar</p>
          ) : (
            [...Array(3).keys()].map((i) => {
              return (
                <div
                  key={i}
                  className={`hover:z-10 flex relative flex-row items-center gap-4 h-fit md:justify-start
                  ${i % 2 ? "animate-reverse-scroll" : "animate-infinite-scroll"}`}
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

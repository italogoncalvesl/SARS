import Motion from "@/components/Motion";
import { cardsData } from "@/utils/cards";

export default function CardList() {
  return (
    <div className="flex flex-col gap-12 items-center w-full justify-center mt-12">
      {cardsData.map((card) => (
        <Motion
          key={card.id}
          identifier={card.id}
          direction="top"
          className="flex items-center justify-center w-full"
        >
          <div className="flex relative h-[250px] flex-col items-start gap-4 justify-center w-4/5 rounded-lg shadow-2xl shadow-gray-400 dark:shadow-main/40 p-6">
            <div className="flex w-full bg-main dark:bg-white absolute top-0 left-0 h-[1px]" />

            {card.icon}

            <h3 className="text-main font-medium">{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </Motion>
      ))}
    </div>
  );
}

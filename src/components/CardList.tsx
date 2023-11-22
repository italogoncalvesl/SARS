import Motion from "@/components/Motion";
import { Blur, BoxSearch, EmojiSad } from "iconsax-react";

const cardsData = [
  {
    id: 0,
    icon: <Blur size="32" color="#4D77FF" variant="TwoTone" />,
    title: "Fora do grupo de risco",
    description:
      "After conducting an examination with a specialist we can help find the right healing method",
  },

  {
    id: 1,
    icon: <BoxSearch size="32" color="#4D77FF" variant="TwoTone" />,
    title: "Potencial do grupo de risco",
    description:
      "After conducting an examination with a specialist we can help find the right healing method",
  },

  {
    id: 2,
    icon: <EmojiSad size="32" color="#4D77FF" variant="TwoTone" />,
    title: "Grupo de risco",
    description:
      "After conducting an examination with a specialist we can help find the right healing method",
  },
];

export default function CardList() {
  return (
    <div className="flex flex-col gap-12 items-center w-full justify-start mt-12">
      {cardsData.map((card) => (
        <Motion key={card.id} identifier={card.id} direction="left">
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

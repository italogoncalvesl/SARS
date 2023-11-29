import { useState } from "react";

interface SelectorProps {
  options: string[];
}

const Selector: React.FC<SelectorProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <select
      id="selector"
      className="border py-2 px-4 rounded"
      value={selectedOption}
      onChange={handleSelectChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Selector;

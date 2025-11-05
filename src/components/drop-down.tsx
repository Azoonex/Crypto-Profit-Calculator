import { cn } from "./lib/utils";

export default function SelectOption({
  options,
  name,
  handleChange,
  defaultValue,
  disabled = false,
}: {
  options: string[];
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: string;
  disabled: boolean;
}) {
  return (
    <div className={cn("flex flex-row gap-3")}>
      <label htmlFor={name}>{name}</label>
      <select
        name={name}
        className="border rounded p-1"
        onChange={handleChange}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        {options.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

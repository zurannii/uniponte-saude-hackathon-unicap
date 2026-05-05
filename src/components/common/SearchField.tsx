import { Search } from "lucide-react";
import { Input } from "../ui/Input";

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchField({
  value,
  onChange,
  placeholder = "Buscar...",
}: SearchFieldProps) {
  return (
    <div className="search-field">
      <Search className="search-field__icon" size={18} />
      <Input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}


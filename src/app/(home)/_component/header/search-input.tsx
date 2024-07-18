import { Input } from "@/components/ui/input";

const SearchInput: React.FC = () => {
  return (
    <Input
      type="search"
      placeholder="Search..."
      className="rounded-md border p-2 "
    />
  );
};

export {SearchInput};

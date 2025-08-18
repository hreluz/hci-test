type Props = {
    search: string;
    setSearch: (query:string) => void;
}

export const SearchBarComponent = ({search, setSearch}: Props) => {
  return (
        <input
        type="text"
        placeholder="Search names..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-80 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
  )
}

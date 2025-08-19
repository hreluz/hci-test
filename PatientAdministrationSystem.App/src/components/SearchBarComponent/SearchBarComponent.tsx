import { useEffect, useState } from "react";

type Props = {
  placeholder?: string;
  onQuery: (query:string) => void
}

export const SearchBarComponent = ({placeholder = 'Search ...', onQuery}: Props) => {

  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query)
    }, 700);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery(query)
  }

  const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="flex items-center space-x-2 mb-6">        
      <input
        type="text" 
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
        className="w-80 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"      />
      <button 
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSearch}>Search</button>
    </div>
  )
}

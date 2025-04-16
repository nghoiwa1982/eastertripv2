function AttractionCard({ name, description, imageUrl, highlights }) {
  const [expanded, setExpanded] = React.useState(false);
  
  return (
    <div className="attraction-card overflow-hidden bg-white border border-gray-200 rounded-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        
        <div className={`overflow-hidden ${expanded ? 'h-auto' : 'h-24'}`}>
          <p className="text-gray-700 mb-4">{description}</p>
          
          {highlights && highlights.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">景點特色：</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center"
        >
          {expanded ? '收起' : '展開閱讀更多'}
          <svg
            className={`ml-1 w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

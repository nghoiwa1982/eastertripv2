function DayCard({ day, date, title, isActive, onClick }) {
  return (
    <div 
      className={`day-card flex-shrink-0 w-64 p-4 rounded-lg cursor-pointer transition-all ${
        isActive 
          ? 'border-2 border-black bg-gray-50' 
          : 'border border-gray-200 bg-white hover:bg-gray-50'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-2">
        <span className={`flex items-center justify-center w-6 h-6 rounded-full mr-2 text-xs ${
          isActive ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
        }`}>
          {day}
        </span>
        <span className="text-sm text-gray-600">{date}</span>
      </div>
      <h3 className="text-base font-medium">{title}</h3>
    </div>
  );
}

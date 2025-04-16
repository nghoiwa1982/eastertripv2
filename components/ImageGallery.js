function ImageGallery({ attractions }) {
  return (
    <div className="gallery-grid">
      {attractions.map((attraction, index) => (
        <div key={index} className="gallery-item">
          <img 
            src={attraction.imageUrl} 
            alt={attraction.name} 
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
            <div className="p-4 text-white">
              <h3 className="font-bold text-lg mb-1">{attraction.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

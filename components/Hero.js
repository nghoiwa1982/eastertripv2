function Hero({ title, subtitle, description }) {
  return (
    <section className="hero-gradient text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl font-medium mb-6">{subtitle}</p>
        <p className="max-w-3xl mx-auto text-gray-200 mb-8">{description}</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#" 
            className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            查看詳細行程
          </a>
          <a 
            href="#" 
            className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            旅行準備須知
          </a>
        </div>
        
        <div className="mt-12 flex justify-center space-x-6">
          <div className="text-center">
            <div className="text-3xl font-bold">7</div>
            <div className="text-sm text-gray-300">天行程</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">12+</div>
            <div className="text-sm text-gray-300">精選景點</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">2</div>
            <div className="text-sm text-gray-300">城市</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">20+</div>
            <div className="text-sm text-gray-300">美食推薦</div>
          </div>
        </div>
      </div>
    </section>
  );
}

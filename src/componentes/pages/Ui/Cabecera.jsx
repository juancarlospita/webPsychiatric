
export const CabeceraCentre = () => {
  return (
    <section className="pt-44 pb-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-white to-white"></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-blue-600/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:flex items-center gap-16">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              El nostre <span className="text-blue-600">Centre</span>
            </h1>
            <div className="w-20 h-1 bg-blue-600"></div>
            <p className="text-lg text-gray-600">
              Som un equip multidisciplinari especialitzat en neurologia, psiquiatria i psicologia. 
              Oferim una atenció integral i personalitzada per al diagnòstic i tractament de trastorns 
              neurològics i psiquiàtrics.
            </p>
          </div>
          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform -rotate-3"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
                alt="Centre Mèdic"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


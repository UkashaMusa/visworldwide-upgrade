
const PartnersSection = () => {
  const partners = [
    {
      name: "United Nations",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/58/Flag-United-Nations-Logo.jpg",
    },
    {
      name: "African Union",
      logo: "https://au.int/sites/default/files/auweblogo-en.png",
    },
    {
      name: "episcopal relief development",
      logo: "https://www.episcopalrelief.org/wp-content/uploads/2019/01/logo.png",
    },
    {
      name: "European Union",
      logo: "https://european-union.europa.eu/themes/contrib/oe_theme/dist/eu/images/logo/standard-version/positive/logo-eu--en.svg",
    },
    {
      name: "Formular 1",
      logo: "https://media.formula1.com/image/upload/f_auto,c_limit,w_55,q_auto/etc/designs/fom-website/images/fia_logo",
    },
    {
      name: "ILO",
      logo: "https://www.ilo.org/themes/custom/ilo/node_modules/@ilo-org/brand-assets/dist/assets/logo_en_horizontal_white.svg",
    },
    {
      name: "WHO",
      logo: "https://www.who.int/ResourcePackages/WHO/assets/dist/images/logos/en/h-logo-blue.svg",
    },
    {
      name: "UNICEF",
      logo: "https://www.unicef.org/sites/default/files/styles/logo/public/English_9.png.webp?itok=KaPGNxiU",
    },
    {
      name: "world bank",
      logo: "https://www.worldbank.org/ext/en/media_1b9d836624bdfd028dfbe9f018f3f12e52326504c.svg?width=2000&format=webply&optimize=medium",
    },
      {
      name: "adamawa house of Assembly",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Adamawa_assembly_coat.png",
    },

      {
      name: "peruvian pharmaceutical ",
      logo: "https://www.peruvianpharmaceutical.com/img/logo-peruvian.png",
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-gray-600">
            We're proud to partner with global leaders in making impactful events
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] space-x-16">
          
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 inline-block items-center justify-center h-16  w-40"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 max-w-32 object-contain opacity-60 hover:opacity-100 transition-opacity  duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
           
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
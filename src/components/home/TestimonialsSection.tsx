 import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Francesca Turner",
      title: "entiendo de trabajo.. ahora no tengo jaja mejor dejar fuera",
      content: "My solo trip with Edugalitech to Rwanda was exceptional. I had the chance to experience the local culture, visit museums, explore the breathtaking Akagera National Park and Nyungwe National Park. They also took me to see the local markets to buy coffee, tea and local artisan products. I highly recommend their services if you want to explore all of Rwanda's beauty.",
      rating: 5,
      company: "Global Health Alliance"
    },
    {
      name: "Pierre Dubois",
      title: "CEO, African Development Conference",
      content: "The professionalism and attention to detail from the VisAfrica team exceeded our expectations. The simultaneous interpretation was seamless across French, English, and Kinyarwanda.",
      rating: 5,
      company: "ADC Group"
    },
    {
      name: "Maria Santos",
      title: "Event Manager, UN Regional Meeting",
      content: "Outstanding service from planning to execution. The team's local knowledge of Africa combined with international standards made our UN regional meeting a tremendous success.",
      rating: 5,
      company: "United Nations"
    },

  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Trusted by international organizations and global companies
          </p>
        </div>

        <div className="relative px-12">
          
            <div className="-ml-4 flex flex-wrap justify-between">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-gray-700 mb-6 italic flex-grow">
                        "{testimonial.content}"
                      </blockquote>
                      
                      <div className="border-t pt-4 mt-auto">
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.title}</div>
                        <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default TestimonialsSection;

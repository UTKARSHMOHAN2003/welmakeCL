import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Testimonialdata} from '../data/Testimonaldata';
const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Testimonialdata.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Testimonialdata.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = Testimonialdata[currentIndex];

  return (
    <div className="bg-[#005486] text-white w-full overflow-hidden">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h2 className="text-7xl font-baloo  font-bold mb-2">DON'T TAKE</h2>
        <h2 className="text-7xl  font-baloo font-bold mb-2 text-[#F9D423]">OUR WORDS FOR IT</h2>
        <p className="text-xl font-baloo font-semibold mb-4">READ WHAT OUR CUSTOMERS HAVE TO SAY :</p>
        <div className="relative mb-8">
          <div className="bg-white rounded-lg p-8 text-[#005486] min-h-[200px] w-full max-w-[800px]  flex items-center justify-center shadow-lg">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl font-baloo italic mb-6">"{currentTestimonial.quote}"</p>
              <div className="flex justify-end">
              </div>
            </div>

          </div>
       
        </div>
       
        <div className="flex justify-between items-center">
          <div className="font-bold font-baloo text-xl">{currentTestimonial.author}</div>
          <div className="flex gap-4">
       
            <button 
              onClick={goToPrevious} 
              className="bg-[#C2803D] hover:bg-[#A56D34] text-white  p-4 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={44} />
            </button>
            <button 
              onClick={goToNext} 
              className="bg-[#C2803D] hover:bg-[#A56D34] text-white p-4 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight size={44} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

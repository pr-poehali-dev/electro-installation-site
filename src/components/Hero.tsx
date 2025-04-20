
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            "НАМ ЭЛЕКТРИК" - электромонтаж любой сложности
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Мы предоставляем полный спектр электромонтажных работ для жилых, 
            коммерческих и промышленных объектов с гарантией качества.
          </p>
          <div>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

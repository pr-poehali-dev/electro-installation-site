
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Home, Building2, Factory, BatteryCharging, ShieldCheck } from "lucide-react";

const serviceItems = [
  {
    icon: <Home />,
    title: "Электромонтаж в квартирах и домах",
    description: "Полный комплекс электромонтажных работ в жилых помещениях от проектирования до подключения."
  },
  {
    icon: <Building2 />,
    title: "Коммерческие объекты",
    description: "Электромонтаж в офисах, магазинах и других коммерческих помещениях с учетом специфики бизнеса."
  },
  {
    icon: <Factory />,
    title: "Промышленные объекты",
    description: "Монтаж силовых линий, установка трансформаторов и другие промышленные электромонтажные работы."
  },
  {
    icon: <Zap />,
    title: "Аварийные работы",
    description: "Оперативный выезд электрика для устранения неисправностей в электропроводке."
  },
  {
    icon: <BatteryCharging />,
    title: "Установка электрооборудования",
    description: "Монтаж розеток, выключателей, светильников, распределительных щитов и другого оборудования."
  },
  {
    icon: <ShieldCheck />,
    title: "Проверка и диагностика",
    description: "Диагностика электросетей, выявление неисправностей и проверка соответствия нормам безопасности."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Предоставляем полный спектр электромонтажных работ с соблюдением всех норм и стандартов безопасности
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

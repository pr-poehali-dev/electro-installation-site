
import { CheckCircle2 } from "lucide-react";

const advantages = [
  {
    title: "Профессиональная команда",
    description: "Наши электрики имеют профильное образование и опыт работы более 5 лет"
  },
  {
    title: "Гарантия качества",
    description: "Предоставляем гарантию на все выполненные работы от 1 года"
  },
  {
    title: "Соблюдение сроков",
    description: "Выполняем работы точно в срок, согласованный с заказчиком"
  },
  {
    title: "Официальный договор",
    description: "Работаем по официальному договору с детальной сметой"
  },
  {
    title: "Сертифицированные материалы",
    description: "Используем только качественные материалы с сертификатами"
  },
  {
    title: "Доступные цены",
    description: "Оптимальное соотношение цены и качества на рынке"
  }
];

const Advantages = () => {
  return (
    <section id="advantages" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы стремимся к совершенству в каждом проекте и гарантируем высокое качество работ
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => (
            <div key={index} className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
              <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
              <div>
                <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

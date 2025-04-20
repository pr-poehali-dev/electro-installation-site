
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку, и мы проконсультируем вас по всем вопросам электромонтажа
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6">Оставить заявку</h3>
            <form className="space-y-4">
              <div>
                <Input placeholder="Ваше имя" />
              </div>
              <div>
                <Input placeholder="Телефон" type="tel" />
              </div>
              <div>
                <Input placeholder="Email" type="email" />
              </div>
              <div>
                <Textarea placeholder="Опишите вашу задачу" rows={4} />
              </div>
              <Button className="w-full">Отправить заявку</Button>
            </form>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-medium">Адрес</h4>
                  <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-medium">Телефон</h4>
                  <p className="text-gray-600">+7 (XXX) XXX-XX-XX</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">info@namelectric.ru</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <h4 className="font-medium">Режим работы</h4>
                  <p className="text-gray-600">Пн-Пт: 9:00-19:00, Сб: 10:00-16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

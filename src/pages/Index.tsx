import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const masters = [
    {
      name: 'Анна Петрова',
      craft: 'Керамика',
      experience: '12 лет',
      description: 'Создаю уникальную посуду и декор из глины, используя традиционные техники гончарного мастерства.'
    },
    {
      name: 'Михаил Соколов',
      craft: 'Резьба по дереву',
      experience: '18 лет',
      description: 'Вдыхаю жизнь в дерево, создавая авторские скульптуры и предметы интерьера с душой.'
    },
    {
      name: 'Елена Волкова',
      craft: 'Ткачество',
      experience: '10 лет',
      description: 'Создаю текстильные изделия ручной работы: пледы, гобелены, ковры на старинном станке.'
    }
  ];

  const workshops = [
    {
      title: 'Основы гончарного мастерства',
      master: 'Анна Петрова',
      duration: '3 часа',
      price: '3500 ₽',
      date: 'Каждую субботу в 11:00'
    },
    {
      title: 'Резьба по дереву для начинающих',
      master: 'Михаил Соколов',
      duration: '4 часа',
      price: '4000 ₽',
      date: 'Каждое воскресенье в 10:00'
    },
    {
      title: 'Ткачество на раме',
      master: 'Елена Волкова',
      duration: '2.5 часа',
      price: '3000 ₽',
      date: 'Пятница и суббота в 14:00'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">Дом ремесел</div>
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`transition-colors hover:text-primary ${
                activeSection === 'home' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('masters')}
              className={`transition-colors hover:text-primary ${
                activeSection === 'masters' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Мастера
            </button>
            <button
              onClick={() => scrollToSection('workshops')}
              className={`transition-colors hover:text-primary ${
                activeSection === 'workshops' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Мастер-классы
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className={`transition-colors hover:text-primary ${
                activeSection === 'contacts' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
                Дом ремесел
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Место, где оживают традиции. Мастерская, где каждое изделие создается с душой
                и любовью к ремеслу.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('workshops')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Мастер-классы
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('masters')}
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Наши мастера
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://cdn.poehali.dev/projects/a0a9de8e-917a-40f2-9ab0-303ef1b2c050/files/b509a613-1822-490d-922b-9af3729c81e2.jpg"
                  alt="Ткацкая мастерская"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-24">
            <Card className="border-2 hover:border-primary transition-all duration-300 animate-fade-in">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Опытные мастера</h3>
                <p className="text-muted-foreground">
                  Учитесь у профессионалов с многолетним опытом в традиционных ремеслах
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 animate-fade-in delay-100">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Heart" className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">С душой</h3>
                <p className="text-muted-foreground">
                  Каждое изделие создается вручную с любовью и вниманием к деталям
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 animate-fade-in delay-200">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Традиции</h3>
                <p className="text-muted-foreground">
                  Храним и передаем древние техники ремесла новому поколению
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="masters" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Наши мастера
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Познакомьтесь с талантливыми ремесленниками, которые сохраняют и развивают традиции
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {masters.map((master, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square bg-muted">
                  <img
                    src="https://cdn.poehali.dev/projects/a0a9de8e-917a-40f2-9ab0-303ef1b2c050/files/21b6daeb-89f9-44a3-87da-00b78498099e.jpg"
                    alt={master.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-2">{master.name}</h3>
                  <div className="flex items-center gap-2 text-primary font-medium mb-2">
                    <Icon name="Sparkles" size={18} />
                    <span>{master.craft}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Icon name="Award" size={18} />
                    <span>Опыт: {master.experience}</span>
                  </div>
                  <p className="text-muted-foreground">{master.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="workshops" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Мастер-классы
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Откройте для себя мир ремесел на наших практических занятиях
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-primary transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold flex-1">{workshop.title}</h3>
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Hammer" className="text-primary" size={20} />
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="User" size={18} />
                      <span>{workshop.master}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={18} />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Calendar" size={18} />
                      <span>{workshop.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{workshop.price}</span>
                    <Button
                      onClick={() => scrollToSection('contacts')}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Контакты
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами для записи на мастер-класс или по любым вопросам
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Ремесленная, д. 15
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@domremesel.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Напишите нам</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" className="border-2" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" className="border-2" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" className="border-2" />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Сообщение"
                      rows={4}
                      className="border-2 resize-none"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Дом ремесел. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [enrollDialogOpen, setEnrollDialogOpen] = useState(false);

  const handleEnrollClick = () => {
    setEnrollDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] font-['Lato']">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.7)), url('https://cdn.poehali.dev/projects/b9dba06c-ab84-479f-b10d-e6153ed6f4e0/files/191200f2-621a-46a9-8192-e4e3255fdb0d.jpg')`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl py-20">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            На кухне с Верой
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Готовьте вкусно каждый день
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-80 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            для семьи, для себя, для радости
          </p>
          <p className="text-base md:text-lg mb-10 opacity-75 italic animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Онлайн-курс от Веры Болстрен — шефа с международным образованием
          </p>
          <Button
            onClick={handleEnrollClick}
            size="lg"
            className="bg-[#C9A961] hover:bg-[#B89851] text-[#2C1810] font-semibold text-lg px-12 py-6 rounded-none shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            Записаться на курс
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-center text-[#2C1810] mb-16">
            Для кого этот курс
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'UtensilsCrossed',
                title: 'Готовите каждый день',
                description: 'Устали от «макароны с котлетой» и хотите разнообразия',
              },
              {
                icon: 'Heart',
                title: 'Для вашей семьи',
                description: 'Хотите, чтобы дети ели с аппетитом, а муж просил добавку',
              },
              {
                icon: 'Users',
                title: 'Для гостей',
                description: 'Мечтаете накрывать столы, от которых гости будут в восторге',
              },
              {
                icon: 'Sparkles',
                title: 'Любите готовить',
                description: 'Хотите, чтобы готовка снова приносила радость',
              },
              {
                icon: 'Lightbulb',
                title: 'Ищете вдохновение',
                description: 'Нужны новые идеи и понятная система',
              },
              {
                icon: 'ChefHat',
                title: 'Хотите научиться',
                description: 'Не просто рецепты, а настоящие навыки готовки',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-[#FEFDFB]"
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-[#C9A961] bg-opacity-20 flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={32} className="text-[#C9A961]" />
                  </div>
                  <CardTitle className="font-['Playfair_Display'] text-xl text-[#2C1810]">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#5A4A3A] text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-lg text-[#5A4A3A] mt-12 italic">
            Если вы хотя бы раз говорили себе: «Я всё время готовлю, но это не вкусно…», этот курс — для вас.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#2C1810] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-center mb-16">
            Почему именно сейчас?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'Устали от рутинных рецептов?',
                answer: 'Этот курс — путешествие по кухням мира и любимым вкусам детства.',
              },
              {
                question: 'Дети отворачиваются от ужина?',
                answer: 'Вы научитесь готовить так, что будут просить ещё.',
              },
              {
                question: 'Боитесь снова испортить курицу или переварить кашу?',
                answer: 'Здесь всё разложено по полочкам — пошагово, наглядно, с объяснением, «почему так».',
              },
              {
                question: 'Хотите готовить не просто по рецепту, а "понимать" кухню?',
                answer: 'Этот курс про навыки, а не просто списки ингредиентов.',
              },
              {
                question: 'Всё ещё нет достойных курсов по шашлыкам?',
                answer: 'Здесь есть и это.',
              },
              {
                question: 'Хотите не просто готовить — а удивлять, вдохновлять, радовать?',
                answer: 'Добро пожаловать на кухню к Вере Болстрен.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#3D2A1F] p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="font-['Playfair_Display'] text-xl font-semibold mb-4 text-[#C9A961]">
                  {item.question}
                </h3>
                <p className="text-[#E8DFD6] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-center text-[#2C1810] mb-16">
            Программа курса
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-2 border-[#C9A961] shadow-xl overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/b9dba06c-ab84-479f-b10d-e6153ed6f4e0/files/262b1c1a-168c-449f-9487-486cd1b70851.jpg"
                  alt="Мясные блюда"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="bg-[#FEFDFB]">
                <CardTitle className="font-['Playfair_Display'] text-3xl text-[#2C1810] flex items-center gap-3">
                  <Icon name="Beef" size={36} className="text-[#C9A961]" />
                  Модуль: Мясо
                </CardTitle>
                <CardDescription className="text-base text-[#5A4A3A]">
                  10 теоретических уроков + 18 видео рецептов
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-[#FEFDFB]">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="meat-theory">
                    <AccordionTrigger className="text-lg font-semibold text-[#2C1810]">
                      Теоретические уроки
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-[#5A4A3A]">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 1. Как правильно покупать и хранить мясо</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 2. Общие правила приготовления мяса</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 3. Говядина</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 4. Стейк</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 5. Свинина</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 6. Курица</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 7. Баранина</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 8. Утка</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 9. Фарш</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 10. Индейка</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="meat-recipes">
                    <AccordionTrigger className="text-lg font-semibold text-[#2C1810]">
                      18 видео рецептов
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-[#5A4A3A]">
                        Практические видео со всеми видами мяса: от классических блюд до современных интерпретаций.
                        Каждый рецепт с подробными инструкциями и профессиональными секретами.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#C9A961] shadow-xl overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/b9dba06c-ab84-479f-b10d-e6153ed6f4e0/files/d2068d30-f28d-4f74-85a6-0a7ab5c70454.jpg"
                  alt="Завтраки"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="bg-[#FEFDFB]">
                <CardTitle className="font-['Playfair_Display'] text-3xl text-[#2C1810] flex items-center gap-3">
                  <Icon name="Coffee" size={36} className="text-[#C9A961]" />
                  Модуль: Завтраки
                </CardTitle>
                <CardDescription className="text-base text-[#5A4A3A]">
                  5 теоретических уроков + 14 видео рецептов
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-[#FEFDFB]">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="breakfast-theory">
                    <AccordionTrigger className="text-lg font-semibold text-[#2C1810]">
                      Теоретические уроки
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-[#5A4A3A]">
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 1. Всё о яйцах — от выбора до идеального приготовления</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 2. Всё об овсянке — от выбора хлопьев до идеальной текстуры</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 3. Всё об оладьях — от идеального теста до золотистой корочки</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 4. Тосты: от сладких до несладких</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="Check" size={20} className="text-[#C9A961] mt-1 flex-shrink-0" />
                          <span>Урок 5. Нестандартный завтрак: роллы, круассаны и пицца на хлебе</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="breakfast-recipes">
                    <AccordionTrigger className="text-lg font-semibold text-[#2C1810]">
                      14 видео рецептов
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-[#5A4A3A]">
                        Практические завтраки на любой вкус: классические, быстрые, праздничные. 
                        От яичницы-глазуньи до авторских композиций с тостами.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F1E8]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-center text-[#2C1810] mb-16">
            Формат работы
          </h2>

          <div className="space-y-8">
            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#C9A961] bg-opacity-20 flex items-center justify-center">
                    <Icon name="Video" size={24} className="text-[#C9A961]" />
                  </div>
                  <CardTitle className="font-['Playfair_Display'] text-2xl text-[#2C1810]">
                    HD-видео с деталями
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#5A4A3A] text-lg leading-relaxed">
                  Короткие и понятные видео-уроки в HD-качестве с крупными планами и акцентами на ключевых моментах: 
                  когда перевернуть мясо, как выглядит идеальное тесто и т.д.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#C9A961] bg-opacity-20 flex items-center justify-center">
                    <Icon name="Smartphone" size={24} className="text-[#C9A961]" />
                  </div>
                  <CardTitle className="font-['Playfair_Display'] text-2xl text-[#2C1810]">
                    Доступно везде
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-[#5A4A3A] text-lg leading-relaxed">
                  Платформа работает на любом устройстве, можно смотреть с телефона прямо на кухне.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button
              onClick={handleEnrollClick}
              size="lg"
              className="bg-[#C9A961] hover:bg-[#B89851] text-[#2C1810] font-semibold text-xl px-16 py-8 rounded-none shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Начать обучение
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-[#2C1810] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-['Playfair_Display'] text-2xl mb-4">На кухне с Верой</p>
          <p className="text-[#C9A961] text-sm">Онлайн-курс от Веры Болстрен</p>
        </div>
      </footer>

      {enrollDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl">
            <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#2C1810] mb-4">
              Записаться на курс
            </h3>
            <p className="text-[#5A4A3A] mb-6">
              Оставьте свои контактные данные, и мы свяжемся с вами для записи на курс.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full px-4 py-3 border border-[#C9A961] rounded focus:outline-none focus:ring-2 focus:ring-[#C9A961]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-[#C9A961] rounded focus:outline-none focus:ring-2 focus:ring-[#C9A961]"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full px-4 py-3 border border-[#C9A961] rounded focus:outline-none focus:ring-2 focus:ring-[#C9A961]"
              />
              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="flex-1 bg-[#C9A961] hover:bg-[#B89851] text-[#2C1810] font-semibold"
                >
                  Отправить
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEnrollDialogOpen(false)}
                  className="flex-1 border-[#C9A961] text-[#2C1810]"
                >
                  Отмена
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

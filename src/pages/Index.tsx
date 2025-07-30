import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [userType, setUserType] = useState('volunteer');
  const [currentView, setCurrentView] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('volunteer');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [eventFilter, setEventFilter] = useState('all');
  const [profilePanel, setProfilePanel] = useState(false);

  const events = [
    {
      id: 1,
      title: 'Памятный митинг ко Дню Победы',
      date: '9 мая 2024',
      location: 'Площадь Победы',
      volunteers: 45,
      image: '/img/5e9f2939-2e89-4f0f-9446-74aea70e9f3e.jpg',
      status: 'active'
    },
    {
      id: 2,
      title: 'Помощь ветеранам на дому',
      date: '15 мая 2024',
      location: 'г. Лосино-Петровский',
      volunteers: 23,
      image: '/img/2c59df98-4781-487b-8469-030871edeea1.jpg',
      status: 'recruiting'
    },
    {
      id: 3,
      title: 'Уборка мемориала',
      date: '22 мая 2024',
      location: 'Мемориал Славы',
      volunteers: 67,
      image: '/img/5e9f2939-2e89-4f0f-9446-74aea70e9f3e.jpg',
      status: 'completed'
    }
  ];

  const news = [
    {
      id: 1,
      title: 'Итоги празднования Дня Победы в Лосино-Петровском',
      excerpt: 'Более 200 волонтеров приняли участие в организации торжественных мероприятий...',
      date: '10 мая 2024',
      author: 'Штаб Волонтеров Победы'
    },
    {
      id: 2,
      title: 'Новый проект помощи одиноким ветеранам',
      excerpt: 'Запускаем программу регулярной поддержки ветеранов Великой Отечественной войны...',
      date: '3 мая 2024',
      author: 'Администрация штаба'
    }
  ];

  const directions = [
    {
      name: 'Забота о ветеранах',
      description: 'Помощь ветеранам ВОВ, труда и вооруженных сил',
      icon: 'Heart',
      participants: 156
    },
    {
      name: 'Благоустройство',
      description: 'Уход за памятниками и мемориалами',
      icon: 'Wrench',
      participants: 89
    },
    {
      name: 'Патриотическое воспитание',
      description: 'Работа с молодежью и образовательные программы',
      icon: 'BookOpen',
      participants: 234
    },
    {
      name: 'Историческая память',
      description: 'Сохранение исторических событий и документов',
      icon: 'Archive',
      participants: 67
    }
  ];

  // Mock user data
  const currentUser = {
    id: 1,
    name: 'Анна Петрова',
    email: 'anna.petrova@example.com',
    avatar: '',
    joinDate: '2023-03-15',
    level: 'Активный волонтер',
    totalEvents: 23,
    totalHours: 127,
    achievements: [
      { name: 'Помощник ветеранов', icon: 'Heart', description: '10+ мероприятий с ветеранами' },
      { name: 'Патриот', icon: 'Flag', description: 'Участие в 5+ патриотических акциях' },
      { name: 'Организатор', icon: 'Users', description: 'Помощь в организации мероприятий' }
    ]
  };

  // Extended events with more details for calendar
  const extendedEvents = [
    ...events,
    {
      id: 4,
      title: 'Встреча с ветеранами',
      date: '2024-08-15',
      time: '14:00',
      location: 'Дом культуры',
      volunteers: 15,
      category: 'veterans',
      status: 'recruiting',
      description: 'Торжественная встреча с ветеранами войны и труда'
    },
    {
      id: 5,
      title: 'Субботник в парке Победы',
      date: '2024-08-20',
      time: '10:00',
      location: 'Парк Победы',
      volunteers: 35,
      category: 'cleanup',
      status: 'active',
      description: 'Общегородской субботник по благоустройству'
    }
  ];

  const handleLogin = (type: string) => {
    setIsLoggedIn(true);
    setUserRole(type);
    setLoginModal(false);
  };

  const filteredEvents = extendedEvents.filter(event => {
    if (eventFilter === 'all') return true;
    return event.category === eventFilter;
  });

  // Volunteer Dashboard Component
  const VolunteerDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Всего мероприятий</CardTitle>
            <Icon name="Calendar" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{currentUser.totalEvents}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Часов волонтерства</CardTitle>
            <Icon name="Clock" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{currentUser.totalHours}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Уровень</CardTitle>
            <Icon name="Award" className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-medium text-primary">{currentUser.level}</div>
            <Progress value={75} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Мои достижения</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentUser.achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name={achievement.icon as any} className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">{achievement.name}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ближайшие мероприятия</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Calendar" className="text-primary" size={16} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{event.title}</h4>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </div>
                <Badge variant={event.status === 'active' ? 'default' : 'secondary'}>
                  {event.status === 'active' ? 'Активное' : 'Набор'}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Calendar View Component
  const CalendarView = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <h3 className="text-2xl font-bold text-secondary">Календарь мероприятий</h3>
        <Select value={eventFilter} onValueChange={setEventFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Фильтр по типу" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Все мероприятия</SelectItem>
            <SelectItem value="veterans">Помощь ветеранам</SelectItem>
            <SelectItem value="cleanup">Благоустройство</SelectItem>
            <SelectItem value="education">Образование</SelectItem>
            <SelectItem value="memorial">Памятные мероприятия</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Выберите дату</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                Мероприятия {selectedDate?.toLocaleDateString('ru-RU', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredEvents.map((event) => (
                <div key={event.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium">{event.title}</h4>
                        <Badge 
                          variant={
                            event.status === 'active' ? 'default' :
                            event.status === 'recruiting' ? 'secondary' : 'outline'
                          }
                        >
                          {event.status === 'active' ? 'Активное' :
                           event.status === 'recruiting' ? 'Набор' : 'Завершено'}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Icon name="Clock" size={14} className="mr-1" />
                          {event.time || event.date}
                        </span>
                        <span className="flex items-center">
                          <Icon name="MapPin" size={14} className="mr-1" />
                          {event.location}
                        </span>
                        <span className="flex items-center">
                          <Icon name="Users" size={14} className="mr-1" />
                          {event.volunteers} волонтеров
                        </span>
                      </div>
                      {event.description && (
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      )}
                    </div>
                    <Button size="sm" className="ml-4">
                      {event.status === 'recruiting' ? 'Записаться' : 'Подробнее'}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  if (currentView === 'dashboard' && isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b-2 border-primary">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Star" className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-secondary">Личный кабинет</h1>
                  <p className="text-sm text-muted-foreground">{currentUser.name}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" onClick={() => setCurrentView('calendar')}>
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Календарь
                </Button>
                <Button variant="outline" onClick={() => setCurrentView('home')}>
                  <Icon name="Home" size={16} className="mr-2" />
                  Главная
                </Button>
                <Sheet open={profilePanel} onOpenChange={setProfilePanel}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={currentUser.avatar} />
                        <AvatarFallback>{currentUser.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Профиль волонтера</SheetTitle>
                      <SheetDescription>
                        Управление профилем и настройками
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-6 mt-6">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={currentUser.avatar} />
                          <AvatarFallback className="text-lg">
                            {currentUser.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{currentUser.name}</h3>
                          <p className="text-sm text-muted-foreground">{currentUser.email}</p>
                          <p className="text-sm text-muted-foreground">
                            Волонтер с {new Date(currentUser.joinDate).toLocaleDateString('ru-RU')}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Settings" size={16} className="mr-2" />
                          Настройки профиля
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Bell" size={16} className="mr-2" />
                          Уведомления
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start"
                          onClick={() => {
                            setIsLoggedIn(false);
                            setCurrentView('home');
                            setProfilePanel(false);
                          }}
                        >
                          <Icon name="LogOut" size={16} className="mr-2" />
                          Выйти
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-8">
          <VolunteerDashboard />
        </div>
      </div>
    );
  }

  if (currentView === 'calendar') {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b-2 border-primary">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Star" className="text-white" size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-secondary">Волонтеры Победы</h1>
                  <p className="text-sm text-muted-foreground">г. Лосино-Петровский</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {isLoggedIn && (
                  <Button variant="outline" onClick={() => setCurrentView('dashboard')}>
                    <Icon name="User" size={16} className="mr-2" />
                    Мой кабинет
                  </Button>
                )}
                <Button variant="outline" onClick={() => setCurrentView('home')}>
                  <Icon name="Home" size={16} className="mr-2" />
                  Главная
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-8">
          <CalendarView />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-primary">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Star" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-secondary">Волонтеры Победы</h1>
                <p className="text-sm text-muted-foreground">г. Лосино-Петровский</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {isLoggedIn ? (
                <>
                  <Button variant="outline" onClick={() => setCurrentView('calendar')}>
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Календарь
                  </Button>
                  <Button onClick={() => setCurrentView('dashboard')}>
                    <Icon name="User" size={16} className="mr-2" />
                    Мой кабинет
                  </Button>
                </>
              ) : (
                <Dialog open={loginModal} onOpenChange={setLoginModal}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Icon name="LogIn" size={16} className="mr-2" />
                      Войти
                    </Button>
                  </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Вход в систему</DialogTitle>
                    <DialogDescription>
                      Выберите тип учетной записи для входа
                    </DialogDescription>
                  </DialogHeader>
                  <Tabs value={userType} onValueChange={setUserType}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="volunteer">Волонтер</TabsTrigger>
                      <TabsTrigger value="admin">Администратор</TabsTrigger>
                    </TabsList>
                    <TabsContent value="volunteer" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="volunteer-email">Email</Label>
                        <Input id="volunteer-email" type="email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="volunteer-password">Пароль</Label>
                        <Input id="volunteer-password" type="password" />
                      </div>
                      <Button className="w-full" onClick={() => handleLogin('volunteer')}>Войти как волонтер</Button>
                    </TabsContent>
                    <TabsContent value="admin" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="admin-email">Email администратора</Label>
                        <Input id="admin-email" type="email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="admin-password">Пароль</Label>
                        <Input id="admin-password" type="password" />
                      </div>
                      <Button className="w-full" onClick={() => handleLogin('admin')}>Войти как администратор</Button>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
              <Button>
                <Icon name="UserPlus" size={16} className="mr-2" />
                Стать волонтером
              </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Местный штаб Волонтеров Победы</h2>
          <p className="text-xl mb-8 opacity-90">г. Лосино-Петровский</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold">546</div>
              <div className="text-sm opacity-80">Активных волонтеров</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">89</div>
              <div className="text-sm opacity-80">Проведено мероприятий</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">1,234</div>
              <div className="text-sm opacity-80">Помогли людям</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto py-4">
            <a href="#events" className="text-secondary hover:text-primary whitespace-nowrap font-medium">
              Мероприятия
            </a>
            <a href="#news" className="text-secondary hover:text-primary whitespace-nowrap font-medium">
              Новости
            </a>
            <a href="#directions" className="text-secondary hover:text-primary whitespace-nowrap font-medium">
              Направления
            </a>
            <a href="#contacts" className="text-secondary hover:text-primary whitespace-nowrap font-medium">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Events Section */}
      <section id="events" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-secondary">Ближайшие мероприятия</h3>
            <Button variant="outline">
              <Icon name="Calendar" size={16} className="mr-2" />
              Все мероприятия
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge 
                    className={`absolute top-2 right-2 ${
                      event.status === 'active' ? 'bg-green-500' :
                      event.status === 'recruiting' ? 'bg-primary' : 'bg-gray-500'
                    }`}
                  >
                    {event.status === 'active' ? 'Активное' :
                     event.status === 'recruiting' ? 'Набор' : 'Завершено'}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="flex items-center">
                        <Icon name="Calendar" size={14} className="mr-1" />
                        {event.date}
                      </span>
                      <span className="flex items-center">
                        <Icon name="MapPin" size={14} className="mr-1" />
                        {event.location}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Users" size={14} className="mr-1" />
                      {event.volunteers} волонтеров
                    </span>
                    <Button size="sm">Участвовать</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-secondary">Новости штаба</h3>
            <Button variant="outline">
              <Icon name="Newspaper" size={16} className="mr-2" />
              Все новости
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map((article) => (
              <Card key={article.id}>
                <CardHeader>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center justify-between text-sm">
                      <span>{article.author}</span>
                      <span>{article.date}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="link" className="p-0">
                    Читать далее →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-secondary mb-8 text-center">Направления деятельности</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {directions.map((direction, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={direction.icon as any} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg">{direction.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{direction.description}</p>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary">{direction.participants}</span>
                    <p className="text-xs text-muted-foreground">участников</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-secondary mb-8 text-center">Контакты</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Адрес штаба</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium">141150, Московская область</p>
                    <p className="text-muted-foreground">г. Лосино-Петровский, ул. Ленина, д. 15</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">+7 (496) 567-12-34</p>
                    <p className="text-muted-foreground text-sm">пн-пт 9:00-18:00</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-primary" size={20} />
                  <div>
                    <p className="font-medium">losino@волонтерыпобеды.рф</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Социальные сети</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Users" size={20} className="mr-3" />
                  ВКонтакте: vk.com/volunteers_losino
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="MessageCircle" size={20} className="mr-3" />
                  Telegram: @volunteers_losino
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Instagram" size={20} className="mr-3" />
                  Instagram: @volunteers_losino
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Star" className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Волонтеры Победы</h4>
                  <p className="text-sm opacity-80">г. Лосино-Петровский</p>
                </div>
              </div>
              <p className="text-sm opacity-80">
                Местный штаб Всероссийского общественного движения 
                «Волонтеры Победы» в городском округе Лосино-Петровский
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Быстрые ссылки</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#events" className="opacity-80 hover:opacity-100">Мероприятия</a></li>
                <li><a href="#news" className="opacity-80 hover:opacity-100">Новости</a></li>
                <li><a href="#directions" className="opacity-80 hover:opacity-100">Направления</a></li>
                <li><a href="#contacts" className="opacity-80 hover:opacity-100">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Присоединяйтесь</h5>
              <p className="text-sm opacity-80 mb-4">
                Станьте частью большой команды волонтеров
              </p>
              <Button variant="outline" className="text-secondary border-white hover:bg-white">
                Стать волонтером
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Волонтеры Победы - г. Лосино-Петровский. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
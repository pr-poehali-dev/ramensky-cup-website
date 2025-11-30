import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import RegistrationForm from '@/components/RegistrationForm';
import MatchSchedule from '@/components/MatchSchedule';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const teams = {
    groupA: [
      { name: 'Торпедо', played: 3, won: 2, draw: 1, lost: 0, points: 7 },
      { name: 'Локомотив', played: 3, won: 2, draw: 0, lost: 1, points: 6 },
      { name: 'Спартак', played: 3, won: 1, draw: 1, lost: 1, points: 4 },
      { name: 'Динамо', played: 3, won: 0, draw: 0, lost: 3, points: 0 }
    ],
    groupB: [
      { name: 'Зенит', played: 3, won: 3, draw: 0, lost: 0, points: 9 },
      { name: 'ЦСКА', played: 3, won: 1, draw: 1, lost: 1, points: 4 },
      { name: 'Краснодар', played: 3, won: 1, draw: 0, lost: 2, points: 3 },
      { name: 'Ростов', played: 3, won: 0, draw: 1, lost: 2, points: 1 }
    ]
  };

  const topScorers = [
    { name: 'Александр Иванов', team: 'Торпедо', goals: 8 },
    { name: 'Дмитрий Петров', team: 'Зенит', goals: 7 },
    { name: 'Сергей Михайлов', team: 'Локомотив', goals: 6 },
    { name: 'Андрей Соколов', team: 'ЦСКА', goals: 5 },
    { name: 'Владимир Новиков', team: 'Спартак', goals: 4 }
  ];

  const merchandise = [
    { name: 'Футболка турнира', price: '2500₽', image: '⚽' },
    { name: 'Кепка с логотипом', price: '1500₽', image: '🧢' },
    { name: 'Шарф болельщика', price: '1800₽', image: '🧣' },
    { name: 'Мяч турнира', price: '3500₽', image: '⚽' }
  ];

  const documents = [
    { name: 'Регламент турнира 2025', type: 'PDF', size: '2.4 MB' },
    { name: 'Календарь игр', type: 'PDF', size: '1.1 MB' },
    { name: 'Заявочный лист', type: 'DOC', size: '0.5 MB' },
    { name: 'Положение о дисциплине', type: 'PDF', size: '1.8 MB' }
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 bg-sidebar border-r border-sidebar-border fixed h-full left-0 top-0 z-50">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gradient mb-2">РАМЕНСКИЙ</h1>
          <p className="text-sm text-muted-foreground">Кубок любителей 2025</p>
        </div>
        
        <nav className="px-3 space-y-1">
          {[
            { id: 'home', icon: 'Home', label: 'Главная' },
            { id: 'stats', icon: 'BarChart3', label: 'Статистика' },
            { id: 'merch', icon: 'ShoppingBag', label: 'Мерч' },
            { id: 'docs', icon: 'FileText', label: 'Документы' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground gold-glow'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
              }`}
            >
              <Icon name={item.icon} size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Card className="bg-sidebar-accent border-sidebar-border">
            <CardContent className="p-4">
              <p className="text-xs text-sidebar-foreground/70 mb-2">Турнир проводится при поддержке</p>
              <p className="text-sm font-bold text-gradient">Администрации Раменского района</p>
            </CardContent>
          </Card>
        </div>
      </aside>

      <main className="ml-64 flex-1 p-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-card via-card to-muted p-12 gold-border">
              <div className="relative z-10">
                <Badge className="mb-4 bg-primary text-primary-foreground">2025</Badge>
                <h1 className="text-6xl font-black mb-4 text-gradient">
                  РАМЕНСКИЙ КУБОК ЛЮБИТЕЛЕЙ
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                  Престижный турнир среди любительских команд Раменского района. 8 команд, 2 группы, один победитель.
                </p>
                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => setIsRegistrationOpen(true)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 gold-glow"
                  >
                    <Icon name="UserPlus" size={20} className="mr-2" />
                    Регистрация команды
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    onClick={() => setIsScheduleOpen(true)}
                    className="border-primary text-primary hover:bg-primary/10 font-bold"
                  >
                    Расписание игр
                  </Button>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border hover:gold-border transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">8 команд</CardTitle>
                  <CardDescription>Лучшие любительские клубы региона</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card border-border hover:gold-border transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <Icon name="Trophy" size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Призовой фонд</CardTitle>
                  <CardDescription>300 000₽ + кубки и медали</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-card border-border hover:gold-border transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                    <Icon name="Calendar" size={24} className="text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Март - Май</CardTitle>
                  <CardDescription>3 месяца напряженной борьбы</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gradient">Турнирная сетка</h2>
              <Tabs defaultValue="groups" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
                  <TabsTrigger value="groups">Групповой этап</TabsTrigger>
                  <TabsTrigger value="playoff">Плей-офф</TabsTrigger>
                </TabsList>

                <TabsContent value="groups" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <span className="text-primary">ГРУППА A</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Команда</TableHead>
                              <TableHead className="text-center">И</TableHead>
                              <TableHead className="text-center">В</TableHead>
                              <TableHead className="text-center">Н</TableHead>
                              <TableHead className="text-center">П</TableHead>
                              <TableHead className="text-center font-bold">О</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {teams.groupA.map((team, idx) => (
                              <TableRow key={idx} className={idx < 2 ? 'bg-primary/10' : ''}>
                                <TableCell className="font-medium">{team.name}</TableCell>
                                <TableCell className="text-center">{team.played}</TableCell>
                                <TableCell className="text-center">{team.won}</TableCell>
                                <TableCell className="text-center">{team.draw}</TableCell>
                                <TableCell className="text-center">{team.lost}</TableCell>
                                <TableCell className="text-center font-bold text-primary">{team.points}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>

                    <Card className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <span className="text-primary">ГРУППА B</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Команда</TableHead>
                              <TableHead className="text-center">И</TableHead>
                              <TableHead className="text-center">В</TableHead>
                              <TableHead className="text-center">Н</TableHead>
                              <TableHead className="text-center">П</TableHead>
                              <TableHead className="text-center font-bold">О</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {teams.groupB.map((team, idx) => (
                              <TableRow key={idx} className={idx < 2 ? 'bg-primary/10' : ''}>
                                <TableCell className="font-medium">{team.name}</TableCell>
                                <TableCell className="text-center">{team.played}</TableCell>
                                <TableCell className="text-center">{team.won}</TableCell>
                                <TableCell className="text-center">{team.draw}</TableCell>
                                <TableCell className="text-center">{team.lost}</TableCell>
                                <TableCell className="text-center font-bold text-primary">{team.points}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="playoff">
                  <Card className="bg-card border-border">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between max-w-4xl mx-auto">
                        <div className="space-y-8">
                          <div className="text-center p-4 bg-primary/20 rounded-lg gold-border">
                            <p className="font-bold text-lg">Торпедо</p>
                            <p className="text-sm text-muted-foreground">1 место, Группа A</p>
                          </div>
                          <div className="text-center p-4 bg-card rounded-lg border border-border">
                            <p className="font-bold text-lg">ЦСКА</p>
                            <p className="text-sm text-muted-foreground">2 место, Группа B</p>
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="w-32 h-0.5 bg-border mb-4"></div>
                          <div className="text-center p-6 bg-accent/20 rounded-xl gold-border">
                            <Icon name="Trophy" size={32} className="text-accent mx-auto mb-2" />
                            <p className="font-bold text-xl">ФИНАЛ</p>
                            <p className="text-sm text-muted-foreground">15 мая 2025</p>
                          </div>
                          <div className="w-32 h-0.5 bg-border mt-4"></div>
                        </div>

                        <div className="space-y-8">
                          <div className="text-center p-4 bg-primary/20 rounded-lg gold-border">
                            <p className="font-bold text-lg">Зенит</p>
                            <p className="text-sm text-muted-foreground">1 место, Группа B</p>
                          </div>
                          <div className="text-center p-4 bg-card rounded-lg border border-border">
                            <p className="font-bold text-lg">Локомотив</p>
                            <p className="text-sm text-muted-foreground">2 место, Группа A</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        )}

        {activeSection === 'stats' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-gradient">Статистика турнира</h1>
              <p className="text-muted-foreground">Лидеры по забитым голам и лучшие игроки</p>
            </div>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" size={24} className="text-primary" />
                  Бомбардиры турнира
                </CardTitle>
                <CardDescription>Топ-5 игроков по забитым мячам</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Место</TableHead>
                      <TableHead>Игрок</TableHead>
                      <TableHead>Команда</TableHead>
                      <TableHead className="text-right">Голы</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topScorers.map((player, idx) => (
                      <TableRow key={idx} className={idx === 0 ? 'bg-primary/20' : ''}>
                        <TableCell>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            idx === 0 ? 'bg-primary text-primary-foreground' :
                            idx === 1 ? 'bg-secondary text-secondary-foreground' :
                            idx === 2 ? 'bg-accent/50 text-accent-foreground' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {idx + 1}
                          </div>
                        </TableCell>
                        <TableCell className="font-bold">{player.name}</TableCell>
                        <TableCell className="text-muted-foreground">{player.team}</TableCell>
                        <TableCell className="text-right">
                          <Badge variant="outline" className="border-primary text-primary">
                            {player.goals} ⚽
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Всего голов</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-5xl font-bold text-gradient">124</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Всего матчей</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-5xl font-bold text-gradient">24</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Средняя посещаемость</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-5xl font-bold text-gradient">487</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'merch' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-gradient">Официальный мерч</h1>
              <p className="text-muted-foreground">Поддержи турнир - приобрети атрибутику</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {merchandise.map((item, idx) => (
                <Card key={idx} className="bg-card border-border hover:gold-border transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-6xl mb-4 text-center">{item.image}</div>
                    <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-4">{item.price}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary">
              <CardContent className="p-8 text-center">
                <Icon name="Truck" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Бесплатная доставка</h3>
                <p className="text-muted-foreground">При заказе от 3000₽ доставка по Раменскому району бесплатно</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'docs' && (
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-gradient">Документы турнира</h1>
              <p className="text-muted-foreground">Официальные документы и регламенты</p>
            </div>

            <div className="grid gap-4">
              {documents.map((doc, idx) => (
                <Card key={idx} className="bg-card border-border hover:gold-border transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon name="FileText" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{doc.name}</h3>
                        <p className="text-sm text-muted-foreground">{doc.type} • {doc.size}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-accent/10 to-secondary/10 border-accent">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Info" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Важная информация</h3>
                    <p className="text-muted-foreground mb-4">
                      Все команды обязаны ознакомиться с регламентом турнира перед началом соревнований. 
                      При возникновении вопросов обращайтесь к организаторам.
                    </p>
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Icon name="Mail" size={16} className="mr-2" />
                      Связаться с организаторами
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-primary">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-gradient">
              Регистрация команды
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base">
              Заполните форму для участия в Раменском кубке любителей 2025
            </DialogDescription>
          </DialogHeader>
          <RegistrationForm onSuccess={() => setIsRegistrationOpen(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-primary">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-gradient flex items-center gap-2">
              <Icon name="CalendarDays" size={32} className="text-primary" />
              Расписание матчей
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base">
              Полное расписание всех матчей Раменского кубка любителей 2025
            </DialogDescription>
          </DialogHeader>
          <MatchSchedule />
        </DialogContent>
      </Dialog>
    </div>
  );
}
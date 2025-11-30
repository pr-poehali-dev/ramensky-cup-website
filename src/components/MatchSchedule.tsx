import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Match {
  id: number;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  stadium: string;
  stage: string;
  group?: string;
  status?: 'upcoming' | 'live' | 'finished';
  score?: { home: number; away: number };
}

export default function MatchSchedule() {
  const matches: Match[] = [
    {
      id: 1,
      date: '15 марта',
      time: '15:00',
      homeTeam: 'Торпедо',
      awayTeam: 'Динамо',
      stadium: 'Стадион "Сатурн"',
      stage: 'Группа A',
      group: 'A',
      status: 'finished',
      score: { home: 3, away: 1 }
    },
    {
      id: 2,
      date: '15 марта',
      time: '17:30',
      homeTeam: 'Локомотив',
      awayTeam: 'Спартак',
      stadium: 'Стадион "Сатурн"',
      stage: 'Группа A',
      group: 'A',
      status: 'finished',
      score: { home: 2, away: 2 }
    },
    {
      id: 3,
      date: '16 марта',
      time: '14:00',
      homeTeam: 'Зенит',
      awayTeam: 'Ростов',
      stadium: 'Стадион "Сатурн"',
      stage: 'Группа B',
      group: 'B',
      status: 'finished',
      score: { home: 4, away: 0 }
    },
    {
      id: 4,
      date: '16 марта',
      time: '16:30',
      homeTeam: 'ЦСКА',
      awayTeam: 'Краснодар',
      stadium: 'Стадион "Сатурн"',
      stage: 'Группа B',
      group: 'B',
      status: 'finished',
      score: { home: 1, away: 1 }
    },
    {
      id: 5,
      date: '22 марта',
      time: '15:00',
      homeTeam: 'Динамо',
      awayTeam: 'Локомотив',
      stadium: 'Стадион "Сатурн"',
      stage: 'Группа A',
      group: 'A',
      status: 'finished',
      score: { home: 0, away: 2 }
    },
    {
      id: 6,
      date: '22 марта',
      time: '17:30',
      homeTeam: 'Спартак',
      awayTeam: 'Торпедо',
      stadium: 'Стадион "Сатурн"',
      stage: 'Группа A',
      group: 'A',
      status: 'finished',
      score: { home: 1, away: 1 }
    },
    {
      id: 7,
      date: '23 марта',
      time: '14:00',
      homeTeam: 'Краснодар',
      awayTeam: 'Зенит',
      stadium: 'Стадион "Сатурн"',
      stage: 'Группа B',
      group: 'B',
      status: 'finished',
      score: { home: 0, away: 3 }
    },
    {
      id: 8,
      date: '23 марта',
      time: '16:30',
      homeTeam: 'Ростов',
      awayTeam: 'ЦСКА',
      stadium: 'Стадион "Сатурн"',
      stage: 'Группа B',
      group: 'B',
      status: 'finished',
      score: { home: 1, away: 1 }
    },
    {
      id: 9,
      date: '5 апреля',
      time: '15:00',
      homeTeam: 'Торпедо',
      awayTeam: 'Локомотив',
      stadium: 'Стадион "Сатурн"',
      stage: 'Группа A',
      group: 'A',
      status: 'upcoming'
    },
    {
      id: 10,
      date: '5 апреля',
      time: '17:30',
      homeTeam: 'Динамо',
      awayTeam: 'Спартак',
      stadium: 'Стадион "Сатурн"',
      stage: 'Группа A',
      group: 'A',
      status: 'upcoming'
    },
    {
      id: 11,
      date: '6 апреля',
      time: '14:00',
      homeTeam: 'Зенит',
      awayTeam: 'ЦСКА',
      stadium: 'Стадион "Сатурн"',
      stage: 'Группа B',
      group: 'B',
      status: 'upcoming'
    },
    {
      id: 12,
      date: '6 апреля',
      time: '16:30',
      homeTeam: 'Краснодар',
      awayTeam: 'Ростов',
      stadium: 'Стадион "Сатурн"',
      stage: 'Группа B',
      group: 'B',
      status: 'upcoming'
    },
    {
      id: 13,
      date: '1 мая',
      time: '15:00',
      homeTeam: 'Торпедо',
      awayTeam: 'ЦСКА',
      stadium: 'Стадион "Сатурн"',
      stage: 'Полуфинал',
      status: 'upcoming'
    },
    {
      id: 14,
      date: '1 мая',
      time: '18:00',
      homeTeam: 'Зенит',
      awayTeam: 'Локомотив',
      stadium: 'Стадион "Сатурн"',
      stage: 'Полуфинал',
      status: 'upcoming'
    },
    {
      id: 15,
      date: '15 мая',
      time: '17:00',
      homeTeam: 'TBD',
      awayTeam: 'TBD',
      stadium: 'Стадион "Сатурн"',
      stage: 'Финал',
      status: 'upcoming'
    }
  ];

  const groupAMatches = matches.filter(m => m.group === 'A');
  const groupBMatches = matches.filter(m => m.group === 'B');
  const playoffMatches = matches.filter(m => !m.group);

  const MatchCard = ({ match }: { match: Match }) => (
    <Card className="bg-card border-border hover:gold-border transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Icon name="Calendar" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">{match.date}</span>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{match.time}</span>
          </div>
          {match.status === 'upcoming' && (
            <Badge variant="outline" className="border-accent text-accent">
              Предстоит
            </Badge>
          )}
          {match.status === 'live' && (
            <Badge className="bg-destructive text-destructive-foreground animate-pulse">
              <Icon name="Radio" size={12} className="mr-1" />
              LIVE
            </Badge>
          )}
          {match.status === 'finished' && (
            <Badge variant="outline" className="border-muted text-muted-foreground">
              Завершен
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 text-right">
            <p className="font-bold text-lg">{match.homeTeam}</p>
          </div>

          <div className="flex items-center justify-center min-w-[80px]">
            {match.score ? (
              <div className="text-3xl font-black text-gradient">
                {match.score.home} : {match.score.away}
              </div>
            ) : (
              <div className="text-2xl font-bold text-muted-foreground">VS</div>
            )}
          </div>

          <div className="flex-1">
            <p className="font-bold text-lg">{match.awayTeam}</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="MapPin" size={14} />
            <span>{match.stadium}</span>
          </div>
          <Badge variant="secondary" className="bg-secondary/20 text-secondary">
            {match.stage}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-2xl grid-cols-4">
          <TabsTrigger value="all">Все матчи</TabsTrigger>
          <TabsTrigger value="groupA">Группа A</TabsTrigger>
          <TabsTrigger value="groupB">Группа B</TabsTrigger>
          <TabsTrigger value="playoff">Плей-офф</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4 mt-6">
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </TabsContent>

        <TabsContent value="groupA" className="space-y-4 mt-6">
          {groupAMatches.length > 0 ? (
            groupAMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))
          ) : (
            <Card className="bg-card border-border">
              <CardContent className="p-12 text-center">
                <Icon name="Calendar" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Матчи группы A не найдены</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="groupB" className="space-y-4 mt-6">
          {groupBMatches.length > 0 ? (
            groupBMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))
          ) : (
            <Card className="bg-card border-border">
              <CardContent className="p-12 text-center">
                <Icon name="Calendar" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Матчи группы B не найдены</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="playoff" className="space-y-4 mt-6">
          {playoffMatches.length > 0 ? (
            playoffMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))
          ) : (
            <Card className="bg-card border-border">
              <CardContent className="p-12 text-center">
                <Icon name="Trophy" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Матчи плей-офф появятся позже</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

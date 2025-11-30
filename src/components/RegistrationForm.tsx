import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

interface RegistrationFormProps {
  onSuccess?: () => void;
}

export default function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    teamName: '',
    captainName: '',
    captainPhone: '',
    captainEmail: '',
    playersCount: '',
    experience: '',
    comment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Заявка отправлена!",
        description: `Команда "${formData.teamName}" успешно зарегистрирована. Мы свяжемся с вами в ближайшее время.`,
      });
      
      setFormData({
        teamName: '',
        captainName: '',
        captainPhone: '',
        captainEmail: '',
        playersCount: '',
        experience: '',
        comment: ''
      });

      if (onSuccess) {
        onSuccess();
      }
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="teamName" className="text-foreground">
            Название команды *
          </Label>
          <Input
            id="teamName"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            placeholder="ФК Торпедо"
            required
            className="mt-2 bg-input border-border text-foreground"
          />
        </div>

        <div>
          <Label htmlFor="captainName" className="text-foreground">
            ФИО капитана *
          </Label>
          <Input
            id="captainName"
            name="captainName"
            value={formData.captainName}
            onChange={handleChange}
            placeholder="Иванов Иван Иванович"
            required
            className="mt-2 bg-input border-border text-foreground"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="captainPhone" className="text-foreground">
              Телефон капитана *
            </Label>
            <Input
              id="captainPhone"
              name="captainPhone"
              type="tel"
              value={formData.captainPhone}
              onChange={handleChange}
              placeholder="+7 (999) 123-45-67"
              required
              className="mt-2 bg-input border-border text-foreground"
            />
          </div>

          <div>
            <Label htmlFor="captainEmail" className="text-foreground">
              Email капитана *
            </Label>
            <Input
              id="captainEmail"
              name="captainEmail"
              type="email"
              value={formData.captainEmail}
              onChange={handleChange}
              placeholder="captain@team.ru"
              required
              className="mt-2 bg-input border-border text-foreground"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="playersCount" className="text-foreground">
              Количество игроков *
            </Label>
            <Input
              id="playersCount"
              name="playersCount"
              type="number"
              min="10"
              max="20"
              value={formData.playersCount}
              onChange={handleChange}
              placeholder="15"
              required
              className="mt-2 bg-input border-border text-foreground"
            />
          </div>

          <div>
            <Label htmlFor="experience" className="text-foreground">
              Опыт команды *
            </Label>
            <Input
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="2 года"
              required
              className="mt-2 bg-input border-border text-foreground"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="comment" className="text-foreground">
            Дополнительная информация
          </Label>
          <Textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Укажите любую дополнительную информацию о команде..."
            rows={4}
            className="mt-2 bg-input border-border text-foreground resize-none"
          />
        </div>
      </div>

      <div className="flex gap-3 pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-12 gold-glow"
        >
          {isSubmitting ? (
            <>
              <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
              Отправка...
            </>
          ) : (
            <>
              <Icon name="Send" size={20} className="mr-2" />
              Отправить заявку
            </>
          )}
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        * Обязательные поля для заполнения
      </p>
    </form>
  );
}

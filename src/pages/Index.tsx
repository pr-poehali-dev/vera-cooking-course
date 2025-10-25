import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [settings, setSettings] = useState({
    leftNumber: '-30',
    centerText: 'Жара фест',
    rightNumber: '+30',
    bottomText: 'Везде снег, у нас ЖАРА!',
    phone: '575-115',
  });

  useEffect(() => {
    drawPreview();
  }, [settings]);

  const drawPreview = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1a1a2e');
    gradient.addColorStop(0.5, '#16213e');
    gradient.addColorStop(1, '#0f3460');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.globalAlpha = 0.1;
    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = '#ffffff';
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 3;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    ctx.font = 'bold 120px Arial';
    ctx.fillStyle = '#00d4ff';
    ctx.textAlign = 'left';
    ctx.fillText(settings.leftNumber, 50, 150);

    ctx.font = 'bold 140px Arial';
    ctx.fillStyle = '#ff3366';
    ctx.textAlign = 'center';
    ctx.fillText(settings.centerText, canvas.width / 2, 150);

    ctx.font = 'bold 120px Arial';
    ctx.fillStyle = '#ffaa00';
    ctx.textAlign = 'right';
    ctx.fillText(settings.rightNumber, canvas.width - 50, 150);

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, Math.PI * 2);
    ctx.fillStyle = '#ffd700';
    ctx.fill();
    ctx.strokeStyle = '#ff3366';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.font = '32px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText('🎅', canvas.width / 2, canvas.height / 2 + 15);

    ctx.font = 'bold 60px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#ff3366';
    ctx.lineWidth = 3;
    ctx.textAlign = 'center';
    ctx.strokeText(settings.bottomText, canvas.width / 2, canvas.height - 100);
    ctx.fillText(settings.bottomText, canvas.width / 2, canvas.height - 100);

    ctx.font = 'bold 48px Arial';
    ctx.fillStyle = '#ffaa00';
    ctx.textAlign = 'right';
    ctx.fillText(settings.phone, canvas.width - 50, canvas.height - 40);
  };

  const generateVideo = async () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const link = document.createElement('a');
      link.download = 'zhara-fest-preview.png';
      link.href = canvas.toDataURL();
      link.click();
      
      setIsGenerating(false);
      alert('Превью сохранено! Для создания видео используйте специализированное ПО для монтажа с указанными параметрами: 1152x576px, 30-60fps, 38.4 Mbps, длительность 5 сек.');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Генератор видеорекламы
          </h1>
          <p className="text-xl text-gray-300">Новогодние корпоративы «Жара фест»</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="bg-slate-800 border-slate-700 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Icon name="Settings" size={24} className="text-purple-400" />
                Настройки рекламы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="leftNumber" className="text-gray-200">
                  Левая цифра (температура)
                </Label>
                <Input
                  id="leftNumber"
                  value={settings.leftNumber}
                  onChange={(e) => setSettings({ ...settings, leftNumber: e.target.value })}
                  className="bg-slate-700 border-slate-600 text-white text-xl font-bold"
                  placeholder="-30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="centerText" className="text-gray-200">
                  Центральный текст (название)
                </Label>
                <Input
                  id="centerText"
                  value={settings.centerText}
                  onChange={(e) => setSettings({ ...settings, centerText: e.target.value })}
                  className="bg-slate-700 border-slate-600 text-white text-xl font-bold"
                  placeholder="Жара фест"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rightNumber" className="text-gray-200">
                  Правая цифра (температура)
                </Label>
                <Input
                  id="rightNumber"
                  value={settings.rightNumber}
                  onChange={(e) => setSettings({ ...settings, rightNumber: e.target.value })}
                  className="bg-slate-700 border-slate-600 text-white text-xl font-bold"
                  placeholder="+30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bottomText" className="text-gray-200">
                  Нижний текст (слоган)
                </Label>
                <Input
                  id="bottomText"
                  value={settings.bottomText}
                  onChange={(e) => setSettings({ ...settings, bottomText: e.target.value })}
                  className="bg-slate-700 border-slate-600 text-white text-xl font-bold"
                  placeholder="Везде снег, у нас ЖАРА!"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-200">
                  Телефон
                </Label>
                <Input
                  id="phone"
                  value={settings.phone}
                  onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                  className="bg-slate-700 border-slate-600 text-white text-xl font-bold"
                  placeholder="575-115"
                />
              </div>

              <div className="pt-4 space-y-4">
                <Button
                  onClick={generateVideo}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg py-6"
                >
                  {isGenerating ? (
                    <>
                      <Icon name="Loader2" size={24} className="mr-2 animate-spin" />
                      Генерация...
                    </>
                  ) : (
                    <>
                      <Icon name="Download" size={24} className="mr-2" />
                      Скачать превью
                    </>
                  )}
                </Button>
                
                <div className="bg-slate-700 p-4 rounded-lg text-sm text-gray-300">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <Icon name="Info" size={16} className="text-blue-400" />
                    Технические параметры
                  </h3>
                  <ul className="space-y-1 text-xs">
                    <li>• Разрешение: 1152 × 576 px (6м × 3м)</li>
                    <li>• Частота кадров: 30-60 fps</li>
                    <li>• Битрейт: 38.4 Mbps</li>
                    <li>• Длительность: 5 секунд</li>
                    <li>• Яркость: 6500 кд/м²</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <Icon name="Eye" size={24} className="text-blue-400" />
                Предпросмотр
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-black rounded-lg p-4 shadow-inner">
                <canvas
                  ref={canvasRef}
                  width={1152}
                  height={576}
                  className="w-full h-auto rounded border-2 border-slate-600"
                />
              </div>
              <p className="text-center text-gray-400 text-sm mt-4">
                Пропорции: 2:1 (6м × 3м)
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 bg-gradient-to-r from-orange-900/30 to-red-900/30 border-orange-600/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Icon name="AlertTriangle" size={32} className="text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-orange-200">Важная информация</h3>
                <p className="text-gray-300 leading-relaxed">
                  Это приложение генерирует статичное превью рекламы. Для создания финального видео 
                  с анимацией используйте программы видеомонтажа (Adobe Premiere Pro, DaVinci Resolve, Final Cut Pro) 
                  с указанными техническими параметрами. Рекомендуется добавить анимацию появления текста, 
                  блеск диско-шара и эффект падающего снега.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

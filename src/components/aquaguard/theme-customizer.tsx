'use client';

import { useTheme } from 'next-themes';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Moon, Sun } from 'lucide-react';
import { themes } from '@/lib/themes';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function ThemeCustomizer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    const [mode, color] = newTheme.split('-');
    const newColor = themes.find((t) => t.name === color);

    if (newColor) {
      const root = document.documentElement;
      root.style.setProperty('--primary', newColor.activeColor[mode as 'light' | 'dark']);
      root.style.setProperty('--accent', newColor.accentColor[mode as 'light' | 'dark']);
    }
    setTheme(mode);
  };
  
  // Extract current mode and color from theme string, e.g., "light-blue"
  const [currentMode, currentColorName] = theme?.split('-') || ['light', 'zinc'];

  if (!mounted) {
    return null; 
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tema de la Interfaz</CardTitle>
        <CardDescription>Selecciona un tema o personaliza los colores.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Modo</Label>
          <RadioGroup
            value={currentMode}
            onValueChange={(newMode) => handleThemeChange(`${newMode}-${currentColorName}`)}
            className="grid max-w-md grid-cols-2 gap-4"
          >
            <div>
              <RadioGroupItem value="light" id="light" className="peer sr-only" />
              <Label
                htmlFor="light"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Sun className="mb-2 size-6" />
                Claro
              </Label>
            </div>
            <div>
              <RadioGroupItem value="dark" id="dark" className="peer sr-only" />
              <Label
                htmlFor="dark"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Moon className="mb-2 size-6" />
                Oscuro
              </Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-2">
          <Label>Color</Label>
          <div className="grid grid-cols-3 gap-2 md:grid-cols-5">
            {themes.map((colorTheme) => {
              const isActive = currentColorName === colorTheme.name;
              return (
                <div key={colorTheme.name}>
                  <button
                    onClick={() => handleThemeChange(`${currentMode}-${colorTheme.name}`)}
                    className={cn(
                      'flex w-full items-center justify-center rounded-md border-2 p-3',
                       isActive ? 'border-primary' : 'border-transparent'
                    )}
                  >
                    <span
                      className="flex size-8 items-center justify-center rounded-full"
                      style={{ backgroundColor: `hsl(${colorTheme.activeColor[currentMode as 'light' | 'dark']})` }}
                    ></span>
                  </button>
                  <p className="text-center text-xs mt-1 capitalize text-muted-foreground">{colorTheme.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

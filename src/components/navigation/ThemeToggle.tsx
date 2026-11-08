import { useTranslation } from 'react-i18next';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Check, Monitor, Moon, Sun } from 'lucide-react';
import { useAppStore, type Theme } from '@/store/useAppStore';
import { useIsDark } from '@/hooks/useTheme';
import { cn } from '@/utils/cn';

export function ThemeToggle({ className }: { className?: string }) {
  const { t } = useTranslation('common');
  const theme = useAppStore((s) => s.theme);
  const setTheme = useAppStore((s) => s.setTheme);
  const dark = useIsDark();
  const items: { id: Theme; icon: typeof Sun }[] = [
    { id: 'light', icon: Sun },
    { id: 'dark', icon: Moon },
    { id: 'system', icon: Monitor },
  ];
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger
        aria-label={t('theme.toggle')}
        title={t('theme.toggle')}
        className={cn('inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-secondary', className)}
      >
        {dark ? <Moon className="h-[18px] w-[18px]" /> : <Sun className="h-[18px] w-[18px]" />}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-[1100] min-w-[9rem] rounded-xl border bg-popover p-1 text-popover-foreground shadow-xl animate-in fade-in-0 zoom-in-95"
        >
          <DropdownMenu.Label className="px-2.5 py-1.5 text-xs font-semibold text-muted-foreground">{t('theme.label')}</DropdownMenu.Label>
          {items.map(({ id, icon: I }) => (
            <DropdownMenu.Item
              key={id}
              onSelect={() => setTheme(id)}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-2 text-sm outline-none data-[highlighted]:bg-secondary"
            >
              <I className="h-4 w-4" />
              <span className="flex-1">{t(`theme.${id}`)}</span>
              {theme === id && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

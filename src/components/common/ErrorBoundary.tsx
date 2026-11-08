import { Component, type ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import i18n from '@/i18n';

interface Props {
  children: ReactNode;
  /** Changing this key resets the boundary (e.g. on route change). */
  resetKey?: string;
}
interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error('[NatureIndex]', error);
  }

  componentDidUpdate(prev: Props) {
    if (prev.resetKey !== this.props.resetKey && this.state.error) this.setState({ error: null });
  }

  render() {
    if (!this.state.error) return this.props.children;
    const t = i18n.getFixedT(i18n.language, 'common');
    return (
      <div className="container flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="h-6 w-6" />
        </div>
        <h1 className="font-display text-2xl font-bold">{t('states.errorTitle')}</h1>
        <p className="mt-2 max-w-md text-muted-foreground">{t('states.errorBody')}</p>
        <div className="mt-6 flex gap-3">
          <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground" onClick={() => this.setState({ error: null })}>
            {t('actions.retry')}
          </button>
          <a className="rounded-full border px-5 py-2.5 text-sm font-semibold" href="/">
            {t('actions.goHome')}
          </a>
        </div>
      </div>
    );
  }
}

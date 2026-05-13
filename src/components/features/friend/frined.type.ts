import { ActionResult } from '@/lib/actions/action.type';

export type ActionButtonProps = {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'destructive';
  onClickAction: (targetUserId: string) => Promise<ActionResult>;
  targetUserId: string;
};
import { api } from '@/lib/api/client';

const sendRequest = (targetUserId: string) =>
  api.post<void>('/friends/requests', { recipientId: targetUserId });

const cancelRequest = (targetUserId: string) =>
  api.delete<void>(`/friends/requests/${targetUserId}`);

const acceptRequest = (targetUserId: string) =>
  api.post<void>(`/friends/requests/${targetUserId}/accept`);

const rejectRequest = (targetUserId: string) =>
  api.post<void>(`/friends/requests/${targetUserId}/reject`);

const unfriend = (targetUserId: string) =>
  api.delete<void>(`/friends/${targetUserId}`);

export const friendService = {
  sendRequest,
  cancelRequest,
  acceptRequest,
  rejectRequest,
  unfriend,
};
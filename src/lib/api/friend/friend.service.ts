import { api } from '@/lib/api/client';
import { User } from '../user/user.type';

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

const getFriends = () => api.get<User[]>('/friends')

const getIncomingRequest = () => api.get<User[]>('/friends/requests/incoming');
const getOutgoingRequest = () => api.get<User[]>('/friends/requests/outgoing');

export const friendService = {
  sendRequest,
  cancelRequest,
  acceptRequest,
  rejectRequest,
  unfriend,
  getFriends,
  getIncomingRequest,
  getOutgoingRequest
};
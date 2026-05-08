export type Gender = "MALE" | "FEMALE" | "OTHER";

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dob: string;
  gender: Gender;
  avatarUrl: string | null;
  coverUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UserWithFriends = User & { friends: User[] };

export type RelationshipStatus =
  | "NONE"
  | "FRIEND"
  | "SELF"
  | "REQUEST_SENT"
  | "REQUEST_RECEIVED";

export type GetUserProfileReponse = {
  user: UserWithFriends;
  relationshipStatus: RelationshipStatus;
};

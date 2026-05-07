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

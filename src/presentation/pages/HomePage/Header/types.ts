export interface HeaderData {
  profile: ProfileData;
}

export interface HeaderProps extends HeaderData { };

export interface ProfileData {
  name: string;
  avatar: string;

  globalProgress: number;
  verified: boolean;
  profilePictureIsVerified: boolean;
  parentsVerified: boolean;
  litterVerified: boolean;
}

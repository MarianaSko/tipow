export interface ProfileInfoData {
  profile: ProfileData;
}

export interface ProfileInfoProps extends ProfileInfoData { };

export interface ProfileData {
  name: string;
  avatar: string;
  globalProgress: number;
  verified: boolean;
  profilePictureIsVerified: boolean;
  parentsVerified: boolean;
  litterVerified: boolean;
}

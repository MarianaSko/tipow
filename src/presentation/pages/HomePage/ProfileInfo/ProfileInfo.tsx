import React, { FC, useEffect, useState } from 'react'
import { DetailsItem, LeftSide, Msg, Percent, Percentage, ProfileDetailsWrapper, ProfileInfoWrapper, ProfileSuccessWrapper, ProgressStep, Progresswrapper, RightSide, SuccessMsg, Text } from './ProfileInfo.styled'
import "react-step-progress-bar/styles.css";
import { ProfileInfoProps } from './types';
import "react-step-progress-bar/styles.css";
import { nanoid } from 'nanoid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ProfileInfo: FC<ProfileInfoProps> = ({ profile }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isPicture, setIsPicture] = useState(false);
  const [isParents, setIsParents] = useState(false);
  const [isLitter, setIsLitter] = useState(false);

  useEffect(() => {
    if (profile.verified) {
      setIsVerified(true);
    }
    if (profile.profilePictureIsVerified) {
      setIsPicture(true);
    }
    if (profile.litterVerified) {
      setIsLitter(true);
    }
    if (profile.parentsVerified) {
      setIsParents(true);
    }
  },[profile.litterVerified, profile.parentsVerified, profile.profilePictureIsVerified, profile.verified])

  const profileCompletance = () => {
    const progress = profile.globalProgress;
    if (progress <= 10 && progress <=20) {
      return [1]
    }
     if (progress > 20 && progress <= 40) {
      return [1,2]
    }
      if (progress > 40 && progress <= 60) {
      return [1,2,3]
    }
      if (progress > 60 && progress <= 80) {
      return [1,2,3,4]
    }
      if (progress > 80 && progress <= 100) {
      return [1,2,3,4,5]
    }
  }
  const progressCount = profileCompletance();
  console.log(profile);
  
  return (
    <>
      <ProfileInfoWrapper>
        <ProfileSuccessWrapper>
          <LeftSide>
            <SuccessMsg>You successfully complete your profile at Tipaw</SuccessMsg>
            <Msg>Now you can use Tipaw for 100% 🎉</Msg>
          </LeftSide>
          <RightSide>
            <Percentage>
              <Text>Profile completed</Text>
              <Percent>{ profile.globalProgress }%</Percent>
            </Percentage>
            <Progresswrapper>{progressCount?.map((item) => <ProgressStep key={nanoid()}></ProgressStep>)}</Progresswrapper>
          </RightSide>
        </ProfileSuccessWrapper>
      <ProfileDetailsWrapper>
          {isVerified && <DetailsItem><CheckCircleIcon sx={{color: "#03C9A9"}}></CheckCircleIcon><h3>Verification</h3><p>You verified your account</p></DetailsItem>}
          {isPicture && <DetailsItem><CheckCircleIcon sx={{color: "#03C9A9"}}></CheckCircleIcon><h3>Profile picture</h3><p>You added your profile picture</p></DetailsItem>}
          {isParents && <DetailsItem><CheckCircleIcon sx={{color: "#03C9A9"}}></CheckCircleIcon><h3>Parents</h3><p>You added the parents</p></DetailsItem>}
          {isLitter&&<DetailsItem><CheckCircleIcon sx={{color: "#03C9A9"}}></CheckCircleIcon><h3>Litter</h3><p>Your created the litter</p></DetailsItem>}
      </ProfileDetailsWrapper>
      </ProfileInfoWrapper>
    </>
  )
}

export default ProfileInfo
import React, { FC } from "react";
import { HomePageProps } from "./types";
import * as Styled from "./styled";
import { FaCheck } from "react-icons/fa";
import { useTheme } from "@emotion/react";
import Header from "./Header/Header";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Container from "./Container/Container";
import Announcements from "./Announcements/Announcements";


export * from "./types";

/*
 Feel free to change this page however you wish
 You can divide this page into smaller components if you wish to

*/
export const HomePage: FC<HomePageProps> = (props) => {
  const { announcements, profile } = props;
  const theme = useTheme();

  return (
    <Styled.PageWrapper>
      <Header profile={profile}></Header>
     <Container>
       <ProfileInfo profile={profile}></ProfileInfo>
     </Container>
      {/* Profile Completed {profile.globalProgress}% Verification */}
      {/* <Styled.ProgressContainer>
        <Styled.ProgressItem>
          Verification : <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          Profile picture : <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          Parents : <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          Litter : <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
        <Styled.ProgressItem>
          <FaCheck color={theme.color.green.default} />
        </Styled.ProgressItem>
      </Styled.ProgressContainer> */}
      <Styled.AnnouncementsContainer>
          <Container>
        <Announcements announcements = {announcements}></Announcements>
        </Container>
        {/* Announcements from TIPAW
        {announcements.map((announcement, index) => (
          <Styled.AnnouncementsContainer key={announcement.id}>
            <div>{announcement.title}</div>
            <div>{announcement.content}</div>
            <div>{announcement.date}</div>
          </Styled.AnnouncementsContainer>
        ))} */}
      </Styled.AnnouncementsContainer>
    </Styled.PageWrapper>
  );
};

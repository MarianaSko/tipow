import  { FC } from "react";
import { HomePageProps } from "./types";
import * as Styled from "./styled";
import Header from "./Header/Header";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Container from "./Container/Container";
import Announcements from "./Announcements/Announcements";

export * from "./types";

export const HomePage: FC<HomePageProps> = (props) => {
  const { announcements, profile } = props;

  return (
    <Styled.PageWrapper>
      <Header profile={profile}></Header>
     <Container>
       <ProfileInfo profile={profile}></ProfileInfo>
     </Container>
      <Styled.AnnouncementsContainer>
          <Container>
        <Announcements announcements = {announcements}></Announcements>
        </Container>
      </Styled.AnnouncementsContainer>
    </Styled.PageWrapper>
  );
};

import { HomePage } from "../../../presentation/pages";
import { FC } from "react";
import { useGetAnnouncements } from "./api/useGetAnnouncements";
import { useGetProfile } from "./api/useGetProfile";


const HomePageController: FC = () => {
  const { announcements } = useGetAnnouncements();
  const { profile } = useGetProfile();

  return <HomePage announcements={announcements} profile={profile}/>;
};

export default HomePageController;

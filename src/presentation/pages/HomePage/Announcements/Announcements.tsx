import { FC, useState } from 'react'
import { ArrowBtn,Content,DateContainer,Description,Dot, FormattedDate, HeadingContainer, OpenedContainer, TopWrapper, Wrapper } from './Annoucements.styled'
import { AnnouncementsProps } from './types'
import { nanoid } from 'nanoid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { IconContext } from 'react-icons';


const Announcements: FC<AnnouncementsProps> = ({ announcements }) => {
    const [isOpen, setIsOpen] = useState(false);

    const getFormattedDate = (date:string) => {
        const dateString = date;
        const dateObj = new Date(dateString);
        const day = dateObj.getDate();
        const monthIndex = dateObj.getMonth();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthName = months[monthIndex];
        const formattedDate = day + ' ' + monthName;

        return formattedDate;
    }
    
     const handleArrowClick = () => {
            setIsOpen(!isOpen);
        }
    
  return (
    <Wrapper>
          <HeadingContainer>
              <h2>Announcements from TIPAW</h2>
              <Dot/>
          </HeadingContainer>
          {announcements.map((announcement) => <div key={nanoid()}>
              <TopWrapper>
                  <h3>{announcement.title}</h3>
                  <ArrowBtn
                              onClick={handleArrowClick}>
                              <IconContext.Provider value={{ color: " #fff", size: "24px" }}>
                                  {!isOpen?<IoIosArrowDown  />:<IoIosArrowUp/>}
                              </IconContext.Provider>
                          </ArrowBtn>
              </TopWrapper>
              <Description>
                  {isOpen&&<OpenedContainer>   <DateContainer>
                      <CalendarMonthIcon sx={{ color: "#5acee8" ,width:"16px", height: "16px" }}></CalendarMonthIcon>
                      <FormattedDate>{getFormattedDate(announcement.date)}</FormattedDate>
                  </DateContainer>
                  <Content>{announcement.content}</Content></OpenedContainer>}
              </Description>
          </div>)}
          
    </Wrapper>
  )
}

export default Announcements
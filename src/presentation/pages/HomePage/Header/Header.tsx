import React, { FC, useState } from 'react'
import { ArrowBtn, Avatar, HeaderLogo,HeaderContainer, LangBtn, LangBtnActive, Dot, Languages, RightContainer, UserContainer  } from './Header.styled'
import { HeaderProps } from "./types";
import { HiOutlineBell } from "react-icons/hi";
import { IconContext } from "react-icons";
import { useTheme } from '@emotion/react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";




// export * from "../types";

const Header: FC<HeaderProps> = ({ profile }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isLangFr, setisLangFr] = useState(true)
    const theme = useTheme();
   

    const handleArrowClick=()=> {
        setIsDropdownOpen(!isDropdownOpen);
    }

  return (
      <HeaderContainer>
              <HeaderLogo>My Tipaw</HeaderLogo>
          <RightContainer>
              <Languages>
                  {isLangFr?<>
                      <LangBtnActive onClick={() => setisLangFr(true)}>Fr</LangBtnActive>
                      <Dot/>
                      <LangBtn onClick={()=>setisLangFr(false)}>Nl</LangBtn>
                  </>:<>
                          <LangBtn onClick={() => setisLangFr(true)}>Fr</LangBtn>
                           <Dot/>
                      <LangBtnActive onClick={()=>setisLangFr(false)}>Nl</LangBtnActive>
                  </>}
              </Languages>
    
                  <IconContext.Provider value={{color: theme.color.medium.shade, size:"24px" }}>
                      <HiOutlineBell ></HiOutlineBell>
                  </IconContext.Provider>
                  <UserContainer>
                      <Avatar src={profile.avatar} width="40px" height="40px" alt="avatar" />
                      <p>{profile.name}</p>
                      <ArrowBtn
                          onClick={handleArrowClick}>
                          <IconContext.Provider value={{ color: theme.color.medium.shade, size: "24px" }}>
                              {!isDropdownOpen?<IoIosArrowDown  />:<IoIosArrowUp/>}
                          </IconContext.Provider>
                      </ArrowBtn>
                  </UserContainer>
              </RightContainer>
      </HeaderContainer>
      
  )
}

export default Header
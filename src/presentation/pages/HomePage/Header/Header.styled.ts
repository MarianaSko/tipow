import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
background-color: #fff;
padding: 12px 24px;
margin-bottom: 40px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 1px 0 0 #f0f0f0;

p{
font-weight: 600;
font-size: 14px;
line-height: 1.71;
color: ${props => props.theme.color.medium.shade};
}

 @media (max-width: 540px) {
 margin-bottom: 20px;
  }

   @media (max-width: 420px) {
   margin-bottom: 0;
  }`

export const HeaderLogo = styled.a`
font-weight: 600;
font-size: 18px;
line-height: 1.33;
color: #20253f;`

export const Avatar = styled.img`
border-radius:50%;`

export const ArrowBtn = styled.button`
border:none;
background: transparent;`

export const LangBtn = styled.button`
padding: 8px;
background: transparent;
border: none;
font-family: inherit;
font-weight: 700;
font-size: 14px;
line-height: 1.14;
color: ${props => props.theme.color.medium.shade};

  @media (max-width: 520px) {
font-size: 10px;
  }

  @media (max-width:420px){
    padding: 2px;
  }`

export const LangBtnActive = styled.button`
padding: 8px;
background: transparent;
border: none;
font-family: inherit;
font-weight: 700;
font-size: 14px;
line-height: 1.14;
color: ${props => props.theme.color.blue.default};

  @media (max-width: 520px) {
font-size: 10px;
  }

   @media (max-width:420px){
    padding: 2px;
  }`

export const Dot = styled.div`
width: 4px;
height: 4px;
background-color:#81dbef;
border-radius:100%`

export const Languages = styled.div`
display:flex;
gap: 4px;
align-items:center;
justify-content:center;

  @media (max-width: 560px) {
  gap:0;
  }`

export const RightContainer = styled.div`
display: flex;
gap: 16px;
align-items: center;
justify-content: center;

  @media (max-width: 560px) {
  gap:8px;
  }
  @media (max-width: 420px) {
  gap:12px;
  }`

export const UserContainer = styled.div`
padding: 4px;
display:flex;
gap: 8px;
align-items: center;

  @media (max-width: 520px) {
  gap:0;
  }`
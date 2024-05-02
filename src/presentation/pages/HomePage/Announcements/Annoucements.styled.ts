import styled from "@emotion/styled";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 40px;
border-radius:4px;
border: 1px solid ${props => props.theme.color.light.shadeLighter};
background-color: #fff;
`
export const Dot = styled.div`
width: 10px;
height: 10px;
border-radius:100%;
background-color: ${props => props.theme.color.red.default};
`

export const HeadingContainer = styled.div`
display:flex;
align-items:center;
gap: 16px;
margin-bottom: 32px;
h2{
font-weight: 600;
font-size: 18px;
line-height: 1.33;
color: ${props => props.theme.color.blue.default};
}
`

export const AnnouncementItem = styled.div`

`

export const FormattedDate = styled.p`
font-weight: 400;
font-size: 7px;
line-height: 2.29;
 color: ${props => props.theme.color.blue.default};
`

export const ArrowBtn = styled.button`
border:none;
background: transparent;
`
export const TopWrapper = styled.div`
/* width:740px; */
padding: 12px 24px;
border-radius: 8px 8px 0 0;
display: flex;
justify-content:space-between;
background-color: ${props => props.theme.color.blue.default};
h3{
font-weight: 700;
font-size: 16px;
line-height: 1.5;
color: #fff;
}
`

export const Description = styled.div`
border: 1px solid ${props => props.theme.color.blue.default};
border-radius:  0 0 8px 8px;
/* padding:16px 24px; */
`

export const Content = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 1.5;
color: ${props => props.theme.color.medium.shade};`

export const DateContainer = styled.div`
display:flex;
gap: 8px;
margin-bottom: 16px;`

export const OpenedContainer = styled.div`
padding:16px 24px`
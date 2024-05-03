import styled from "@emotion/styled";

export const ProfileInfoWrapper = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 40px;
 max-width:  1152px;
border-radius:4px;
outline: 1px solid ${props => props.theme.color.light.shadeLighter};
margin-bottom: 48px;
background-color: #fff;

 @media (max-width: 540px) {
   padding: 24px;
   margin-bottom: 20px;
  }

   @media (max-width: 420px) {
   margin-bottom: 0px;
  }`

export const SuccessMsg = styled.p`
margin-bottom: 16px;
font-weight: 600;
font-size: 18px;
line-height: 1.33;
color: ${props => props.theme.color.blue.default};`

export const Msg = styled.p`
font-size: 14px;
line-height: 1.71;
color: #4a4f5e;`

export const ProgressStep = styled.div`
border-radius: 2px;
width: 64px;
height: 8px;
background-color:${props => props.theme.color.green.default}`

export const Progresswrapper = styled.div`
display:flex;
gap: 4px;`

export const Percentage = styled.div`
display:flex;
justify-content:space-between;
margin-bottom: 32px;`

export const Text = styled.p`
font-weight: 600;
font-size: 18px;
line-height: 1.33;
color: #33384f;`

export const Percent = styled.p`
font-weight: 700;
font-size: 14px;
line-height: 1.71;
text-align: right;
color: ${props => props.theme.color.green.default};`

export const ProfileDetailsWrapper = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 32px;

 @media (max-width: 540px) {
 gap:16px;
  }`

export const DetailsItem = styled.div`
box-sizing: border-box;
width: 244px;
box-shadow: -1px 3px 16px 0 rgba(149, 157, 165, 0.19);
background: #fff;
padding: 24px;
display: flex;
flex-direction: column;
justify-content: flex-start;

@media (max-width: 648px) {
   padding: 12px;
   width: 200px;
  }

  @media (max-width: 560px) {
   padding: 24px;
   width: 260px;
  }

h3{
font-weight: 700;
font-size: 14px;
line-height: 1.71;
color: #33384f;
margin-bottom: 8px;
margin-top: 16px;
}

p{
font-weight: 400;
font-size: 12px;
line-height: 1.67;
color: ${props => props.theme.color.medium.shade};
}`

export const ProfileSuccessWrapper = styled.div`
display:flex;
justify-content: space-between;
padding-bottom: 24px;
margin-bottom: 40px;
border-bottom:1px solid ${props => props.theme.color.light.shadeLighter};

 @media (max-width: 900px) {
   flex-direction: column;
  }
  
   @media (max-width: 540px) {
   margin-bottom: 20px;
  }
`
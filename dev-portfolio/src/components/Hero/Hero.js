import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import styled from 'styled-components';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        {' '}
        Hello There <br /> I am Esteban
      </SectionTitle>
      <SectionText>
        Full Stack developer specialized in JavaScript across both front and
        back end. Experience building complete web applications.
      </SectionText>
      <Button onClick={() => (window.location = '#about')}>About me</Button>
    </LeftSection>
  </Section>
);

export default Hero;




export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

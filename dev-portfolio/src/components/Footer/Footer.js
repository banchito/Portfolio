import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { socialUrls } from '../../constants/constans';

import styled from 'styled-components';

const Footer = () => (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:contact">esteban.paris2@gmail.com</LinkItem>
      </LinkColumn>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons
            href={socialUrls.github}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="github"
          >
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href={socialUrls.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="linkedin"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </LinkList>
  </FooterWrapper>
);

export default Footer;

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;

export const LinkItem = styled.a`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  left: 0;
  &:hover {
    color: #fff;
    left: 6px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 16px;
    line-height: 28px;
    display: flex;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 8px;
    line-height: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: flex-end;
  @media ${(props) => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.md} {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;

export const LinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(2, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0 28px;
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 32px 0 16px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    padding: 32px 0 16px;
    gap: 16px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    padding: 32px 4px 16px;
    gap: 5px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`;
export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 16px;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

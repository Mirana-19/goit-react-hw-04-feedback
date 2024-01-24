import { SectionStyled, Title } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <SectionStyled>
      <Title>{title}</Title>
      {children}
    </SectionStyled>
  );
};

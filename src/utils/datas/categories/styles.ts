import styled, { css } from 'styled-components';

import { Elderly, TheaterComedy, FamilyRestroom, Balance, School, SportsSoccer, Park, Pets, HealthAndSafety, EmojiObjects } from '@mui/icons-material';

const iconBaseStyles = css`
  fill: ${({ theme }) => theme.palette.common.white};
  width: 20px;
  height: 20px;
`;

export const SupportForElderlyIcon = styled(Elderly)`
  ${iconBaseStyles}
`;

export const ArtsAndCultureIcon = styled(TheaterComedy)`
  ${iconBaseStyles}
`;

export const ChildAndTeenagerIcon = styled(FamilyRestroom)`
  ${iconBaseStyles}
`;

export const HumanRightsIcon = styled(Balance)`
  ${iconBaseStyles}
`;

export const EducationIcon = styled(School)`
  ${iconBaseStyles}
`;

export const SportsIcon = styled(SportsSoccer)`
  ${iconBaseStyles}
`;

export const EnvironmentIcon = styled(Park)`
  ${iconBaseStyles}
`;

export const AnimalProtectionIcon = styled(Pets)`
  ${iconBaseStyles}
`;

export const HealthIcon = styled(HealthAndSafety)`
  ${iconBaseStyles}
`;

export const TechnologyAndInovationIcon = styled(EmojiObjects)`
  ${iconBaseStyles}
`;

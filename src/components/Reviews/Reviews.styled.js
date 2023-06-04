import styled from 'styled-components';

export const StyledReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: baseline;
`;

export const StyledReviewItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const StyledReviewContainer = styled.div`
  width: 300px;
`;

export const StyledReviewAuthorName = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const StyledReviewPost = styled.p`
  font-size: 16px;
`;

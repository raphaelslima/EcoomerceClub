import styled from 'styled-components'

export const CategoryItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: red;
  gap: 15px; /* grid-gap virou gap */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: color;
`

export const CategoryName = styled.div`
  color: #f8f9fa;
  text-align: center;
  background: rgba(233, 236, 239, 0.45);
  padding: 10px 30px;
  border-radius: 10px;
  border: 1px solid #212529;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background: rgba(233, 236, 239, 0.55);
  }

  p:nth-child(1) {
    font-weight: 600;
  }
`

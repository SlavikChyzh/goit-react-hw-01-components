import styled from 'styled-components';

const StatisticSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  width: 300px;
  margin: 0 auto;
  border-radius: 20px;
  padding: 0;
`;

const StatisticTitle = styled.h4`
  background-color: aqua;
  width: 100%;
  height: 70px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const StatisticList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`;

const StatisticItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  align-items: center;
  padding-bottom: 15px;
`;

export { StatisticTitle, StatisticSection, StatisticList, StatisticItem };

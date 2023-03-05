import PropTypes from 'prop-types';

import {
  StatisticTitle,
  StatisticSection,
  StatisticList,
  StatisticItem 
} from './Statistics.styled';

export const Statistics = ({ statisticsData }) => (
  <StatisticSection className="statistics">
    <StatisticTitle className="title">Upload stats</StatisticTitle>
    <StatisticList className="stat-list">
      {statisticsData.map((statisticItem) => (
        <StatisticItem className="item" key={statisticItem.id}>
          <span className="label">{statisticItem.label}</span>
          <span className="percentage">{statisticItem.percentage}</span>
        </StatisticItem>
      ))}
    </StatisticList>
  </StatisticSection>
)

Statistics.propTypes = {
  statisticsData: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    percentage: PropTypes.number
  }))
}
import PropTypes from 'prop-types';

import {
  StatisticTitle,
  StatisticSection,
  StatisticList,
  StatisticItem 
} from './Statistics.styled';

export const Statistics = ({ statisticsData, title }) => (
  <StatisticSection className="statistics">
    {title?<StatisticTitle className="title">{title}</StatisticTitle> : ''}
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
  title: PropTypes.string.isRequired,
  statisticsData: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
}
import PropTypes from 'prop-types';

export const Statistics = ({ statisticsData }) => (
  <section className="statistics">
    <h4 className="title">Upload stats</h4>
    <ul className="stat-list">
      {statisticsData.map((statisticItem) => (
        <li className="item" key={statisticItem.id}>
          <span className="label">{statisticItem.label}</span>
          <span className="percentage">{statisticItem.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
)

Statistics.propTypes = {
  statisticsData: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    percentage: PropTypes.number
  }))
}
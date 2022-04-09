import s from './Statistics.module.css';
import { PropTypes } from 'prop-types';

function Statistics({ title, stats }) {
  const listItem = stats.map(({ id, label, percentage }) => (
    <li className={s.item} key={id} style={{ backgroundColor: randColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  ));

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>Upload stats</h2>}
      <ul className={s.startList}>{listItem}</ul>
    </section>
  );
}

function randColor() {
  const r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;

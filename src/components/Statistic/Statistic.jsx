import propTypes from 'prop-types';
import css from "./Statistic.module.css";

export const Statistic= ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div className={css.statistic}>
            <ul className={css.list}>
                <li className={css.item}>Good:{good}</li>
                <li className={css.item}>Neutral:{neutral}</li>
                <li className={css.item}>Bad:{bad}</li>
                <li className={css.item}>Total:{total}</li>
                <li className={css.item}>Positive feedback:{positivePercentage}%</li>
            </ul>
        </div>
    )
}

Statistic.prototype = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.func.isRequired,
    positivePercentage: propTypes.func.isRequired,
}
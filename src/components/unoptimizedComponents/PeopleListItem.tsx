import Flag from "./Flag";
import classes from './list.module.css';

const PeopleItem = ({ first_name, last_name, country }) => (
    <div className={classes.item_container}>
        <p>{first_name} {last_name}</p>
        <Flag countryCode={country} />
    </div>
);

export default PeopleItem;
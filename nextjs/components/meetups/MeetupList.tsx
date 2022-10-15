import { Meetup } from "../../Models/types";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

type MeetupsProps = { meetups: Meetup[] };

function MeetupList({ meetups }: MeetupsProps): JSX.Element {
  return (
    <ul className={classes.list}>
      {meetups?.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  );
}

export default MeetupList;

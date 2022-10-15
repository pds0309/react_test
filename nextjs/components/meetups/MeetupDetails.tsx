import { Fragment } from "react";
import { Meetup } from "../../Models/types";
import classes from "./MeetupDetails.module.css";

const MeetupDetails = ({ meetup }: { meetup: Meetup }) => {
  return (
    <section className={classes.detail}>
      <img src={meetup.image} alt={meetup.title} />
      <h1>{meetup.title}</h1>
      <address>{meetup.address}</address>
      <p>{meetup.description}</p>
    </section>
  );
};
export default MeetupDetails;

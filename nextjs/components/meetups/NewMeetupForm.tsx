import Card from "../ui/Card";
import { Meetup } from "../../Models/types";
import classes from "./NewMeetupForm.module.css";

type MeetupFormProps = {
  onAddMeetup: (meetupData: Meetup) => void;
};

function NewMeetupForm({ onAddMeetup }: MeetupFormProps) {
  function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      title: { value: string };
      image: { value: string };
      address: { value: string };
      description: { value: string };
    };

    const meetup: Meetup = {
      title: target.title.value,
      image: target.image.value,
      address: target.address.value,
      description: target.description.value,
    };
    onAddMeetup(meetup);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" name="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" name="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" name="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows={5}
            name="description"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;

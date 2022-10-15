import NeMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  function onAddMeetupHandler(addedMeetupData: any): void {
    console.log(addedMeetupData);
  }

  return <NeMeetupForm onAddMeetup={onAddMeetupHandler}></NeMeetupForm>;
};

export default NewMeetupPage;

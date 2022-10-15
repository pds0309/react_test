import { Meetup } from "../../Models/types";
import NeMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetupPage = () => {
  const router = useRouter();

  async function onAddMeetupHandler(addedMeetupData: Meetup) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(addedMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }

  return <NeMeetupForm onAddMeetup={onAddMeetupHandler}></NeMeetupForm>;
};

export default NewMeetupPage;

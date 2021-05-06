import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://max-react-refresher-default-rtdb.europe-west1.firebasedatabase.app/meetups.json`
    )
      .then((res) => res.json())
      .then((data) => {
        const meetups = [];
        Object.keys(data).forEach((el) => {
          const meetup = {
            id: el,
            ...data[el],
          };
          meetups.push(meetup);
        });
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetups;

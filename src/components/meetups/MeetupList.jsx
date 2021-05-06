import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      {props.meetups.map((el) => (
        <MeetupItem
          key={el.id}
          id={el.id}
          image={el.image}
          title={el.title}
          address={el.address}
          description={el.descriptiondescription}
        />
      ))}
    </ul>
  );
};

export default MeetupList;

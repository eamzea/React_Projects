import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

const JournalEntry = ({ id, title, body, date, url }) => {
  const dispatch = useDispatch();

  const noteDay = moment(date);

  const handleEntryClick = () => {
    dispatch(
      activeNote(id, {
        date,
        title,
        body,
        url,
      })
    );
  };

  return (
    <div
      className="journal__entry pointer animate__animated animate__faster animate__slideInLeft"
      onClick={handleEntryClick}
    >
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: url
            ? `url(${url})`
            : "url(https://i.pinimg.com/originals/64/29/75/642975b5a9f8b8414d5f3d4a6415fefc.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title || "Without Title"}</p>
        <p className="journal__entry-content">{body || "Without Body"}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDay.format("ddd")}</span>
        <h4>{noteDay.format("Do")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;

import React, { useEffect, useRef } from "react";
import NotesAppBar from "./NotesAppBar";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { activeNote, startDeleting } from "../../actions/notes";

const NoteScreen = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);

  const [formValues, handleInputChange, reset] = useForm(note);

  const { title, body, id } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(startDeleting(id));
  };

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Some awesome title"
          className="notes__input-title"
          autoComplete="off"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          name="body"
          placeholder="What happened today?"
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="notes__footer-container">
        <div
          className="notes__image"
          style={{
            backgroundImage: note.url
              ? `url(${note.url})`
              : "url(https://images.immediate.co.uk/production/volatile/sites/4/2018/08/untitled-0888e07.jpg?quality=90&resize=940%2C400)",
          }}
        ></div>
        <div className="notes__container-button">
          <button
            className="btn btn-danger"
            style={{ width: "50%", margin: "5px 0px" }}
            onClick={handleDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;

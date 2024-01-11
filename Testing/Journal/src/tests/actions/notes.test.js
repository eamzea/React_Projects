import "@testing-library/jest-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startLoadingNotes,
  startNewNote,
  startSaveNote,
  startUploading,
} from "../../actions/notes";
import { db } from "../../firebase/firebaseConfig";
import { fileUpload } from "../../helpers/fileUpload";
import { types } from "../../types/types";

jest.mock("../../helpers/fileUpload", () => ({
  fileUpload: jest.fn(() => {
    return "https://images.immediate.co.uk/production/volatile/sites/4/2018/08/untitled-0888e07.jpg?quality=90&resize=940%2C400";
  }),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  auth: {
    uid: "TESTING",
  },
  notes: {
    active: {
      id: "4U0lZMfEexXQvcjJuabE",
      title: "Image uploading with test",
      body: "Image uploading with test",
    },
  },
};

let store = mockStore(initState);

describe("Pruebas en Notes Actions", () => {
  beforeEach(() => {
    store = mockStore(initState);
  });

  test("Debe de crear una nueva nota", async () => {
    await store.dispatch(startNewNote());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesNoteActive,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    expect(actions[1]).toEqual({
      type: types.notesAddNew,
      payload: {
        id: expect.any(String),
        title: "",
        body: "",
        date: expect.any(Number),
      },
    });

    const docId = actions[0].payload.id;

    await db.doc(`/TESTING/journal/notes/${docId}`).delete();
  });

  test("StartLoadingNotes", async () => {
    await store.dispatch(startLoadingNotes("TESTING"));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.notesLoad,
      payload: expect.any(Array),
    });

    const expected = {
      id: expect.any(String),
      title: expect.any(String),
      body: expect.any(String),
      date: expect.any(Number),
    };

    expect(actions[0].payload[0]).toMatchObject(expected);
  });

  test("startSaveNote", async () => {
    const note = {
      id: "KD4k9UbVVtnPUoMB4HeL",
      title: "Title updated through test",
      body: "Body updated through test",
    };

    await store.dispatch(startSaveNote(note));

    const actions = store.getActions();

    expect(actions[0].type).toBe(types.notesUpdated);

    const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();

    expect(docRef.data().title).toEqual(note.title);
  });

  test("startUploading", async () => {
    const file = new File([], "foto.jpg");

    await store.dispatch(startUploading(file));

    const docRef = await db
      .doc(`/TESTING/journal/notes/${initState.notes.active.id}`)
      .get();

    expect(docRef.data().url).toBe(
      "https://images.immediate.co.uk/production/volatile/sites/4/2018/08/untitled-0888e07.jpg?quality=90&resize=940%2C400"
    );
  });
});

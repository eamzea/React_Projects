import "@testing-library/jest-dom";
import { types } from "../../types/types";

describe("Pruebas con types", () => {
  test("Debe de ser igual", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
      uiSetError: "[UI] Set error",
      uiRemoveError: "[UI] Remove error",
      uiStartLoading: "[UI] Start Loading",
      uiFinishLoading: "[UI] Finish Loading",
      notesAddNew: "[Notes] New Note",
      notesNoteActive: "[Notes] Set Active Note",
      notesLoad: "[Notes] Load Notes",
      notesUpdated: "[Notes] Update Note",
      notesFileUrl: "[Notes] Update Image Url",
      notesDelete: "[Notes] Delete Note",
      notesLogoutCleaning: "[Notes] Logout Cleaning",
    });
  });
});

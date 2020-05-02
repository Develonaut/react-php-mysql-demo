import { createSelector } from "reselect";

export const ReadySelector = ({ app }) => app.ready;

export const getReady = createSelector([ReadySelector], (ready) => ready);

import { createSelector } from "reselect";

const DrawerOpenSelector = ({ ui }) => ui.navDrawerOpen;
const ContentDrawerTypeSelector = ({ ui }) => ui.contentDrawerType;

export const getDrawerOpen = createSelector([DrawerOpenSelector], (drawerOpen) => drawerOpen);

export const getContentDrawerType = createSelector(
  [ContentDrawerTypeSelector],
  (contentDrawerType) => contentDrawerType
);

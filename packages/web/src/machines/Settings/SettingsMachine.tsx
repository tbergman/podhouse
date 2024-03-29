import { Machine } from "xstate";

import {
  SettingsContext,
  SettingsStateSchema,
  SettingsEvent,
} from "./Settings.types";

const SettingsMachine = Machine<
  SettingsContext,
  SettingsStateSchema,
  SettingsEvent
>({
  id: "settings",
  initial: "close",
  states: {
    close: {
      on: {
        OPEN: "open",
      },
    },
    open: {
      on: {
        CLOSE: "close",
      },
    },
  },
});

export default SettingsMachine;

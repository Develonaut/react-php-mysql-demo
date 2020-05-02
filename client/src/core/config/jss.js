import { jssPreset } from "@material-ui/styles";
import { create } from "jss";
import extend from "jss-plugin-extend";

export const jss = create({
  plugins: [extend(), ...jssPreset().plugins]
});

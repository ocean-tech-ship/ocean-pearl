/*
 * Our z-index is based on the initial base value (ideally base = 0).
 * All constants are build on top of the base value by adding the arithmetic above or below value.
 */

const base = 0;

// z-index arithmetics
const above = 1; // only for constants above base
const below = -1; // only for constants below base

const backdrop = below + base;
const label = above + base;
const dropdown = above + label;
const dropdown2 = above + dropdown;
const nav = above + dropdown2;
const tooltip = above + nav;
const popup = above + tooltip;
const modal = above + popup;

export default {
  backdrop,
  base,
  label,
  dropdown,
  dropdown2,
  nav,
  tooltip,
  popup,
  modal,
};

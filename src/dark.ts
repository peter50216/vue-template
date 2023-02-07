export const isDark = useDark({
  selector: "html",
  attribute: "data-theme",
  valueLight: "light",
  valueDark: "dark",
});
export const toggleDark = useToggle(isDark);

import "../global.css";

export const ButtonNew = ({
  label,
  onClick,
  variant,
  size,
  loading,
  fullWidth,
}) => {
  return <button className="p-4 bg-black text-white rounded">{label}</button>;
};

interface LabelProps {
  value: string;
  color?: string;
  fontSize?: string;
}

export const Label = ({
  value,
  color = "black",
  fontSize = "14px",
}: LabelProps) => {
  return <span style={{ color, fontSize }}>{value}</span>;
};

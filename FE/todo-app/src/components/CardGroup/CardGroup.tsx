import { FC } from "react";

type Props = {
  title: string;
};

export const CardGroup: FC<Props> = ({ title }) => {
  const titleLetter = title && title.charAt(0).toUpperCase();

  return (
    <div className="sidebar-icon group">
      {titleLetter}
      <span className="sidebar-tooltip group-hover:scale-100">{title}</span>
    </div>
  );
};

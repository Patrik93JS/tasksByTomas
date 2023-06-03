import { FC, ReactNode } from "react";

type Props = {
  icon: ReactNode;
  text?: string;
};

export const TopNavigationIcon: FC<Props> = ({ icon, text }) => (
  <div className="top-navigation-icon-action group">
    {icon}
    <span className="top-navigation-tooltip group-hover:scale-100">{text}</span>
  </div>
);

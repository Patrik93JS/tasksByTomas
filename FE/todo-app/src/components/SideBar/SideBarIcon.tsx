import { FC, ReactNode } from "react";

type Props = {
  icon: ReactNode;
  text?: string;
};

export const SideBarIcon: FC<Props> = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

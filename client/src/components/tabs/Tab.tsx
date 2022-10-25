import classNames from "classnames";
import s from "./Tabs.module.scss";

interface IProps {
  activeTab: string;
  label: string;
  onClick: (tab: string) => void;
}

export default function Tab({ activeTab, label, onClick }: IProps) {
  return (
    <li
      className={classNames(s.tabItem, {
        [s.tabActive]: activeTab === label,
      })}
      onClick={() => onClick(label)}
    >
      {label}
    </li>
  );
}

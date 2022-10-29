import { useCallback, useState } from "react";
import EditIcon from "../icons/Edit/EditIcon";

import Tab from "./Tab";
import s from "./Tabs.module.scss";

interface IProps {
  children: JSX.Element[];
  withEdit?: boolean;
}

export default function Tabs({ children, withEdit = false }: IProps) {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.title);

  const onClickTabItem = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className={s.tabs}>
      <div className={s.tabRow}>
        {withEdit && <EditIcon />}
        <ol className={s.tabList}>
          {children.map((child) => {
            const { title } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={title}
                label={title}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
      </div>

      <div>
        {children.map((child) => {
          if (child.props.title !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}

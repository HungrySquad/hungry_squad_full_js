import { useCallback, useState } from "react";

import Tab from "./Tab";
import s from "./Tabs.module.scss";

interface IProps {
  children: JSX.Element[];
}

export default function Tabs({ children }: IProps) {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.title);

  const onClickTabItem = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  return (
    <div>
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
      <div>
        {children.map((child) => {
          if (child.props.title !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}

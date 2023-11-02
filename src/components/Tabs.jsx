import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Tabs = ({data}) => {
    const location = useLocation();
    const [currentTab, setTab] = useState(0);

    const tabsButtonsArr = Object.keys(data);
    let activeTabStyle;

    const changeCurrentTab = event => {
        setTab(+event.currentTarget.id);
      };

    const tabsButtons = tabsButtonsArr.map((elem, i) => {
        activeTabStyle = currentTab === i ? 'tab--active' : '';
        return(
            <button className={"tab " + activeTabStyle} key={i} id={i} onClick={changeCurrentTab}>
                {elem}
            </button>
        )
    })

    useEffect(() => {
        setTab(0);
      }, [location]);

      const currentTabName = tabsButtonsArr[currentTab];
      const tabContentArr = data[currentTabName];
      const tabContent =
        tabContentArr && tabContentArr.length > 0 ? (
          tabContentArr.map((elem, index) => <li key={index}>{elem}</li>)
        ) : (
          <li>No content available</li>
        );

    return(
        <div className="tabs">
            <div className="tabs__header">
            {tabsButtons}
            </div>
            <div className="tabs__content">
                <div className="tabs_wrapper">
                    <ul className="tabs__ul">
                        {tabContent}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export {Tabs}
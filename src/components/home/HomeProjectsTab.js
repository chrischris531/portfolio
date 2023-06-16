import HomeProjectsGridView from "./HomeProjectsGridView";
import HomeProjectsListView from "./HomeProjectsListView";

const HomeProjectsTab = ({ data, hover, setHover, style }) => {
  return style === "grid" ? (
    <HomeProjectsGridView data={data} hover={hover} setHover={setHover} />
  ) : style === "list" ? (
    <HomeProjectsListView data={data} />
  ) : null;
};

export default HomeProjectsTab;

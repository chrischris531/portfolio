import HomeProjectsGridView from "./HomeProjectsGridView";
import HomeProjectsListView from "./HomeProjectsListView";

const HomeProjectsTab = ({ data, hover, setHover, view_style }) => {
  return view_style === "grid" ? (
    <HomeProjectsGridView data={data} hover={hover} setHover={setHover} />
  ) : view_style === "list" ? (
    <HomeProjectsListView data={data} />
  ) : null;
};

export default HomeProjectsTab;

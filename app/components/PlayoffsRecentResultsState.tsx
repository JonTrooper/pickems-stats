import { SetStateAction, useState } from "react";
import Playoffs from "./Playoffs";
import RecentResults from "./RecentResults";
import { Divider } from "@tremor/react";

export default function PlayoffsRecentResultsState() {
  const [hoveredElementId, setHoveredElementId] = useState("");

  // Handles mouse enter for any element by setting its ID as the hovered element
  const handleMouseEnter = (id: SetStateAction<string>) =>
    setHoveredElementId(id);

  // Resets the hovered element ID on mouse leave
  const handleMouseLeave = () => setHoveredElementId("");

  // Utility function to check if an element is hovered
  const isElementHovered = (id: string) => hoveredElementId === id;

  return (
    <div>
      <Playoffs
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <Divider>Champions Recent Results</Divider>
      <RecentResults isElementHovered={isElementHovered} />
    </div>
  );
}

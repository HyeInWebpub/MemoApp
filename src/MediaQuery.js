import React from "react";
import { useMediaQuery } from "react-responsive";

const MediaLarge = ({ children }) => {
  const isLarge = useMediaQuery({ query: "(min-width : 1151px)" });

  return <div className="MediaLarge">{isLarge && children}</div>;
};

const MediaMedium = ({ children }) => {
  const isMedium = useMediaQuery({
    query: "(max-width : 1150px) and (min-width : 751px)",
  });

  return <div className="MediaMedium">{isMedium && children}</div>;
};

const MediaSmall = ({ children }) => {
  const isSmall = useMediaQuery({ query: "(max-width : 750px)" });

  return <div className="MediaSmall">{isSmall && children}</div>;
};

export { MediaLarge, MediaMedium, MediaSmall };

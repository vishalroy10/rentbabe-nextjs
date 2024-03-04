import * as React from "react";

const GlitterIcon = ({...props}) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={24} height={24} fill="url(#glitters)" />
    <defs>
      <pattern
        id="glitters"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_904_65950" transform="scale(0.00625)" />
      </pattern>
      <image
        id="image0_904_65950"
        width={160}
        height={160}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default GlitterIcon;

// import React, { useRef } from 'react';
// import { FixedSizeGrid } from 'react-window';
// import { WindowScroller } from 'react-virtualized';

// interface IGlobalFixedSizeGridProps extends React.ComponentProps<typeof FixedSizeGrid> {
//   component?: any;
//   loadMore: (e: any) => void;
// }

// const ReactWindow = ({ loadMore, ...props }: IGlobalFixedSizeGridProps) => {
//   const rwindowRef = useRef<any>(null);

//   const handleListRef = (component: any) => {
//     rwindowRef.current = component;
//   };

//   const handleScroll = (e: any) => {
//     sessionStorage.setItem('scrollTo', e?.scrollTop);
//     rwindowRef?.current?.scrollTo(e);
//     loadMore(e);
//   };

//   return (
//     <React.Fragment>
//       <WindowScroller onScroll={handleScroll}>
//         {() => {
//           return (
//             <>
//               (
//               <FixedSizeGrid
//                 ref={handleListRef}
//                 columnCount={props.columnCount}
//                 columnWidth={props.columnWidth}
//                 onItemsRendered={props.onItemsRendered}
//                 rowCount={props.rowCount}
//                 rowHeight={props.rowHeight}
//                 width={props.width}
//                 height={props.height}
//                 className={props.className}
//                 overscanColumnCount={props.overscanColumnCount}
//                 overscanRowCount={props.overscanRowCount}
//               >
//                 {props.children}
//               </FixedSizeGrid>
//               )
//             </>
//           );
//         }}
//       </WindowScroller>
//     </React.Fragment>
//   );
// };

// export default ReactWindow;

import React, { useRef } from "react";
import { Grid, WindowScroller } from "react-virtualized";

interface IGlobalFixedSizeGridProps extends React.ComponentProps<typeof Grid> {
  loadMore: (e: any) => void;
}

const ReactWindow = ({ loadMore, ...props }: IGlobalFixedSizeGridProps) => {
  const rwindowRef = useRef<any>(null);

  const handleListRef = (component: any) => {
    rwindowRef.current = component;
  };

  const handleScroll = (e: any) => {
    // sessionStorage.setItem('scrollTo', e?.scrollTop);
    loadMore(e);
    // rwindowRef?.current?.scrollTo(e);
  };

  return (
    <React.Fragment>
      <WindowScroller onScroll={handleScroll}>
        {({ height, isScrolling, onChildScroll, scrollTop }) =>{
        return(
          <Grid
            ref={handleListRef}
            autoHeight
            height={2000000}
            // isScrolling={isScrolling}
            // onScroll={onChildScroll}
            // scrollTop={scrollTop}
            columnCount={props.columnCount}
            columnWidth={props.columnWidth}
            onItemsRendered={props.onItemsRendered}
            rowCount={props.rowCount}
            rowHeight={props.rowHeight}
            width={props.width}
            className={props.className}
            overscanColumnCount={props.overscanColumnCount}
            overscanRowCount={props.overscanRowCount}
            cellRenderer={props.children}
          />
          //   {props.children}
          // </Grid>
        )}}
      </WindowScroller>
    </React.Fragment>
  );
};

export default ReactWindow;

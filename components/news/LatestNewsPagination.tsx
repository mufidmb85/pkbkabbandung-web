"use client"

import { Pagination } from "@nextui-org/react";
import React from "react";
import { PaginationProps } from "@/interface/PaginationProps";

const LatestNewsPagination:React.FC<PaginationProps> = (props) => {
  return (
    <div data-controls={props.showControl}    // Use showControl to determine if controls are enabled data-total={totalPages}        // Total number of pages
      data-active-page={props.currentPage} // Active page number
      data-loop={false}              // Set to true if you need loop functionality
      data-dots-jump={false}         // Set to true if you need dot jump functionality
    >
      {/* Pagination control buttons here */}
      <Pagination
        page={props.currentPage}          // Active page number
        total={props.totalPages}          // Total pages
        onChange={props.onPageChange}     // Callback for page change
        color="primary"
        size="lg"
        variant={"light"}
        showControls={props.showControl}
      />
    </div>
  );
};

export default LatestNewsPagination;

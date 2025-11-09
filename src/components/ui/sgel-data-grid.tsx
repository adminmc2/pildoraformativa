"use client";

import { Grid, GridColumn, GridColumnProps } from "@progress/kendo-react-grid";
import { cn } from "@/lib/utils";

interface SGELDataGridProps {
  data: any[];
  columns: GridColumnProps[];
  className?: string;
  pageable?: boolean;
  sortable?: boolean;
  filterable?: boolean;
  pageSize?: number;
}

export function SGELDataGrid({
  data,
  columns,
  className,
  pageable = true,
  sortable = true,
  filterable = false,
  pageSize = 10,
}: SGELDataGridProps) {
  return (
    <div className={cn("sgel-data-grid-wrapper", className)}>
      <style jsx global>{`
        /* SGEL Data Grid Sketch Style */
        .sgel-data-grid-wrapper .k-grid {
          border: 4px solid #000000 !important;
          border-radius: 16px !important;
          box-shadow: 12px 12px 0px rgba(0, 0, 0, 0.8) !important;
          overflow: hidden !important;
          background: white !important;
          font-family: inherit !important;
        }

        /* Header */
        .sgel-data-grid-wrapper .k-grid-header {
          background: linear-gradient(135deg, #FFEB3B 0%, #FFC924 100%) !important;
          border-bottom: 4px solid #000000 !important;
        }

        .sgel-data-grid-wrapper .k-grid-header .k-header {
          background: transparent !important;
          border: none !important;
          border-right: 3px solid #000000 !important;
          color: #000000 !important;
          font-weight: 900 !important;
          font-size: 16px !important;
          padding: 16px 12px !important;
          text-transform: uppercase !important;
        }

        .sgel-data-grid-wrapper .k-grid-header .k-header:last-child {
          border-right: none !important;
        }

        /* Cells */
        .sgel-data-grid-wrapper .k-grid-content .k-table-tbody .k-table-row {
          border-bottom: 2px solid #e0e0e0 !important;
        }

        .sgel-data-grid-wrapper .k-grid-content .k-table-tbody .k-table-row:hover {
          background: #FFF9C4 !important;
        }

        .sgel-data-grid-wrapper .k-grid-content .k-table-td {
          border-right: 2px solid #f0f0f0 !important;
          padding: 14px 12px !important;
          font-weight: 600 !important;
          color: #333333 !important;
        }

        .sgel-data-grid-wrapper .k-grid-content .k-table-td:last-child {
          border-right: none !important;
        }

        /* Pager */
        .sgel-data-grid-wrapper .k-pager {
          background: #f5f5f5 !important;
          border-top: 4px solid #000000 !important;
          padding: 12px !important;
        }

        .sgel-data-grid-wrapper .k-pager .k-pager-numbers .k-button {
          border: 3px solid #000000 !important;
          border-radius: 8px !important;
          background: white !important;
          color: #000000 !important;
          font-weight: 900 !important;
          margin: 0 4px !important;
          min-width: 40px !important;
          height: 40px !important;
          box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.6) !important;
          transition: all 0.2s !important;
        }

        .sgel-data-grid-wrapper .k-pager .k-pager-numbers .k-button:hover {
          background: #FFEB3B !important;
          transform: translate(2px, 2px) !important;
          box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.6) !important;
        }

        .sgel-data-grid-wrapper .k-pager .k-pager-numbers .k-button.k-selected {
          background: #8BC34A !important;
          color: white !important;
        }

        .sgel-data-grid-wrapper .k-pager .k-pager-nav {
          border: 3px solid #000000 !important;
          border-radius: 8px !important;
          background: #2196F3 !important;
          color: white !important;
          font-weight: 900 !important;
          width: 40px !important;
          height: 40px !important;
          box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.6) !important;
          margin: 0 4px !important;
        }

        .sgel-data-grid-wrapper .k-pager .k-pager-nav:hover:not(:disabled) {
          transform: translate(2px, 2px) !important;
          box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.6) !important;
        }

        .sgel-data-grid-wrapper .k-pager .k-pager-nav:disabled {
          opacity: 0.4 !important;
          cursor: not-allowed !important;
        }

        /* Sort Icon */
        .sgel-data-grid-wrapper .k-sort-icon {
          color: #000000 !important;
          font-weight: 900 !important;
        }

        /* Info text */
        .sgel-data-grid-wrapper .k-pager-info {
          color: #000000 !important;
          font-weight: 700 !important;
        }
      `}</style>
      <Grid
        data={data.slice(0, pageSize)}
        pageable={pageable}
        sortable={sortable}
        filterable={filterable}
        style={{ height: "auto" }}
      >
        {columns.map((col, index) => (
          <GridColumn key={index} {...col} />
        ))}
      </Grid>
    </div>
  );
}

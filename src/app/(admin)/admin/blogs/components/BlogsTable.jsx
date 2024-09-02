"use client";
import React from "react";
import useTable from "@/hooks/useTable";
import BlogListAction from "./BlogListAction";
import Table from "@/common/Table";
import useSWR from "swr";
import { fetcher } from "@/common/fetcher";
import { Card } from "@/components/ui/card";

export default function BlogsTable() {
  const { data, error, isLoading } = useSWR("/api/blogs", fetcher);
  const tableInstance = useTable({
    columns,
    data: data,
    // state: { pagination },
    // pageCount: customersQueryResult?.data?.number_of_pages,
    // manualPagination: true,
    // onPaginationChange: setPagination,
  });
  return <Table instance={tableInstance} loading={isLoading} error={error} />;
}

const columns = [
  {
    header: "Author Name",
    accessorKey: "name",
  },
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Category",
    accessorKey: "category",
  },
  {
    header: "Date ",
    accessorKey: "createdAt",
  },
  {
    header: "View details",
    id: "View Details",
    cell: ({ row }) => <BlogListAction data={row.original} />,
  },
];

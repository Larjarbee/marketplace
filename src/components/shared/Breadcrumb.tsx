import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Icon } from "@iconify/react";

function BreadcrumbCard(breadcrumbList: any) {
  return (
    <Fragment>
      {breadcrumbList.list.length > 0 ? (
        <Breadcrumb>
          <BreadcrumbList className="text-gray-400">
            {breadcrumbList?.list.map((item: any, index: number) => (
              <Fragment key={index}>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gray-400">
                    {item?.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
                {item?.icon && (
                  <BreadcrumbSeparator>
                    <Icon icon="iconoir:slash" />
                  </BreadcrumbSeparator>
                )}
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default BreadcrumbCard;

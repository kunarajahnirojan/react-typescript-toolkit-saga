import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { IBreadCrumbProps } from 'types/components/breadcrumb';
export default function BreadCrumb(props: IBreadCrumbProps) {
  return (
    <React.Fragment>
      <nav className="flex px-4 py-2">
        <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
          {props.routes.map((item: any, key: number) => (
            <li className="flex items-center" key={key}>
              <NavLink to={item?.path}>
                <div className="flex h-10 items-center bg-gray-100 px-4 transition hover:text-gray-900">
                  {item?.icon}
                  <span className="ml-1.5 text-xs font-medium">
                    {item?.breadcrumb}
                  </span>

                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </NavLink>
            </li>
          ))}
        </ol>
      </nav>
    </React.Fragment>
  );
}

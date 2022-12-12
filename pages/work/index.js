// our-domain.com/work
import { fetcher } from "../../lib/api";

import { Fragment, useState } from "react";
import useSWR from "swr";
import ArchiveItem from "../../components/archive/ArchiveItem";

function WorkPage({ posts }) {
  const [pageIndex, setPageIndex] = useState(1);
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?pagination[page]=${pageIndex}&pagination[pageSize]=3`,
    fetcher,
    {
      fallbackData: posts,
    }
  );
  return (
    <Fragment>
      <div className="container grid overflow-hidden dark grid-cols-4 grid-rows-1 grid-flow-row w-screen box">
        <div className="box">
          <p className="font-sans text-5xl sm:text-9xl not-italic font-light text-left p-2 ">
            Archive
          </p>
        </div>
      </div>

      <ArchiveItem posts={data} />

      <div
        lable="page buttons"
        className="flex flex-wrap items-baseline justify-between space-y-1 h-full w-full pl-2 pr-2 pb-2 font-sans text-sm not-italic font-light"
      >
        <div className="item w-full h-auto order-first border border-yellow-300 border-t-1 border-l-0 border-r-0 border-b-0 pl-2 pr-2" />
        <div className="item order-2">
          <button
            className={`text-sm   h-auto order-2 text-left ${
              pageIndex === 1 ? "font-bold" : "font-light"
            }`}
            disabled={pageIndex === 1}
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={40}
              viewBox="0 0 32 32"
            >
              <path
                d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
                data-name="4-Arrow Left"
              />
            </svg>
          </button>
        </div>
        <div className="item order-3 place-self-center">
          <span className="	 h-auto order-3 text-center">{` ${pageIndex} of ${
            data && data.meta.pagination.pageCount
          }`}</span>
        </div>
        <div className="item order-4">
          <button
            className={`h-auto order-4 text-sm text-right ${
              pageIndex === (data && data.meta.pagination.pageCount)
                ? "font-bold"
                : "font-light"
            }`}
            disabled={pageIndex === (data && data.meta.pagination.pageCount)}
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={40}
              viewBox="0 0 32 32"
            >
              <path
                d="m31.71 15.29-10-10-1.42 1.42 8.3 8.29H0v2h28.59l-8.29 8.29 1.41 1.41 10-10a1 1 0 0 0 0-1.41z"
                data-name="3-Arrow Right"
              />
            </svg>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default WorkPage;

export async function getStaticProps() {
  const postsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts?pagination[page]=1&pagination[pageSize]=5`
  );
  return {
    props: {
      posts: postsResponse,
    },
  };
}

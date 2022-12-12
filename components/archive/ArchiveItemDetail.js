function ArchiveItemDetail({ post, description }) {
  return (
    <div className="p-2">
      <p className="font-sans text-5xl sm:text-9xl not-italic font-light text-left pb-2">
        {post.attributes.title}
      </p>
      <div className="justify-evenly space-y-1 h-1/4 text-sm">
        <div className="item w-auto h-1/12 border border-yellow-300 border-t-1 border-l-0 border-r-0 border-b-0">
          <div className="flex justify-between space-y-1 w-full h-16 items-baseline font-sans text-sm not-italic font-light	leading-tight	text-left">
            <div className="item w-1/2 h-full pt-2">
              <p>Project: {post.attributes.title}</p>
              <p>Category: {post.attributes.category}</p>
              <p>Year: {post.attributes.year}</p>
            </div>
          </div>
        </div>

        <div className="grid overflow-hidden dark grid-cols-4 grid-rows-3 gap-1 grid-flow-row w-full h-auto text-sm pt-1">
          {/* <img
            src={post.attributes.image}
            alt={post.attributes.title}
            className="box col-span-4 sm:col-span-3 border border-black border-t-1 border-l-1 border-r-1 border-b-1 "
          />

          <img
            src={post.attributes.image}
            alt={post.attributes.title}
            className="box col-span-4 sm:col-span-3 border border-black border-t-1 border-l-1 border-r-1 border-b-1"
          />
          <img
            src={post.attributes.image}
            alt={post.attributes.title}
            className="box col-span-4 sm:col-span-3 border border-black border-t-1 border-l-1 border-r-1 border-b-1"
          /> */}
          <div
            className="col-span-4 sm:col-span-3 "
            dangerouslySetInnerHTML={{ __html: description }}
          >
            {/* <p className="text-clip"> {post.attributes.description}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchiveItemDetail;

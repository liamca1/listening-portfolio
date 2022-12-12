// import Card from "../ui/Card";
// import classes from "./MeetupItem.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function ArchiveItem({ posts }) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/" + posts.attributes.id);
  }

  return (
    <>
      <ul>
        {posts &&
          posts.data.map((post) => {
            return (
              <div
                className="flex flex-col justify-evenly space-y-1 h-1/4 pb-2 pl-2 pr-2 text-sm "
                key={post.id}
              >
                <div className="item w-auto h-1/12 border border-yellow-300 border-t-1 border-l-0 border-r-0 border-b-0 pb-1">
                  <div className="flex justify-between space-y-1 w-full h-16  font-sans text-sm not-italic font-light	leading-tight	text-left">
                    <div className="item w-1/2 h-full pt-2">
                      <ul>
                        <li>
                          <Link href={`work/` + post.id}>
                            Project: {post.attributes.title}
                          </Link>
                        </li>
                        <li>Category: {post.attributes.category}</li>
                        <li>Year: {post.attributes.year}</li>
                      </ul>
                    </div>
                    <div className="item w-1/2 h-full">
                      <p className="truncate">{post.attributes.description}</p>
                      <p className="text-right">
                        <Link href={`work/` + post.id} className="text-right">
                          [ more ]
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <Link href={`work/` + post.id}>
                    <img
                      src={post.attributes.image}
                      alt={post.attributes.title}
                      layout="fill" // required
                      // objectFit="" // change to suit your needs
                      className="item lg:w-1/4 sm:w-3/4 md:w-3/3 flex w-auto max-h-fit overflow-x-auto ... border border-black border-t-1 border-l-1 border-r-1 border-b-1" // just an example
                    />
                  </Link>
                </div>
              </div>
            );
          })}
      </ul>
    </>
  );
}

export default ArchiveItem;

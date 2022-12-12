import Link from "next/link";

function Home() {
  return (
    <div className="dark:bg-black flex flex-col text-sm pl-2 pr-2">
      <div class="grid overflow-hidden dark grid-cols-2 grid-rows-3 gap-1 grid-flow-row lg:w-1/2 md:w-full sm:w-1/1 h-full">
        <div class="box border border-yellow-300 border-t-1 border-l-0 border-r-0 border-b-0">
          <p className="font">Welcome</p>
        </div>
        <div class="box border border-green-600 border-t-1 border-l-0 border-r-0 border-b-0">
          <p className="font">
            Hello, I’m Liam. <br></br>a designer and full stack web developer
            interested in culture and ecologies. I am deeply concerned with
            social disparity, economic inequality, and the stack of
            environmental challenges we’re creating for ourselves and future
            generations. As a freelance designer and developer with a background
            in architecture and philosophy, I am optimistic about finding
            creative, ethical, and sustainable solutions to these problems. I am
            skilled at working on projects as part of a larger team and am an
            effective communicator and collaborator. When taking on solo
            projects I am careful to establish clear lines of communication and
            to set high, but realistic expectations for myself and the client.
            My multidisciplinary approach means I am well adept at carrying
            projects through from inception to delivery and I aim always to
            create effective, sustainable, and engaging products that fulfil the
            clients expectations while respecting the users’ needs and
            attention.
          </p>
        </div>
        <div class="box border border-red-600 border-t-1 border-l-0 border-r-0 border-b-0">
          <p className="font">Links</p>
          <Link href="www.github.com">Github</Link>
          <br></br>
          <Link href="www.github.com">LinkedIn</Link>
        </div>
        <div class="box border border-blue-600 border-t-1 border-l-0 border-r-0 border-b-0">
          <b>Curent Interests:</b> <Link href="">Postnature</Link>,{" "}
          <Link href="">2</Link>, <Link href="">3</Link>, <Link href="">4</Link>
          , <Link href="">5</Link>, <Link href="">6</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;

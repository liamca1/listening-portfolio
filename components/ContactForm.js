function ContactForm() {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
    console.log(formData);
  }
  return (
    <div className="pl-2 pr-2">
      <div class="py-8 lg:py-16 px-2 mx-auto max-w-screen-md border border-yellow-300 border-t-1 border-l-0 border-r-0 border-b-0 pb-1">
        <form onSubmit={handleOnSubmit}>
          <p>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            />
          </p>
          <p>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            />
          </p>
          <p>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            />
          </p>
          <br></br>
          <p>
            <button className="border py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Submit
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

// <form className="space-y-8" onSubmit={handleOnSubmit}>
// <div>
//   <label
//     htmlFor="email"
//     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//   >
//     Your email
//   </label>
//   <input
//     type="email"
//     id="email"
//     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//     placeholder="name@flowbite.com"
//     required
//   />
// </div>
// <div>
//   <label
//     htmlFor="subject"
//     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//   >
//     Subject
//   </label>
//   <input
//     type="text"
//     id="subject"
//     className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//     placeholder="Let us know how we can help you"
//     required
//   />
// </div>
// <div class="sm:col-span-2">
//   <label
//     htmlFor="message"
//     className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
//   >
//     Your message
//   </label>
//   <textarea
//     id="message"
//     rows="6"
//     className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//     placeholder="Leave a comment..."
//   ></textarea>
// </div>
// <button
//   type="submit"
//   className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
// >
//   Send message
// </button>
// </form>

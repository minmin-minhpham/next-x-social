import Image from "next/image";
import Avatar from "./Avatar";
import Link from "next/link";

export default function Post() {
  return (
    <div className="border-border-gray border-t-[1px] px-4 flex">
      <div className="pt-2">
        {/* reposted */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2 from-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="fill-gray-500"
          >
            <path d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z" />
          </svg>
          <span>@min_min reposted</span>
        </div>

        <div className="flex gap-2">
          {/* avatar */}
          <Avatar src="/avatar.jpg" alt="Min Min" />

          {/* content post */}
          <div className="flex flex-1 flex-col text-gray-600 pb-3">
            <div className="flex justify-between items-center">
              <div className="flex">
                <span className="text-foreground font-bold">Min Min</span>
                <div className="ml-1">
                  <span>@min_min</span>
                  <span className=" px-1">&middot;</span>
                  <span>1 day</span>
                </div>
              </div>

              <div className="">
                <PostInfo />
              </div>
            </div>

            {/* content */}
            <div className="mt-2 leading-relaxed whitespace-pre-line text-lg text-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>

            {/* media */}
            <div className="mt-3 rounded-2xl border border-gray-900 relative overflow-hidden">
              <Image
                alt="Media"
                src="/avatar.jpg"
                width={600}
                height={600}
                className="w-full"
              />
            </div>

            {/* Source for media */}
            <div className="mt-2 text-sm text-gray-600">
              From Nature is Amazing 🌿 ☑️ ©
            </div>

            <PostInteractions />
          </div>
        </div>
      </div>
    </div>
  );
}

const PostInfo = () => {
  return <>...</>;
};


const PostInteractions = () => {
  return (
    <div className="flex items-center justify-between gap-1 lg:gap-16 mt-3 text-gray-600">
      <div className="flex items-center justify-between flex-1">
        <div className="flex items-center grap-1 cursor-pointer group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="fill-blue-500"
          >
            <path
              className="fill-textGray group-hover:fill-iconBlue"
              d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
            />
          </svg>
          <span className="group-hover:text-blue-500 text-sm">1999</span>
        </div>

        <div className="flex items-center grap-1 cursor-pointer group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="fill-blue-500"
          >
            <path
              className="fill-textGray group-hover:fill-iconBlue"
              d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
            />
          </svg>
          <span className="group-hover:text-blue-500 text-sm">1999</span>
        </div>

        <div className="flex items-center grap-1 cursor-pointer group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="fill-blue-500"
          >
            <path
              className="fill-textGray group-hover:fill-iconBlue"
              d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
            />
          </svg>
          <span className="group-hover:text-blue-500 text-sm">1999</span>
        </div>

        <div className="flex items-center grap-1 cursor-pointer group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="fill-blue-500"
          >
            <path
              className="fill-textGray group-hover:fill-iconBlue"
              d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
            />
          </svg>
          <span className="group-hover:text-blue-500 text-sm">1999</span>
        </div>


      </div>
      <div className="flex items-center gap-1">
        <div className="cursor-pointer group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="fill-blue-500"
          >
            <path
              className="fill-textGray group-hover:fill-iconBlue"
              d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
            />
          </svg>
        </div>
        <div className="cursor-pointer group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="fill-blue-500"
          >
            <path
              className="fill-textGray group-hover:fill-iconBlue"
              d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const mock = [{}, {}];

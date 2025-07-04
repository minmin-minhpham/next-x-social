import LeftBar from "@/components/layouts/LeftBar";
import WelcomePage from "../(auth)/(welcome)/_WelcomePage";
import RightBar from "@/components/layouts/RightBar";

export default function AppLayout({ children }) {
  if (false) {
    return <WelcomePage />;
  }

  return (
    <>
      <div className="container max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex justify-between mx-auto">
        <div className="h-screen sticky top-0 overflow-auto">
          <div className="px-2 sm:px-4 xl:px-8">
            <LeftBar />
          </div>
        </div>
        <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-border-gray">
          {children}
        </div>
        <div className="flex-1 lg:flex ml-4 md:ml-8 hidden">
          <RightBar />
        </div>
      </div>
    </>
  );
}

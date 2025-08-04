import DateSelect from "../ui/DateSelect";
import { FloatingInput } from "../ui/input/FloatingInput";

export default function SignUpForm() {
  return (
    <form>
      <div className="flex flex-col flex-1 w-full">
        <div className="flex flex-col mx-auto px-20">
          <div className="my-5">
            <h1 className="text-3xl font-extrabold">Create your account</h1>
          </div>
          <div>
            <div className="py-3">
              <FloatingInput id="name" label="Name" type="name" />
            </div>
            <div className="py-3">
              <FloatingInput id="email" label="Email" type="email" />
            </div>

            <div className="flex flex-col mt-5">
              <div className="mb-2">
                <span className="font-bold">Date of birth</span>
              </div>

              <div className="mb-1">
                <p className="text-gray-500 text-sm">
                  This will not be shown publicly. Confirm your own age, even if
                  this account is for a business, a pet, or something else.
                </p>
              </div>

              <div className="my-4">
                <DateSelect />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex flex-wrap justify-center w-full px-20 my-6">
          <button className="bg-neutral-400/75 h-10 w-full rounded-full">
            <span className="text-black font-bold">Next</span>
          </button>
        </div>
      </div>
    </form>
  );
}

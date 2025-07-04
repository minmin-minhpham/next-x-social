import GoogleIcon from "../icons/GoogleIcon";

export default function GoogleButton({ className }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <GoogleIcon className="mr-2" />
      <span>Sign up with Google</span>
    </div>
  );
}

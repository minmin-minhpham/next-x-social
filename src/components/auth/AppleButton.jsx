import AppleIcon from "../icons/AppleIcon";

export default function AppleButton({ className }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <AppleIcon />
      <span>Sign up with Apple</span>
    </div>
  );
}

import {
  EmojiIcon,
  GifIcon,
  ImageIcon,
  LocationIcon,
  PollIcon,
  ScheduleIcon,
} from "../icons";

export default function Toolbar({ onMediaChange, fileInputRef }) {
  return (
    <div className="flex flex-wrap gap-4">
      <input
        multiple
        type="file"
        id="fileMedia"
        name="fileMedia"
        accept="image/*,video/*"
        ref={fileInputRef}
        onChange={onMediaChange}
        className="hidden"
      />
      <label htmlFor="fileMedia">
        <ImageIcon className="cursor-pointer" />
      </label>
      <GifIcon className="cursor-not-allowed opacity-50" />
      <EmojiIcon className="cursor-not-allowed opacity-50" />
      <PollIcon className="cursor-not-allowed opacity-50" />
      <ScheduleIcon className="cursor-not-allowed opacity-50" />
      <LocationIcon className="cursor-not-allowed opacity-50" />
    </div>
  );
}

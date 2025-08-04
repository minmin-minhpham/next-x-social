import ImagePreview from "./ImagePreview";
import VideoPreview from "./VideoPreview";

export default function MediaPreview({ mediaList, onMediaListChange }) {
  const images = mediaList.filter(({ _, file }) => file.type.includes("image"));
  const videos = mediaList.filter(({ _, file }) => file.type.includes("video"));

  const handleRemoveMedia = (id) => {
    const newList = mediaList.filter((media) => media.id !== id);

    onMediaListChange(newList);
  };

  return (
    <>
      {images.length > 0 && (
        <div
          className="w-full overflow-x-auto flex snap-x pt-1 pb-3 pr-8 items-center"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#2f3336 transparent",
          }}
        >
          {images.map((img) => (
            <ImagePreview
              key={img.id}
              item={img}
              onRemove={handleRemoveMedia}
            />
          ))}
        </div>
      )}

      {/* {videos.length > 0 && (
        <div
          className="w-full overflow-x-auto flex snap-x pt-1 pb-3 pr-8  items-center"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#2f3336 transparent",
          }}
        >
          {videos.map((video) => (
            <VideoPreview
              key={video.id}
              item={video}
              onRemove={handleRemoveMedia}
            />
          ))}
        </div>
      )} */}
    </>
  );
}

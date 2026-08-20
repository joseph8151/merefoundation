import type { Video } from "@/data/videos";

export default function VideoEmbed({ video }: { video: Video }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="aspect-video w-full overflow-hidden bg-sand-beige">
        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}`}
          title={video.title}
          className="h-full w-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <p className="text-sm text-charcoal/70">{video.title}</p>
    </div>
  );
}

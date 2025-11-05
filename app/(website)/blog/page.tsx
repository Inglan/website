import PostCard from "@/components/post-card";

export default function Blog() {
  return (
    <div className="max-w-4xl w-full mx-auto border border-t-0 border-dashed">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <PostCard
            key={index}
            title="Test article"
            slug="test-article"
            date="06/07/1969"
            excerpt="Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article Test article"
          />
        ))}
    </div>
  );
}

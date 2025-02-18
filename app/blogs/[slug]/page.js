import { notFound } from 'next/navigation';

export default function BlogPage({ params }) {
  const { slug } = params;
  if (slug === undefined) {
    notFound();
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Blog Post: {slug}</h1>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p>Content for blog post {slug} will go here.</p>
      </div>
    </div>
  );
}

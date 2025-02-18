export default function BlogPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">My Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example blog post */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">Blog Post Title 1</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <a href="#" className="text-blue-500 mt-4 inline-block">
            Read More
          </a>
        </div>
        {/* Example blog post */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">Blog Post Title 2</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <a href="#" className="text-blue-500 mt-4 inline-block">
            Read More
          </a>
        </div>
        {/* Example blog post */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">Blog Post Title 3</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <a href="#" className="text-blue-500 mt-4 inline-block">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

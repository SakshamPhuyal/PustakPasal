export default function addBooks(){
    return(
        <div>
            <div>
            <p className="text-5xl font-bold ml-15 mt-6">Add Books</p>
            
      <form className="ml-35 mr-80 mt-5 space-y-5">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="Enter book title"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Author</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="Enter author name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="Rs"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select className="w-full border rounded-md p-2">
            <option>Select a category</option>
            <option>Fiction</option>
            <option>Non-fiction</option>
            <option>Textbook</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Upload Image</label>
          <input type="file" className="w-full" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            className="w-full border rounded-md p-2"
            rows={4}
            placeholder="Enter book description"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Submit
        </button>
      </form>

            </div>
        </div>
    );

}
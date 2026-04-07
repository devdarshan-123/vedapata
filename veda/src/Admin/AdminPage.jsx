import { useEffect, useState } from "react";

function AdminPage() {

  const [products, setProducts] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [editId, setEditId] = useState(null);

  // FETCH PRODUCTS
  const fetchProducts = () => {
    fetch("http://localhost:8081/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // HANDLE IMAGE UPLOAD → BASE64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // base64
    };
    reader.readAsDataURL(file);
  };

  // ADD / UPDATE PRODUCT
  const handleSubmit = async () => {

    if (!title || !description || !image || !price) {
      alert("Fill all fields");
      return;
    }

    const bodyData = {
      title,
      description,
      image_url: image,
      price
    };

    if (editId) {
      await fetch(`http://localhost:8081/api/products/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
      });

      setEditId(null);

    } else {
      await fetch("http://localhost:8081/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
      });
    }

    setTitle("");
    setDescription("");
    setImage("");
    setPrice("");

    fetchProducts();
  };

  // DELETE
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8081/api/products/${id}`, {
      method: "DELETE"
    });

    fetchProducts();
  };

  // EDIT
  const handleEdit = (item) => {
    setEditId(item.id);
    setTitle(item.title);
    setDescription(item.description);
    setImage(item.image_url);
    setPrice(item.price || "");
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] p-10 font-[Vidaloka]">

      <h1 className="text-2xl text-[#4E2D00] mb-6">
        Admin Panel
      </h1>

      {/* FORM */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10">

        <h2 className="mb-4 text-lg">
          {editId ? "Edit Product" : "Add Product"}
        </h2>

        <div className="space-y-4">

          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-[#d6ccc2] rounded-full px-4 py-2"
          />

          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-[#d6ccc2] rounded-full px-4 py-2"
          />

          {/* PRICE FIELD */}
          <input
            type="number"
            placeholder="Price (₹)"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-[#d6ccc2] rounded-full px-4 py-2"
          />

          {/* IMAGE UPLOAD */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border border-[#d6ccc2] rounded-full px-4 py-2"
          />

          <button
            onClick={handleSubmit}
            className="bg-[#E6891A] text-white px-6 py-2 rounded-full"
          >
            {editId ? "Update Product" : "Add Product"}
          </button>

        </div>

      </div>

      {/* PRODUCT LIST */}
      <h2 className="text-xl text-[#4E2D00] mb-6">
        List of Current Products
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {products.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-xl shadow-md">

            <img
              src={item.image_url}
              className="h-40 w-full object-cover rounded-lg mb-3"
            />

            <h3 className="text-[#4E2D00]">{item.title}</h3>

            <p className="text-sm text-[#6b5e55] mb-2 font-[Bellefair]">
              {item.description}
            </p>

            {/* SHOW PRICE */}
            <p className="text-[#4E2D00] font-semibold mb-3">
              ₹{item.price || 500}
            </p>

            <div className="flex gap-3">

              <button
                onClick={() => handleEdit(item)}
                className="px-4 py-1 rounded-full border border-[#4E2D00] text-[#4E2D00]"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="px-4 py-1 rounded-full border border-red-500 text-red-500"
              >
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AdminPage;
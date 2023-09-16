const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Welcome to Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black m-2 p-2 rounded-sm"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black m-2 p-2 rounded-sm"
          placeholder="message"
        />
        <button className="border border-black m-2 p-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

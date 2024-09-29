export default function Header({ props }) {
  return (
    <header className="bg-Primary text-white py-4 mr mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Your Patients</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-gray-200">Home</li>
            <li className="hover:text-gray-200">About</li>
            <li className="hover:text-gray-200">Services</li>
            <li className="hover:text-gray-200">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

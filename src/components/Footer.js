export default function Footer() {
    return(
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <div className="flex justify-center space-x-6 mb-4">
                <a href="#" className="hover:text-gray-400">Home</a>
                <a href="#" className="hover:text-gray-400">About</a>
                <a href="#" className="hover:text-gray-400">Services</a>
                <a href="#" className="hover:text-gray-400">Contact</a>
                </div>
                <p className="text-sm">
                &copy; 2024 Your Company Name. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 mt-16">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div>
        <h4 className="font-bold mb-2">Solutions</h4>
        <ul>
          <li>Education</li>
          <li>Business</li>
          <li>Personal</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Products</h4>
        <ul>
          <li>AI Report Writer</li>
          <li>Lesson Planner</li>
          <li>Fast UI Builder</li>
          <li>AI Blogger</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Terms and Policies</h4>
        <ul>
          <li>Terms of Services</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-2">Explore</h4>
        <ul>
          <li>About Us</li>
          <li>News</li>
        </ul>
      </div>
    </div>
    <div className="mt-8 flex justify-between items-center">
      <p>© 2025 NAMA, All Rights Reserved</p>
      <div className="flex gap-4">
        <span>🌐</span>
        <span>📘</span>
        <span>📷</span>
        <span>🟢</span>
        <span>💬</span>
      </div>
    </div>
  </footer>
    
  );
}
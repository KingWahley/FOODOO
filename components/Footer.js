export default function Footer() {
  return (
    <footer className="bg-cream px-10 pt-20 pb-12">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-4">Fooodish</h3>
          <p className="text-sm text-gray-500 max-w-xs">
            Continue Foodish 2023 all rights reserved
          </p>

          <h4 className="mt-10 text-lg font-semibold text-primary">
            Follow Us On
          </h4>

          <div className="mt-4 flex items-center gap-4 text-gray-500">
            <span className="hover:text-primary cursor-pointer">Ⓟ</span>
            <span className="hover:text-primary cursor-pointer">◎</span>
            <span className="hover:text-primary cursor-pointer">𝕏</span>
            <span className="hover:text-primary cursor-pointer">ⓕ</span>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-xl font-semibold text-primary mb-6">Menu</h4>
          <ul className="space-y-4 text-sm text-gray-600">
            <li>Home</li>
            <li>Offers</li>
            <li>Service</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="text-xl font-semibold text-primary mb-6">
            Information
          </h4>
          <ul className="space-y-4 text-sm text-gray-600">
            <li>Menu</li>
            <li>Quality</li>
            <li>Make a Choice</li>
            <li>Salad With Vegetable</li>
            <li>Fast Delivery</li>
            <li>Subscribe</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xl font-semibold text-primary mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-600">
            <li>+123 456 789</li>
            <li>Explore</li>
            <li>Info@Foodish.Com</li>
            <li>1245, New York, USA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

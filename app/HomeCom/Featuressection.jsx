'use client';
export default function FeaturesSection({
  badge,
  heading,
  subheading,
  downloadText,
  downloadUrl,
  getstartBtn,
  getstartUrl,
  features,
}) {
  const defaultFeatures = [
    {
      id: 'job-management',
      icon: (
        <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 25V5C20 4.33696 19.7366 3.70107 19.2678 3.23223C18.7989 2.76339 18.163 2.5 17.5 2.5H12.5C11.837 2.5 11.2011 2.76339 10.7322 3.23223C10.2634 3.70107 10 4.33696 10 5V25" stroke="white" strokeWidth="2.5" strokeLinecap="round"strokeLinejoin="round"/>
          <path d="M25 7.5H5C3.61929 7.5 2.5 8.61929 2.5 10V22.5C2.5 23.8807 3.61929 25 5 25H25C26.3807 25 27.5 23.8807 27.5 22.5V10C27.5 8.61929 26.3807 7.5 25 7.5Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Job & Work Order Management',
      description:
        'Create, assign, and track hail repair jobs from start to finish. Know exactly what\'s in progress, completed, or pending.',
      isDark: false,
    },
    {
      id: 'customer-management',
      icon: (
        <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.9999 26.25V23.75C19.9999 22.4239 19.4732 21.1521 18.5355 20.2145C17.5978 19.2768 16.326 18.75 14.9999 18.75H7.49994C6.17386 18.75 4.90209 19.2768 3.96441 20.2145C3.02672 21.1521 2.49994 22.4239 2.49994 23.75V26.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.2499 13.75C14.0114 13.75 16.2499 11.5114 16.2499 8.75C16.2499 5.98858 14.0114 3.75 11.2499 3.75C8.48852 3.75 6.24994 5.98858 6.24994 8.75C6.24994 11.5114 8.48852 13.75 11.2499 13.75Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M27.5 26.2496V23.7496C27.4992 22.6418 27.1304 21.5656 26.4517 20.69C25.773 19.8144 24.8227 19.1891 23.75 18.9121" stroke="white" strokeWidth="2.5" strokeLinecap="round"strokeLinejoin="round"/>
          <path d="M20 3.91211C21.0755 4.18749 22.0288 4.81299 22.7095 5.69C23.3903 6.56701 23.7598 7.64565 23.7598 8.75586C23.7598 9.86607 23.3903 10.9447 22.7095 11.8217C22.0288 12.6987 21.0755 13.3242 20 13.5996" stroke="white" strokeWidth="2.5" strokeLinecap="round"strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Customer Management',
      description:
        'Store customer details, vehicle information, contact data, and repair history — all organized and searchable.',
      isDark: true,
    },
    {
      id: 'technician-management',
      icon: (
        <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.3747 7.87467C18.1457 8.10833 18.0174 8.42248 18.0174 8.74967C18.0174 9.07686 18.1457 9.39101 18.3747 9.62467L20.3747 11.6247C20.6084 11.8537 20.9225 11.982 21.2497 11.982C21.5769 11.982 21.891 11.8537 22.1247 11.6247L26.8372 6.91217C27.4657 8.30116 27.6561 9.84871 27.3828 11.3486C27.1095 12.8485 26.3856 14.2295 25.3075 15.3075C24.2295 16.3856 22.8485 17.1095 21.3486 17.3827C19.8487 17.656 18.3012 17.4657 16.9122 16.8372L8.2747 25.4747C7.77742 25.9719 7.10296 26.2513 6.3997 26.2513C5.69644 26.2513 5.02198 25.9719 4.5247 25.4747C4.02742 24.9774 3.74805 24.3029 3.74805 23.5997C3.74805 22.8964 4.02742 22.2219 4.5247 21.7247L13.1622 13.0872C12.5337 11.6982 12.3433 10.1506 12.6166 8.65074C12.8899 7.15085 13.6138 5.76986 14.6918 4.69182C15.7699 3.61378 17.1509 2.88988 18.6508 2.6166C20.1507 2.34331 21.6982 2.53363 23.0872 3.16217L18.3872 7.86217L18.3747 7.87467Z" stroke="white"strokeWidth="2.5" strokeLinecap="round"strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Technician Management',
      description:
        'Assign jobs efficiently. Track productivity. Monitor performance. Keep your team aligned and accountable.',
      isDark: false,
    },
    {
      id: 'vehicle-tracking',
      icon: (
        <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.75 21.25H26.25C27 21.25 27.5 20.75 27.5 20V16.25C27.5 15.125 26.625 14.125 25.625 13.875C23.375 13.25 20 12.5 20 12.5C20 12.5 18.375 10.75 17.25 9.625C16.625 9.125 15.875 8.75 15 8.75H6.25C5.5 8.75 4.875 9.25 4.5 9.875L2.75 13.5C2.58447 13.9828 2.5 14.4896 2.5 15V20C2.5 20.75 3 21.25 3.75 21.25H6.25" stroke="white" strokeWidth="2.5"strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.75 23.75C10.1307 23.75 11.25 22.6307 11.25 21.25C11.25 19.8693 10.1307 18.75 8.75 18.75C7.36929 18.75 6.25 19.8693 6.25 21.25C6.25 22.6307 7.36929 23.75 8.75 23.75Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.25 21.25H18.75" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.25 23.75C22.6307 23.75 23.75 22.6307 23.75 21.25C23.75 19.8693 22.6307 18.75 21.25 18.75C19.8693 18.75 18.75 19.8693 18.75 21.25C18.75 22.6307 19.8693 23.75 21.25 23.75Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Vehicle Tracking',
      description:
        'Log VIN numbers, make, model, damage details, and repair notes in one centralized system.',
      isDark: false,
    },
    {
      id: 'invoice-tracking',
      icon: (
       <svg width={30} height={30} viewBox="0 0 30 30" fill="none"xmlns="http://www.w3.org/2000/svg">
          <path d="M15 2.5V27.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21.25 6.25H11.875C10.7147 6.25 9.60188 6.71094 8.78141 7.53141C7.96094 8.35188 7.5 9.46468 7.5 10.625C7.5 11.7853 7.96094 12.8981 8.78141 13.7186C9.60188 14.5391 10.7147 15 11.875 15H18.125C19.2853 15 20.3981 15.4609 21.2186 16.2814C22.0391 17.1019 22.5 18.2147 22.5 19.375C22.5 20.5353 22.0391 21.6481 21.2186 22.4686C20.3981 23.2891 19.2853 23.75 18.125 23.75H7.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Invoice & Payment Tracking',
      description:
        'Generate invoices instantly. Mark paid/unpaid. Eliminate confusion and improve cash flow.',
      isDark: false,
    },
    {
      id: 'business-dashboard',
      icon: (
        <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.75 3.75V23.75C3.75 24.413 4.01339 25.0489 4.48223 25.5178C4.95107 25.9866 5.58696 26.25 6.25 26.25H26.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22.5 21.25V11.25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.2501 21.25V6.25" stroke="white" strokeWidth="2.5"strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 21.25V17.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Business Dashboard',
      description:
        'See your entire operation at a glance — jobs, revenue, staff, expenses, and growth metrics.',
      isDark: false,
    },
  ];

  // Use provided features or default features
  const featuresToDisplay = features && features.length > 0 ? features : defaultFeatures;

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          {/* Badge - Show only if provided */}
          {badge && (
            <div className="inline-flex items-center px-4 py-1.5 bg-[#27272A] text-[17px] rounded-full mb-4 sm:mb-5 md:mb-6">
              <span className="text-white text-xs sm:text-sm font-medium">{badge}</span>
            </div>
          )}

          {/* Title - Show only if provided */}
          {heading && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[#2B2B2B] mb-2 sm:mb-3">
              {heading}
            </h2>
          )}

          {/* Subheading - Show only if provided */}
          {subheading && (
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[#FB2C36]">
              {subheading}
            </h3>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {featuresToDisplay.map((feature) => (
            <div
              key={feature.id}
              className="cursor-pointer relative p-5 sm:p-6 md:p-8 group hover:bg-[#000] rounded-2xl border border-black transition-all duration-300 hover:shadow-lg hover:border-black"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-5 md:mb-6 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center flex-shrink-0">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 text-black group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-base lg:text-lg leading-relaxed text-[#2B2B2B] group-hover:text-white transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons - Show only if at least one button prop is provided */}
        {(downloadText || getstartBtn) && (
          <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-12 md:mt-16">
            {/* Download Button - Show only if downloadText is provided */}
            {downloadText && (
              <a href={downloadUrl} className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#D80007] hover:bg-black text-white text-sm sm:text-base rounded-lg transition-colors duration-200 inline-block text-center">
                {downloadText}
              </a>
            )}

            {/* Get Started Button - Show only if getstartBtn is provided */}
            {getstartBtn && (
              <a href={getstartUrl} className="px-6 sm:px-8 md:px-12 lg:px-16 py-2.5 sm:py-3 bg-white hover:bg-black hover:text-white hover:border-white text-[#E7000B] border border-red-600 rounded-lg transition-colors duration-200 inline-block text-center text-sm sm:text-base">
                {getstartBtn}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
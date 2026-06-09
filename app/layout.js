import './globals.css'

export const metadata = {
  title: 'کابینت ۲۱ | طراحی مدرن دکوراسیون و کابینت ۳بعدی',
  description: 'طراحی حرفه‌ای و اجرای لوکس کابینت و دکوراسیون داخلی',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-slate-950 text-slate-100 antialiased min-height-screen flex flex-col justify-between font-sans">
        
        {/* هدر و منوی بالای سایت */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-wider text-amber-500">CABINET<span className="text-white">21</span></span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#" className="hover:text-amber-400 transition-colors">صفحه اصلی</a>
              <a href="#services" className="hover:text-amber-400 transition-colors">خدمات طراحی</a>
              <a href="#portfolio" className="hover:text-amber-400 transition-colors">نمونه کارها</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">مشاوره و قرارداد</a>
            </nav>
            <div>
              <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-amber-500/10">
                سفارش طراحی ۳بعدی
              </a>
            </div>
          </div>
        </header>

        {/* محتوای اصلی صفحات */}
        <main className="flex-grow">
          {children}
        </main>

        {/* فوتر انتهای سایت */}
        <footer id="contact" className="bg-slate-900 border-t border-slate-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-amber-500 mb-4">کابینت ۲۱</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                خلق فضاهای مدرن، لوکس و بهینه‌سازی لوکیشن‌های اداری و مسکونی با متدهای روز دنیا و رندرهای واقع‌گرایانه ۳بعدی قبل از اجرا.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">دسترسی سریع</h3>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li><a href="#services" className="hover:text-amber-400">خدمات طراحی دکوراسیون</a></li>
                <li><a href="#portfolio" className="hover:text-amber-400">گالری رندرهای ۳بعدی</a></li>
                <li><a href="#" className="hover:text-amber-400">تعرفه‌ها و قیمت‌ها</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-4">ارتباط با ما</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-2">مازندران، بابل</p>
              <p className="text-sm text-amber-500 font-semibold">اینستاگرام: @cabinet_21</p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-slate-800/60 text-center text-xs text-slate-500">
            © ۱۴۰۵ کابینت ۲۱. تمامی حقوق محفوظ است.
          </div>
        </footer>

      </body>
    </html>
  )
}
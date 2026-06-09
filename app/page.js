export default function Home() {
  return (
    <div className="w-full">
      
      {/* بخش هیرو / بنر اصلی سایت */}
      <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 pt-24 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 mb-6 border border-amber-500/20">
            ✨ متخصص در طراحی آشپزخانه‌های مدرن و کلاسیک
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight max-w-4xl mx-auto">
            رویاهایتان را قبل از اجرا، <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">۳بعدی و زنده</span> ببینید
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            استودیو طراحی «کابینت ۲۱»، طراح تخصصی مدرن‌ترین کابینت‌های آشپزخانه، کمد دیواری و دکوراسیون داخلی با خروجی رندرهای فوق رئالیستیک.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#portfolio" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20">
              مشاهده نمونه کارها
            </a>
            <a href="#services" className="border border-slate-700 hover:border-slate-500 text-white font-medium px-8 py-3.5 rounded-xl transition-all bg-slate-900/50">
              خدمات ما
            </a>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      </section>

      {/* بخش ویژگی‌ها و خدمات */}
      <section id="services" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white">چرا طراحی دکوراسیون با کابینت ۲۱؟</h2>
            <p className="mt-4 text-slate-400 text-sm">بالاترین دقت در ابعاد، متریال‌شناسی دقیق و نورپردازی واقع‌گرایانه در محیط ۳ds Max</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-xl font-bold mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                ۰۱
              </div>
              <h3 className="text-xl font-bold text-white mb-3">رندرهای واقع‌گرایانه (4K)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                قبل از خرید متریال و هزینه برای ساخت، آشپزخانه خود را با جزئیات کامل متریال، چوب و نورپردازی واقعی تماشا کنید.
              </p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-xl font-bold mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                ۰۲
              </div>
              <h3 className="text-xl font-bold text-white mb-3">طراحی بهینه و مهندسی‌شده</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                استفاده حداکثری از فضاهای پرت و کور آشپزخانه و کمدها با استانداردهای ارگونومی برای راحتی در استفاده روزمره.
              </p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-xl font-bold mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                ۰۳
              </div>
              <h3 className="text-xl font-bold text-white mb-3">آلبوم نقشه‌های اجرایی</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                ارائه ابعاد دقیق و کدهای فنی مخصوص کابینت‌ساز و مجری طرح جهت به حداقل رساندن خطاهای حین ساخت و برش‌کاری.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* بخش گالری نمونه‌کارها */}
      <section id="portfolio" className="py-24 bg-slate-900/40 border-t border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white">آخرین پروژه‌ها و رندرها</h2>
              <p className="mt-2 text-slate-400 text-sm">کابینت‌های اجرا شده و طرح‌های ۳بعدی مدرن و کلاسیک</p>
            </div>
            <span className="text-sm text-amber-400 font-medium">پروژه‌های طراحی ۱۴۰۵ ↗</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* نمونه کار ۱ */}
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group hover:shadow-xl hover:shadow-amber-500/5 transition-all">
              <div className="h-64 overflow-hidden relative bg-slate-800">
                <img src="/project1.jpg" alt="رندر کابینت مدرن" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-white">پروژه مدرن - های‌گلاس و فرامید</h4>
                <p className="text-xs text-slate-400 mt-1">سبک مدرن / ترکیب طوسی تیره و طرح چوب</p>
              </div>
            </div>

            {/* نمونه کار ۲ */}
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group hover:shadow-xl hover:shadow-amber-500/5 transition-all">
              <div className="h-64 overflow-hidden relative bg-slate-800">
                <img src="/project2.jpg" alt="رندر کابینت نئوکلاسیک" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-white">پروژه نئوکلاسیک - رنگ پلی‌اورتان</h4>
                <p className="text-xs text-slate-400 mt-1">سبک نئوکلاسیک / شیک و مانا</p>
              </div>
            </div>

            {/* نمونه کار ۳ */}
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group hover:shadow-xl hover:shadow-amber-500/5 transition-all">
              <div className="h-64 overflow-hidden relative bg-slate-800">
                <img src="/project3.jpg" alt="طراحی کلوزت روم" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-white">طراحی کلوزت‌روم مدرن</h4>
                <p className="text-xs text-slate-400 mt-1">بهینه‌سازی فضا با تفکیک حداکثری قفسه‌ها</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
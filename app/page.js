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
              <div className="h-64 overflow-hidden relative">
                {/* اسم عکس اولت رو اینجا بنویس */}
                <img src="/project1.jpg" alt="رندر کابینت مدرن" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-white">پروژه مدرن - های‌گلاس و فرامید</h4>
                <p className="text-xs text-slate-400 mt-1">سبک مدرن / ترکیب طوسی تیره و طرح چوب</p>
              </div>
            </div>

            {/* نمونه کار ۲ */}
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group hover:shadow-xl hover:shadow-amber-500/5 transition-all">
              <div className="h-64 overflow-hidden relative">
                {/* اسم عکس دومت رو اینجا بنویس */}
                <img src="/project2.jpg" alt="رندر کابینت نئوکلاسیک" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-white">پروژه نئوکلاسیک - رنگ پلی‌اورتان</h4>
                <p className="text-xs text-slate-400 mt-1">سبک نئوکلاسیک / شیک و مانا</p>
              </div>
            </div>

            {/* نمونه کار ۳ */}
            <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group hover:shadow-xl hover:shadow-amber-500/5 transition-all">
              <div className="h-64 overflow-hidden relative">
                {/* اسم عکس سومت رو اینجا بنویس */}
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
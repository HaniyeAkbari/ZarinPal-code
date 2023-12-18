
export default function Footer() {
    return (
        <footer className="w-[90%] mt-[80px]">
            
            <section className="w-full flex flex-wrap justify-center items-center border-2 rounded-3xl p-5">
                <h2 className="text-4xl m-1 font-bold w-full text-center">به خانواده میلیونی زرین پال بپیوندید</h2>
                <h3 className="w-full m-3 text-2xl font-bold text-stone-500 text-center">یک ماه رایگان، هدیه‌ی عضویت زرین‌پال به شما</h3>
                <div className="border-2 text-lg m-3 p-3 bg-[#ffd900] rounded-3xl cursor-pointer">شروع کنید</div>
            </section>

            <div className="w-full flex flex-wrap justify-between items-center bg-[#f6f0e9] md:rounded-full rounded-3xl mt-12 ">
                <div className="md:w-[15%] w-full flex justify-center text-lg cursor-pointer p-2"><i className="bi bi-arrow-left flex items-center text-xl me-2 text-[#28457b]"></i>درخواست پشتیبانی</div>
                <div className="md:w-[80%] w-full flex flex-wrap md:justify-end justify-center">
                    <div className="m-2 text-lg  p-2 md:border-r  border-[#28457b]"><span> 021 - 000000 </span>پشتیبانی خریداران</div>
                    <div className="m-2 text-lg  p-2 md:border-r  border-[#28457b]"><span> 021 - 000000 </span> پشتیبانی پذیرندگان</div>
                    <div className="m-2 text-lg p-2">پشتیبانی ۲۴ ساعته، ۷ روز هفته </div>
                </div>
            </div>

            <section className="flex flex-wrap mt-12">
                <div className="md:w-1/5 p-2 w-full ">
                    <h4 className="text-lg mb-4 text-center">زرین پال در شبکه های اجتماعی</h4>
                    <div className="flex md:justify-evenly justify-center">
                        <i className="bi bi-youtube me-2  text-2xl text-[#28457b] hover:text-[#97a9cb] cursor-pointer transition duration-500"></i>
                        <i className="bi bi-telegram me-2   text-2xl text-[#28457b] hover:text-[#97a9cb] cursor-pointer transition duration-500"></i>
                        <i className="bi bi-instagram me-2   text-2xl text-[#28457b] hover:text-[#97a9cb] cursor-pointer transition duration-500"></i>
                        <i className="bi bi-linkedin me-2  text-2xl text-[#28457b] hover:text-[#97a9cb] cursor-pointer transition duration-500"></i>
                    </div>
                </div>
                <ul className="md:w-1/5 w-1/4 p-2 md:text-xl text-xs">
                    <li className="font-bold mb-2">منابع</li>
                    <li>دریافت شماره شبا</li>
                    <li>زرین بین</li>
                    <li>توسعه دهندگان</li>
                    <li>وبلاگ</li>
                </ul>
                <ul className="md:w-1/5 w-1/4 p-2 md:text-xl text-xs">
                    <li className="font-bold mb-2">ارتباط بیشتر</li>
                    <li>تماس با  ما</li>
                    <li>قوانین و مقررات</li>
                    <li>حریم خصوصی</li>
                </ul>
                <ul className="md:w-1/5 w-1/4 p-2 md:text-xl text-xs">
                    <li className="font-bold mb-2">محصولات</li>
                    <li>زرین‌ لینک</li>
                    <li>درگاه پرداخت اینترنتی</li>
                    <li>زرین کارت</li>
                    <li>عیان</li>
                    <li></li>
                    <li>استرداد وجه</li>
                    <li>تسویه پیش از موعد</li>
                    <li>تسهیم فردایی</li>
                </ul>
                <ul className="md:w-1/5 w-1/4 p-2 md:text-xl text-xs">
                    <li className="font-bold mb-2">آشنایی با زرین پال</li>
                    <li>تعرفه ها</li>
                    <li>درباره ما</li>
                    <li>سوالات متداول</li>
                    <li>همکاری در فروش</li>

                </ul>
            </section>
        </footer>
    )
}
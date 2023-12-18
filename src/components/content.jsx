import arrowDown from './../assets/img/arrowbottom.svg'
import wave from './../assets/img/wave.svg'
import home from './../assets/img/home.svg'
import payment from './../assets/img/pg.svg'
import social from './../assets/img/social-image.svg'
import zarinCard from './../assets/img/zarincard .svg'
import zarinPlus from './../assets/img/zarinplus.svg'

export default function Content() {


    return (
        <section className='w-[90%] mt-[80px]'>
            <div className='w-full min-h-[90vh] bg-[#28457b] flex flex-wrap relative z-[-2]'>
                <img className='absolute w-3/4 h-full object-cover  top-0 md:flex hidden left-0 brightness-150' src={wave} alt="wave" />
                <figure className='flex w-full md:w-1/2 items-center justify-center relative z-20'>
                    <img className='w-[90%] h-[90%] ms-12 md:ps-8' src={home} alt="home" />
                </figure>
                <div className='md:w-1/2 w-full flex flex-wrap items-center justify-center'>
                    <div className='p-3 text-white'>
                        <h1 className='text-4xl font-bold mb-12'>
                            بیش از ۱۳ سال انتخاب مطمئنِ کسب و کارهای آنلاین
                        </h1>
                        <p className='text-lg relative z-3 border-b-2 pb-4 lg:border-none'>
                            زرین‌پال، اولین پرداخت‌یار پیشگام کشور، با به‌کارگیری سبک و استانداردهای جدید در ارائه‌ی خدمات درگاه پرداخت اینترنتی، سرویس‌های متنوعی در حوزه‌ی پرداخت الکترونیک را برای کسب و کارها ارائه کرده است؛ با این هدف که در افزایش سهم تجارت الکترونیکی در تولید ناخالص ملی و کمک به رشد و توسعه‌ی کسب‌وکارها، نقش سازنده‌‌ای ایفا کند
                        </p>
                        <button className="w-[80px] font-bold rounded-2xl me-5 lg:mt-12 mt-2 h-[40px] bg-[#435a8a] cursor-pointer">ورود</button>
                        <button className="w-[80px] font-bold rounded-2xl me-5 lg:mt-12 mt-2 h-[40px] bg-[#ffd900] text-black cursor-pointer">ثبت نام</button>
                    </div>
                    <img src={arrowDown} className=' hidden md:flex absolute bottom-[-13.5%] left-1/2 translate-x-[-50%] translate-y-[-50%] w-[150px]' alt="" />
                    <i className='bi bi-chevron-compact-down hidden md:flex  absolute text-2xl bottom-[-5%] left-1/2 translate-x-[-50%] cursor-pointer translate-y-[-50%] z-30 ' ></i>

                </div>

            </div>
            

                <Content1 />

                <Content2/>
            
                <Content3/>
            
                <Content4/>


            <section className='w-full flex flex-wrap relative z-[-2] mt-12'>
                <div className='md:w-1/3 p-5 md:border-l-2 pe-5 w-full order-2 h-[300px] '>
                    <h3 className='text-2xl font-bold flex justify-end'>مسیردهی هوشمند<i className='bi bi-arrow-down-up text-3xl flex items-center text-[#25487b] ms-3'></i></h3>
                    <p className='my-3 pb-3 border-b-2 '>استانداردهای متفاوت زرین‌پال در بازه‌های زمانی مختلف، باعث می‌شود کاربران به بهترین درگاه پرداخت با بالاترین میزان تراکنش‌های موفق هدایت شوند</p>

                    <h3 className='text-2xl font-bold flex justify-end'>امنیت پرداخت<i className='bi bi-headset text-3xl flex items-center text-[#25487b] ms-3'></i></h3>
                    <p className='my-3 pb-3 border-b-2 md:border-none'>درگاه امن زرین‌پال، ضمانتی برای امنیت اطلاعات بانکی افراد، هنگام پرداخت‌‌های اینترنتی آن‌هاست</p>

                </div>
                <div className='md:w-1/3 p-5 w-full order-1 h-[300px]'>
                    <div>
                        <h3 className='text-2xl font-bold flex justify-end'>ضمانت پرداخت<i className='bi bi-patch-check text-3xl flex items-center text-[#25487b] ms-3'></i></h3>
                        <p className='my-3 pb-3 border-b-2'>درگاه پرداخت زرین‌پال، تجربه‌ی پرداخت اینترنتی آسان، سریع و امن را به مشتریان کسب و کارهای آنلاین هدیه می‌دهد</p>

                        <h3 className='text-2xl font-bold flex justify-end'>پشتیبانی 24/7<i className='bi bi-headset text-3xl flex items-center text-[#25487b] ms-3'></i></h3>
                        <p className='my-3 pb-3 border-b-2 md:border-none'>هفت روزِ هفته، با پشتیبانی ۲۴ ساعته‌ی زرین‌پال، آماده‌ی پاسخ‌گویی و راهنمایی به کاربران هستیم</p>
                    </div>
                </div>
                <div className='md:w-1/3 p-5 order-0 md:order-3 w-full'>
                    <h2 className='text-3xl font-bold'>ویژگی های درگاه پرداخت زرین پال</h2>
                    <p>درگاه پرداخت اینترنتی زرین‌پال، امکان مدیریت تراکنش‌های مالی در بستر وب را به راحتی امکان‌پذیر می‌کند و با پیاده‌سازی و اجرای راه‌کارهای هوشمندانه، باعث افزایش درصد تراکنش‌های موفق و سوددهی بیش‌تر می‌شود</p>
                </div>
            </section>

        </section>
    )
}


function Content1() {
    return (
        <div className='w-full min-h-[90vh] flex flex-wrap relative z-[-2] md:mt-5'>
            <div className='lg:w-1/2 w-full flex flex-wrap items-center justify-center md:order-0 order-1 '>
                <div className='p-3 '>
                    <h3 className='text-stone-500 text-xl'>درگاه پرداخت اینترنتی</h3>
                    <h2 className='text-4xl font-bold mb-12 mt-3'>
                        مهندسی شده برای رشد و فروش بیشتر
                    </h2>
                    <p className='text-lg relative z-3 border-b-2 pb-4 lg:border-none'>
                        ، (PSPها)درگاه پرداخت زرین‌پال، با اتصالِ همزمان به درگاه‌های متنوع و معتبر بانکی کاربران را به سریعترین و مطمئن ترین درگاه بانکی منتقل میکند و به واسطه ی قابلیت مسیردهی هوشمند، باعث افزایش درصد تراکنش های موفق می شود
                    </p>
                    <button className='w-[150px] font-bold rounded-2xl me-5 lg:mt-12 mt-2 h-[40px] bg-[rgba(232,239,254,.8)] text-[#28457b] cursor-pointer'>بیشتر بدانید</button>
                    <button className='w-[150px] font-bold rounded-2xl me-5 lg:mt-12 mt-2 h-[40px] bg-[#ffd900] text-black cursor-pointer'>ساخت درگاه پرداخت</button>

                </div>

            </div>
            <figure className='sm:flex hidden w-full lg:w-1/2 h-[90vh] items-center justify-center lg:order-1 md:order-0 relative z-20 '>
                <img className='h-[450px] w-[500px] object-cover object-left ' src={payment} alt="payment" />
            </figure>
        </div>
    )
}

// *************************

function Content2() {
    return (
        <div className='w-full flex flex-wrap relative z-[-2] md:mt-5'>
                <figure className='sm:flex hidden w-full lg:w-1/2 items-center justify-center relative z-20'>
                    <img className='' src={social} alt="social" />
                </figure>
                <div className='lg:w-1/2 w-full flex flex-wrap items-center justify-center'>
                    <div className='p-3 '>
                        <h3 className='text-stone-500 text-xl'>زرین لینک</h3>

                        <h2 className='text-4xl font-bold mb-12 mt-3'>
                            پرداخت در شبکه های اجتماعی
                        </h2>
                        <p className='text-lg relative z-3 border-b-2 pb-4 lg:border-none'>
                            زرین‌لینک با مدیریت فرآیند فروش به روشی هوشمندانه و سریع، باعث افزایش فروش محصولات و خدمات، از طریق شبکه‌های اجتماعی یا وب‌سایت می‌شود
                        </p>
                        <button className='w-[150px] font-bold rounded-2xl me-5 lg:mt-12 mt-2 h-[40px] bg-[rgba(232,239,254,.8)] text-[#28457b] cursor-pointer'>بیشتر بدانید</button>
                        <button className='w-[150px] font-bold rounded-2xl me-5 lg:mt-12 mt-2 h-[40px] bg-[#ffd900] text-black cursor-pointer'>ساخت زرین لینک</button>

                    </div>

                </div>

            </div>
    )
}


// *************************

function Content3() {
    return (
        <div className='w-full min-h-[90vh] flex flex-wrap relative z-[-2] md:mt-5'>

                <div className='lg:w-1/2 w-full flex flex-wrap items-center justify-center sm:order-1 lg:order-0 '>
                    <div className='p-3 '>
                        <h3 className='text-stone-500 text-xl'>زرین کارت</h3>
                        <h2 className='text-4xl font-bold mb-12 mt-3'>
                            طلایی ترین کارت بانکی
                        </h2>
                        <p className='text-lg relative z-3 border-b-2 pb-4 lg:border-none'>
                            زرین‌‌کارت یک کارتِ بانکی عضو شبکه‌‌ی شتاب و متصل به یک حساب بانکی است که از تمام ویژگی‌‌ها و امکانات یک حساب بانکی تمام عیار برخوردار است. زرین‌‌کارت این امکان را برای کاربران خود فراهم می‌‌سازد تا از تعرفه‌‌ی کارمزد کم‌‌تر در روزهای عادی و کارمزد رایگان در سه‌‌شنبه‌‌های طلاییِ زرین‌‌پال بهره‌‌مند شوند
                        </p>
                        <button className='w-[150px] font-bold rounded-2xl me-5 lg:mt-12 mt-2 h-[40px] bg-[rgba(232,239,254,.8)] text-[#28457b] cursor-pointer'>بیشتر بدانید</button>
                        <button className='w-[150px] font-bold rounded-2xl me-5 lg:mt-12 mt-2 h-[40px] bg-[#ffd900] text-black cursor-pointer'>درخواست زرین کارت</button>

                    </div>

                </div>
                <figure className='sm:flex hidden w-full lg:w-1/2 items-center justify-center relative sm:order-0 lg:order-1 z-20 '>
                    <img className='w-[410px] h-[300px] ms-12' src={zarinCard} alt="zarincard" />
                </figure>

            </div>

    )
}


// *************************

function Content4() {
    return (
        <div className='w-full flex flex-wrap relative z-[-2] mt-5'>
                <figure className='sm:flex hidden w-full lg:w-1/2 items-center justify-center relative z-20'>
                    <img className='' src={zarinPlus} alt="social" />
                </figure>
                <div className='lg:w-1/2 w-full flex flex-wrap items-center justify-center'>
                    <div className='p-3 '>
                        <h3 className='text-stone-500 text-xl'>تسهیم</h3>

                        <h2 className='text-4xl font-bold mb-12 mt-3'>
                            درگاه پرداخت اشتراکی
                        </h2>
                        <p className='text-lg relative z-3 border-b-2 pb-4 lg:border-none '>
                            تسهیم بهترین روش برای مدیریت مالی کسب‌ و کارهای شراکتی است که به واسطه‌ی آن، درآمد حاصل از فروش محصولات یا خدمات، در سهم‌های ثابت یا متغیر میان شرکای تجاری تقسیم شده و به صورت جداگانه به حساب هر شخص واریز می‌‌شود
                        </p>
                        <button className='w-[150px] font-bold rounded-2xl me-5 lg:mt-12 mt-2 h-[40px] bg-[rgba(232,239,254,.8)] text-[#28457b] cursor-pointer '>بیشتر بدانید</button>
                        <button className='w-[200px] font-bold rounded-2xl me-5 lg:mt-12 mt-2 h-[40px] bg-[#ffd900] text-black cursor-pointer '>درخواست فعال سازی تسهیم</button>

                    </div>

                </div>

            </div>
    )
}


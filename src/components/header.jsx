import logo from "./../assets/img/logo-white.svg"

export default function Header() {


    const openMenu = (e) => {
        console.log(e.target);
        e.target.nextElementSibling.style.transform = "translateY(0)"
    }

    const closeMenu = (e) => {
        e.target.parentElement.parentElement.style.transform = "translateY(-420px)"
    }

    return (
        <header className="w-[90%] left-1/2 translate-x-[-50%] flex flex-wrap justify-between items-center bg-[rgba(255,255,255,0.8)] backdrop-blur fixed top-0 2xl:relative  " >

            <div className="w-[70%] h-[50px] md:flex hidden text-[18px] ">

                <div className="lg:w-1/5 md:w-1/4  lg:p-3 p-2 flex justify-center items-center "><a className=" lg:p-3 p-1 lg:px-5 px-3 rounded-full text-[#28457b] bg-[rgba(232,239,254,.6)] hover:bg-[rgba(228,197,0,.15)] transition duration-300 " href="">زرین پال من</a></div>
                <ul className="flex lg:p-3 h-full lg:w-4/5 md:w-3/4 justify-evenly flex-row-reverse ">
                    <li className="flex justify-center items-center hover:cursor-pointer lg:mx-2 mx-1 lg:px-3 px-2 relative group ">
                        <i className="bi bi-chevron-compact-down text-xs flex items-end me-1"></i>محصولات
                        <div className="absolute top-[110%] left-1/2 translate-x-[-50%] w-[450px] justify-evenly hidden group-hover:flex border-t-8 border-[#ffd900] rounded-t-[30px] rounded-b-[20px]">
                            <ul className="w-1/2 z-999 bg-white rounded-tl-[20px]">
                                <li className="px-1 flex flex-wrap w-full justify-end items-center text-base py-3 hover:bg-[rgba(232,239,254,.6)] transition duration-400 rounded-tl-[20px]">زرین کارت
                                    <span className="text-xs flex w-full justify-end">طلایی ترین کارت بانکی</span>
                                </li>
                                <li className="px-1 flex flex-wrap w-full justify-end items-center text-base py-3 hover:bg-[rgba(232,239,254,.6)] transition duration-400">استرداد وجه
                                    <span className="text-xs flex w-full justify-end">مبلغ تراکنش را درلحظه برگشت بزنید</span>
                                </li>
                                <li className="px-1 flex flex-wrap w-full justify-end items-center text-base py-3 hover:bg-[rgba(232,239,254,.6)] transition duration-400">تسویه پیش از موعد
                                    <span className="text-xs flex w-full justify-end">دریافت موجودی قابل تسویه در سریع ترین زمان</span>
                                </li>
                                <li className="px-1 flex flex-wrap w-full justify-end items-center text-base py-3 hover:bg-[rgba(232,239,254,.6)] transition duration-400">تسهیم فردایی
                                    <span className="text-xs flex w-full justify-end">تقسیم و واریز مبلغ به شرکای تجاری</span>
                                </li>
                            </ul>
                            <ul className="w-1/2 z-999 bg-white rounded-tr-[20px]">
                                <li className="px-1 flex flex-wrap w-full justify-end items-center text-base py-3 hover:bg-[rgba(232,239,254,.6)] transtion duration-400 rounded-tr-[20px]">درگاه پرداخت
                                    <span className="text-xs flex w-full justify-end">مهندسی شده برای فروش بیشتر</span>
                                </li>
                                <li className="px-1 flex flex-wrap w-full justify-end items-center text-base py-3 hover:bg-[rgba(232,239,254,.6)] transtion duration-400">عیان
                                    <span className="text-xs flex w-full justify-end">اهراز هویت واقعی خریدار</span>
                                </li>
                                <li className="px-1 flex flex-wrap w-full justify-end items-center text-base py-3 hover:bg-[rgba(232,239,254,.6)] transtion duration-400">زرین لینک
                                    <span className="text-xs flex w-full justify-end">لینک پرداخت در شبکه های اجتماعی</span>
                                </li>
                                <li className="px-1 flex flex-wrap w-full justify-end items-center text-base py-3 hover:bg-[rgba(232,239,254,.6)] transtion duration-400">زرین پلاس
                                    <span className="text-xs flex w-full justify-end">ابزار هوشمند سوددهی</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="flex justify-center items-center hover:cursor-pointer lg:mx-2 mx-1 lg:px-3 px-2 h-full ">تعرفه ها</li>
                    <li className="flex justify-center items-center hover:cursor-pointer lg:mx-2 mx-1 lg:px-3 px-2 h-full ">توسعه دهندگان</li>
                    <li className="flex justify-center items-center hover:cursor-pointer lg:mx-2 mx-1 lg:px-3 px-2 h-full ">تماس با ما </li>
                    <li className="flex justify-center items-center hover:cursor-pointer lg:mx-2 mx-1 lg:px-3 px-2 relative group h-full">
                        <i className="bi bi-chevron-compact-down text-xs flex items-end me-1"></i> بیشتر
                        <ul className="absolute top-full bg-white flex-wrap z-999  w-[100px] justify-evenly hidden group-hover:flex border-t-8 border-t-[#ffd900] rounded-[20px] ">
                            <li className="px-1 flex flex-wrap w-full justify-end items-center text-sm py-3 hover:bg-[rgba(232,239,254,.6)] transition duration-400 rounded-t-[20px]">وبلاگ</li>
                            <li className="px-1 flex flex-wrap w-full justify-end items-center text-sm py-3 hover:bg-[rgba(232,239,254,.6)] transition duration-400">دریافت شماره شبا</li>
                            <li className="px-1 flex flex-wrap w-full justify-end items-center text-sm py-3 hover:bg-[rgba(232,239,254,.6)] transition duration-400">سوالات متداول</li>
                            <li className="px-1 flex flex-wrap w-full justify-end items-center text-sm py-3 hover:bg-[rgba(232,239,254,.6)] transition duration-400">اپلیکیشن</li>
                            <li className="px-1 flex flex-wrap w-full justify-end items-center text-sm py-3 hover:bg-[rgba(232,239,254,.6)] transition duration-400 rounded-b-[20px]">زرین بین</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <HamMenu closingMenu={closeMenu} openingMenu={openMenu} />

            <figure className="p-3 w-[30%] flex justify-end items-center">
                <img className="me-3" src={logo} alt="logo" />
            </figure>

        </header>
    )
}


function HamMenu({ openingMenu, closingMenu }) {
    return (
        <div>
            <i className="bi bi-list text-3xl  md:hidden cursor-pointer flex  " onClick={openingMenu}></i>
            <div className="w-full absolute top-0 translate-y-[-420px] bg-white transition duration-500" id="ham">
                <div className="flex justify-start p-5"><i onClick={closingMenu} className="bi bi-x text-4xl cursor-pointer"></i></div>
                <ul>
                    <li className="p-3">تعرفه ها</li>
                    <li className="border-b-2 p-3">اپلیکشن</li>
                    <li className="p-3">سوالات متداول</li>
                    <li className="p-3">محصولات</li>
                    <li className="p-3">تماس با ما</li>
                </ul>
                <div className="bg-[rgba(232,239,254,.8)] p-4 cursor-pointer text-[#28457b] flex items-center justify-end"><i className="bi bi-arrow-left flex items-center me-3"></i>زرین پال من </div>
            </div>
        </div>
    )
}
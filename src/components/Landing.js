import landingImg from "../assets/images/landing-img.png"
import curvImg from "../assets/images/bg-curvy-desktop.svg"
const Landing = () => {
    return (
        <section className="bg-[#1c2230]">
            <div className="container">
                <div className="element-center flex-col pt-[150px]">
                    <div className='w-[750px] max-w-full'>
                        <img src={landingImg} alt='landing-img' className="w-full h-fit" />
                    </div>
                    <div className="text-white text-center">
                        <h1 className="text-[30px] md:text-[40px] font-semiboldmb-[10px]">
                            All your files in one secure location
                            <br />
                            accessible anywhere
                        </h1>
                        <p className="font-normal text-lg px-[15px] md:w-[600px] m-auto  max-w-full mb-[30px]">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                        </p>
                    </div>
                    <a href="/" className="btn element-center text-white font-medium w-[200px] h-[40px] rounded-[30px]">
                        Get Started
                    </a>
                </div>
            </div>
            <div className="w-full h-[200px]">
                <img  src={curvImg}  alt="img" className="w-full h-full"/>
            </div>
        </section>
    )
}

export default Landing
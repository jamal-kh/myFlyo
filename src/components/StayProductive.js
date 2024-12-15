import img from '../assets/images/illustration-stay-productive.png'
import arrowIcon from "../assets/images/icon-arrow.svg";

const StayProductive = () => {
    return (
        <section className='pb-[150px]'>
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center'>
                <div>
                    <img
                        src={img}
                        alt="StayProductive" />
                </div>
                <div className='text-white'>
                    <h3 className='font-medium text-[35px] leading-[50px]'>
                        Stay Productive
                        <br />
                        Wherever you are
                    </h3>
                    <div className="my-[15px] font-normal text-sm tracking-[0.8px] text-white">
                        <p className="mb-[15px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                            excepturi incidunt quo deserunt quidem accusamus iure ab earum
                            reprehenderit debitis!
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                            excepturi incidunt quo deserunt quidem accusamus iure ab earum
                            reprehenderit debitis!
                        </p>
                    </div>
                    <a href="/" className=' text-primary hover:text-[#42b0d1] w-fit border-b-2 border-primary border-solid pb-[5px] flex items-center gap-[15px] transition-colors duration-200 '>
                        See how Flyo works
                        <img src={arrowIcon} alt='arrow-img' className='hover:animate-moveRight' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default StayProductive
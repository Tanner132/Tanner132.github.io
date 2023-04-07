import {motion} from 'framer-motion';

import {styles} from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative h-screen mx-auto">
        <div className='flex lg:flex-row lg:items-center h-[90%] w-screen flex-col'>
            <div className={`${styles.paddingX} inset-0 width-[50%] lg:mt-[0px] mt-[300px] mx-auto flex items-start gap-5`
            }>
                <div className="flex flex-col items-center justify-left mt-5">
                    <div className='w-5 h-5 rounded-full mb-[10px] bg-[#915eff] '/>
                    <div className="w-1 sm:h-60 h-40 violet-gradient"/>
                </div>

                <div className='z-10'>
                    <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Tanner</span></h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>I build engaging user experiences <br className='sm:block hidden'/> and lightning-fast API's</p>
                </div>
            </div>
            <ComputersCanvas/>
        </div>
        <div className="flex justify-center items-center">
            <a href="#about">
                <div className='w-[35px] h-[64px] rounded-3xl border-4 borde-secondary flex justify-center p-2'>
                    <motion.div 
                        animate={{
                            y: [0,24,0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: 'loop'
                        }}
                        className='w-3 h-3 rounded-full bg-secondary mb-1'
                    />
                </div>
            </a>
        </div>
    </section>
  )
}

export default Hero
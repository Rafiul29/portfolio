import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faFolderTree, faHandHoldingHeart, faLightbulb, faRocket } from '@fortawesome/free-solid-svg-icons'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


export default function SkillSection() {


    const techSkills = [
        { name: 'Next.js,', percentage: 100 },
        { name: 'React', percentage: 100 },
        { name: 'Redux,', percentage: 70 },
        { name: 'JavaScript', percentage: 70 },
        { name: 'Tailwind CSS,', percentage: 95 },
        { name: 'Tailwind CSS', percentage: 100 },
        { name: 'Bootstrap', percentage: 90},
        { name: 'CSS & HTML', percentage: 100},
        { name: 'Django', percentage: 60},
        { name: 'Django Rest Framework', percentage: 55},
        { name: 'Node.js', percentage: 60},
        { name: 'Express.js', percentage: 65},
        { name: 'MongoDB', percentage: 70},
        { name: 'SQL', percentage: 80},
        { name: 'C', percentage: 85},
        { name: 'C++', percentage: 80},
        { name: 'Python', percentage: 50},
    ];

    // const softSkills = [
    //     { name: 'Organizzazione', icon: faFolderTree },
    //     { name: 'Empatia', icon: faHandHoldingHeart },
    //     { name: 'Curiosità e motivazione', icon: faRocket },
    //     { name: 'Pesiero critico', icon: faLightbulb },
    //     { name: 'Gestione del tempo', icon: faClock }
    // ];
    
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
    <section id='skills'>
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-zinc-300 mt-8 mb-8 md:mb-12">Tech skills</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:grid-cols-4 lg:gap-x-24'>
        {techSkills.map((skill, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className='my-4'>
                <p>{skill.name}</p>
                
                <div className='mt-2'>
                    <div
                        style={{
                            backgroundColor: 'rgb(212, 212, 216)',
                            borderRadius: '20px',
                            height: '16px',
                            margin: '5px 0',
                        }}>
                    <div
                        style={{
                            width: `${skill.percentage}%`,
                            background: 'linear-gradient(90deg, rgba(8,145,178,1) 0%, rgba(79,70,229,1) 50%, rgba(219,39,119,1) 100%)',
                            borderRadius: '20px',
                            height: '100%',
                        }}
                    />
                    </div>
                </div>
            </motion.div>
        ))}
        </div>


        {/* <h2 className="text-center text-2xl sm:text-3xl font-bold text-zinc-300 mt-12 mb-8 md:mb-12">Soft skills</h2> */}
        
        {/* <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-x-16 lg:grid-cols-3 lg:gap-x-24'>
            {softSkills.map((skill, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    ref={ref}
                    animate={isInView ? { opacity: 1, y: 0 } : 'initial'}
                    transition={{ duration: 0.4, delay: index * 0.2 }}
                    
                    className='bg-zinc-300 rounded-full w-full h-fit my-2 flex flex-row items-center'>   
                    {skill.icon && <FontAwesomeIcon icon={skill.icon} className='circle-skills-icon sm:p-5 sm:w-7'/>}
                    <p className='text-zinc-900 font-semibold align-middle mx-4'>{skill.name}</p>  
                </motion.div>
            ))}
        </div> */}

        {/*
        <div className='flex justify-center mt-16'>
            <button type='button' onClick={handleDownload} className="sm:w-fit px-6 py-3 border-2 rounded-full font-semibold
                    border-zinc-500 text-zinc-500 hover:border-zinc-300 hover:text-zinc-300">Scarica CV
                <FontAwesomeIcon icon={faFileArrowDown} className='w-7'/>
            </button>
        </div>
        */}
    </section>
  )
}

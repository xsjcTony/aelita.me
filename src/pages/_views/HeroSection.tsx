import type { Variants } from 'motion/react'
import type { FC, ReactNode } from 'react'
import { AstroDark, CSSNew, JavaScript, TypeScript, Vite } from '@ridemountainpig/svgl-react'
import { CodepenIcon, GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from 'lucide-react'
import { motion, stagger } from 'motion/react'
import { CODEPEN_URL, EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from '~constants/info'
import Lamp from '~pages/_components/Lamp'
import ResponsiveProse from '~pages/_components/ResponsiveProse'


type HeroSectionProps = {
  arcaeaLogo?: ReactNode
  maimaiDxLogo?: ReactNode
}


function makeContainerVariants(delayChildren: number): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: stagger(0.2, { startDelay: delayChildren }) },
    },
  }
}

function makeChildVariants(delay?: number): Variants {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ...delay && { delay } } },
  }
}


const HeroSection: FC<HeroSectionProps> = ({ arcaeaLogo, maimaiDxLogo }) => (
  <section className="container pt-20 pb-80" id="hero">
    {/* Lamp effect */}
    <Lamp className="-translate-y-1/3" />


    {/* Info section */}
    <motion.section
      animate="visible"
      className="flex flex-col items-center mb-40 lg:pt-40 lg:mb-80"
      id="info"
      initial="hidden"
      variants={makeContainerVariants(1)}
    >
      <motion.h1
        className="text-6xl font-bold text-fg-lighter tracking-wide lg:text-7xl lg:tracking-wider"
        variants={makeChildVariants()}
      >
        Tony
      </motion.h1>
      <motion.p
        className="text-sm mb-20 lg:text-base"
        variants={makeChildVariants()}
      >
        a.k.a. <strong className="text-primary">Aelita</strong>
      </motion.p>
      <motion.h2
        className="text-fg-light sm:text-lg lg:text-xl"
        variants={makeChildVariants()}
      >
        Software Engineer 🧑‍💻
      </motion.h2>
    </motion.section>


    <div className="lg:grid lg:grid-cols-3 lg:items-center">
      {/* Detail section */}
      <motion.section
        animate="visible"
        className="flex flex-col items-center gap-y-8 max-lg:mb-40 text-sm sm:text-base lg:text-lg lg:gap-y-16"
        id="details"
        initial="hidden"
        variants={makeContainerVariants(1.8)}
      >
        <motion.div
          className="flex items-center gap-x-8"
          variants={makeChildVariants()}
        >
          <MapPinIcon size="1.2em" />
          <span>Melbourne, Australia</span>
        </motion.div>
        <motion.div
          className="flex items-center gap-x-8"
          variants={makeChildVariants()}
        >
          <MailIcon className="translate-y-px" size="1.2em" />
          <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
        </motion.div>
        <motion.div
          className="flex items-center gap-x-8"
          variants={makeChildVariants()}
        >
          {/* eslint-disable-next-line ts/no-deprecated */}
          <GithubIcon size="1.2em" />
          <a href={GITHUB_URL}>GitHub</a>
        </motion.div>
        <motion.div
          className="flex items-center gap-x-8"
          variants={makeChildVariants()}
        >
          {/* eslint-disable-next-line ts/no-deprecated */}
          <LinkedinIcon size="1.2em" />
          <a href={LINKEDIN_URL}>LinkedIn</a>
        </motion.div>
        <motion.div
          className="flex items-center gap-x-8"
          variants={makeChildVariants()}
        >
          {/* eslint-disable-next-line ts/no-deprecated */}
          <CodepenIcon size="1.2em" />
          <a href={CODEPEN_URL}>CodePen</a>
        </motion.div>
      </motion.section>


      {/* Description section */}
      <motion.section
        animate="visible"
        className="bg-gradient-to-r from-rose-900/10 to-sky-900/10 backdrop-blur-2xl rounded-lg p-16 flex gap-x-12 border border-fg-lighter/10 lg:col-span-2"
        id="description"
        initial="hidden"
        variants={makeChildVariants(3)}
      >
        <div className="self-stretch shrink-0 w-4 rounded-full bg-gradient-to-b from-primary to-secondary" />
        <ResponsiveProse>
          <p>
            G&apos;day! I&apos;m <strong>Tony</strong>, a fanatical <strong>software engineer</strong> with full-stack capabilities, as well as an <strong>open sourcer</strong>.
          </p>
          <p>You can also call me by my screen name <strong className="text-primary">❤Aelita❤</strong>.</p>
          <p>
            I lean towards digging cutting-edge frontend technologies, making fancy effects and delivering delightful user experiences.
          </p>
          <p>
            I write <a href="/blogs">blog posts</a> about technologies (frontend-focused), including <AstroDark className="size-[1em] -translate-y-px" /> framework tips, <CSSNew className="size-[1em] -translate-y-px" /> CSS tricks, <TypeScript className="size-[1em] -translate-y-px" /> TS / <JavaScript className="size-[1em] -translate-y-px" /> JS insights, <Vite className="size-[1em] -translate-y-px" /> tooling and more, from the basics to the principles.
          </p>
          <p>Outside of programming, I enjoy playing piano and listening to musics (<strong>ARTCORE</strong> lover).</p>
          <p>
            Gaming wise, I mainly play competitive music games:
            <a
              href="https://arcaea.lowiro.com/"
              rel="noopener noreferrer"
              target="_blank"
              title="Arcaea"
            >
              {arcaeaLogo}
            </a>
              &nbsp;and&nbsp;
            <a
              href="https://maimai.sega.com/"
              rel="noopener noreferrer"
              target="_blank"
              title="maimai DX"
            >
              {maimaiDxLogo}
            </a>
          </p>
        </ResponsiveProse>
      </motion.section>
    </div>
  </section>
)


export default HeroSection

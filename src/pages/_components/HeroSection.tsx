import type { Variants } from 'motion/react'
import type { FC } from 'react'
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Lamp from '@components/Lamp'
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from '@constants/info'


function makeContainerVariants(delayChildren: number): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren,
      },
    },
  }
}

const CHILD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}


const HeroSection: FC = () => (
  <section className="container pt-20 pb-80" id="hero">
    {/* Lamp effect */}
    <Lamp className="-translate-y-1/3" />

    {/* Info section */}
    <motion.section
      className="flex flex-col items-center mb-40"
      id="info"
      initial="hidden"
      variants={makeContainerVariants(1.2)}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <motion.h1
        className="text-6xl font-bold text-foreground-lighter"
        variants={CHILD_VARIANTS}
      >
        Aelita
      </motion.h1>
      <motion.p
        className="text-xs mb-20"
        variants={CHILD_VARIANTS}
      >
        alias of <b>Tony Jiang</b>
      </motion.p>
      <motion.h2
        className="text-foreground-light"
        variants={CHILD_VARIANTS}
      >
        Full Stack Software Engineer 🧑‍💻
      </motion.h2>
    </motion.section>

    {/* Detail section */}
    <motion.section
      className="flex flex-col items-center gap-y-8 mb-40 text-sm"
      id="details"
      initial="hidden"
      variants={makeContainerVariants(2.2)}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <motion.div
        className="flex items-center gap-x-8"
        variants={CHILD_VARIANTS}
      >
        <MapPinIcon className="size-[1.2em]" />
        <span>Melbourne, Australia</span>
      </motion.div>
      <motion.div
        className="flex items-center gap-x-8"
        variants={CHILD_VARIANTS}
      >
        <MailIcon className="size-[1.2em] translate-y-px" />
        <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
      </motion.div>
      <motion.div
        className="flex items-center gap-x-8"
        variants={CHILD_VARIANTS}
      >
        {/* eslint-disable-next-line ts/no-deprecated */}
        <GithubIcon className="size-[1.2em]" />
        <a href={GITHUB_URL}>GitHub</a>
      </motion.div>
      <motion.div
        className="flex items-center gap-x-8"
        variants={CHILD_VARIANTS}
      >
        {/* eslint-disable-next-line ts/no-deprecated */}
        <LinkedinIcon className="size-[1.2em]" />
        <a href={LINKEDIN_URL}>LinkedIn</a>
      </motion.div>
    </motion.section>

    {/* Description section */}
    <motion.section
      className="bg-gradient-to-r from-rose-900/10 to-sky-900/10 backdrop-blur-xl rounded-lg p-16 flex gap-x-12 text-sm"
      id="description"
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 3.2 } },
      }}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <div className="self-stretch w-16 rounded-full bg-gradient-to-b from-primary to-secondary" />
      <p>
        G&apos;day! I&apos;m Aelita, a fanatical software engineer with full-stack capabilities.
        <br />
        <br />
        You can also call me by my IRL-name <b>Tony</b>.
        <br />
        <br />
        I lean towards digging cutting-edge frontend technologies, making fancy effects and delivering delightful user experiences.
        <br />
        <br />
        I write <a href="/blog">blog posts</a> about technologies (frontend-focused), including framework tips, css tricks, TS/JS insights, tooling and more, from the basic to the principles.
        <br />
        <br />
        Outside of programming, I enjoy playing piano and listening to musics (<b>ARTCORE</b> lover).
        <br />
        <br />
        Gaming wise, I mainly play competitive music games:
        <a
          href="https://arcaea.lowiro.com/"
          rel="noopener noreferrer"
          target="_blank"
          title="Arcaea"
        >
          <img alt="arcaea logo" className="h-[2em] inline" src="/assets/images/arcaea-logo.png" />
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://maimai.sega.com/"
          rel="noopener noreferrer"
          target="_blank"
          title="maimai DX"
        >
          <img alt="maimai dx logo" className="h-[2em] inline" src="/assets/images/maimai-dx-logo.webp" />
        </a>
      </p>
    </motion.section>
  </section>
)


export default HeroSection

import type { FC } from 'react'
import { GithubIcon, NotebookPenIcon } from 'lucide-react'
import { GITHUB_URL } from '~constants/info'


const Header: FC = () => (
  <header className="p-32 flex items-center justify-between">
    <div>
      <a href="/">
        Logo
      </a>
    </div>

    <nav className="flex gap-x-24 items-center">
      <a
        aria-label="Blogs"
        className="pointer-fine:opacity-60 hover:opacity-100 transition-opacity duration-300"
        href="/blogs"
        title="Blogs"
      >
        <NotebookPenIcon size="1.2em" />
      </a>
      <a
        aria-label="GitHub"
        className="pointer-fine:opacity-60 hover:opacity-100 transition-opacity duration-300"
        href={GITHUB_URL}
        rel="noreferrer"
        target="_blank"
        title="GitHub"
      >
        <GithubIcon size="1.2em" />
      </a>
    </nav>
  </header>
)

export default Header

import pkg from './package.json'

export default {
  logo: () => {
    return (
      <span className="inline-flex items-center gap-2">
        <img src="/images/univer.svg" alt="Univer" className="size-8" />
        <span className="text-xl">
          Univer
        </span>
      </span>
    )
  },
  project: {
    link: 'https://github.com/dream-num/univer',
  },
  chat: {
    link: 'https://discord.gg/XPGnMBmpd6',
  },
  i18n: [
    { locale: 'en-US', text: 'English' },
  ],
  docsRepositoryBase: 'https://github.com/dream-num/univer.ai/tree/main',
  head: null,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Univer',
      description: 'Univer is an open-source alternative to Google Sheets, Slides, and Docs',
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://univer.ai',
        site_name: 'Univer',
        images: [
          {
            url: 'https://univer.ai/images/og.png',
            alt: 'Univer',
          },
        ],
      },
      twitter: {
        handle: '@univerhq',
        site: '@univerhq',
        cardType: 'summary_large_image',
      },
    }
  },
  banner: {
    dismissible: true,
    key: pkg.version,
    text: () => {
      return (
        <a href={`https://github.com/dream-num/univer/releases/tag/v${pkg.version}`} target="_blank">
          `🎉 v$
          {pkg.version}
          {' '}
          is released. Read more →`
        </a>
      )
    },
  },
  primaryHue: 200,
  sidebar: {
    toggleButton: true,
    titleComponent({ title }) {
      const apiTitles = [
        'classes',
        'type-aliases',
        'interfaces',
        'variables',
        'functions',
        'namespaces',
        'enumerations',
      ]

      if (apiTitles.includes(title)) {
        const initial = title.charAt(0).toUpperCase()
        return (
          <span className="flex gap-2 items-center">
            <span className="font-semibold border-2 border-stone-700 rounded-md size-6 flex items-center justify-center">
              {initial}
            </span>
            <span>
              {initial}
              {title.slice(1)}
            </span>
          </span>
        )
      }
      else if (title.startsWith('@univerjs')) {
        return <span className="font-semibold">{title}</span>
      }
      else {
        return title
      }
    },
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
  footer: {
    text: (
      <span>
        Copyright &copy; 2021-2024 DreamNum Co,Ltd. All Rights Reserved.
      </span>
    ),
  },
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60acce2877d2ec84e128a151',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xupy6j59',
                  apiId: 'd7eeea3a-8929-4430-98b7-f8d0655a9d04'
                },
                {
                  buildHookId: '60acce295b11717703d4afe9',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-o4wmvaqd',
                  apiId: 'ffb39d28-b03a-4209-aa93-a0d7b9446c73'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/OlenaTymchenko/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-o4wmvaqd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

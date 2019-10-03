export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d95fc904a7be87e8e98fb7d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-vz7pdyzp',
                  apiId: 'd3cbde50-4b3e-44d1-9618-4225e0bc84af'
                },
                {
                  buildHookId: '5d95fc901dda69ccda9a79a8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-sfxchnry',
                  apiId: '3591c57a-95fb-4c13-8ed8-0b776d7a000d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/isratrade/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-sfxchnry.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

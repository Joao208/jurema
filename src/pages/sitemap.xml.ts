import { GetServerSidePropsContext } from 'next'
import { withSSRContext } from 'aws-amplify'

import { AnimalsModel as AnimalsModels } from 'src/models'
import { Animal } from './animals'

function generateSiteMap(animals: Animal[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://projetojurema.org</loc>
     </url>
     ${animals
       .map(
         ({ id }) =>
           `
       <url>
           <loc>${`https://projetojurema.org/animal/${id}`}</loc>
       </url>
     `
       )
       .join('')}
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { DataStore } = withSSRContext(ctx)

  const animals = await DataStore.query(AnimalsModels)

  const sitemap = generateSiteMap(animals)

  ctx.res.setHeader('Content-Type', 'text/xml')
  ctx.res.write(sitemap)
  ctx.res.end()

  return {
    props: {},
  }
}

export default SiteMap

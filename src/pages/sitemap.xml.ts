import { GetServerSideProps } from 'next'
import * as Amplify from 'aws-amplify'

import awsExports from '../aws-exports'
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  Amplify.default.configure({ ...awsExports, ssr: true })

  // @ts-ignore
  const { DataStore } = Amplify.withSSRContext(ctx.req)

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
